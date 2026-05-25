import Image from "next/image";
import { Typography } from "@/shared";
import styles from "./HomeBanner.module.css";

export function HomeBanner() {
  return (
    <section className={styles.hero} aria-labelledby="home-title">
      <Typography as="h1" className={styles.title} id="home-title">
        Chez vous, partout et ailleurs
      </Typography>
      <Typography className={styles.intro} variant="regular">
        Avec Kasa, vivez des séjours uniques dans des hébergements chaleureux,
        sélectionnés avec soin par nos hôtes.
      </Typography>

      <div className={styles.imageWrapper}>
        <Image
          src="/images/home.jpg"
          alt="Maison contemporaine au milieu des dunes"
          fill
          priority
          sizes="(max-width: 47.5rem) calc(100vw - 2rem), 69.6875rem"
        />
      </div>
    </section>
  );
}
