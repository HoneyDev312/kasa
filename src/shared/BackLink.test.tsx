import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { BackLink } from "./BackLink";

describe("BackLink", () => {
  it("affiche le libelle par defaut et pointe vers la destination", () => {
    render(<BackLink href="/messages" />);

    const link = screen.getByRole("link", { name: "Retour" });

    expect(link).toBeInTheDocument();
    expect(link).toHaveAttribute("href", "/messages");
  });

  it("affiche un libelle personnalise", () => {
    render(<BackLink href="/">Retour aux annonces</BackLink>);

    expect(
      screen.getByRole("link", { name: "Retour aux annonces" }),
    ).toHaveAttribute("href", "/");
  });
});
