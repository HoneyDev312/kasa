import styles from "./ImagesSection.module.css";
import { PlusIconButton, Typography } from "@/shared";

const imageFields = [
  {
    id: "cover-image",
    label: "Image de couverture",
  },
  {
    id: "property-image",
    label: "Image du logement",
  },
];

export function ImagesSection() {
  return (
    <section className={styles.panel} aria-labelledby="images-section">
      <Typography as="h2" className="visually-hidden" id="images-section">
        Images du logement
      </Typography>

      <div className={styles.imageFields}>
        {imageFields.map((field) => (
          <div className={styles.field} key={field.id}>
            <Typography as="label" htmlFor={field.id} variant="label">
              {field.label}
            </Typography>
            <div className={styles.inputRow}>
              <input
                className={styles.input}
                id={field.id}
                name="images"
                type="text"
              />
              <PlusIconButton
                className={styles.addButton}
                label={`Ajouter ${field.label}`}
              />
            </div>
          </div>
        ))}
      </div>

      <button className={styles.textButton} type="button">
        Ajouter une image
      </button>
    </section>
  );
}
