'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import styles from './page.module.css';

const carouselImages = [
    {
        id: 1,
        src: '/partner_activecam.png',
        alt: 'ActiveCam',
    },
    {
        id: 2,
        src: '/partner_axis.png',
        alt: 'Axis',
    },
    {
        id: 3,
        src: '/partner_dahua.png',
        alt: 'Dahua',
    },
    {
        id: 4,
        src: '/partner_d-link.png',
        alt: 'D-Link',
    },
    {
        id: 5,
        src: '/partner_hikvision.png',
        alt: 'Hikvision',
    },
    {
        id: 6,
        src: '/partner_hiwatch.png',
        alt: 'HiWatch',
    },
    {
        id: 7,
        src: '/partner_huawei.png',
        alt: 'Huawei',
    },
    {
        id: 8,
        src: '/partner_tp-link.png',
        alt: 'TP-Link',
    },
    {
        id: 9,
        src: '/partner_trassir.png',
        alt: 'Trassir',
    },
    {
        id: 10,
        src: '/partner_vivotek.png',
        alt: 'Vivotek',
    },
    {
        id: 11,
        src: '/partner_wisenet.png',
        alt: 'Wisenet',
    },
    {
        id: 12,
        src: '/partner_yealink.png',
        alt: 'Yealink',
    },
    {
        id: 13,
        src: '/partner_zyxel.png',
        alt: 'Zyxel',
    }
];

export default function Partners() {
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
                    <h1 className={styles.carouselTitle}>Работаем при поддержке партнеров</h1>
                    
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