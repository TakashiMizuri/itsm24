'use client';

import { useEffect, useState } from 'react';
import styles from './page.module.css';
import RequestModal from '@/components/RequestModal';

export default function OhranSignPage() {
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
                    ОХРАННАЯ СИСТЕМА
                </h1>
                <p className={`${styles.subtitle} ${isLoading ? styles.loading : ''}`}>
                    УСТАНОВКА ОХРАННОЙ СИГНАЛИЗАЦИИ В КРАСНОЯРСКЕ И БЛИЖАЙШИХ ГОРОДАХ ОТ КОМПАНИИ «АйТиСМ»
                </p>
            </div>

            {/* Основной контент */}
            <div className={`${styles.content} ${isLoading ? styles.loading : ''}`}>
                {/* Секция услуг */}
                <div className={`${styles.servicesSection} ${isLoading ? styles.loading : ''}`}>
                    <h3 className={`${styles.servicesTitle} ${isLoading ? styles.loading : ''}`}>
                        Этапы процесса монтажа:
                    </h3>
                    
                    <div className={styles.servicesList}>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            1. Диагностика объекта, изучение прилегающей территории, составление плана необходимых работ
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            2. Монтаж оборудования
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            3. Настройка оснащения, проведение тестов
                        </p>
                        <p className={`${styles.serviceItem} ${isLoading ? styles.loading : ''}`}>
                            4. Инструктаж клиента по эксплуатации оборудования
                        </p>
                    </div>
                </div>

                {/* Дополнительный текст */}
                <div className={`${styles.text} ${isLoading ? styles.loading : ''}`}>
                    Монтаж - дело тонкое. Успех каждого этапа зависит от того, насколько качественно выполнен предыдущий.
                    <br />
                    <br />
                    Поэтому главная рекомендация - никаких любителей. Команда должна быть профессиональной
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
                            <h3>ОПТИМАЛЬНОЕ СООТНОШЕНИЕ ЦЕНА - КАЧЕСТВО</h3>
                            <p>ПРЕДОСТАВЛЯЕМ КАЧЕСТВЕННОЕ ОБОРУДОВАНИЕ ПО ДОСТУПНЫМ ЦЕНАМ</p>
                        </div>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>ПОЛНЫЙ ЦИКЛ РАБОТ</h3>
                            <p>ОТ ПРОЕКТИРОВАНИЯ ДО СДАЧИ ОБЪЕКТА ПОД КЛЮЧ</p>
                        </div>
                        <div className={`${styles.whyItem} ${isLoading ? styles.loading : ''}`}>
                            <h3>ОПЕРАТИВНЫЙ ВЫЕЗД</h3>
                            <p>БЫСТРЫЙ ВЫЕЗД СПЕЦИАЛИСТОВ НА ОБЪЕКТ В КРАСНОЯРСКЕ</p>
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