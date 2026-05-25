type SearchParams = {
  from?: string | string[];
};

export function getModalCloseHref(searchParams: SearchParams) {
  // Next peut exposer les query params répétés sous forme de tableau.
  // On garde seulement la première valeur pour fermer vers une seule route.
  const from = Array.isArray(searchParams.from)
    ? searchParams.from[0]
    : searchParams.from;

  // On accepte seulement les chemins internes comme "/about".
  // Cela évite une redirection externe si ?from= est modifié à la main.
  if (!from || !from.startsWith("/") || from.startsWith("//")) {
    return "/";
  }

  return from;
}
