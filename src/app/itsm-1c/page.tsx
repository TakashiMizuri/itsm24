'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Icon from '@/components/Icon';
import RequestModal from '@/components/RequestModal';
import ExportedImage from 'next-image-export-optimizer';

export default function Itsm1C() {
	const [isLoading, setIsLoading] = useState(true); // Добавляем состояние загрузки
	const [isModalOpen, setIsModalOpen] = useState(false); // Состояние для модального окна

	useEffect(() => {
		const timer = setTimeout(() => {
			setIsLoading(false);
		}, 0);

		return () => clearTimeout(timer);
	}, []);

	// Закрытие меню на Escape и блокировка скролла
	useEffect(() => {
		const onKey = (e: KeyboardEvent) => {
			if (e.key === 'Escape') {
				if (isModalOpen) {
					setIsModalOpen(false);
				}
			}
		};

		// Блокируем скролл если открыто модальное окно ИЛИ мобильное меню
		if (isModalOpen) {
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
	}, [isModalOpen]);

	// Открытие модального окна
	const openModal = () => {
		setIsModalOpen(true);
	};

	// Закрытие модального окна
	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div className={styles.page}>
			{/* Герой секция с анимацией */}
			<section className={`${styles.hero} ${isLoading ? styles.loading : ''}`}>
				<div className={styles.heroContent}>
					<h1
						className={`${styles.heroTitle} ${isLoading ? styles.loading : ''}`}
					>
						1C продукты в Красноярске
					</h1>
					<p
						className={`${styles.heroDescription} ${
							isLoading ? styles.loading : ''
						}`}
					>
						Комплексные услуги по внедрению, сопровождению, консультации 1С.
						Более 5 лет на рынке
					</p>
				</div>
				<ExportedImage
					src='/smiling-businesswoman-enjoying-talk-with-colleagues-teamwork-with-laptops.jpg'
					alt='IT решения для бизнеса'
					width={1000}
					height={1000}
					className={`${styles.heroImg} ${isLoading ? styles.loading : ''}`}
				/>
			</section>

			{/* Секция Наши услуги */}
			<section
				className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<h2
						className={`${styles.sectionTitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						НАШИ УСЛУГИ
					</h2>
					<div className={styles.productsGrid}>
						<div
							className={`${styles.productCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<div className={styles.productImage}>
								<ExportedImage
									src='/closeup-caucasian-software-coder-hands-typing-keyboard-front-computer-screens-with-programming-interface-database-developer-sitting-desk-writing-algorithm-it-agency.jpg'
									alt='Программы 1С'
									width={400}
									height={300}
									className={styles.productImg}
								/>
							</div>
							<h3 className={styles.productTitle}>Программы 1С</h3>
							<p className={styles.productDescription}>
								Полный спектр программных продуктов 1С для автоматизации
								бухгалтерского учета, управления предприятием, торговлей и
								складом.
							</p>
						</div>
						<div className={styles.productCard}>
							<div className={styles.productImage}>
								<ExportedImage
									src='/young-woman-working-office-with-laptop-headphones-white-wall-customer-service-call-center.jpg'
									alt='Сопровождение 1С'
									width={400}
									height={300}
									className={styles.productImg}
								/>
							</div>
							<h3 className={styles.productTitle}>Сопровождение 1С</h3>
							<p className={styles.productDescription}>
								Техническая поддержка, обновление конфигураций, консультации,
								удаленное администрирование и обслуживание программ 1С.
							</p>
						</div>
						<div
							className={`${styles.productCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<div className={styles.productImage}>
								<ExportedImage
									src='/man-woman-working-diagrams-together.jpg'
									alt='Консультация 1С'
									width={400}
									height={300}
									className={styles.productImg}
								/>
							</div>
							<h3 className={styles.productTitle}>Консультация 1С</h3>
							<p className={styles.productDescription}>
								Профессиональные консультации по выбору, внедрению и
								использованию программ 1С. Обучение персонала работе с
								программами.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция Квалификация */}
			<section
				className={`${styles.section} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<div className={styles.qualificationSection}>
						<div
							className={`${styles.qualificationContent} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<h2
								className={`${styles.sectionTitle} ${
									isLoading ? styles.loading : ''
								}`}
							>
								КВАЛИФИКАЦИЯ
							</h2>
							<p className={styles.qualificationText}>
								Квалификация сотрудников ООО «АйТиСМ» подтверждается
								Сертификатами, которые выдает 1С по результатам испытаний. У
								сотрудников ООО «АйТиСМ»:
							</p>
							<ul className={styles.certificatesList}>
								<li>
									<Icon
										name='trophy'
										size={26}
										className={styles.certificetesListItemIcon}
									/>
									29 сертификатов «1С:Профессионал»
								</li>
								<li>
									<Icon
										name='trophy'
										size={26}
										className={styles.certificetesListItemIcon}
									/>
									10 сертификатов «1С:Специалист»
								</li>
								<li>
									<Icon
										name='trophy'
										size={26}
										className={styles.certificetesListItemIcon}
									/>
									Сертификат Руководителя проектов
								</li>
								<li>
									<Icon
										name='trophy'
										size={26}
										className={styles.certificetesListItemIcon}
									/>
									Сертификаты на право работы в регистраторе 1С:Отчетность
								</li>
							</ul>
						</div>
						<ExportedImage
							src='/group-people-working-out-business-plan-office.jpg'
							alt='Сертификаты 1С'
							width={500}
							height={350}
							className={`${styles.qualificationImg} ${
								isLoading ? styles.loading : ''
							}`}
						/>
					</div>
				</div>
			</section>

			{/* Секция С кем работаем */}
			<section
				className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<h2
						className={`${styles.sectionTitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						С КЕМ РАБОТАЕМ
					</h2>
					<div className={styles.clientsGrid}>
						<div
							className={`${styles.clientCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<div className={styles.clientIcon}>📊</div>
							<h3 className={styles.clientTitle}>С бухгалтерами</h3>
							<p className={styles.clientDescription}>
								Быстро и без ошибок научим вести бухучет, соблюдая технологию
								работы в программах, чтобы отчетность формировалась
								автоматически. Консультируем каждого бухгалтера по его сфере
								деятельности, а при необходимости, адаптируем программное
								обеспечение 1С к потребностям клиента.
							</p>
						</div>
						<div
							className={`${styles.clientCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<div className={styles.clientIcon}>👔</div>
							<h3 className={styles.clientTitle}>С руководителями</h3>
							<p className={styles.clientDescription}>
								Работаем с руководителями различного уровня, чтобы сокращать
								расходы, повышать продажи и сохранять клиентов, используя
								различное программное обеспечение 1С. Помогаем принимать
								обоснованные управленческие решения на основе точных данных.
							</p>
						</div>
					</div>
				</div>
			</section>

			{/* Секция Вопросы, которые мы решаем */}
		<section className={`${styles.section} ${isLoading ? styles.loading : ''}`}>
			<div className={styles.container}>
				<h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>ВОПРОСЫ, КОТОРЫЕ МЫ РЕШАЕМ</h2>
				<div className={`${styles.servicesGrid} ${isLoading ? styles.loading : ''}`}>
						{[
							'Бесплатный подбор, продажа, установка программного обеспечения «1С» и консультация по работе с ним',
							'Оказание услуг по доработке программ на базе «1С»',
							'Подключение к сдаче отчетности в контролирующие органы прямо из ваших программ 1С через оператора связи Калуга-Астрал (ФНС, ФСС, Пенсионный фонд, Росстат). Вы платите только фиксированную цену в Калуга-Астрал, подключим мы бесплатно. Предоставим скидку от 3 компаний',
							'Аренда места на сервере',
							'Услуги системного администратора и системотехника',
							'Создание ЭЦП',
						].map((service, index) => (
							<div
								key={index}
								className={styles.serviceItem}
							>
								<Icon
									name='point'
									size={24}
									className={styles.serviceIcon}
								/>
								<p>{service}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Секция Спецпредложения */}
		<section className={`${styles.promoSection} ${isLoading ? styles.loading : ''}`}>
			<div className={styles.container}>
				<h2 className={`${styles.promoTitle} ${isLoading ? styles.loading : ''}`}>СПЕЦПРЕДЛОЖЕНИЯ</h2>
				<div className={`${styles.promoContent} ${isLoading ? styles.loading : ''}`}>
						<div className={styles.promoCard}>
							<h3 className={styles.promoCardTitle}>
								Дарим антивирус Лаборатории Касперского при покупке
								профессиональных версий программных продуктов
							</h3>
						</div>
						<div className={styles.promoForm}>
							<h3 className={styles.formTitle}>
								Затрудняетесь с выбором программы 1С?
							</h3>
							<p className={styles.formSubtitle}>
								Просто заполните форму! Мы перезвоним и подберем для вас
								оптимальное решение 1С!
							</p>
							<button
								className={styles.formButton}
								onClick={openModal}
							>
								ЗАПОЛНИТЬ ФОРМУ
							</button>
						</div>
					</div>
				</div>

				{/* Модальное окно */}
				<RequestModal
					isOpen={isModalOpen}
					onClose={closeModal}
				/>
			</section>

			{/* Секция О нас */}
			<section
				className={`${styles.section} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<h2
						className={`${styles.sectionTitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						О нас
					</h2>
					<div
						className={`${styles.aboutGrid} ${isLoading ? styles.loading : ''}`}
					>
						<div className={styles.aboutContent}>
							<p className={styles.aboutText}>
								Группа компаний «АйТиСМ» готовы предложить Вам комплексные
								профессиональные решения в области автоматизации
								бизнес-процессов:
							</p>
							<ul className={styles.aboutList}>
								<li>
									<strong>
										Программное обеспечение и франчайзинг продуктов 1С:
									</strong>
									<br />
									- автоматизация предприятий и организаций на базе программного
									комплекса 1С – поставка, внедрение и сопровождение;
									<br />
									- отчетность через интернет и электронно-цифровая подпись;
									<br />- поставка программного обеспечения и средств защиты
									данных;
								</li>
								<li>
									<strong>
										Решения для предприятий любого масштаба и всех отраслей
									</strong>
								</li>
								<li>
									<strong>Консультирование и подбор оптимальной системы</strong>
								</li>
								<li>
									<strong>Техническая поддержка</strong>
								</li>
								<li>
									<strong>Идеальное решение для бухгалтерии</strong>
								</li>
								<li>
									<strong>Безопасность базы</strong>
								</li>
							</ul>
						</div>
						<div className={styles.aboutImageContainer}>
							<ExportedImage
								src='/ajti-servis-menedzhment.png'
								alt='Логотип компании АйТиСМ'
								width={500}
								height={350}
								className={styles.aboutImg}
							/>
						</div>
					</div>
				</div>
			</section>

			{/* Секция Отзывы */}
			<section
				className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}
			>
				<div className={styles.container}>
					<h2
						className={`${styles.sectionTitle} ${
							isLoading ? styles.loading : ''
						}`}
					>
						Отзывы
					</h2>
					<div
						className={`${styles.reviewsGrid} ${
							isLoading ? styles.loading : ''
						}`}
					>
						<div
							className={`${styles.reviewCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<p className={styles.reviewText}>
								&quot;Квалифицированные консультации, оперативное решение
								поставленных задач&quot;
							</p>
							<p className={styles.reviewAuthor}>
								- ООО &quot;ЛПЗ&quot;СЕГАЛ&quot;
							</p>
						</div>
						<div
							className={`${styles.reviewCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<p className={styles.reviewText}>
								&quot;Выражаем огромную благодарность нашим незаменимым
								партнерам в лице сотрудников «АйТиСМ». Решение проблем — это Ваш
								конёк. Спасибо за облегчение труда, экономию времени, за
								индивидуальный подход и доброжелательность при личных
								встречах&quot;
							</p>
							<p className={styles.reviewAuthor}>- Марина</p>
						</div>
						<div
							className={`${styles.reviewCard} ${
								isLoading ? styles.loading : ''
							}`}
						>
							<p className={styles.reviewText}>
								&quot;Мне нравится индивидуальный подход к каждому специалисту
								нашей компании, умение доходчиво и понятно объяснить и
								помочь&quot;
							</p>
							<p className={styles.reviewAuthor}>- Александр Олегович</p>
						</div>
					</div>
				</div>
			</section>
		</div>
	);
}
