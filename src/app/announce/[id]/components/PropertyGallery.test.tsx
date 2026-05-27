import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import { PropertyGallery } from "./PropertyGallery";

const pictures = ["/photo-1.jpg", "/photo-2.jpg", "/photo-3.jpg"];
const title = "Appartement cosy";

describe("PropertyGallery", () => {
  it("affiche la premiere photo au chargement", () => {
    render(<PropertyGallery pictures={pictures} title={title} />);

    expect(screen.getByAltText(title)).toHaveAttribute(
      "src",
      expect.stringContaining("photo-1.jpg")
    );
    expect(screen.getByText("1 / 3")).toBeInTheDocument();
  });

  it("affiche la photo suivante au clic sur le bouton suivant", () => {
    render(<PropertyGallery pictures={pictures} title={title} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Afficher la photo suivante" })
    );

    expect(screen.getByAltText(title)).toHaveAttribute(
      "src",
      expect.stringContaining("photo-2.jpg")
    );
    expect(screen.getByText("2 / 3")).toBeInTheDocument();
  });

  it("revient a la derniere photo depuis la premiere avec le bouton precedent", () => {
    render(<PropertyGallery pictures={pictures} title={title} />);

    fireEvent.click(
      screen.getByRole("button", { name: "Afficher la photo précédente" })
    );

    expect(screen.getByAltText(title)).toHaveAttribute(
      "src",
      expect.stringContaining("photo-3.jpg")
    );
    expect(screen.getByText("3 / 3")).toBeInTheDocument();
  });

  it("affiche la photo choisie au clic sur une miniature", () => {
    render(<PropertyGallery pictures={pictures} title={title} />);

    fireEvent.click(screen.getByRole("button", { name: "Afficher la photo 3" }));

    expect(screen.getByAltText(title)).toHaveAttribute(
      "src",
      expect.stringContaining("photo-3.jpg")
    );
    expect(screen.getByRole("button", { name: "Afficher la photo 3" })).toHaveAttribute(
      "data-active",
      "true"
    );
  });

  it("n'affiche pas les controles quand il n'y a qu'une seule photo", () => {
    render(<PropertyGallery pictures={["/photo-1.jpg"]} title={title} />);

    expect(
      screen.queryByRole("button", { name: "Afficher la photo suivante" })
    ).not.toBeInTheDocument();
    expect(screen.queryByText("1 / 1")).not.toBeInTheDocument();
  });
});
