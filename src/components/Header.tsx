'use client';

import { useState, useEffect, useRef, useCallback } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import Icon from './Icon';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
	const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
	const menuRef = useRef<HTMLDivElement>(null);

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
		{ title: 'Отзывы о нас', href: '/about/company' },
		{ title: 'Наши клиенты', href: '/about/team' },
		{ title: 'Партнеры', href: '/about/licenses' },
		{ title: 'Специальная оценка условий труда', href: '/about/reviews' },
	];

	// Функция закрытия всех меню (должна быть объявлена перед использованием)
	const closeAllDropdowns = useCallback(() => {
		setActiveDropdown(null);
		setIsMobileMenuOpen(false);
	}, []);

	const handleDropdownItemClick = useCallback(() => {
		// При клике на элемент выпадающего меню закрываем все
		closeAllDropdowns();
	}, [closeAllDropdowns]);

	// Закрытие меню при клике вне области
	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				closeAllDropdowns();
			}
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
		setIsMobileMenuOpen(!isMobileMenuOpen);
	};

	// Обработчик клика на сам пункт меню (ссылка)
	const handleMenuLinkClick = (e: React.MouseEvent, hasDropdown: boolean) => {
		if (window.innerWidth <= 768) {
			// На мобилке клик на ссылку с выпадающим меню - открываем меню, а не переходим
			if (hasDropdown) {
				e.preventDefault();
			}
		}
		// На десктопе - обычный переход по ссылке
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
					<div
						className={`${styles.menu} ${
							isMobileMenuOpen ? styles.mobileMenuOpen : ''
						}`}
						ref={menuRef}
						onMouseLeave={handleMenuLeave}
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
							className={styles.dropdownContainer}
							onMouseEnter={() => handleDropdownEnter('services')}
							onMouseLeave={handleDropdownLeave}
						>
							<div className={styles.dropdownTrigger}>
								<Link
									href='/services'
									className={`${styles.menuLink} ${
										activeDropdown === 'services' ? styles.active : ''
									}`}
									onClick={(e) => handleMenuLinkClick(e, true)}
									onMouseEnter={() => handleDropdownEnter('services')}
								>
									Услуги
									<Icon
										name={
											activeDropdown === 'services' ? 'caret-up' : 'caret-down'
										}
										size={16}
										className={styles.dropdownIcon}
									/>
								</Link>
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
							className={styles.dropdownContainer}
							onMouseEnter={() => handleDropdownEnter('about')}
							onMouseLeave={handleDropdownLeave}
						>
							<div className={styles.dropdownTrigger}>
								<Link
									href='/about'
									className={`${styles.menuLink} ${
										activeDropdown === 'about' ? styles.active : ''
									}`}
									onClick={(e) => handleMenuLinkClick(e, true)}
									onMouseEnter={() => handleDropdownEnter('about')}
								>
									О нас
									<Icon
										name={activeDropdown === 'about' ? 'caret-up' : 'caret-down'}
										size={16}
										className={styles.dropdownIcon}
									/>
								</Link>
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

					{/* Кнопка связи */}
					<Link
						href='/contact'
						className={styles.contactButton}
						onClick={closeAllDropdowns}
					>
						Заказать звонок
					</Link>

					{/* Мобильное меню кнопка */}
					<button
						className={styles.mobileMenuButton}
						onClick={toggleMobileMenu}
						aria-label='Меню'
						aria-expanded={isMobileMenuOpen}
					>
						{isMobileMenuOpen ? '✕' : '☰'}
					</button>
				</nav>
			</div>
		</header>
	);
}