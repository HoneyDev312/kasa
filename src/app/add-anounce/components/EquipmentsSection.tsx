import { equipments } from "./addAnounceForm.constants";
import styles from "./EquipmentsSection.module.css";
import { Typography } from "@/shared";

export function EquipmentsSection() {
  return (
    <section className={styles.panel} aria-labelledby="equipment-section">
      <Typography
        as="h2"
        className={styles.panelTitle}
        id="equipment-section"
        variant="regular"
        weight="bold"
      >
        Équipements
      </Typography>

      <div className={styles.checkboxGrid}>
        {equipments.map((equipment) => (
          <label className={styles.checkbox} key={equipment}>
            <input name="equipments" type="checkbox" value={equipment} />
            <Typography as="span" variant="medium">
              {equipment}
            </Typography>
          </label>
        ))}
      </div>
    </section>
  );
}
