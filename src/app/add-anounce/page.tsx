import styles from "./page.module.css";
import {
  CategoriesSection,
  EquipmentsSection,
  HostSection,
  ImagesSection,
  PropertyInfoSection,
} from "./components";
import { BackLink, Button, Typography } from "@/shared";

export default function AddAnounce() {
  return (
    <section className={styles.page} aria-labelledby="add-property-title">
      <BackLink href="/" size="small">
        Retour
      </BackLink>

      <form className={styles.form}>
        <header className={styles.header}>
          <Typography
            as="h1"
            id="add-property-title"
            variant="h2"
            weight="semibold"
          >
            Ajouter une propriété
          </Typography>
          <Button className={styles.submitButton} type="submit">
            Ajouter
          </Button>
        </header>

        <div className={styles.grid}>
          <PropertyInfoSection />

          <div className={styles.stack}>
            <ImagesSection />
            <HostSection />
          </div>

          <EquipmentsSection />
          <CategoriesSection />
        </div>
      </form>
    </section>
  );
}
