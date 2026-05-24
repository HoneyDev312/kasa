import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  variant?: "full" | "lite";
};

const logos = {
  full: {
    src: "/brand/logo.svg",
    width: 163,
    height: 58,
  },
  lite: {
    src: "/brand/logo-home.svg",
    width: 47,
    height: 54,
  },
};

export function Logo({ href = "/", variant = "full" }: LogoProps) {
  const logo = logos[variant];
  const mobileLogo = logos.lite;

  return (
    <Link
      className={[styles.logo, styles[variant], styles.responsive]
        .filter(Boolean)
        .join(" ")}
      href={href}
      aria-label="Kasa - accueil"
    >
      <Image
        className={`${styles.image} ${styles.desktopImage}`}
        src={logo.src}
        width={logo.width}
        height={logo.height}
        alt=""
        priority
      />

      <Image
        className={`${styles.image} ${styles.mobileImage}`}
        src={mobileLogo.src}
        width={mobileLogo.width}
        height={mobileLogo.height}
        alt=""
        priority
      />
    </Link>
  );
}
