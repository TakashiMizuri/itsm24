'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import Icon from '@/components/Icon';
import RequestModal from '@/components/RequestModal';

export default function AboutPage() {
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
            if (e.key === 'Escape' && isModalOpen) setIsModalOpen(false);
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

    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className={styles.page}>
            {/* Герой секция - УПРОЩЕННАЯ */}
            <section className={`${styles.hero} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.heroContent}>
                        <h1 className={`${styles.heroTitle} ${isLoading ? styles.loading : ''}`}>
                            О НАС
                        </h1>
                        <p className={`${styles.heroDescription} ${isLoading ? styles.loading : ''}`}>
                            Группа компаний «АйТиСМ» — ваш надежный партнер в области автоматизации бизнеса и систем безопасности
                        </p>
                    </div>
                </div>
            </section>

            {/* Секция "Автоматизация бизнеса" - ИСПРАВЛЕНА */}
            <section className={`${styles.section} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                            АВТОМАТИЗАЦИЯ БИЗНЕС-ПРОЦЕССОВ
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Программное обеспечение и франчайзинг продуктов 1С
                        </p>
                    </div>

                    <div className={styles.automationContent}>
                        <div className={styles.automationMain}>
                            <p className={styles.automationText}>
                                Группа компаний «АйТиСМ» готовы предложить Вам комплексные профессиональные
                                решения в области автоматизации бизнес-процессов
                            </p>

                            {/* Первый блок - Программное обеспечение */}
                            <div className={styles.automationBlock}>
                                <div className={styles.blockContent}>
                                    <h3 className={styles.blockTitle}>Программное обеспечение 1С</h3>
                                    <div className={styles.blockItems}>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Автоматизация предприятий и организаций на базе программного комплекса 1С – поставка, внедрение и сопровождение</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Отчетность через интернет и электронно-цифровая подпись</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Поставка программного обеспечения и средств защиты данных</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Второй блок - Преимущества */}
                            <div className={styles.automationBlock}>
                                <div className={styles.blockContent}>
                                    <h3 className={styles.blockTitle}>Наши преимущества в автоматизации</h3>
                                    <div className={styles.blockItems}>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Решения для предприятий любого масштаба и всех отраслей</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Консультирование и подбор оптимальной системы</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Техническая поддержка</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Идеальное решение для бухгалтерии</span>
                                        </div>
                                        <div className={styles.blockItem}>
                                            <Icon name="check" size={20} className={styles.blockIcon} />
                                            <span>• Безопасность базы данных</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className={styles.automationSidebar}>
                            <div className={styles.consultationCard}>
                                <h3 className={styles.consultationTitle}>Нужна консультация?</h3>
                                <p className={styles.consultationText}>
                                    Подберём оптимальное решение для автоматизации вашего бизнеса
                                </p>
                                <button className={styles.consultationButton} onClick={openModal}>
                                    ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция "Системы безопасности" */}
            <section className={`${styles.sectionDark} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                            СИСТЕМЫ БЕЗОПАСНОСТИ И ИТ-ИНФРАСТРУКТУРА
                        </h2>
                        <p className={styles.sectionSubtitle}>
                            Комплексные решения для построения систем безопасности и инфраструктуры инженерных систем
                        </p>
                    </div>

                    <div className={styles.securityContent}>
                        <p className={styles.securityIntro}>
                            Группа компаний «АйТиСМ» готовы предложить Вам комплексные профессиональные
                            решения в области автоматизации бизнес-процессов, в построении систем
                            безопасности и инфраструктуры инженерных систем.
                        </p>

                        <div className={styles.securityGrid}>
                            <div className={styles.securityColumn}>
                                <h3 className={styles.securityColumnTitle}>Основные направления:</h3>
                                <ul className={styles.securityList}>
                                    <li>Проектирование, монтаж и обслуживание систем видеонаблюдения</li>
                                    <li>Системы контроля управления доступом (турникеты, шлагбаумы, ограждения)</li>
                                    <li>Металлодетекторы, антикражное оборудование, домофоны</li>
                                    <li>Системы охранно-пожарной сигнализации и оповещения</li>
                                    <li>Телекоммуникационные сети любой сложности (ЛВС, СКС, ВОЛС, Wi-Fi)</li>
                                    <li>Сети электроснабжения</li>
                                </ul>
                            </div>

                            <div className={styles.securityColumn}>
                                <h3 className={styles.securityColumnTitle}>Дополнительные услуги:</h3>
                                <ul className={styles.securityList}>
                                    <li>Огнезащита конструкций (металлических, железобетонных и деревянных)</li>
                                    <li>Технический аудит существующих сетей</li>
                                    <li>Монтаж и пуско-наладочные работы технологического оборудования</li>
                                    <li>Комплексная телефонизация объектов любого уровня</li>
                                    <li>Техническая поддержка персональных компьютеров и серверов</li>
                                    <li>Поставка телекоммуникационного оборудования</li>
                                    <li>Электронные очереди и сенсорные информационные терминалы</li>
                                    <li>Бегущие LED строки, медиэкраны и комплектующие</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция "Преимущества работы с нами" - ИСПРАВЛЕНЫ ЦЕНТРОВКИ */}
            <section className={`${styles.section} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`${styles.sectionTitle} ${isLoading ? styles.loading : ''}`}>
                            ПРЕИМУЩЕСТВА РАБОТЫ С НАМИ
                        </h2>
                    </div>

                    <div className={styles.advantagesGrid}>
                        <div className={`${styles.advantageCard} ${isLoading ? styles.loading : ''}`}>
                            <div className={styles.advantageCardInner}>
                                <div className={styles.advantageIconWrapper}>
                                    <Icon name="phone" size={48} className={styles.advantageIcon} />
                                </div>
                                <h3 className={styles.advantageTitle}>ПРОФЕССИОНАЛЬНО</h3>
                                <p className={styles.advantageDescription}>
                                    Профессиональная техническая поддержка
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.advantageCard} ${isLoading ? styles.loading : ''}`}>
                            <div className={styles.advantageCardInner}>
                                <div className={styles.advantageIconWrapper}>
                                    <Icon name="gift" size={48} className={styles.advantageIcon} />
                                </div>
                                <h3 className={styles.advantageTitle}>ВЫГОДНО</h3>
                                <p className={styles.advantageDescription}>
                                    Накапливайте и расплачивайтесь бонусами
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.advantageCard} ${isLoading ? styles.loading : ''}`}>
                            <div className={styles.advantageCardInner}>
                                <div className={styles.advantageIconWrapper}>
                                    <Icon name="credit-card" size={48} className={styles.advantageIcon} />
                                </div>
                                <h3 className={styles.advantageTitle}>УДОБНО</h3>
                                <p className={styles.advantageDescription}>
                                    Различные способы оплаты
                                </p>
                            </div>
                        </div>

                        <div className={`${styles.advantageCard} ${isLoading ? styles.loading : ''}`}>
                            <div className={styles.advantageCardInner}>
                                <div className={styles.advantageIconWrapper}>
                                    <Icon name="delivery" size={48} className={styles.advantageIcon} />
                                </div>
                                <h3 className={styles.advantageTitle}>ДОСТУПНО</h3>
                                <p className={styles.advantageDescription}>
                                    Доставка во все регионы России
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция "Принципы нашей работы" */}
            <section className={`${styles.principlesSection} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <div className={styles.sectionHeader}>
                        <h2 className={`${styles.principlesTitle} ${isLoading ? styles.loading : ''}`}>
                            ПРИНЦИПЫ НАШЕЙ РАБОТЫ
                        </h2>
                    </div>

                    <div className={styles.principlesContent}>
                        <div className={styles.principlesList}>
                            <div className={styles.principleItem}>
                                <div className={styles.principleNumber}>01</div>
                                <div className={styles.principleContent}>
                                    <h3 className={styles.principleTitle}>Установка систем любой сложности</h3>
                                    <p className={styles.principleDescription}>
                                        Мы берёмся за проекты любой сложности и масштаба, обеспечивая качественный результат
                                    </p>
                                </div>
                            </div>

                            <div className={styles.principleItem}>
                                <div className={styles.principleNumber}>02</div>
                                <div className={styles.principleContent}>
                                    <h3 className={styles.principleTitle}>Надёжность</h3>
                                    <p className={styles.principleDescription}>
                                        Этот критерий один из самых важных в нашей работе. Мы используем только проверенное оборудование
                                    </p>
                                </div>
                            </div>

                            <div className={styles.principleItem}>
                                <div className={styles.principleNumber}>03</div>
                                <div className={styles.principleContent}>
                                    <h3 className={styles.principleTitle}>Сроки</h3>
                                    <p className={styles.principleDescription}>
                                        Быстрота исполнения работ и услуг при сохранении высочайшего качества
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Секция помощи */}
            <section className={`${styles.helpSection} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <h2 className={`${styles.helpTitle} ${isLoading ? styles.loading : ''}`}>
                        ГОТОВЫ НАЧАТЬ СОТРУДНИЧЕСТВО?
                    </h2>

                    <div className={styles.helpBlock}>
                        <p className={`${styles.helpText} ${isLoading ? styles.loading : ''}`}>
                            Мы готовы предложить оптимальное решение для вашего бизнеса, грамотно проконсультировать
                        </p>

                        <div className={styles.contacts}>
                            <div className={`${styles.contactItem} ${isLoading ? styles.loading : ''}`}>
                                <h3>ОПЕРАТИВНОЕ РЕШЕНИЕ ПО ТЕЛЕФОНУ:</h3>
                                <a href="tel:+73912749074" className={styles.phone}>
                                    ☎ +7 (391) 274-90-74
                                </a>
                                <p className={styles.hours}>Звоните с 9:00 до 18:00</p>
                            </div>

                            <div className={`${styles.contactItem} ${isLoading ? styles.loading : ''}`}>
                                <h3>ЭЛЕКТРОННАЯ ПОЧТА:</h3>
                                <a href="mailto:sale@itsm24.ru" className={styles.email}>
                                    ✉ Отправьте заявку на sale@itsm24.ru для расчета
                                </a>
                            </div>
                        </div>

                        <button className={`${styles.consultBtn} ${isLoading ? styles.loading : ''}`} onClick={openModal}>
                            ОСТАВИТЬ ЗАЯВКУ
                        </button>
                    </div>
                </div>
            </section>

            {/* Модальное окно */}
            <RequestModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}