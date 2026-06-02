import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { Input } from "./Input";

describe("Input", () => {
  it("associe le label au champ", () => {
    render(<Input id="email" label="Adresse email" type="email" />);

    const input = screen.getByLabelText("Adresse email");

    expect(input).toBeInTheDocument();
    expect(input).toHaveAttribute("id", "email");
    expect(input).toHaveAttribute("type", "email");
  });

  it("transmet les attributs natifs au champ", () => {
    render(
      <Input
        id="city"
        label="Ville"
        name="city"
        placeholder="Paris"
        value="Lyon"
        readOnly
      />,
    );

    const input = screen.getByLabelText("Ville");

    expect(input).toHaveAttribute("name", "city");
    expect(input).toHaveAttribute("placeholder", "Paris");
    expect(input).toHaveValue("Lyon");
  });
});
