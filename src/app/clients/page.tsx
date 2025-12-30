'use client';

import React from 'react';
import Carousel, { CarouselImage } from '../../components/Carousel';
import styles from './page.module.css';

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

export default function Clients() {
    return (
        <div className={styles.page}>
            <section className={styles.carouselSection}>
                <div className={styles.container}>
                    <h1 className={styles.carouselTitle}>Наши клиенты</h1>
                    <Carousel images={carouselImages} itemsToShow={4} allowModal={false} itemWidth="260px" itemHeight="180px" />
                </div>
            </section>
        </div>
    );
}