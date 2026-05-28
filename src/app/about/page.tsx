import Image from "next/image";
import { Typography } from "@/shared";
import styles from "./page.module.css";

export default function About() {
  return (
    <article className={styles.page}>
      <header className={styles.header}>
        <Typography as="h1" variant="h1">
          À propos
        </Typography>
        <Typography variant="regular">
          Chez Kasa, nous croyons que chaque voyage mérite un lieu unique où se
          sentir bien.
        </Typography>
        <Typography className={styles.intro} variant="regular">
          Depuis notre création, nous mettons en relation des voyageurs en quête
          d&apos;authenticité avec des hôtes passionnés qui aiment partager leur
          région et leurs bonnes adresses.
        </Typography>
      </header>

      <div className={styles.heroImage}>
        <Image
          src="/images/about-2.png"
          alt="Maison en bois au milieu des arbres"
          fill
          priority
          sizes="(max-width: 760px) calc(100vw - 32px), 68rem"
        />
      </div>

      <section className={styles.mission} aria-labelledby="about-mission">
        <div className={styles.copy}>
          <Typography
            as="h2"
            className={styles.subtitle}
            color="primary"
            id="about-mission"
            variant="h3"
            weight="bold"
          >
            Notre mission est simple :
          </Typography>
          <ol className={styles.list}>
            <Typography as="li" variant="regular">
              Offrir une plateforme fiable et simple d&apos;utilisation
            </Typography>
            <Typography as="li" variant="regular">
              Proposer des hébergements variés et de qualité
            </Typography>
            <Typography as="li" variant="regular">
              Favoriser des échanges humains et chaleureux entre hôtes et
              voyageurs
            </Typography>
          </ol>
          <Typography
            className={styles.statement}
            color="primary"
            variant="h3"
            weight="bold"
          >
            Que vous cherchiez un appartement cosy en centre-ville, une maison
            en bord de mer ou un chalet à la montagne, Kasa vous accompagne pour
            que chaque séjour devienne un souvenir inoubliable.
          </Typography>
        </div>

        <div className={styles.secondaryImage}>
          <Image
            src="/images/about-1.png"
            alt="Grande maison chaleureuse éclairée au coucher du soleil"
            fill
            sizes="(max-width: 760px) calc(100vw - 32px), 30rem"
          />
        </div>
      </section>
    </article>
  );
}
