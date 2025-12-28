'use client';

import { useState, useEffect } from 'react';
import Icon from './Icon';
import styles from './RequestModal.module.css';

interface RequestModalProps {
	isOpen: boolean;
	onClose: () => void;
}

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
	const [name, setName] = useState('');
	const [phone, setPhone] = useState('');
	const [message, setMessage] = useState('');
	const [isSubmitting, setIsSubmitting] = useState(false);
	const [submitStatus, setSubmitStatus] = useState<
		'idle' | 'success' | 'error'
	>('idle');

	// Номера телефонов для кликабельных ссылок
	const phoneNumbers = [
		{ number: '+7 (391) 274-90-64', tel: '+73912749064' },
		{ number: '+7 (391) 274-90-74', tel: '+73912749074' },
	];

	// КОНФИГУРАЦИЯ ДЛЯ ЯНДЕКС.ФОРМ - НА ОСНОВЕ ВАШИХ ДАННЫХ
	const YANDEX_FORM_CONFIG = {
		// URL для отправки данных - ВАЖНО: это может быть другой endpoint!
		// Скорее всего: https://forms.yandex.ru/api/forms/{surveyId}/submit
		submitUrl:
			'https://forms.yandex.ru/api/forms/692909121f1eb5f3c1ef1b7e/submit',

		// Альтернативные URL для тестирования:
		// url1: 'https://forms.yandex.ru/u/692909121f1eb5f3c1ef1b7e/submit'
		// url2: 'https://forms.yandex.ru/api/v1/forms/692909121f1eb5f3c1ef1b7e/submit'

		surveyId: '692909121f1eb5f3c1ef1b7e',
	};

	// Обработка клавиши Escape
	useEffect(() => {
		const handleKeyDown = (e: KeyboardEvent) => {
			if (e.key === 'Escape') onClose();
		};

		if (isOpen) {
			document.addEventListener('keydown', handleKeyDown);
			document.body.style.overflow = 'hidden';
		}

		return () => {
			document.removeEventListener('keydown', handleKeyDown);
			document.body.style.overflow = '';
		};
	}, [isOpen, onClose]);

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();

		// Простая валидация
		if (!name.trim() || !phone.trim()) {
			alert('Пожалуйста, заполните обязательные поля');
			return;
		}

		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// 1. ПОДГОТОВКА ДАННЫХ ДЛЯ ЯНДЕКС.ФОРМ - как вы показали
			const yandexData = {
				surveyId: YANDEX_FORM_CONFIG.surveyId,
				dryRun: false,
				parent: '',
				values: {
					answer_short_text_96201: name.trim(),
					answer_phone_9008966196888316: phone.trim().replace(/\D/g, ''),
					answer_long_text_96199: message.trim() || '',
				},
			};

			console.log('Отправляем в Яндекс.Формы:', yandexData);

			// 2. ОТПРАВКА В ЯНДЕКС.ФОРМЫ
			// Вариант A: Прямой запрос к API
			try {
				const response = await fetch(YANDEX_FORM_CONFIG.submitUrl, {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
						Accept: 'application/json',
					},
					body: JSON.stringify(yandexData),
					// mode: 'cors', // Попробуйте с cors
					credentials: 'include', // Могут понадобиться куки
				});

				console.log('Статус ответа Яндекс:', response.status);

				if (response.ok) {
					const result = await response.json();
					console.log('Успешный ответ Яндекс:', result);
				} else {
					console.warn('Яндекс вернул ошибку:', response.status);
				}
			} catch (yandexError) {
				console.warn('Ошибка запроса к Яндекс:', yandexError);

				// Пробуем альтернативный метод через iframe
				await submitViaIframe();
			}

			// 3. ОТПРАВКА НА ВАШ СЕРВЕР (бэкап)
			try {
				await fetch('/api/leads', {
					method: 'POST',
					headers: {
						'Content-Type': 'application/json',
					},
					body: JSON.stringify({
						name: name.trim(),
						phone: phone.trim(),
						message: message.trim(),
						source: 'callback_form',
						page: window.location.pathname,
						timestamp: new Date().toISOString(),
						yandexFormId: YANDEX_FORM_CONFIG.surveyId,
					}),
				});
				console.log('Данные сохранены на сервер');
			} catch (backendError) {
				console.warn('Не удалось сохранить в бэкап:', backendError);
			}

			// Успех
			setSubmitStatus('success');

			// Очистка формы
			setName('');
			setPhone('');
			setMessage('');

			// Автоматическое закрытие через 2 секунды
			setTimeout(() => {
				onClose();
				setSubmitStatus('idle');
			}, 2000);
		} catch (error) {
			console.error('Общая ошибка отправки:', error);
			setSubmitStatus('error');

			// Сбрасываем статус ошибки через 3 секунды
			setTimeout(() => {
				setSubmitStatus('idle');
			}, 3000);
		} finally {
			setIsSubmitting(false);
		}
	};

	// Альтернативный метод отправки через iframe
	const submitViaIframe = () => {
		return new Promise<void>((resolve) => {
			// Создаем временный iframe
			const iframe = document.createElement('iframe');
			iframe.name = 'yandex-form-submit';
			iframe.style.display = 'none';
			document.body.appendChild(iframe);

			// Создаем форму
			const form = document.createElement('form');
			form.target = iframe.name;
			form.action = `https://forms.yandex.ru/u/${YANDEX_FORM_CONFIG.surveyId}/`;
			form.method = 'POST';

			// Скрытые поля
			const addHiddenField = (name: string, value: string) => {
				const input = document.createElement('input');
				input.type = 'hidden';
				input.name = name;
				input.value = value;
				form.appendChild(input);
			};

			addHiddenField('answer_short_text_96201', name.trim());
			addHiddenField(
				'answer_phone_9008966196888316',
				phone.trim().replace(/\D/g, '')
			);
			addHiddenField('answer_long_text_96199', message.trim() || '');

			// Отправляем
			document.body.appendChild(form);
			form.submit();

			// Убираем элементы через время
			setTimeout(() => {
				document.body.removeChild(form);
				document.body.removeChild(iframe);
				resolve();
			}, 2000);
		});
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose();
	};

	const handlePhoneClick = (phoneNumber: string) => {
		console.log(`Звонок на номер: ${phoneNumber}`);
		onClose();
	};

	// Форматирование телефона
	const handlePhoneChange = (e: React.ChangeEvent<HTMLInputElement>) => {
		let value = e.target.value.replace(/\D/g, '');

		if (value.length > 0) {
			value = value.replace(
				/^(\d{1})(\d{0,3})?(\d{0,3})?(\d{0,2})?(\d{0,2})?/,
				(_, p1, p2, p3, p4, p5) => {
					let result = `+${p1}`;
					if (p2) result += ` (${p2}`;
					if (p3) result += `) ${p3}`;
					if (p4) result += `-${p4}`;
					if (p5) result += `-${p5}`;
					return result;
				}
			);
		}

		setPhone(value);
	};

	if (!isOpen) return null;

	return (
		<div
			className={styles.modalOverlay}
			onClick={handleOverlayClick}
		>
			<div
				className={styles.modal}
				role='dialog'
				aria-modal='true'
			>
				<button
					className={styles.closeButton}
					onClick={onClose}
					aria-label='Закрыть'
				>
					<Icon
						name='x'
						size={24}
					/>
				</button>

				<div className={styles.modalHeader}>
					<h2 className={styles.modalTitle}>Заказать звонок</h2>
					<p className={styles.modalSubtitle}>
						Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
					</p>
				</div>

				<script src='https://forms.yandex.ru/_static/embed.js'></script>
				<iframe
					src='https://forms.yandex.ru/u/692909121f1eb5f3c1ef1b7e?iframe=1'
					// frameborder='0'
					name='ya-form-692909121f1eb5f3c1ef1b7e'
					width='650'
				></iframe>

				<form
					onSubmit={handleSubmit}
					className={styles.form}
				>
					<div className={styles.formGroup}>
						<label
							htmlFor='name'
							className={styles.label}
						>
							Ваше имя *
						</label>
						<input
							type='text'
							id='name'
							value={name}
							onChange={(e) => setName(e.target.value)}
							className={styles.input}
							placeholder='Иван Иванов'
							required
							disabled={isSubmitting}
						/>
					</div>

					<div className={styles.formGroup}>
						<label
							htmlFor='phone'
							className={styles.label}
						>
							Номер телефона *
						</label>
						<input
							type='tel'
							id='phone'
							value={phone}
							onChange={handlePhoneChange}
							className={styles.input}
							placeholder='+7 (999) 123-45-67'
							required
							disabled={isSubmitting}
						/>
					</div>

					<div className={styles.formGroup}>
						<label
							htmlFor='message'
							className={styles.label}
						>
							Комментарий (необязательно)
						</label>
						<textarea
							id='message'
							value={message}
							onChange={(e) => setMessage(e.target.value)}
							className={styles.textarea}
							placeholder='Укажите удобное время для звонка или тему обсуждения'
							rows={4}
							disabled={isSubmitting}
						/>
					</div>

					<div className={styles.privacyNote}>
						<span>
							Нажимая кнопку «Отправить заявку», вы соглашаетесь с{' '}
							<a
								href='/privacy'
								className={styles.privacyLink}
								target='_blank'
								rel='noopener noreferrer'
							>
								политикой конфиденциальности
							</a>
						</span>
					</div>

					<button
						type='submit'
						className={styles.submitButton}
						disabled={isSubmitting}
					>
						{isSubmitting ? (
							<>
								<Icon
									name='loader'
									size={20}
									className={styles.spinner}
								/>
								Отправка...
							</>
						) : submitStatus === 'success' ? (
							<>
								<Icon
									name='check'
									size={20}
								/>
								Заявка отправлена!
							</>
						) : (
							'Отправить заявку'
						)}
					</button>

					{submitStatus === 'error' && (
						<div className={styles.errorMessage}>
							<Icon
								name='alert-circle'
								size={16}
							/>
							Произошла ошибка. Пожалуйста, попробуйте позже или позвоните нам.
						</div>
					)}

					<div className={styles.contactInfo}>
						<p className={styles.contactInfoTitle}>
							Или свяжитесь с нами напрямую:
						</p>
						<div className={styles.contactDetails}>
							{phoneNumbers.map((phoneItem, index) => (
								<a
									key={index}
									href={`tel:${phoneItem.tel}`}
									className={styles.contactItem}
									onClick={() => handlePhoneClick(phoneItem.number)}
									aria-label={`Позвонить по номеру ${phoneItem.number}`}
								>
									<Icon
										name='phone'
										size={18}
									/>
									<span>{phoneItem.number}</span>
								</a>
							))}
						</div>
					</div>
				</form>
			</div>
		</div>
	);
}
