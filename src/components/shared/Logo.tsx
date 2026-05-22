import Image from "next/image";
import Link from "next/link";
import styles from "./Logo.module.css";

type LogoProps = {
  href?: string;
  variant?: "full" | "mark";
};

const logos = {
  full: {
    src: "/brand/logo.svg",
    width: 163,
    height: 58,
  },
  mark: {
    src: "/brand/logo-home.svg",
    width: 47,
    height: 54,
  },
};

export function Logo({ href = "/", variant = "full" }: LogoProps) {
  const logo = logos[variant];

  return (
    <Link
      className={`${styles.logo} ${styles[variant]}`}
      href={href}
      aria-label="Kasa - accueil"
    >
      <Image
        className={styles.image}
        src={logo.src}
        alt=""
        width={logo.width}
        height={logo.height}
        priority
      />
    </Link>
  );
}
