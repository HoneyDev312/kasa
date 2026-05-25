import NextLink from "next/link";
import { Button, Typography } from "@/shared";
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

        <form className={styles.form}>
          <div className={styles.field}>
            <Typography as="label" htmlFor="email" variant="label">
              Adresse email
            </Typography>
            <input
              className={styles.input}
              id="email"
              name="email"
              type="email"
              autoComplete="email"
            />
          </div>

          <div className={styles.field}>
            <Typography as="label" htmlFor="password" variant="label">
              Mot de passe
            </Typography>
            <input
              className={styles.input}
              id="password"
              name="password"
              type="password"
              autoComplete="current-password"
            />
          </div>

          <Button className={styles.submitButton} type="submit">
            Se connecter
          </Button>
        </form>

        <div className={styles.footerLinks}>
          <NextLink href="/login">
            <Typography variant="regular" color="primary">
              Mot de passe oublie
            </Typography>
          </NextLink>
        </div>

        <Typography
          className={styles.registerText}
          variant="regular"
          color="primary"
        >
          Pas encore de compte ?{" "}
          <NextLink className={styles.inlineLink} href="/register">
            Inscrivez-vous
          </NextLink>
        </Typography>
      </div>
    </section>
  );
}
