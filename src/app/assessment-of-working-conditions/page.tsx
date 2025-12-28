'use client';

import { useState, useEffect } from 'react';
import styles from './page.module.css';

const serviceCards = [
    {
        id: 1,
        title: 'Перечень мероприятий СОУТ',
        bgImage: '/sout-bg1.png',
        pdfUrl: '/documents/perechen_meropriyatij_sout.pdf'
    },
    {
        id: 2,
        title: 'Сводная ведомость результатов СОУТ',
        bgImage: '/sout-bg2.png',
        pdfUrl: '/documents/svodnaya_vedomost_rezultatov_sout.pdf'
    },
    {
        id: 3,
        title: 'Приказ о завершении СОУТ',
        bgImage: '/sout-bg3.png',
        pdfUrl: '/documents/prikaz_o_zavershenii_sout.pdf'
    }
];

export default function AssessmentOfWorkingConditions() {
    const [isLoading, setIsLoading] = useState(true);

    // Загрузка состояния
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    // Функция для открытия PDF
    const openPdf = (pdfUrl: string) => {
        window.open(pdfUrl, '_blank', 'noopener,noreferrer');
    };

    return (
        <div className={styles.page}>
            {/* Секция с карточками услуг */}
            <section className={`${styles.servicesSection} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <h1 className={styles.sectionTitle}>Специальная оценка условий труда</h1>

                    <div className={styles.cardsContainer}>
                        {serviceCards.map((card, index) => (
                            <div
                                key={card.id}
                                className={styles.serviceCard}
                                style={{
                                    animationDelay: `${index * 0.1}s`,
                                    backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url(${card.bgImage})`
                                }}
                                onClick={() => openPdf(card.pdfUrl)}
                                role="button"
                                tabIndex={0}
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' || e.key === ' ') {
                                        openPdf(card.pdfUrl);
                                    }
                                }}
                            >
                                <div className={styles.cardContent}>
                                    <h3 className={styles.cardTitle}>{card.title}</h3>
                                </div>

                                <div className={styles.cardFooter}>
                                    <button className={styles.pdfButton}>
                                        <span>Открыть PDF</span>
                                        <svg
                                            width="20"
                                            height="20"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                        >
                                            <path d="M14 5l7 7m0 0l-7 7m7-7H3" />
                                        </svg>
                                    </button>
                                </div>

                                <div className={styles.cardOverlay}></div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}