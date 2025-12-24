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
					<div className={styles.navColumn}>
						<h4 className={styles.navTitle}>Контакты</h4>
						<div className={styles.iconGroup}>
							<Icon
								size={26}
								name='phone'
							/>
							<div style={{ display: 'flex', flexDirection: 'column' }}>
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
						<div className={styles.iconGroup}>
							<Icon
								size={26}
								name='clock'
							/>
							<p className={styles.iconGroupP}>Ежедневно с 09:00 до 18:00</p>
						</div>
						<div className={styles.iconGroup}>
							<Icon
								className={styles.iconGroupIcon}
								size={26}
								name='map-pin'
							/>
							<p className={styles.iconGroupP}>
								660111, г. Красноярск, ул. Пограничников, здание 101, офис 202.
							</p>
						</div>
					</div>

					{/* Карта */}
					<div style={{ position: 'relative', overflow: 'hidden'}}>
						<a
							href='https://yandex.ru/maps/62/krasnoyarsk/?utm_medium=mapframe&utm_source=maps'
							style={{
								color: '#eee',
								fontSize: '12px',
								position: 'absolute',
								top: '0px',
							}}
						>
							Красноярск
						</a>
						<a
							href='https://yandex.ru/maps/62/krasnoyarsk/house/ulitsa_pogranichnikov_101/bUoYdgdmTEUAQFtsfXx2dn1mZQ==/?ll=93.006346%2C56.076201&utm_medium=mapframe&utm_source=maps&z=16.6'
							style={{
								color: '#eee',
								fontSize: '12px',
								position: 'absolute',
								top: '14px',
							}}
						>
							Улица Пограничников, 101 — Яндекс Карты
						</a>
						<iframe
							// src='https://yandex.ru/map-widget/v1/?ll=93.006346%2C56.076201&mode=whatshere&whatshere%5Bpoint%5D=93.006373%2C56.077568&whatshere%5Bzoom%5D=17&z=16.6'
							src='https://yandex.ru/map-widget/v1/?ll=93.006146%2C56.077201&z=16.6&pt=93.006373%2C56.0772%2Cpm2rdm'
							width='560'
							height='400'
							// frameborder='1'
							// allowFullScreen={true}
							style={{ position: 'relative', border: 'none', borderRadius: '0.5rem' }}
						></iframe>
					</div>
				</div>

				{/* Нижняя часть футера */}
				<div className={styles.bottomSection}>
					<div className={styles.copyright}>Copyright © 2020 - 2025</div>
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
