import { getProperties, PropertyCard } from "@/features/properties";
import { HomeBanner, HowItWorks } from "./components";
import styles from "./page.module.css";

export default async function Home() {
  const properties = await getProperties();

  return (
    <div className={styles.page}>
      <HomeBanner />

      <section className={styles.properties} aria-label="Logements disponibles">
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </section>

      <HowItWorks />
    </div>
  );
}
