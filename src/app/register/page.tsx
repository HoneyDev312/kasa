import styles from "../page.module.css";
import { Typography } from "@/shared";

export default function Register() {
  return (
    <section className={styles.container}>
      <Typography as="h1" variant="h1">
        Inscription
      </Typography>
    </section>
  );
}
