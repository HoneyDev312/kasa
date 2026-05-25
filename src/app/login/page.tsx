import NextLink from "next/link";
import { Button, Input, Typography } from "@/shared";
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
          <Input
            id="email"
            label="Adresse email"
            name="email"
            type="email"
            autoComplete="email"
          />

          <Input
            id="password"
            label="Mot de passe"
            name="password"
            type="password"
            autoComplete="current-password"
          />

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
