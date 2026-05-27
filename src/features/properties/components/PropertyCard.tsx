import Image from "next/image";
import NextLink from "next/link";
import { Typography } from "@/shared";
import type { PropertySummary } from "../properties.types";
import { FavoriteToggle } from "./FavoriteToggle";
import styles from "./PropertyCard.module.css";

type PropertyCardProps = {
  className?: string;
  isFavorite?: boolean;
  property: PropertySummary;
};

export function PropertyCard({
  className = "",
  isFavorite = false,
  property,
}: PropertyCardProps) {
  const href = `/announce/${property.id}`;
  const cover = property.cover ?? "/brand/logo.svg";
  const price = property.price_per_night ?? 0;
  const classNames = [styles.card, className].filter(Boolean).join(" ");

  return (
    <article className={classNames}>
      <NextLink className={styles.link} href={href} aria-label={property.title}>
        <div className={styles.media}>
          <Image
            className={styles.image}
            src={cover}
            alt=""
            fill
            sizes="(max-width: 760px) 100vw, 22rem"
          />
        </div>

        <div className={styles.content}>
          <Typography as="h3" variant="h3">
            {property.title}
          </Typography>

          {property.location ? (
            <Typography
              className={styles.location}
              variant="regular"
              color="gray"
            >
              {property.location}
            </Typography>
          ) : null}

          <Typography className={styles.price} variant="regular" color="gray">
            <strong>{price}€</strong> par nuit
          </Typography>
        </div>
      </NextLink>

      <FavoriteToggle isFavorite={isFavorite} propertyId={property.id} />
    </article>
  );
}
