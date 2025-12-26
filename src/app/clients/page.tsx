'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const carouselImages = [
    {
        id: 1,
        src: '/client_iskra.png',
        alt: 'Iskra',
    },
    {
        id: 2,
        src: '/client_vbh.png',
        alt: 'VBH',
    },
    {
        id: 3,
        src: '/client_ses.png',
        alt: 'SES',
    },
    {
        id: 4,
        src: '/client_kia.png',
        alt: 'Kia',
    },
    {
        id: 5,
        src: '/client_lada.png',
        alt: 'Lada',
    },
    {
        id: 6,
        src: '/client_uzhd.png',
        alt: 'Uzhd',
    },
    {
        id: 7,
        src: '/client_promet.png',
        alt: 'Promet',
    },
    {
        id: 8,
        src: '/client_segal.png',
        alt: 'Segal',
    },
    {
        id: 9,
        src: '/client_reno.png',
        alt: 'Reno',
    }
];

export default function Clients() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isLoading, setIsLoading] = useState(true);
    const itemsToShow = 4; // Количество отображаемых элементов
    const totalItems = carouselImages.length;

    // Автоматическая прокрутка
    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => 
                prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
            );
        }, 3000); // Смена каждые 3 секунды

        return () => clearInterval(interval);
    }, [totalItems, itemsToShow]);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
        );
    }, [totalItems, itemsToShow]);

    const prevSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => 
            prevIndex === 0 ? totalItems - itemsToShow : prevIndex - 1
        );
    }, [totalItems, itemsToShow]);

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Вычисляем видимые элементы
    const visibleItems = [];
    for (let i = 0; i < itemsToShow; i++) {
        const itemIndex = (currentIndex + i) % totalItems;
        visibleItems.push(carouselImages[itemIndex]);
    }

    // Вычисляем количество точек
    const dotsCount = totalItems - itemsToShow + 1;

    return (
        <div className={styles.page}>
            {/* Секция с каруселью */}
            <section className={`${styles.carouselSection} ${isLoading ? styles.loading : ''}`}>
                <div className={styles.container}>
                    <h1 className={styles.carouselTitle}>Наши клиенты</h1>
                    
                    <div className={styles.carouselContainer}>
                        {/* Кнопка назад */}
                        <button 
                            className={`${styles.carouselButton} ${styles.prevButton}`}
                            onClick={prevSlide}
                            aria-label="Предыдущий слайд"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>

                        {/* Контейнер с видимыми элементами */}
                        <div className={styles.carouselTrack}>
                            {visibleItems.map((item, index) => (
                                <div 
                                    key={item.id} 
                                    className={styles.carouselItem}
                                >
                                    <div className={styles.imageContainer}>
                                        <div className={styles.imageWrapper}>
                                            <Image
                                                src={item.src}
                                                alt={item.alt}
                                                width={170}
                                                height={85}
                                                className={styles.carouselImage}
                                                priority={index === 0}
                                            />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Кнопка вперед */}
                        <button 
                            className={`${styles.carouselButton} ${styles.nextButton}`}
                            onClick={nextSlide}
                            aria-label="Следующий слайд"
                        >
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg>
                        </button>
                    </div>

                    {/* Индикаторы (точки) */}
                    <div className={styles.carouselDots}>
                        {Array.from({ length: dotsCount }).map((_, index) => (
                            <button
                                key={index}
                                className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`}
                                onClick={() => goToSlide(index)}
                                aria-label={`Перейти к слайду ${index + 1}`}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    );
}