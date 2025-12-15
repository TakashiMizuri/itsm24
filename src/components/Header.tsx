'use client';

import { useState } from 'react';
import Link from 'next/link';
import styles from './Header.module.css';
import Image from 'next/image';
import Icon from './Icon';

export default function Header() {
	const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

	const toggleDropdown = (dropdownName: string) => {
		setActiveDropdown(activeDropdown === dropdownName ? null : dropdownName);
	};

	const closeAllDropdowns = () => {
		setActiveDropdown(null);
	};

	// Данные для выпадающих меню
	const servicesMenu = [
		{
			title: 'Системы безопасности',
			href: '/services/security',
			description: 'Видеонаблюдение, СКУД, сигнализации',
		},
		{
			title: '1С продукты',
			href: '/services/1c',
			description: 'Внедрение и сопровождение 1С',
		},
		{
			title: 'ИТ инфраструктура',
			href: '/services/it',
			description: 'Серверы, сети, компьютеры',
		},
		{
			title: 'Видеонаблюдение',
			href: '/services/cctv',
			description: 'Установка и обслуживание камер',
		},
		{
			title: 'СКУД',
			href: '/services/scud',
			description: 'Системы контроля доступа',
		},
	];

	const aboutMenu = [
		{ title: 'О компании', href: '/about/company' },
		{ title: 'Наша команда', href: '/about/team' },
		{ title: 'Лицензии и сертификаты', href: '/about/licenses' },
		{ title: 'Отзывы клиентов', href: '/about/reviews' },
	];

	const projectsMenu = [
		{ title: 'Коммерческие объекты', href: '/projects/commercial' },
		{ title: 'Промышленные объекты', href: '/projects/industrial' },
		{ title: 'Образовательные учреждения', href: '/projects/education' },
		{ title: 'Все проекты', href: '/projects/all' },
	];

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
					<div className={styles.menu}>
						<Link
							href='/'
							className={styles.menuLink}
							onClick={closeAllDropdowns}
						>
							Главная
						</Link>

						{/* Услуги с выпадающим меню */}
						<div className={styles.dropdownContainer}>
							<button
								className={`${styles.menuLink} ${styles.dropdownToggle}`}
								onClick={() => toggleDropdown('services')}
								aria-expanded={activeDropdown === 'services'}
							>
								Услуги
								{activeDropdown === 'services' ? (
									<Icon
										name='caret-up'
										size={20}
									/>
								) : (
									<Icon
										name='caret-down'
										size={20}
									/>
								)}
							</button>

							{activeDropdown === 'services' && (
								<div
									className={`${styles.dropdownMenu} ${styles.servicesDropdown}`}
								>
									<div className={styles.dropdownContent}>
										<div className={styles.dropdownGrid}>
											{servicesMenu.map((item) => (
												<Link
													key={item.href}
													href={item.href}
													className={styles.dropdownItem}
													onClick={closeAllDropdowns}
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
							)}
						</div>

						{/* О нас с выпадающим меню */}
						<div className={styles.dropdownContainer}>
							<button
								className={`${styles.menuLink} ${styles.dropdownToggle}`}
								onClick={() => toggleDropdown('about')}
								aria-expanded={activeDropdown === 'about'}
							>
								О нас
								{activeDropdown === 'about' ? (
									<Icon
										name='caret-up'
										size={20}
									/>
								) : (
									<Icon
										name='caret-down'
										size={20}
									/>
								)}
							</button>

							{activeDropdown === 'about' && (
								<div className={styles.dropdownMenu}>
									{aboutMenu.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={styles.dropdownItem}
											onClick={closeAllDropdowns}
										>
											<span className={styles.dropdownItemTitle}>
												{item.title}
											</span>
										</Link>
									))}
								</div>
							)}
						</div>

						{/* Проекты с выпадающим меню */}
						<div className={styles.dropdownContainer}>
							<button
								className={`${styles.menuLink} ${styles.dropdownToggle}`}
								onClick={() => toggleDropdown('projects')}
								aria-expanded={activeDropdown === 'projects'}
							>
								Проекты
								{activeDropdown === 'projects' ? (
									<Icon
										name='caret-up'
										size={20}
									/>
								) : (
									<Icon
										name='caret-down'
										size={20}
									/>
								)}
							</button>

							{activeDropdown === 'projects' && (
								<div className={styles.dropdownMenu}>
									{projectsMenu.map((item) => (
										<Link
											key={item.href}
											href={item.href}
											className={styles.dropdownItem}
											onClick={closeAllDropdowns}
										>
											<span className={styles.dropdownItemTitle}>
												{item.title}
											</span>
										</Link>
									))}
								</div>
							)}
						</div>

						<Link
							href='/contact'
							className={styles.menuLink}
							onClick={closeAllDropdowns}
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

					{/* Мобильное меню (опционально) */}
					<button
						className={styles.mobileMenuButton}
						onClick={() => toggleDropdown('mobile')}
						aria-label='Меню'
					>
						{activeDropdown === 'mobile' ? '✕' : '☰'}
					</button>
				</nav>
			</div>

			{/* Оверлей для закрытия выпадающих меню */}
			{activeDropdown && (
				<div
					className={styles.dropdownOverlay}
					onClick={closeAllDropdowns}
				/>
			)}
		</header>
	);
}
