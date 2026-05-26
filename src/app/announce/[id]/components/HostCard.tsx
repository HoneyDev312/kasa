import Image from "next/image";
import NextLink from "next/link";
import { Button, Typography } from "@/shared";
import type { PropertyHost } from "@/features/properties";
import styles from "./HostCard.module.css";

type HostCardProps = {
  host?: PropertyHost;
  rating?: number | null;
};

export function HostCard({ host, rating }: HostCardProps) {
  const hostName = host?.name ?? "Votre hôte";
  const hostPicture = host?.picture ?? "/brand/logo-home.svg";
  const roundedRating = Math.round(rating ?? 3);

  return (
    <aside className={styles.card} aria-labelledby="host-title">
      <Typography as="h2" className={styles.title} id="host-title">
        Votre hôte
      </Typography>

      <div className={styles.identity}>
        <div className={styles.picture}>
          <Image src={hostPicture} alt="" fill sizes="4rem" />
        </div>
        <Typography className={styles.name} variant="regular">
          {hostName}
        </Typography>
        <div className={styles.rating} aria-label={`Note ${roundedRating} sur 5`}>
          <span aria-hidden="true">★</span>
          <span>{roundedRating}</span>
        </div>
      </div>

      <div className={styles.actions}>
        <Button className={styles.button}>Contacter l&apos;hôte</Button>
        <NextLink className={styles.messageLink} href="/messages">
          <Typography variant="button">Envoyer un message</Typography>
        </NextLink>
      </div>
    </aside>
  );
}
