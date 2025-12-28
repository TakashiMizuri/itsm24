'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import Icon from './Icon';
import RequestModal from './RequestModal'; // Добавляем импорт

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна
	const menuRef = useRef<HTMLDivElement>(null);
	const mobileButtonRef = useRef<HTMLButtonElement>(null);

	// Данные для выпадающих меню
	const servicesMenu = [
		{
			title: 'Системы безопасности и видеонаблюдения',
			href: '/itsm-security',
			description:
				'Видеонаблюдение, пожарная сигнализация, охранная система и др.',
		},
		{
			title: '1С продукты',
			href: '/itsm-1c',
			description: 'Программы, сопровождение, консультация и др.',
		},
	];

	const aboutMenu = [
		{ title: 'Отзывы о нас', href: '/reviews' },
		{ title: 'Наши клиенты', href: '/clients' },
		{ title: 'Партнеры', href: '/partners' },
		{
			title: 'Специальная оценка условий труда',
			href: '/assessment-of-working-conditions',
		},
	];

	// Функция закрытия всех меню
	const closeAllDropdowns = useCallback(() => {
		setActiveDropdown(null);
		setIsMobileMenuOpen(false);
	}, []);

	const handleDropdownItemClick = useCallback(() => {
		closeAllDropdowns();
	}, [closeAllDropdowns]);

	// Закрытие меню при клике вне области
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			const target = event.target as Node;
			if (menuRef.current && menuRef.current.contains(target)) return;
			if (mobileButtonRef.current && mobileButtonRef.current.contains(target))
				return;
			closeAllDropdowns();
		};

		document.addEventListener('mousedown', handleClickOutside);
		return () => {
			document.removeEventListener('mousedown', handleClickOutside);
		};
	}, [closeAllDropdowns]);

	// Управление наведением для десктопной версии
	const handleDropdownEnter = (dropdownName: string) => {
		setActiveDropdown(dropdownName);
	};

	const handleDropdownLeave = () => {
		// Не закрываем сразу - даем возможность перейти на меню
	};

	const handleMenuLeave = () => {
		// Закрываем меню при полном уходе с навигации
		setActiveDropdown(null);
	};

	const handleSimpleLinkEnter = () => {
		// При наведении на простую ссылку закрываем все выпадающие меню
		setActiveDropdown(null);
	};

	const toggleMobileMenu = () => {
		setIsMobileMenuOpen((s) => !s);
		setActiveDropdown(null);
	};

	// Закрытие меню на Escape и блокировка скролла
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (isModalOpen) {
					setIsModalOpen(false);
				} else {
					closeAllDropdowns();
				}
			}
		};

		// Блокируем скролл если открыто модальное окно ИЛИ мобильное меню
		if (isModalOpen || isMobileMenuOpen) {
			document.addEventListener('keydown', onKey);
			document.body.style.overflow = 'hidden';
		} else {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		}

		return () => {
			document.removeEventListener('keydown', onKey);
			document.body.style.overflow = '';
		};
	}, [isMobileMenuOpen, isModalOpen, closeAllDropdowns]);

	const toggleDropdownMobile = useCallback((dropdownName: string) => {
		if (window.innerWidth <= 768) {
			setActiveDropdown((prev) =>
				prev === dropdownName ? null : dropdownName
			);
		}
	}, []);

	// Открытие модального окна
	const openModal = () => {
		closeAllDropdowns(); // Закрываем меню если открыто
		setIsModalOpen(true);
	};

	// Закрытие модального окна
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<header className={styles.header}>
			<div className={styles.container}>
				<nav className={styles.nav}>
					{/* Логотип */}
					<Link
						href='/'
						className={styles.logo}
						onClick={closeAllDropdowns}
					>
						<div className={styles.logoContainer}>
							<Image
								src='/koleso_ishodnik_1.png'
								alt='ООО «АйТиСМ» - Красноярск'
								width={70}
								height={79}
								priority
							/>
							<div className={styles.logoText}>
								<span className={styles.logoTitle}>ООО «АйТиСМ»</span>
								<span className={styles.logoSubtitle}>Красноярск</span>
							</div>
						</div>
					</Link>

					{/* Основное меню */}
					{isMobileMenuOpen && (
						<div
							className={styles.mobileOverlay}
							onClick={(e) => {
								e.stopPropagation();
								closeAllDropdowns();
							}}
							aria-hidden
						/>
					)}

					<div
						className={`${styles.menu} ${
							isMobileMenuOpen ? styles.menuOpen : ''
						}`}
						ref={menuRef}
						onMouseLeave={handleMenuLeave}
						role={isMobileMenuOpen ? 'dialog' : undefined}
						aria-modal={isMobileMenuOpen ? true : undefined}
					>
						<Link
							href='/'
							className={styles.menuLink}
							onClick={closeAllDropdowns}
							onMouseEnter={handleSimpleLinkEnter}
						>
							Главная
						</Link>

						{/* Услуги с выпадающим меню */}
						<div
							className={`${styles.dropdownContainer} ${
								activeDropdown === 'services' ? styles.open : ''
							}`}
							onMouseEnter={() => {
								if (window.innerWidth > 768) {
									handleDropdownEnter('services');
								}
							}}
							onMouseLeave={() => {
								if (window.innerWidth > 768) {
									handleDropdownLeave();
								}
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<div
								className={styles.dropdownTrigger}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									toggleDropdownMobile('services');
								}}
								style={{ cursor: 'pointer' }}
							>
								<button
									type='button'
									className={`${styles.menuLink} ${
										activeDropdown === 'services' ? styles.active : ''
									}`}
									onMouseEnter={() => {
										if (window.innerWidth > 768) {
											handleDropdownEnter('services');
										}
									}}
									aria-expanded={activeDropdown === 'services'}
								>
									Услуги
									<Icon
										name={
											activeDropdown === 'services' ? 'caret-up' : 'caret-down'
										}
										size={16}
										className={styles.dropdownIcon}
									/>
								</button>
							</div>

							<div
								className={`${styles.dropdownMenu} ${styles.servicesDropdown} ${
									activeDropdown === 'services' ? styles.active : ''
								}`}
								onMouseEnter={() => handleDropdownEnter('services')}
								onMouseLeave={handleDropdownLeave}
							>
								<div className={styles.dropdownContent}>
									<div className={styles.dropdownGrid}>
										{servicesMenu.map((item) => (
											<Link
												key={item.href}
												href={item.href}
												className={styles.dropdownItem}
												onClick={handleDropdownItemClick}
											>
												<div className={styles.dropdownItemContent}>
													<span className={styles.dropdownItemTitle}>
														{item.title}
													</span>
													{item.description && (
														<span className={styles.dropdownItemDescription}>
															{item.description}
														</span>
													)}
												</div>
											</Link>
										))}
									</div>
								</div>
							</div>
						</div>

						{/* О нас с выпадающим меню */}
						<div
							className={`${styles.dropdownContainer} ${
								activeDropdown === 'about' ? styles.open : ''
							}`}
							onMouseEnter={() => {
								if (window.innerWidth > 768) {
									handleDropdownEnter('about');
								}
							}}
							onMouseLeave={() => {
								if (window.innerWidth > 768) {
									handleDropdownLeave();
								}
							}}
							onClick={(e) => e.stopPropagation()}
						>
							<div
								className={styles.dropdownTrigger}
								onClick={(e) => {
									e.preventDefault();
									e.stopPropagation();
									toggleDropdownMobile('about');
								}}
								style={{ cursor: 'pointer' }}
							>
								<button
									type='button'
									className={`${styles.menuLink} ${
										activeDropdown === 'about' ? styles.active : ''
									}`}
									onMouseEnter={() => {
										if (window.innerWidth > 768) {
											handleDropdownEnter('about');
										}
									}}
									aria-expanded={activeDropdown === 'about'}
								>
									О нас
									<Icon
										name={
											activeDropdown === 'about' ? 'caret-up' : 'caret-down'
										}
										size={16}
										className={styles.dropdownIcon}
									/>
								</button>
							</div>

							<div
								className={`${styles.dropdownMenu} ${
									activeDropdown === 'about' ? styles.active : ''
								}`}
								onMouseEnter={() => handleDropdownEnter('about')}
								onMouseLeave={handleDropdownLeave}
							>
								<div className={styles.dropdownContent}>
									{aboutMenu.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={styles.dropdownItem}
											onClick={handleDropdownItemClick}
										>
											<span className={styles.dropdownItemTitle}>
												{item.title}
											</span>
										</Link>
									))}
								</div>
							</div>
						</div>

						<Link
							href='/contact'
							className={styles.menuLink}
							onClick={closeAllDropdowns}
							onMouseEnter={handleSimpleLinkEnter}
						>
							Контакты
						</Link>
					</div>

					{/* Кнопка "Заказать звонок" - теперь открывает модальное окно */}
					<button
						type='button'
						onClick={openModal}
						className={styles.contactButton}
					>
						Заказать звонок
					</button>

					{/* Модальное окно */}
					<RequestModal
						isOpen={isModalOpen}
						onClose={closeModal}
					/>

					{/* Мобильное меню кнопка */}
					<button
						ref={mobileButtonRef}
						className={styles.mobileMenuButton}
						onClick={toggleMobileMenu}
						aria-label='Меню'
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? '✕' : '☰'}
					</button>
				</nav>
			</div>
			{/* Секция контактов */}
			<section className={styles.contactsSection}>
				<div className={styles.contactsContainer}>
					<div className={styles.contactsGrid}>
						<div className={styles.contactCard}>
							<Icon
								className={styles.iconGroupIcon}
								size={26}
								name='map-pin'
							/>
							<div className={styles.contactContent}>
								<p className={styles.contactText}>
									660111, г. Красноярск,
									<br />
									ул. Пограничников, 101, офис 202
								</p>
							</div>
						</div>
						<div className={styles.contactCard}>
							<Icon
								size={26}
								name='clock'
							/>
							<div className={styles.contactContent}>
								<p className={styles.contactText}>
									Приём звонков ежедневно
									<br />с 09:00 до 18:00 (пн-пт)
								</p>
							</div>
						</div>
						<div className={styles.contactCard}>
							<Icon
								size={26}
								name='phone'
							/>
							<div className={styles.contactContent}>
								<p className={styles.contactText}>
									+7 (391) 274-90-64
									<br />
									+7 (391) 274-90-74
								</p>
							</div>
						</div>
					</div>
				</div>
			</section>
		</header>
	);
}
