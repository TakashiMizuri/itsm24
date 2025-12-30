'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import styles from './page.module.css';
import Icon from '@/components/Icon';
import RequestModal from '@/components/RequestModal';
import Carousel, { CarouselImage } from '@/components/Carousel';
import ExportedImage from 'next-image-export-optimizer';

export default function Itsm1C() {
    const [isLoading, setIsLoading] = useState(true);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const onKey = (e: KeyboardEvent) => {
            if (e.key === 'Escape' && isModalOpen) {
                setIsModalOpen(false);
            }
        };

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

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    const carouselImages: CarouselImage[] = [
        { id: 1, src: '/client_iskra.png', alt: 'Iskra' },
        { id: 2, src: '/client_vbh.png', alt: 'VBH' },
        { id: 3, src: '/client_ses.png', alt: 'SES' },
        { id: 4, src: '/client_kia.png', alt: 'Kia' },
        { id: 5, src: '/client_lada.png', alt: 'Lada' },
        { id: 6, src: '/client_uzhd.png', alt: 'Uzhd' },
        { id: 7, src: '/client_promet.png', alt: 'Promet' },
        { id: 8, src: '/client_segal.png', alt: 'Segal' },
        { id: 9, src: '/client_reno.png', alt: 'Reno' }
    ];

    // Данные для карточек услуг
    const securityServices = [
        {
            id: 1,
            href: '/itsm-security/videonablyudenie',
            title: 'Видеонаблюдение',
            description: 'Установка систем безопасности',
            imageSrc: '/security-1.png',
            imageAlt: 'Видеонаблюдение'
        },
        {
            id: 2,
            href: '/itsm-security/pozharnaya-signalizatsiya',
            title: 'Противопожарная система',
            description: 'Установка сигнализации, пожаротушения',
            imageSrc: '/security-2.png',
            imageAlt: 'Противопожарная система'
        },
        {
            id: 3,
            href: '/itsm-security/okhrannaya-signalizatsiya',
            title: 'Охранная система',
            description: 'Монтаж охранных сигнализаций',
            imageSrc: '/security-3.png',
            imageAlt: 'Охранная система'
        },
        {
            id: 4,
            href: '/itsm-security/elektrozamki',
            title: 'Электрозамки',
            description: 'Электронные замки для любых типов дверей',
            imageSrc: '/security-4.png',
            imageAlt: 'Электрозамки'
        },
        {
            id: 5,
            href: '/itsm-security/domofoniya',
            title: 'Домофония',
            description: 'Визуальный контакт с вашими посетителями',
            imageSrc: '/security-5.png',
            imageAlt: 'Домофония'
        },
        {
            id: 6,
            href: '/itsm-security/kontrol-dostupa',
            title: 'Контроль доступа',
            description: 'Полный контроль за перемещением гостей и сотрудников',
            imageSrc: '/security-6.png',
            imageAlt: 'Контроль доступа'
        }
    ];

    return (
        <div className={styles.page}>
            {/* Герой секция */}
            <section className={`${styles.hero} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.heroContent}>
                    <h1 className={`${styles.heroTitle} ${isLoading ? styles.loading : ''}`}>
                        Системы безопасности в Красноярске
                    </h1>
                    <p className={`${styles.heroDescription} ${isLoading ? styles.loading : ''}`}>
                        Комплексные решения для безопасности и ИТ-инфраструктуры.
                        Проектирование, монтаж и обслуживание систем любой сложности
                    </p>
                </div>
                <ExportedImage
                    src='/54841601_2_0.jpg'
                    alt='Системы безопасности'
                    width={1200}
                    height={800}
                    className={`${styles.heroImg} ${isLoading ? styles.loading : ''}`}
                />
            </section>

            {/* Секция "Немного о нас" */}
            <section className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                        НЕМНОГО О НАС
                    </h2>
                    <div className={styles.aboutGrid}>
                        <div className={styles.aboutContent}>
                            <p className={styles.aboutText}>
                                Группа компаний «АйТиСМ» готовы предложить Вам комплексные профессиональные решения в области автоматизации бизнес-процессов, в построении систем безопасности и инфраструктуры инженерных систем.
                            </p>
                            <div className={styles.featuresGrid}>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <Icon name="shield" size={40} />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>ПРОФЕССИОНАЛЬНО</h3>
                                        <p className={styles.featureDescription}>Профессиональная техническая поддержка</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <Icon name="discount" size={40} />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>ВЫГОДНО</h3>
                                        <p className={styles.featureDescription}>Накапливайте и расплачивайтесь бонусами</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <Icon name="wallet" size={40} />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>УДОБНО</h3>
                                        <p className={styles.featureDescription}>Различные способы оплаты</p>
                                    </div>
                                </div>
                                <div className={styles.featureItem}>
                                    <div className={styles.featureIcon}>
                                        <Icon name="delivery" size={40} />
                                    </div>
                                    <div>
                                        <h3 className={styles.featureTitle}>ДОСТУПНО</h3>
                                        <p className={styles.featureDescription}>Доставка во все регионы России</p>
                                    </div>
                                </div>
                            </div>
                            <Link href="/about" className={styles.detailsButton}>
                                ПОДРОБНЕЕ
                            </Link>
                        </div>
                        <div className={styles.servicesList}>
                            <h3 className={styles.servicesListTitle}>Системы безопасности и ИТ-инфраструктура:</h3>
                            <ul className={styles.servicesItems}>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Проектирование, монтаж и обслуживание систем видеонаблюдения</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Системы контроля управления доступом (турникеты, шлагбаумы, ограждения)</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Металлодетекторы, антикражное оборудование, домофоны</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Системы охранно-пожарной сигнализации и оповещения</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Телекоммуникационные сети любой сложности (ЛВС, СКС, ВОЛС, Wi-Fi)</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Сети электроснабжения</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Огнезащита конструкций (металлических, железобетонных и деревянных)</span>
                                </li>
                                <li>
                                    <Icon name="check" size={20} className={styles.serviceIcon} />
                                    <span>Технический аудит существующих сетей</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция "Установка систем безопасности" */}
            <section className={`${styles.section} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                            УСТАНОВКА СИСТЕМ БЕЗОПАСНОСТИ
                        </h2>
                    </div>
                    <div className={styles.securityGrid}>
                        {securityServices.map((service) => (
                            <Link
                                key={service.id}
                                href={service.href}
                                className={styles.securityCard}
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                <div className={styles.securityImage}>
                                    <ExportedImage
                                        src={service.imageSrc}
                                        alt={service.imageAlt}
                                        width={600}
                                        height={400}
                                        className={styles.securityImg}
                                    />
                                </div>
                                <h3 className={styles.securityTitle}>{service.title}</h3>
                                <p className={styles.securityDescription}>{service.description}</p>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>

            {/* Секция "Наши клиенты" */}
            <section className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                        НАШИ КЛИЕНТЫ
                    </h2>
                    <Carousel images={carouselImages} itemsToShow={4} allowModal={false} itemWidth="260px" itemHeight="180px" />
                </div>
            </section>

            {/* Секция "Уникальное предложение" */}
            <section className={`${styles.promoSection} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.specialOffer}>
                        <div className={styles.offerImage}>
                            <ExportedImage
                                src='/happy-wan-cap-overall-writing-clipboard.jpg'
                                alt='Уникальное предложение'
                                width={400}
                                height={300}
                                className={styles.offerImg}
                            />
                        </div>
                        <div className={styles.offerContent}>
                            <h2 className={styles.offerTitle}>Уникальное предложение</h2>
                            <p className={styles.offerDescription}>
                                Только при заказе оборудования и услуг монтажа в этом месяце мы предоставляем скидку 5% на:
                            </p>
                            <ul className={styles.offerList}>
                                <li className={styles.offerItem}>
                                    <Icon name="check" size={20} className={styles.offerIcon} />
                                    <span>системы автоматической пожарной сигнализации</span>
                                </li>
                                <li className={styles.offerItem}>
                                    <Icon name="check" size={20} className={styles.offerIcon} />
                                    <span>системы оповещения о пожаре</span>
                                </li>
                                <li className={styles.offerItem}>
                                    <Icon name="check" size={20} className={styles.offerIcon} />
                                    <span>спринклерной системы пожаротушения</span>
                                </li>
                            </ul>
                            <p className={styles.offerNote}>
                                Успейте заказать, предложение ограничено!
                            </p>
                            <button className={styles.offerButton} onClick={openModal}>
                                ЗАКАЗАТЬ СО СКИДКОЙ
                            </button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Модальное окно */}
            <RequestModal
                isOpen={isModalOpen}
                onClose={closeModal}
            />
        </div>
    );
}