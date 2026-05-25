import { LoginForm } from "@/features/auth";
import { Typography } from "@/shared";
import styles from "./page.module.css";

export default function Login() {
  return (
    <section className={styles.container}>
      <div className={styles.panel}>
        <div className={styles.header}>
          <Typography as="h1" variant="h1">
            Heureux de vous revoir
          </Typography>
          <Typography variant="regular">
            Connectez-vous pour retrouver vos reservations, vos annonces et tout
            ce qui rend vos sejours uniques.
          </Typography>
        </div>

        <LoginForm />
      </div>
    </section>
  );
}
