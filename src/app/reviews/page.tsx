"use client";

import React from "react";
import Carousel, { CarouselImage } from "../../components/Carousel";
import styles from "./page.module.css";

const carouselImages: CarouselImage[] = [
  { id: 1, src: "/review_2020-11-09_14-26-55_winscan_to_pdf.png", alt: "Отзыв 1" },
  { id: 2, src: "/review_doc00670120201008020330.png", alt: "Отзыв 2" },
  { id: 3, src: "/review_doc04141620180607152128-001.png", alt: "Отзыв 3" },
  { id: 4, src: "/review_rekomendaciya-1.png", alt: "Отзыв 4" },
  { id: 5, src: "/review_rekpismo_segal.png", alt: "Отзыв 5" },
  { id: 6, src: "/review_rekpismo_sialavto.png", alt: "Отзыв 6" },
  { id: 7, src: "/review_rekpismo_uzhdt.png", alt: "Отзыв 7" },
  { id: 8, src: "/review_segal.png", alt: "Отзыв 8" },
];

export default function Reviews() {
  return (
	<div className={styles.page}>
	  <section className={styles.carouselSection}>
		<div className={styles.container}>
		  <h1 className={styles.carouselTitle}>Что говорят заказчики о нашем сервисе</h1>
		  <Carousel images={carouselImages} itemsToShow={3} />
		</div>
	  </section>
	</div>
  );
}
