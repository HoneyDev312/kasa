import { describe, expect, it } from "vitest";
import { getModalCloseHref } from "./messages.helpers";

describe("getModalCloseHref", () => {
  it("retourne la page d'accueil quand from est absent", () => {
    expect(getModalCloseHref({})).toBe("/");
  });

  it("retourne le chemin interne fourni dans from", () => {
    expect(getModalCloseHref({ from: "/favorites" })).toBe("/favorites");
  });

  it("utilise la premiere valeur quand from est un tableau", () => {
    expect(getModalCloseHref({ from: ["/about", "/favorites"] })).toBe(
      "/about"
    );
  });

  it("retourne la page d'accueil quand from est une URL externe", () => {
    expect(getModalCloseHref({ from: "https://example.com" })).toBe("/");
  });

  it("retourne la page d'accueil quand from commence par deux slashs", () => {
    expect(getModalCloseHref({ from: "//example.com" })).toBe("/");
  });
});
