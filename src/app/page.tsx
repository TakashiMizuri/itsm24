'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        const timer = setTimeout(() => {
            setIsLoading(false);
        }, 0);

        return () => clearTimeout(timer);
    }, []);

    return (
        <div className={styles.page}>
            {/* Главный раздел с двумя основными направлениями */}
            <main
                className={`${styles.container} ${isLoading ? styles.loading : ''}`}
            >
                {/* Левая секция - Системы безопасности */}
                <Link
                    href='/itsm-security'
                    className={`${styles.section} ${styles.securitySection}`}
                >
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionHeaderContainer}>
                            <h1 className={styles.sectionTitle}>
                                Системы безопасности и видеонаблюдения
                            </h1>
                            <p className={styles.sectionDescription}>
                                Полный комплекс услуг по проектированию и установке систем
                                безопасности
                            </p>
                        </div>
                        <span className={styles.linkText}>Подробнее →</span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src='/security-bg.jpg'
                            alt='Системы безопасности и видеонаблюдения'
                            fill
                            className={`${styles.bgImage} ${isLoading ? styles.loading : ''}`}
                            priority
                        />
                        <div className={styles.overlay}></div>
                    </div>
                </Link>

                {/* Правая секция - 1С продукты */}
                <Link
                    href='/itsm-1c'
                    className={`${styles.section} ${styles.oneCSection}`}
                >
                    <div className={styles.sectionContent}>
                        <div className={styles.sectionHeaderContainer}>
                            <h1 className={styles.sectionTitle}>1С продукты</h1>
                            <p className={styles.sectionDescription}>
                                Внедрение, сопровождение и автоматизация бизнес-процессов
                            </p>
                        </div>
                        <span className={styles.linkText}>Подробнее →</span>
                    </div>
                    <div className={styles.imageWrapper}>
                        <Image
                            src='/1c-bg.png'
                            alt='1С продукты'
                            fill
                            className={`${styles.bgImage} ${isLoading ? styles.loading : ''}`}
                            priority
                        />
                        <div className={styles.overlay}></div>
                    </div>
                </Link>
            </main>


            {/* Дополнительная секция - О компании */}
            <section
                className={`${styles.companyInfo} ${isLoading ? styles.loading : ''}`}
            >
                <div className={styles.companyContainer}>
                    <div className={styles.companyContent}>
                        <h2 className={styles.companyTitle}>ООО «АйТиСМ»</h2>
                        <p className={styles.companyDescription}>
                            Профессиональные решения в области систем безопасности и
                            автоматизации бизнес-процессов. Более 5 лет на рынке Красноярска и
                            края.
                        </p>
                        <div className={styles.companyStats}>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>5+</span>
                                <span className={styles.statLabel}>лет опыта</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>500+</span>
                                <span className={styles.statLabel}>проектов</span>
                            </div>
                            <div className={styles.statItem}>
                                <span className={styles.statNumber}>24/7</span>
                                <span className={styles.statLabel}>поддержка</span>
                            </div>
                        </div>
                        <Link
                            href='/about'
                            className={styles.companyLink}
                        >
                            Узнать больше о компании →
                        </Link>
                    </div>
                    <div className={styles.companyLogo}>
                        <Image
                            src='/koleso_ishodnik_1.png'
                            alt='Логотип ООО «АйТиСМ»'
                            width={200}
                            height={226}
                            className={styles.companyLogoImage}
                        />
                    </div>
                </div>
            </section>
        </div>
    );
}
