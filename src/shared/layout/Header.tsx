import Link from "next/link";
import { Icon } from "@/shared";
import { Logo } from "@/shared/Logo";
import styles from "./Header.module.css";
import { HeaderClientNavigation } from "./HeaderClientNavigation";
import { navigation } from "./Header.constants";
import { Typography } from "../Typography";

export function Header() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <nav className={styles.nav} aria-label="Navigation principale">
          {navigation.map((item) => (
            <Link className={styles.link} href={item.href} key={item.href}>
              <Typography variant="navLink">{item.label}</Typography>
            </Link>
          ))}
        </nav>

        <Logo />

        <div className={styles.actions}>
          <Link className={styles.addLink} href="/add-anounce">
            <Typography variant="navLink" color="primary">
              +Ajouter un logement
            </Typography>
          </Link>
          <Link
            className={styles.iconLink}
            href="/favorites"
            aria-label="Favorites"
          >
            <Icon name="favoris" />
          </Link>
          <span className={styles.separator} aria-hidden="true" />
          <HeaderClientNavigation variant="desktop" />
        </div>

        <HeaderClientNavigation variant="mobile" />
      </div>
    </header>
  );
}
