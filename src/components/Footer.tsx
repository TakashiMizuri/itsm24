import Link from 'next/link';
import styles from './Footer.module.css';
import Icon from './Icon';
import ExportedImage from 'next-image-export-optimizer';

export default function Footer() {
	const currentYear = new Date().getFullYear();

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
		// {
		// 	name: 'Odnoklassniki',
		// 	url: 'https://itsm24.ru/',
		// 	icon: '/social/ok.svg',
		// 	alt: 'Одноклассники',
		// },
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
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Верхняя часть футера */}
				<div className={styles.topSection}>
					{/* Контакты */}
					<div className={styles.contactsColumn}>
						<h4 className={styles.navTitle}>Контакты</h4>
						<div className={styles.contactsList}>
							<div className={styles.contactItem}>
								<div className={styles.iconGroup}>
									<Icon
										size={26}
										name='phone'
										className={styles.contactIcon}
									/>
								</div>
								<div className={styles.contactInfo}>
									<a
										className={styles.navLink}
										href='tel:+73912749064'
									>
										+7 (391) 274-90-64
									</a>
									<a
										className={styles.navLink}
										href='tel:+73912749074'
									>
										+7 (391) 274-90-74
									</a>
								</div>
							</div>
							<div className={styles.contactItem}>
								<div className={styles.iconGroup}>
									<Icon
										size={26}
										name='clock'
										className={styles.contactIcon}
									/>
								</div>
								<div className={styles.contactInfo}>
									<p className={styles.contactText}>
										Приём звонков ежедневно
										<br />с 09:00 до 18:00 (Пн-Пт)
									</p>
								</div>
							</div>
							<div className={styles.contactItem}>
								<div className={styles.iconGroup}>
									<Icon
										size={26}
										name='map-pin'
										className={styles.contactIcon}
									/>
								</div>
								<div className={styles.contactInfo}>
									<p className={styles.contactText}>
										660111, г. Красноярск,
										<br />
										ул. Пограничников, здание 101,
										<br />
										офис 202
									</p>
								</div>
							</div>

							{/* Социальные сети */}
							<div className={styles.socialSection}>
								<h5 className={styles.socialTitle}>Социальные сети</h5>
								<div className={styles.socialGrid}>
									{socialNetworks.map((social, index) => (
										<a
											key={index}
											href={social.url}
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
													width={40}
													height={40}
													className={styles.socialIcon}
												/>
											</div>
										</a>
									))}
								</div>
							</div>
						</div>
					</div>

					{/* Карта */}
					<div className={styles.mapContainer}>
						<div className={styles.mapWrapper}>
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

				{/* Нижняя часть футера */}
				<div className={styles.bottomSection}>
					<div className={styles.copyright}>
						Copyright © 2020 - {currentYear}
					</div>
					<div className={styles.legal}>
						<Link
							href='/privacy'
							className={styles.legalLink}
						>
							Политика конфиденциальности
						</Link>
						<Link
							href='/terms'
							className={styles.legalLink}
						>
							Условия использования
						</Link>
					</div>
				</div>
			</div>
		</footer>
	);
}
