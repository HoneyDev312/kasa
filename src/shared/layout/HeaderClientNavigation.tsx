"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { MessagesLink } from "@/features/messages";
import { Icon, Link as ButtonLink } from "@/shared";
import styles from "./Header.module.css";
import { navigation } from "./Header.constants";
import { Typography } from "../Typography";

type HeaderClientNavigationProps = {
  variant: "desktop" | "mobile";
};

export function HeaderClientNavigation({
  variant,
}: HeaderClientNavigationProps) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const closeMenu = () => setIsMenuOpen(false);

  if (variant === "desktop") {
    return (
      <MessagesLink
        className={styles.messageLink}
        from={pathname}
        aria-label="Messages"
      >
        <Icon name="message" />
      </MessagesLink>
    );
  }

  return (
    <>
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
          size="2.5rem"
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
        <MessagesLink
          className={styles.mobileLink}
          from={pathname}
          onClick={closeMenu}
        >
          <Typography variant="mobileLink">Messagerie</Typography>
        </MessagesLink>
        <Link
          className={styles.mobileLink}
          href="/favorites"
          onClick={closeMenu}
        >
          <Typography variant="mobileLink">Favorites</Typography>
        </Link>
        <ButtonLink
          className={styles.mobileAddLink}
          href="/add-anounce"
          onClick={closeMenu}
        >
          Ajouter un logement
        </ButtonLink>
      </nav>
    </>
  );
}
