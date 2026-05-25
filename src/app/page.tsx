import { getProperties, PropertyCard } from "@/features/properties";
import styles from "./page.module.css";

export default async function Home() {
  const properties = await getProperties();

  return (
    <section className={styles.container}>
      <h1 className="visually-hidden">Logements disponibles</h1>
      <div className={styles.grid}>
        {properties.map((property) => (
          <PropertyCard property={property} key={property.id} />
        ))}
      </div>
    </section>
  );
}
