import { Icon, Typography } from "@/shared";
import type { PropertyDetails as PropertyDetailsType } from "@/features/properties";
import styles from "./PropertyDetails.module.css";

type PropertyDetailsProps = {
  property: PropertyDetailsType;
};

export function PropertyDetails({ property }: PropertyDetailsProps) {
  return (
    <section className={styles.details} aria-labelledby="property-title">
      <header>
        <Typography as="h1" className={styles.title} id="property-title">
          {property.title}
        </Typography>

        {property.location ? (
          <div className={styles.location}>
            <Icon name="localisation" color="grayDark" size="0.875rem" />
            <Typography variant="medium">{property.location}</Typography>
          </div>
        ) : null}
      </header>

      {property.description ? (
        <Typography className={styles.description} variant="regular">
          {property.description}
        </Typography>
      ) : null}

      {property.equipments.length ? (
        <div className={styles.group}>
          <Typography as="h2" className={styles.groupTitle}>
            Équipements
          </Typography>
          <ul className={styles.badges}>
            {property.equipments.map((equipment) => (
              <li className={styles.badge} key={equipment}>
                {equipment}
              </li>
            ))}
          </ul>
        </div>
      ) : null}

      {property.tags.length ? (
        <div className={styles.group}>
          <Typography as="h2" className={styles.groupTitle}>
            Catégorie
          </Typography>
          <ul className={styles.badges} aria-label="Catégories du logement">
            {property.tags.map((tag) => (
              <li className={styles.badge} key={tag}>
                {tag}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
