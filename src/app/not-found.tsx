import { Link, Typography } from "@/shared";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <Typography color="primary" variant="code" weight="bold">
        404
      </Typography>
      <div className={styles.content}>
        <Typography as="h1" variant="h1">
          Page introuvable
        </Typography>
        <Typography color="dark" variant="regular">
          Oups, la page que vous recherchez n&apos;existe pas.
        </Typography>
      </div>
      <Link href="/">Retourner a l&apos;accueil</Link>
    </section>
  );
}
