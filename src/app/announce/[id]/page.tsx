import Image from "next/image";
import { notFound } from "next/navigation";
import { ApiError } from "@/lib/apiClient";
import { getPropertyById } from "@/features/properties";
import { Typography } from "@/shared";
import styles from "./page.module.css";

type AnnouncePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnnouncePage({ params }: AnnouncePageProps) {
  const { id } = await params;
  const property = await getProperty(id);
  const pictures = property.pictures.length
    ? property.pictures
    : property.cover
      ? [property.cover]
      : [];

  return (
    <article className={styles.page}>
      <div className={styles.gallery}>
        {pictures.map((picture, index) => (
          <div className={styles.picture} key={picture}>
            <Image
              src={picture}
              alt={index === 0 ? property.title : ""}
              fill
              priority={index === 0}
              sizes="(max-width: 47.5rem) calc(100vw - 2rem), 69.6875rem"
            />
          </div>
        ))}
      </div>

      <header className={styles.header}>
        <div>
          <Typography as="h1" className={styles.title}>
            {property.title}
          </Typography>

          {property.location ? (
            <Typography className={styles.location} variant="regular">
              {property.location}
            </Typography>
          ) : null}
        </div>

        <Typography className={styles.price} variant="regular">
          <strong>{property.price_per_night}€</strong> par nuit
        </Typography>
      </header>

      {property.tags.length ? (
        <ul className={styles.tags} aria-label="Caractéristiques du logement">
          {property.tags.map((tag) => (
            <li className={styles.tag} key={tag}>
              {tag}
            </li>
          ))}
        </ul>
      ) : null}

      {property.description ? (
        <section className={styles.section}>
          <Typography as="h2" className={styles.sectionTitle}>
            Description
          </Typography>
          <Typography className={styles.description} variant="regular">
            {property.description}
          </Typography>
        </section>
      ) : null}

      {property.equipments.length ? (
        <section className={styles.section}>
          <Typography as="h2" className={styles.sectionTitle}>
            Équipements
          </Typography>
          <ul className={styles.equipments}>
            {property.equipments.map((equipment) => (
              <li key={equipment}>{equipment}</li>
            ))}
          </ul>
        </section>
      ) : null}
    </article>
  );
}

async function getProperty(id: string) {
  try {
    return await getPropertyById(id);
  } catch (error) {
    if (error instanceof ApiError && error.status === 404) {
      notFound();
    }

    throw error;
  }
}
