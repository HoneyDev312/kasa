import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { categories } from "./addAnounceForm.constants";
import { CategoriesSection } from "./CategoriesSection";

describe("CategoriesSection", () => {
  it("affiche le titre, les categories et le champ personnalise", () => {
    render(<CategoriesSection />);

    expect(
      screen.getByRole("heading", { name: "Catégories" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(categories.length);
    expect(screen.getAllByLabelText("Parc")).toHaveLength(3);
    expect(screen.getByLabelText("Vue sur mer")).toHaveAttribute(
      "name",
      "categories",
    );
    expect(
      screen.getByLabelText("Ajouter une catégorie personnalisée"),
    ).toHaveAttribute("placeholder", "Nouveau tag");
  });

  it("affiche les boutons d'ajout de categorie", () => {
    render(<CategoriesSection />);

    expect(
      screen.getByRole("button", {
        name: "Ajouter la catégorie personnalisée",
      }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ajouter un tag" }),
    ).toBeInTheDocument();
  });
});
