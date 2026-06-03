import styles from "./PropertyInfoSection.module.css";
import { Typography } from "@/shared";

export function PropertyInfoSection() {
  return (
    <section className={styles.panel} aria-labelledby="property-section">
      <Typography as="h2" className="visually-hidden" id="property-section">
        Informations du logement
      </Typography>

      <div className={styles.field}>
        <Typography as="label" htmlFor="title" variant="label">
          Titre de la propriété
        </Typography>
        <input
          className={styles.input}
          id="title"
          name="title"
          placeholder="Ex : Appartement cosy au coeur de paris"
          type="text"
        />
      </div>

      <div className={styles.field}>
        <Typography as="label" htmlFor="description" variant="label">
          Description
        </Typography>
        <textarea
          className={styles.textarea}
          id="description"
          name="description"
          placeholder="Décrivez votre propriété en détail..."
          rows={5}
        />
      </div>

      <div className={styles.field}>
        <Typography as="label" htmlFor="postal-code" variant="label">
          Code postal
        </Typography>
        <input
          className={styles.input}
          id="postal-code"
          inputMode="numeric"
          name="postal-code"
          type="text"
        />
      </div>

      <div className={styles.field}>
        <Typography as="label" htmlFor="location" variant="label">
          Localisation
        </Typography>
        <input
          className={styles.input}
          id="location"
          name="location"
          type="text"
        />
      </div>
    </section>
  );
}
