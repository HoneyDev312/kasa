import styles from "./HostSection.module.css";
import { PlusIconButton, Typography } from "@/shared";

export function HostSection() {
  return (
    <section className={styles.panel} aria-labelledby="host-section">
      <div className={styles.field}>
        <Typography as="label" htmlFor="host-name" variant="label">
          Nom de l&apos;hôte
        </Typography>
        <input
          className={styles.input}
          id="host-name"
          name="host-name"
          type="text"
        />
      </div>

      <div className={styles.field}>
        <Typography as="label" htmlFor="host-picture" variant="label">
          Photo de profil
        </Typography>
        <div className={styles.inputRow}>
          <input
            className={styles.input}
            id="host-picture"
            name="host-picture"
            type="text"
          />
          <PlusIconButton
            className={styles.addButton}
            label="Ajouter la photo de profil"
          />
        </div>
      </div>

      <button className={styles.textButton} type="button">
        Ajouter une image
      </button>
    </section>
  );
}
