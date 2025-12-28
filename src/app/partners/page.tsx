"use client";

import React from "react";
import Carousel, { CarouselImage } from "../../components/Carousel";
import styles from "./page.module.css";

const carouselImages: CarouselImage[] = [
  { id: 1, src: "/partner_activecam.png", alt: "ActiveCam" },
  { id: 2, src: "/partner_axis.png", alt: "Axis" },
  { id: 3, src: "/partner_dahua.png", alt: "Dahua" },
  { id: 4, src: "/partner_d-link.png", alt: "D-Link" },
  { id: 5, src: "/partner_hikvision.png", alt: "Hikvision" },
  { id: 6, src: "/partner_hiwatch.png", alt: "HiWatch" },
  { id: 7, src: "/partner_huawei.png", alt: "Huawei" },
  { id: 8, src: "/partner_tp-link.png", alt: "TP-Link" },
  { id: 9, src: "/partner_trassir.png", alt: "Trassir" },
  { id: 10, src: "/partner_vivotek.png", alt: "Vivotek" },
  { id: 11, src: "/partner_wisenet.png", alt: "Wisenet" },
  { id: 12, src: "/partner_yealink.png", alt: "Yealink" },
  { id: 13, src: "/partner_zyxel.png", alt: "Zyxel" },
];

export default function Partners() {
  return (
    <div className={styles.page}>
      <section className={styles.carouselSection}>
        <div className={styles.container}>
          <h1 className={styles.carouselTitle}>Работаем при поддержке партнеров</h1>
          <Carousel images={carouselImages} itemsToShow={4} allowModal={false} itemWidth="260px" itemHeight="180px" />
        </div>
      </section>
    </div>
  );
}