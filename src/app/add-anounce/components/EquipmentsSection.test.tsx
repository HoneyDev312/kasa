import { render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { equipments } from "./addAnounceForm.constants";
import { EquipmentsSection } from "./EquipmentsSection";

describe("EquipmentsSection", () => {
  it("affiche le titre et toutes les options d'equipements", () => {
    render(<EquipmentsSection />);

    expect(
      screen.getByRole("heading", { name: "Équipements" }),
    ).toBeInTheDocument();
    expect(screen.getAllByRole("checkbox")).toHaveLength(equipments.length);
    expect(screen.getByLabelText("Wifi")).toHaveAttribute("value", "Wifi");
    expect(screen.getByLabelText("Vue Parc")).toHaveAttribute(
      "name",
      "equipments",
    );
  });
});
