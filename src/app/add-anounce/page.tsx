import styles from "../page.module.css";
import { Typography } from "@/shared";

export default function AddAnounce() {
  return (
    <section className={styles.container}>
      <Typography as="h1" variant="h1">
        Ajouter une annonce
      </Typography>
    </section>
  );
}
