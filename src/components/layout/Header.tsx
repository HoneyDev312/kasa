import Link from "next/link";
import { Button } from "@/components/shared/Button";
import { Logo } from "@/components/shared/Logo";
import styles from "./Header.module.css";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={`container ${styles.inner}`}>
        <nav className={styles.nav} aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link className={styles.link} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Logo />

        <div className={styles.actions}>
          <Button href="/logements/nouveau" variant="ghost">
            Ajouter un logement
          </Button>
          <Link className={styles.link} href="/connexion">
            Se connecter
          </Link>
        </div>

        <button className={styles.menuButton} type="button" aria-label="Ouvrir le menu">
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
