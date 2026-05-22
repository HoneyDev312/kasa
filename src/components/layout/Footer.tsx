import { Logo } from "@/components/shared/Logo";
import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <Logo variant="mark" />
        <p>&copy; 2025 Kasa. All rights reserved</p>
      </div>
    </footer>
  );
}
