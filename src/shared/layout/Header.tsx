"use client";

import { useState } from "react";
import Link from "next/link";
import { Icon, Button } from "@/shared";
import { Logo } from "@/shared/Logo";
import styles from "./Header.module.css";
import { Typography } from "../Typography";

const navigation = [
  { href: "/", label: "Accueil" },
  { href: "/a-propos", label: "A propos" },
];

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const closeMenu = () => setIsMenuOpen(false);

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
          <Link className={styles.addLink} href="/logements/nouveau">
            <Typography variant="navLink" color="primary">
              +Ajouter un logement
            </Typography>
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
          aria-label={isMenuOpen ? "Fermer le menu" : "Ouvrir le menu"}
          aria-expanded={isMenuOpen}
          aria-controls="mobile-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          <Icon
            name={isMenuOpen ? "close" : "menu"}
            size="40px"
            color="black"
          />
        </button>

        <nav
          id="mobile-navigation"
          className={styles.mobileMenu}
          aria-label="Navigation mobile"
          hidden={!isMenuOpen}
        >
          {navigation.map((item) => (
            <Link
              className={styles.mobileLink}
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              <Typography variant="mobileLink">{item.label}</Typography>
            </Link>
          ))}
          <Link
            className={styles.mobileLink}
            href="/messages"
            onClick={closeMenu}
          >
            <Typography variant="mobileLink">Messagerie</Typography>
          </Link>
          <Link
            className={styles.mobileLink}
            href="/favoris"
            onClick={closeMenu}
          >
            <Typography variant="mobileLink">Favoris</Typography>
          </Link>
          <Button className={styles.mobileAddLink} onClick={() => {}}>
            Ajouter un logement
          </Button>
        </nav>
      </div>
    </header>
  );
}
