import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PropertyInfoSection } from "./PropertyInfoSection";

describe("PropertyInfoSection", () => {
  it("affiche les champs principaux du logement", () => {
    render(<PropertyInfoSection />);

    expect(screen.getByLabelText("Titre de la propriété")).toHaveAttribute(
      "name",
      "title",
    );
    expect(screen.getByLabelText("Description")).toHaveAttribute(
      "name",
      "description",
    );
    expect(screen.getByLabelText("Code postal")).toHaveAttribute(
      "inputmode",
      "numeric",
    );
    expect(screen.getByLabelText("Localisation")).toHaveAttribute(
      "name",
      "location",
    );
  });

  it("affiche les textes d'aide attendus", () => {
    render(<PropertyInfoSection />);

    expect(
      screen.getByPlaceholderText("Ex : Appartement cosy au coeur de paris"),
    ).toBeInTheDocument();
    expect(
      screen.getByPlaceholderText("Décrivez votre propriété en détail..."),
    ).toBeInTheDocument();
  });
});
