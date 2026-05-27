import { getProperties, PropertyCard } from "@/features/properties";
import { getAuthUser } from "@/features/auth/auth.session";
import { getFavoriteProperties } from "@/features/properties/properties.services";
import { HomeBanner, HowItWorks } from "./components";
import styles from "./page.module.css";

export default async function Home() {
  const user = await getAuthUser();
  const [properties, favoriteProperties] = await Promise.all([
    getProperties(),
    user ? getFavoriteProperties(user.id) : Promise.resolve([]),
  ]);
  const favoritePropertyIds = new Set(
    favoriteProperties.map((property) => property.id)
  );

  return (
    <div className={styles.page}>
      <HomeBanner />

      <section className={styles.properties} aria-label="Logements disponibles">
        {properties.map((property) => (
          <PropertyCard
            isFavorite={favoritePropertyIds.has(property.id)}
            property={property}
            key={property.id}
          />
        ))}
      </section>

      <HowItWorks />
    </div>
  );
}
