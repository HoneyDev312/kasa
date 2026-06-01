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
        <Typography
          as="h1"
          id="property-title"
          variant="h1"
          weight="semibold"
        >
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
        <Typography variant="regular">
          {property.description}
        </Typography>
      ) : null}

      {property.equipments.length ? (
        <div className={styles.group}>
          <Typography as="h2" variant="regular" weight="bold">
            Équipements
          </Typography>
          <ul className={styles.badges}>
            {property.equipments.map((equipment) => (
              <Typography
                as="li"
                className={styles.badge}
                color="dark"
                key={equipment}
                variant="medium"
              >
                {equipment}
              </Typography>
            ))}
          </ul>
        </div>
      ) : null}

      {property.tags.length ? (
        <div className={styles.group}>
          <Typography as="h2" variant="regular" weight="bold">
            Catégorie
          </Typography>
          <ul className={styles.badges} aria-label="Catégories du logement">
            {property.tags.map((tag) => (
              <Typography
                as="li"
                className={styles.badge}
                color="dark"
                key={tag}
                variant="medium"
              >
                {tag}
              </Typography>
            ))}
          </ul>
        </div>
      ) : null}
    </section>
  );
}
