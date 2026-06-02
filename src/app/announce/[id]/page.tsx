import { getPropertyOrNotFound } from "./announce.helpers";
import { HostCard, PropertyDetails, PropertyGallery } from "./components";
import styles from "./page.module.css";
import { BackLink } from "@/shared";

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
      <BackLink className={styles.backLink} href="/">
        Retour aux annonces
      </BackLink>

      <div className={styles.contentLayout}>
        <div className={styles.galleryArea}>
          <PropertyGallery pictures={pictures} title={property.title} />
        </div>

        <div className={styles.hostArea}>
          <HostCard
            conversationId={id}
            host={property.host}
            messageFrom={`/announce/${id}`}
            rating={property.rating_avg}
          />
        </div>

        <div className={styles.detailsArea}>
          <PropertyDetails property={property} />
        </div>
      </div>
    </article>
  );
}
