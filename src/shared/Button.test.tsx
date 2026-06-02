import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { Button } from "./Button";

// `describe` regroupe les tests qui concernent le même composant.
describe("Button", () => {
  // `it` décrit un comportement attendu du composant.
  it("affiche son libelle et appelle onClick au clic", () => {
    // Arrange: on prépare une fausse fonction pour vérifier le clic.
    const handleClick = vi.fn();

    // render: on affiche le composant dans un DOM de test.
    render(<Button onClick={handleClick}>Se connecter</Button>);

    // On récupère le bouton comme un utilisateur ou un lecteur d'écran le verrait.
    const button = screen.getByRole("button", { name: "Se connecter" });

    // expect: le bouton est bien présent et son type par défaut est correct.
    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");

    // fireEvent: on simule un clic utilisateur.
    fireEvent.click(button);

    // expect: la fonction passée à `onClick` a bien été appelée une seule fois.
    expect(handleClick).toHaveBeenCalledTimes(1);
  });

  it("utilise le type fourni", () => {
    render(<Button type="submit">Ajouter</Button>);

    expect(screen.getByRole("button", { name: "Ajouter" })).toHaveAttribute(
      "type",
      "submit",
    );
  });
});
