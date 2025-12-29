'use client';

import { useEffect } from 'react';
import Icon from './Icon';
import styles from './RequestModal.module.css';
import Script from 'next/script';

interface RequestModalProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function RequestModal({ isOpen, onClose }: RequestModalProps) {
    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'Escape') onClose();
        };

        if (isOpen) {
            document.addEventListener('keydown', handleKeyDown);
            document.body.style.overflow = 'hidden';
        }

        return () => {
            document.removeEventListener('keydown', handleKeyDown);
            document.body.style.overflow = '';
        };
    }, [isOpen, onClose]);

    const handleOverlayClick = (e: React.MouseEvent) => {
        if (e.target === e.currentTarget) onClose();
    };

    if (!isOpen) return null;

    return (
        <div
            className={styles.modalOverlay}
            onClick={handleOverlayClick}
        >
            <div
                className={styles.modal}
                role='dialog'
                aria-modal='true'
            >
                <Script
                    src="https://forms.yandex.ru/_static/embed.js"
                    strategy="lazyOnload"
                />
                <button
                    className={styles.closeButton}
                    onClick={onClose}
                    aria-label='Закрыть'
                >
                    <svg
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                        stroke="currentColor"
                    >
                        <path
                            d="M18 6L6 18M6 6L18 18"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        />
                    </svg>
                </button>

                <div className={styles.modalHeader}>
                    <h2 className={styles.modalTitle}>Заказать звонок</h2>
                    <p className={styles.modalSubtitle}>
                        Оставьте свои контакты, и мы свяжемся с вами в ближайшее время
                    </p>
                </div>

                <iframe 
                    src="https://forms.yandex.ru/u/692909121f1eb5f3c1ef1b7e?iframe=1" 
                    frameBorder={0} 
                    name="ya-form-692909121f1eb5f3c1ef1b7e" 
                    width="100%" 
                    height={584}
                    title="Форма заказа звонка"
                    className={styles.iframe}
                />
            </div>
        </div>
    );
}