import { categories } from "./addAnounceForm.constants";
import styles from "./CategoriesSection.module.css";
import { PlusIconButton, Typography } from "@/shared";

export function CategoriesSection() {
  return (
    <section className={styles.panel} aria-labelledby="category-section">
      <Typography
        as="h2"
        className={styles.panelTitle}
        id="category-section"
        variant="regular"
        weight="bold"
      >
        Catégories
      </Typography>

      <div className={styles.tags}>
        {categories.map((category, index) => (
          <label className={styles.tag} key={`${category}-${index}`}>
            <input name="categories" type="checkbox" value={category} />
            <Typography as="span" variant="regular">
              {category}
            </Typography>
          </label>
        ))}
      </div>

      <div className={styles.customTag}>
        <div className={styles.field}>
          <Typography as="label" htmlFor="custom-tag" variant="label">
            Ajouter une catégorie personnalisée
          </Typography>
          <input
            className={styles.input}
            id="custom-tag"
            name="custom-tag"
            placeholder="Nouveau tag"
            type="text"
          />
        </div>
        <PlusIconButton
          className={styles.addButton}
          label="Ajouter la catégorie personnalisée"
        />
      </div>

      <button className={styles.textButton} type="button">
        Ajouter un tag
      </button>
    </section>
  );
}
