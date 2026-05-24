import { Logo } from "@/shared/Logo";
import styles from "./Footer.module.css";
import { Typography } from "../Typography";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.container}`}>
        <Logo variant="lite" />
        <Typography variant="medium">
          &copy; 2025 Kasa. All rights reserved
        </Typography>
      </div>
    </footer>
  );
}
