import Link from 'next/link';
import styles from './Footer.module.css';

export default function Footer() {
	const currentYear = new Date().getFullYear();

	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				{/* Верхняя часть футера */}
				<div className={styles.topSection}>
					{/* Лого и описание */}
					<div className={styles.brand}>
						<Link
							href='/'
							className={styles.logo}
						>
							МойСайт
						</Link>
						<p className={styles.description}>
							Создаем качественные решения для вашего бизнеса
						</p>
					</div>

					<div style={{ position: 'relative', overflow: 'hidden' }}>
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
							style={{ position: 'relative', border: 'none' }}
						></iframe>
					</div>

					{/* Навигация в футере */}
					<div className={styles.footerNav}>
						<div className={styles.navColumn}>
							<h4 className={styles.navTitle}>Навигация</h4>
							<Link
								href='/'
								className={styles.navLink}
							>
								Главная
							</Link>
							<Link
								href='/about'
								className={styles.navLink}
							>
								О нас
							</Link>
							<Link
								href='/services'
								className={styles.navLink}
							>
								Услуги
							</Link>
							<Link
								href='/contact'
								className={styles.navLink}
							>
								Контакты
							</Link>
						</div>

						<div className={styles.navColumn}>
							<h4 className={styles.navTitle}>Контакты</h4>
							<a
								href='tel:+79999999999'
								className={styles.navLink}
							>
								+7 (999) 999-99-99
							</a>
							<a
								href='mailto:info@mysite.ru'
								className={styles.navLink}
							>
								info@mysite.ru
							</a>
							<p className={styles.address}>г. Москва, ул. Примерная, д. 1</p>
						</div>
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
