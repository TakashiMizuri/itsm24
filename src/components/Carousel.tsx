'use client';

import React, { useCallback, useEffect, useState } from 'react';
import styles from './Carousel.module.css';
import ExportedImage from 'next-image-export-optimizer';

export type CarouselImage = { id: number | string; src: string; alt?: string; };

type Props = {
    images: CarouselImage[];
    itemsToShow?: number;
    allowModal?: boolean;
    /** CSS sizes, e.g. '375px' or '24rem' */
    itemWidth?: string;
    itemHeight?: string;
};

export default function Carousel({ images, itemsToShow = 3, allowModal = true, itemWidth, itemHeight }: Props) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [modalIndex, setModalIndex] = useState<number | null>(null);
    const totalItems = images.length;

    // Используем CSSProperties с кастомными свойствами
    const rootStyle: React.CSSProperties & {
        '--carousel-item-width'?: string;
        '--carousel-item-height'?: string;
    } = {};

    if (itemWidth) rootStyle['--carousel-item-width'] = itemWidth;
    if (itemHeight) rootStyle['--carousel-item-height'] = itemHeight;

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) =>
                prevIndex === totalItems - itemsToShow ? 0 : prevIndex + 1
            );
        }, 3000);
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

    const openModal = (index: number) => {
        setModalIndex(index);
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
        setModalIndex(null);
    };

    const modalNext = () => {
        if (modalIndex === null) return;
        setModalIndex((modalIndex + 1) % totalItems);
    };

    const modalPrev = () => {
        if (modalIndex === null) return;
        setModalIndex((modalIndex - 1 + totalItems) % totalItems);
    };

    useEffect(() => {
        if (!allowModal) return;
        const onKey = (e: KeyboardEvent) => {
            if (!isModalOpen) return;
            if (e.key === 'Escape') closeModal();
            if (e.key === 'ArrowRight') modalNext();
            if (e.key === 'ArrowLeft') modalPrev();
        };
        document.addEventListener('keydown', onKey);
        return () => document.removeEventListener('keydown', onKey);
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [isModalOpen, modalIndex, allowModal]);

    const visibleItems = [] as CarouselImage[];
    for (let i = 0; i < itemsToShow; i++) {
        const itemIndex = (currentIndex + i) % totalItems;
        visibleItems.push(images[itemIndex]);
    }

    const dotsCount = totalItems - itemsToShow + 1;

    return (
        <div className={styles.carouselContainerRoot} style={rootStyle}>
            <div className={styles.carouselContainer}>
                <button className={`${styles.carouselButton} ${styles.prevButton}`} onClick={prevSlide} aria-label="Предыдущий слайд">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>

                <div className={styles.carouselTrack}>
                    {visibleItems.map((item, index) => (
                        <div key={item.id} className={styles.carouselItem}>
                            <div className={styles.imageContainer}>
                                {allowModal ? (
                                    <button
                                        className={styles.imageButton}
                                        onClick={() => openModal((currentIndex + index) % totalItems)}
                                        aria-label={`Открыть изображение ${item.alt ?? ''}`}
                                    >
                                        <div className={styles.imageWrapper}>
                                            <ExportedImage src={item.src} alt={item.alt ?? ''} width={1200} height={900} className={styles.carouselImage} priority={index === 0} />
                                        </div>
                                    </button>
                                ) : (
                                    <div className={styles.imageWrapper}>
                                        <ExportedImage src={item.src} alt={item.alt ?? ''} width={1200} height={900} className={styles.carouselImage} priority={index === 0} />
                                    </div>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                <button className={`${styles.carouselButton} ${styles.nextButton}`} onClick={nextSlide} aria-label="Следующий слайд">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                </button>
            </div>

            <div className={styles.carouselDots}>
                {Array.from({ length: Math.max(1, dotsCount) }).map((_, index) => (
                    <button key={index} className={`${styles.dot} ${index === currentIndex ? styles.activeDot : ''}`} onClick={() => goToSlide(index)} aria-label={`Перейти к слайду ${index + 1}`} />
                ))}
            </div>

            {allowModal && isModalOpen && modalIndex !== null && (
                <div className={styles.modalOverlay} role="dialog" aria-modal="true" onClick={closeModal}>
                    <div className={styles.modalContent} onClick={(e) => e.stopPropagation()}>
                        <button className={styles.modalClose} onClick={closeModal} aria-label="Закрыть">
                            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <button className={`${styles.modalNav} ${styles.modalPrev}`} onClick={modalPrev} aria-label="Предыдущее">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M15 18L9 12L15 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>

                        <div className={styles.modalImageWrapper}>
                            <ExportedImage src={images[modalIndex].src} alt={images[modalIndex].alt ?? ''} fill sizes="(max-width: 768px) 90vw, 1200px" style={{ objectFit: 'contain' }} priority />
                        </div>

                        <button className={`${styles.modalNav} ${styles.modalNext}`} onClick={modalNext} aria-label="Следующее">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden>
                                <path d="M9 18L15 12L9 6" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                            </svg>
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}