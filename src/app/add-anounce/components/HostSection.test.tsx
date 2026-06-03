import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { HostSection } from "./HostSection";

describe("HostSection", () => {
  it("affiche les champs de l'hote et le bouton de photo", () => {
    render(<HostSection />);

    expect(screen.getByLabelText("Nom de l'hôte")).toHaveAttribute(
      "name",
      "host-name",
    );
    expect(screen.getByLabelText("Photo de profil")).toHaveAttribute(
      "name",
      "host-picture",
    );
    expect(
      screen.getByRole("button", { name: "Ajouter la photo de profil" }),
    ).toBeInTheDocument();
    expect(
      screen.getByRole("button", { name: "Ajouter une image" }),
    ).toBeInTheDocument();
  });
});
