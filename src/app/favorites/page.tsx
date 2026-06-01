import { redirect } from "next/navigation";
import { getAuthUser } from "@/features/auth/auth.session";
import { PropertyCard } from "@/features/properties";
import { getFavoriteProperties } from "@/features/properties/properties.services";
import { Typography } from "@/shared";
import styles from "./page.module.css";

export default async function Favorites() {
  const user = await getAuthUser();

  if (!user) {
    redirect("/login");
  }

  const favoriteProperties = await getFavoriteProperties(user.id);

  return (
    <section className={styles.page} aria-labelledby="favorites-title">
      <header className={styles.header}>
        <Typography as="h1" id="favorites-title" variant="h1">
          Vos favoris
        </Typography>
        <Typography className={styles.intro} variant="regular">
          Retrouvez ici tous les logements que vous avez aimés.
          <br />
          Prêts à réserver ? Un simple clic et votre prochain séjour est en
          route.
        </Typography>
      </header>

      <div className={styles.grid}>
        {favoriteProperties.map((property) => (
          <PropertyCard isFavorite key={property.id} property={property} />
        ))}
      </div>
    </section>
  );
}
