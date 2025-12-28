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
		setIsSubmitting(true);
		setSubmitStatus('idle');

		try {
			// Здесь будет реальная отправка данных на сервер
			// Для примера используем setTimeout
			await new Promise((resolve) => setTimeout(resolve, 1000));

			// В реальном приложении:
			// const response = await fetch('/api/request', {
			//   method: 'POST',
			//   headers: { 'Content-Type': 'application/json' },
			//   body: JSON.stringify({ name, phone, message })
			// });

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
			setSubmitStatus('error');
			console.error('Ошибка отправки:', error);
		} finally {
			setIsSubmitting(false);
		}
	};

	const handleOverlayClick = (e: React.MouseEvent) => {
		if (e.target === e.currentTarget) onClose();
	};

	// Обработчик клика по телефону (закрывает модальное окно)
	const handlePhoneClick = (phoneNumber: string) => {
		console.log(`Звонок на номер: ${phoneNumber}`);
		// Можно добавить аналитику или другие действия
		onClose(); // Закрываем модальное окно при клике на телефон
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
							onChange={(e) => setPhone(e.target.value)}
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
							Произошла ошибка. Пожалуйста, попробуйте позже.
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
