import Link from "next/link";
import { Icon } from "@/shared";
import { Logo } from "@/shared/Logo";
import styles from "./Header.module.css";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
];

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.inner}>
        <nav className={styles.nav} aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link className={styles.link} href={item.href} key={item.href}>
              {item.label}
            </Link>
          ))}
        </nav>

        <Logo />

        <div className={styles.actions}>
          <Link className={styles.addLink} href="/logements/nouveau">
            +Ajouter un logement
          </Link>
          <Link
            className={styles.iconLink}
            href="/favoris"
            aria-label="Favoris"
          >
            <Icon name="favoris" />
          </Link>
          <span className={styles.separator} aria-hidden="true" />
          <Link
            className={styles.messageLink}
            href="/messages"
            aria-label="Messages"
          >
            <Icon name="message" />
          </Link>
        </div>

        <button
          className={styles.menuButton}
          type="button"
          aria-label="Ouvrir le menu"
        >
          <span className={styles.menuIcon} aria-hidden="true" />
        </button>
      </div>
    </header>
  );
}
