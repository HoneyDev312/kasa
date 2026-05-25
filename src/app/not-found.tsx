import { Link } from "@/shared";
import styles from "./not-found.module.css";

export default function NotFound() {
  return (
    <section className={styles.container}>
      <p className={styles.code}>404</p>
      <div className={styles.content}>
        <h1 className={styles.title}>Page introuvable</h1>
        <p className={styles.description}>
          Oups, la page que vous recherchez n&apos;existe pas.
        </p>
      </div>
      <Link href="/">Retourner a l&apos;accueil</Link>
    </section>
  );
}
