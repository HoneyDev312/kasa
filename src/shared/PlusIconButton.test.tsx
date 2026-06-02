import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it, vi } from "vitest";
import { PlusIconButton } from "./PlusIconButton";

describe("PlusIconButton", () => {
  it("expose un nom accessible et utilise le type button par defaut", () => {
    render(<PlusIconButton label="Ajouter une image" />);

    const button = screen.getByRole("button", { name: "Ajouter une image" });

    expect(button).toBeInTheDocument();
    expect(button).toHaveAttribute("type", "button");
  });

  it("appelle onClick au clic", () => {
    const handleClick = vi.fn();

    render(
      <PlusIconButton label="Ajouter une categorie" onClick={handleClick} />,
    );

    fireEvent.click(
      screen.getByRole("button", { name: "Ajouter une categorie" }),
    );

    expect(handleClick).toHaveBeenCalledTimes(1);
  });
});
