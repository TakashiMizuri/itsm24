'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Icon from '@/components/Icon';
import ExportedImage from 'next-image-export-optimizer';
// import { useModal } from '@/context/ModalContext';

export default function ContactPage() {
	const [isLoading, setIsLoading] = useState(true);
	// const { openModal } = useModal();

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	const socialNetworks = [
		{
			name: 'Mail',
			url: 'mailto:sale@itsm24.ru',
			icon: '/social/mail.png',
			alt: 'Mail',
		},
		{
			name: 'Instagram',
			url: 'https://www.instagram.com/itsm24_ru',
			icon: '/social/instagram.png',
			alt: 'Instagram',
		},
		{
			name: 'Telegram',
			url: 'https://t-do.ru/avasiliev24',
			icon: '/social/telegram.svg',
			alt: 'Telegram',
		},
		{
			name: 'Viber',
			url: 'https://www.viber.click/79135324480',
			icon: '/social/viber.svg',
			alt: 'Viber',
		},
		{
			name: 'VKontakte',
			url: 'https://itsm24.ru/',
			icon: '/social/vk.svg',
			alt: 'ВКонтакте',
		},
		{
			name: 'WhatsApp',
			url: 'https://wa.me/79135324480',
			icon: '/social/whatsapp.svg',
			alt: 'WhatsApp',
		},
	];

	return (
		<div className={styles.page}>
			{/* Упрощенная герой-секция */}
			<section
				className={`${styles.heroSection} ${isLoading ? styles.loading : ''}`}
				style={{textAlign: 'center'}}
			>
				<div className={styles.container}>
					<h1
						className={`${styles.heroTitle} ${isLoading ? styles.loading : ''}`}
					>
						Контакты
					</h1>
					<p
						className={`${styles.heroSubtitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						Свяжитесь с нами любым удобным способом
					</p>
				</div>
			</section>

			{/* Секция Контакты */}
			<section
				className={`${styles.section} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<div className={styles.contactsGrid}>
						{/* Отдел продаж */}
						<div className={styles.contactCard}>
							<div className={styles.contactCardHeader}>
								<Icon
									name='users'
									size={32}
									className={styles.contactCardIcon}
								/>
								<h3 className={styles.contactCardTitle}>Отдел продаж</h3>
							</div>

							<div className={styles.contactInfoList}>
								<div className={styles.contactInfoItem}>
									<Icon
										name='phone'
										size={24}
										className={styles.contactInfoIcon}
									/>
									<div className={styles.contactInfoContent}>
										<p className={styles.contactInfoLabel}>Телефон</p>
										<a
											href='tel:+73912749064'
											className={styles.contactInfoValue}
										>
											+7 (391) 274-90-64
										</a>
									</div>
								</div>

								<div className={styles.contactInfoItem}>
									<Icon
										name='phone'
										size={24}
										className={styles.contactInfoIcon}
									/>
									<div className={styles.contactInfoContent}>
										<p className={styles.contactInfoLabel}>Телефон</p>
										<a
											href='tel:+73912749074'
											className={styles.contactInfoValue}
										>
											+7 (391) 274-90-74
										</a>
									</div>
								</div>

								<div className={styles.contactInfoItem}>
									<Icon
										name='message'
										size={24}
										className={styles.contactInfoIcon}
									/>
									<div className={styles.contactInfoContent}>
										<p className={styles.contactInfoLabel}>Мессенджеры</p>
										<a
											href='tel:+79135324480'
											className={styles.contactInfoValue}
										>
											+7 (913) 532-44-80
										</a>
										<p className={styles.contactInfoSubtext}>
											WhatsApp • Telegram • Viber
										</p>
									</div>
								</div>

								<div className={styles.contactInfoItem}>
									<Icon
										name='clock'
										size={24}
										className={styles.contactInfoIcon}
									/>
									<div className={styles.contactInfoContent}>
										<p className={styles.contactInfoLabel}>Режим работы</p>
										<p className={styles.contactInfoValue}>пн-пт 9:00-18:00</p>
									</div>
								</div>
							</div>
						</div>

						{/* Адрес */}
						<div className={styles.contactCard}>
							<div className={styles.contactCardHeader}>
								<Icon
									name='map-pin'
									size={32}
									className={styles.contactCardIcon}
								/>
								<h3 className={styles.contactCardTitle}>Адрес</h3>
							</div>

							<div className={styles.contactInfoList}>
								<div className={styles.contactInfoItem}>
									<Icon
										name='building'
										size={24}
										className={styles.contactInfoIcon}
									/>
									<div className={styles.contactInfoContent}>
										<p className={styles.contactInfoValue}>
											660111, г. Красноярск,
											<br />
											ул. Пограничников, д. 101,
											<br />
											оф. 202
										</p>
									</div>
								</div>

								<div className={styles.mapContainer}>
									<iframe
										src='https://yandex.ru/map-widget/v1/?ll=93.006146%2C56.077201&z=16.6&pt=93.006373%2C56.0772%2Cpm2rdm'
										className={styles.mapIframe}
										title='Яндекс Карта - ООО «АйТиСМ» в Красноярске'
										loading='lazy'
										referrerPolicy='no-referrer-when-downgrade'
										allowFullScreen
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Секция Социальные сети */}
			<section
				className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<h2
						className={`${styles.sectionTitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						Мы в социальных сетях
					</h2>

					<div className={styles.socialSection}>
						<div className={styles.socialGrid}>
							{socialNetworks.map((social, index) => (
								<a
									key={index}
									href={social.url || '#'}
									className={styles.socialLink}
									target='_blank'
									rel='noopener noreferrer'
									aria-label={`${social.name} - открыть в новой вкладке`}
									title={social.name}
								>
									<div className={styles.socialIconWrapper}>
										<ExportedImage
											src={social.icon}
											alt={social.alt}
											width={24}
											height={24}
											className={styles.socialIcon}
										/>
									</div>
									<span className={styles.socialName}>{social.name}</span>
								</a>
							))}
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
