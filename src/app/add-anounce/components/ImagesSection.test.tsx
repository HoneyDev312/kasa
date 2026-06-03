import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { ImagesSection } from "./ImagesSection";

describe("ImagesSection", () => {
  it("affiche les champs image et leurs boutons d'ajout", () => {
    render(<ImagesSection />);

    expect(screen.getByLabelText("Image de couverture")).toHaveAttribute(
      "name",
      "images",
    );
    expect(screen.getByLabelText("Image du logement")).toHaveAttribute(
      "name",
      "images",
    );
    expect(
      screen.getByRole("button", { name: "Ajouter Image de couverture" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ajouter Image du logement" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ajouter une image" }),
    ).toBeInTheDocument();
  });
});
