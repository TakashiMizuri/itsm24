import Image from 'next/image';
import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.container}>
			{/* Левая секция - Системы безопасности */}
			<Link href="/itsm-security" className={`${styles.section} ${styles.securitySection}`}>
				<div className={styles.sectionContent}>
					<h1 className={styles.sectionTitle}>Системы безопасности</h1>
					<p className={styles.sectionDescription}>
						Полный комплекс услуг по проектированию и установке систем безопасности
					</p>
					<span className={styles.linkText}>Подробнее →</span>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						src="/security-bg.jpg"
						alt="Системы безопасности"
						fill
						className={styles.bgImage}
						priority
					/>
					<div className={styles.overlay}></div>
				</div>
			</Link>
			{/* Правая секция - 1С продукты */}
			<Link href="/itsm-1c" className={`${styles.section} ${styles.oneCSection}`}>
				<div className={styles.sectionContent}>
					<h1 className={styles.sectionTitle}>1С продукты</h1>
					<p className={styles.sectionDescription}>
						Внедрение, сопровождение и автоматизация бизнес-процессов
					</p>
					<span className={styles.linkText}>Подробнее →</span>
				</div>
				<div className={styles.imageWrapper}>
					<Image
						src="/1c-bg.png"
						alt="1С продукты"
						fill
						className={styles.bgImage}
						priority
					/>
					<div className={styles.overlay}></div>
				</div>
			</Link>
		</main>
	);
}