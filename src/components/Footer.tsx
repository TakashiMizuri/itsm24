import Link from 'next/link';
import styles from './Footer.module.css';
import Icon from './Icon';

export default function Footer() {
	const currentYear = new Date().getFullYear();

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
										<br />с 09:00 до 18:00 (пн-пт)
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
