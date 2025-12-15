import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function ItsmSecurity() {
	return (
		<div className={styles.page}>
			{/* Герой секция */}
			<section className={styles.hero}>
				<div className={styles.heroContent}>
					<h1 className={styles.heroTitle}>
						Профессиональные решения для бизнеса в Красноярске
					</h1>
					<p className={styles.heroDescription}>
						Комплексные услуги по системам безопасности и автоматизации 1С.
						Более 5 лет на рынке
					</p>
					<div className={styles.heroButtons}>
						<Link
							href='/services/security'
							className={styles.primaryButton}
						>
							Системы безопасности
						</Link>
						<Link
							href='/services/1c'
							className={styles.secondaryButton}
						>
							1С интеграции
						</Link>
					</div>
				</div>
				<div className={styles.heroImage}>
					<Image
						src='/hero-image.svg'
						alt='IT решения для бизнеса'
						width={500}
						height={400}
						priority
					/>
				</div>
			</section>

			{/* Секция о компании */}
			<section className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>ООО «АйТиСМ»</h2>
					<div className={styles.aboutContent}>
						<p className={styles.aboutText}>
							Мы - группа компаний, предлагающая комплексные профессиональные
							решения в области автоматизации бизнес-процессов и систем
							безопасности. Работаем с 2013 года в Красноярске и крае.
						</p>
						<div className={styles.stats}>
							<div className={styles.stat}>
								<div className={styles.statNumber}>5+</div>
								<div className={styles.statLabel}>лет на рынке</div>
							</div>
							<div className={styles.stat}>
								<div className={styles.statNumber}>500+</div>
								<div className={styles.statLabel}>успешных проектов</div>
							</div>
							<div className={styles.stat}>
								<div className={styles.statNumber}>24/7</div>
								<div className={styles.statLabel}>техподдержка</div>
							</div>
						</div>
					</div>
				</div>
			</section>

			{/* Секция основных услуг */}
			<section className={styles.sectionDark}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Наши основные услуги</h2>
					<div className={styles.mainServices}>
						{/* Системы безопасности */}
						<div className={styles.mainService}>
							<div className={styles.serviceIcon}>🔒</div>
							<h3 className={styles.serviceTitle}>Системы безопасности</h3>
							<p className={styles.serviceDescription}>
								Полный комплекс услуг по проектированию, монтажу и обслуживанию
								систем безопасности для бизнеса и частных объектов
							</p>
							<ul className={styles.serviceList}>
								<li>Видеонаблюдение</li>
								<li>Пожарная сигнализация</li>
								<li>Охранные системы</li>
								<li>Контроль доступа</li>
								<li>Домофоны и СКУД</li>
							</ul>
							<Link
								href='/services/security'
								className={styles.serviceLink}
							>
								Подробнее →
							</Link>
						</div>

						{/* 1С интеграции */}
						<div className={styles.mainService}>
							<div className={styles.serviceIcon}>📊</div>
							<h3 className={styles.serviceTitle}>1С интеграции</h3>
							<p className={styles.serviceDescription}>
								Автоматизация бизнес-процессов, интеграция с сайтами, настройка
								и сопровождение 1С на предприятии
							</p>
							<ul className={styles.serviceList}>
								<li>Внедрение 1С</li>
								<li>Интеграция с сайтом</li>
								<li>Доработка под бизнес</li>
								<li>Обучение персонала</li>
								<li>Техническая поддержка</li>
							</ul>
							<Link
								href='/services/1c'
								className={styles.serviceLink}
							>
								Подробнее →
							</Link>
						</div>
					</div>
				</div>
			</section>

			{/* Секция преимуществ */}
			<section className={styles.section}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Почему выбирают нас</h2>
					<div className={styles.features}>
						<div className={styles.feature}>
							<div className={styles.featureIcon}>🏆</div>
							<h3 className={styles.featureTitle}>Опыт</h3>
							<p className={styles.featureDescription}>
								Более 5 лет успешной работы на рынке
							</p>
						</div>
						<div className={styles.feature}>
							<div className={styles.featureIcon}>⚡</div>
							<h3 className={styles.featureTitle}>Оперативность</h3>
							<p className={styles.featureDescription}>
								Быстрый выезд специалиста и решение задач в срок
							</p>
						</div>
						<div className={styles.feature}>
							<div className={styles.featureIcon}>🛡️</div>
							<h3 className={styles.featureTitle}>Гарантия</h3>
							<p className={styles.featureDescription}>
								Гарантия на работы и оборудование до 3 лет
							</p>
						</div>
						<div className={styles.feature}>
							<div className={styles.featureIcon}>💰</div>
							<h3 className={styles.featureTitle}>Ценовая политика</h3>
							<p className={styles.featureDescription}>
								Гибкие цены и индивидуальный подход к каждому клиенту
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция услуг */}
			<section className={styles.sectionDark}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Наши услуги</h2>
					<div className={styles.services}>
						<div className={styles.service}>
							<h3 className={styles.serviceTitle}>Веб-разработка</h3>
							<p className={styles.serviceDescription}>
								Создаем современные и быстрые веб-сайты на Next.js и React
							</p>
							<ul className={styles.serviceList}>
								<li>Корпоративные сайты</li>
								<li>Интернет-магазины</li>
								<li>Лендинги</li>
							</ul>
						</div>
						<div className={styles.service}>
							<h3 className={styles.serviceTitle}>Мобильные приложения</h3>
							<p className={styles.serviceDescription}>
								Кроссплатформенные приложения для iOS и Android
							</p>
							<ul className={styles.serviceList}>
								<li>React Native</li>
								<li>Нативные приложения</li>
								<li>UI/UX дизайн</li>
							</ul>
						</div>
						<div className={styles.service}>
							<h3 className={styles.serviceTitle}>Техническая поддержка</h3>
							<p className={styles.serviceDescription}>
								Поддержка и развитие существующих проектов
							</p>
							<ul className={styles.serviceList}>
								<li>Обновления и фиксы</li>
								<li>Оптимизация</li>
								<li>Консультации</li>
							</ul>
						</div>
					</div>
				</div>
			</section>

			{/* Секция с кейсами */}
			<section className={styles.sectionDark}>
				<div className={styles.container}>
					<h2 className={styles.sectionTitle}>Наши работы</h2>
					<div className={styles.cases}>
						<div className={styles.case}>
							<h3 className={styles.caseTitle}>
								Система видеонаблюдения для ТЦ
							</h3>
							<p className={styles.caseDescription}>
								Установка 48 камер, серверного оборудования, настройка
								удаленного доступа
							</p>
						</div>
						<div className={styles.case}>
							<h3 className={styles.caseTitle}>
								Интеграция 1С с интернет-магазином
							</h3>
							<p className={styles.caseDescription}>
								Автоматизация выгрузки товаров, синхронизация остатков и заказов
							</p>
						</div>
						<div className={styles.case}>
							<h3 className={styles.caseTitle}>СКУД для офисного центра</h3>
							<p className={styles.caseDescription}>
								Система контроля доступа на 150 сотрудников с интеграцией в
								1С:ЗУП
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция CTA */}
			<section className={styles.ctaSection}>
				<div className={styles.container}>
					<h2 className={styles.ctaTitle}>Нужна консультация?</h2>
					<p className={styles.ctaDescription}>
						Оставьте заявку и наш специалист свяжется с вами в течение 30 минут
					</p>
					<div className={styles.ctaButtons}>
						<Link
							href='/contacts'
							className={styles.primaryButton}
						>
							Оставить заявку
						</Link>
						<a
							href='tel:+73912749074'
							className={styles.secondaryButton}
						>
							Позвонить: +7 (391) 274-90-74
						</a>
					</div>
				</div>
			</section>
		</div>
	);
}
