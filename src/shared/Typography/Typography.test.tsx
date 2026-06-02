import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Typography } from "./Typography";

describe("Typography", () => {
  it("rend un paragraphe par defaut", () => {
    render(<Typography>Bienvenue</Typography>);

    expect(screen.getByText("Bienvenue").tagName).toBe("P");
  });

  it("rend l'element demande", () => {
    render(
      <Typography as="h1" variant="h1">
        Kasa
      </Typography>,
    );

    expect(screen.getByRole("heading", { level: 1, name: "Kasa" })).toBeInTheDocument();
  });

  it("transmet les attributs HTML", () => {
    render(
      <Typography as="label" htmlFor="title" variant="label">
        Titre
      </Typography>,
    );

    expect(screen.getByText("Titre")).toHaveAttribute("for", "title");
  });
});
