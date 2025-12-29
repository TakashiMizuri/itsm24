'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import RequestModal from '@/components/RequestModal';

export default function KontrolDostupaPage() {
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
            {/* Заголовок */}
            <div className={`${styles.hero} ${isLoading ? styles.loading : ''}`}>
                <h1 className={`${styles.title} ${isLoading ? styles.loading : ''}`}>
                    КОНТРОЛЬ ДОСТУПА
                </h1>
                <p className={`${styles.subtitle} ${isLoading ? styles.loading : ''}`}>
                    КОМПАНИЯ «АйТиСМ» ПРЕДЛАГАЕТ ПРОФЕССИОНАЛЬНЫЕ УСЛУГИ ПО ПРОЕКТИРОВАНИЮ, МОНТАЖУ
                    И НАСТРОЙКЕ СИСТЕМ КОНТРОЛЯ ДОСТУПА В Г. КРАСНОЯРСКЕ И БЛИЖАЙШИХ ГОРОДАХ
                </p>
            </div>

            {/* Основной контент */}
            <div className={`${styles.content} ${isLoading ? styles.loading : ''}`}>
                {/* Текст описания */}
                <div className={`${styles.text} ${isLoading ? styles.loading : ''}`}>
                    Система контроля и управления доступом – что это такое? 
                    <br /><br />
                    СКУД (система контроля и управления доступом) – это совокупность технических средств, направленных на контроль входа и выхода в помещение с целью обеспечения безопасности и регулирования посещения определённого объекта.
                    <br /><br />
                    С помощью системы идентификации (карта, брелок, отпечатки, универсальный код и т.д.), программа индивидуально для каждого рассчитывает его график работы, время прихода и ухода, время, потраченное на перерывы и обед.
                </div>

                {/* Секция услуг - Главные задачи */}
                <div className={`${styles.servicesSection} ${isLoading ? styles.loading : ''}`}>
                    <h3 className={`${styles.servicesTitle} ${isLoading ? styles.loading : ''}`}>
                        Главными задачами систем контроля являются:
                    </h3>
                    
                    <div className={styles.servicesList}>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            • Наложение ограничений на вход
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            • Допуск в помещение определённому кругу лиц
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            • Контроль рабочего дня
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            • Обеспечение безопасности
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            • Расчет зарплаты, при интеграции с бухгалтерской системой
                        </p>
                    </div>
                </div>

                {/* Дополнительный текст */}
                <div className={`${styles.text} ${isLoading ? styles.loading : ''}`}>
                    Если вы хотите создать эффективную систему безопасности на Вашем объекте, без монтажа контроля доступа вам просто не обойтись!
                </div>
            </div>

            {/* Секция "Почему мы?" */}
            <div className={`${styles.whySection} ${isLoading ? styles.loading : ''}`}>
                <h2 className={`${styles.whyTitle} ${isLoading ? styles.loading : ''}`}>
                    ПОЧЕМУ МЫ?
                </h2>

                <div className={styles.whyBlock}>
                    <div className={styles.whyItems}>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>СЕРТИФИЦИРОВАННЫЕ СПЕЦИАЛИСТЫ</h3>
                            <p>ИМЕЕМ ВСЕ НЕОБХОДИМЫЕ ДОПУСКИ И РАЗРЕШЕНИЯ</p>
                        </div>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>ПОЛНЫЙ КОМПЛЕКС УСЛУГ</h3>
                            <p>ОТ ПРОЕКТИРОВАНИЯ ДО НАСТРОЙКИ ПОД КЛЮЧ</p>
                        </div>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>ИНТЕГРАЦИЯ С ДРУГИМИ СИСТЕМАМИ</h3>
                            <p>ВОЗМОЖНОСТЬ ИНТЕГРАЦИИ С БУХГАЛТЕРСКИМИ И УЧЕТНЫМИ СИСТЕМАМИ</p>
                        </div>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>СОВРЕМЕННОЕ ОБОРУДОВАНИЕ</h3>
                            <p>РАБОТАЕМ С ПРОВЕРЕННЫМИ ПОСТАВЩИКАМИ КАЧЕСТВЕННОГО ОБОРУДОВАНИЯ</p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Секция помощи */}
            <div className={`${styles.helpSection} ${isLoading ? styles.loading : ''}`}>
                <h2 className={`${styles.helpTitle} ${isLoading ? styles.loading : ''}`}>
                    НУЖНА ПОМОЩЬ?
                </h2>

                <div className={styles.helpBlock}>
                    <p className={`${styles.helpText} ${isLoading ? styles.loading : ''}`}>
                        Мы готовы найти решение вашей задачи, грамотно проконсультировать
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
                        ПОЛУЧИТЬ КОНСУЛЬТАЦИЮ
                    </button>
                </div>
            </div>

            {/* Модальное окно */}
            <RequestModal isOpen={isModalOpen} onClose={closeModal} />
        </div>
    );
}