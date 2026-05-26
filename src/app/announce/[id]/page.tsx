import NextLink from "next/link";
import { getPropertyOrNotFound } from "./announce.helpers";
import { HostCard, PropertyDetails, PropertyGallery } from "./components";
import styles from "./page.module.css";

type AnnouncePageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AnnouncePage({ params }: AnnouncePageProps) {
  const { id } = await params;
  const property = await getPropertyOrNotFound(id);
  const pictures = property.pictures.length
    ? property.pictures
    : property.cover
      ? [property.cover]
      : [];

  return (
    <article className={styles.page}>
      <NextLink className={styles.backLink} href="/">
        ← Retour aux annonces
      </NextLink>

      <div className={styles.contentLayout}>
        <div className={styles.galleryArea}>
          <PropertyGallery pictures={pictures} title={property.title} />
        </div>

        <div className={styles.hostArea}>
          <HostCard host={property.host} rating={property.rating_avg} />
        </div>

        <div className={styles.detailsArea}>
          <PropertyDetails property={property} />
        </div>
      </div>
    </article>
  );
}
