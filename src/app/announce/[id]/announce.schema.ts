import type { PropertyDetails } from "@/features/properties";
import { SITE_BASE_URL } from "@/lib/config";
import type { JsonLinkedDataValue } from "@/shared/JsonLinkedData";

const siteUrl = SITE_BASE_URL.replace(/\/$/, "");

/**
 * Génère les données structurées schema.org d'une fiche logement.
 * Le JSON-LD décrit le logement, son prix, ses équipements, son hôte et le fil
 * d'Ariane pour aider les moteurs de recherche à comprendre la page.
 */
export function getPropertyJsonLinkedData(
  property: PropertyDetails,
  pictures: string[]
): JsonLinkedDataValue {
  const pageUrl = `${siteUrl}/announce/${property.id}`;
  // Schema.org attend des URLs absolues pour les images.
  const imageUrls = pictures.map((picture) => getAbsoluteUrl(picture));

  return {
    // Vocabulaire utilisé pour interpréter les propriétés suivantes.
    "@context": "https://schema.org",
    // Liste des objets schema.org décrits sur cette page.
    "@graph": [
      {
        // Aide les moteurs de recherche à comprendre la position de la page.
        "@type": "BreadcrumbList",
        // Liste ordonnée des étapes du fil d'Ariane.
        itemListElement: [
          {
            // Élément individuel du fil d'Ariane.
            "@type": "ListItem",
            // Première position du fil d'Ariane.
            position: 1,
            // Libellé affiché pour la page d'accueil.
            name: "Accueil",
            // URL de la page d'accueil.
            item: siteUrl,
          },
          {
            // Élément individuel du fil d'Ariane.
            "@type": "ListItem",
            // Deuxième position du fil d'Ariane.
            position: 2,
            // Libellé de la page courante, ici le titre du logement.
            name: property.title,
            // URL canonique de la fiche logement.
            item: pageUrl,
          },
        ],
      },
      {
        // Décrit le logement affiché sur la page d'annonce.
        "@type": "Accommodation",
        // Identifiant unique du logement dans les données structurées.
        "@id": `${pageUrl}#accommodation`,
        // Nom du logement.
        name: property.title,
        // Description textuelle du logement.
        description: property.description,
        // URL publique de la fiche logement.
        url: pageUrl,
        // Images du logement.
        image: imageUrls,
        // Adresse simplifiée du logement quand la localisation existe.
        address: property.location
          ? {
              // Type schema.org utilisé pour représenter une adresse.
              "@type": "PostalAddress",
              // Ville ou zone affichée pour le logement.
              addressLocality: property.location,
              // Pays du logement.
              addressCountry: "FR",
            }
          : undefined,
        // Liste des équipements disponibles dans le logement.
        amenityFeature: property.equipments.map((equipment) => ({
          // Type schema.org utilisé pour représenter un équipement.
          "@type": "LocationFeatureSpecification",
          // Nom de l'équipement.
          name: equipment,
          // Indique que l'équipement est disponible.
          value: true,
        })),
        // Hôte du logement quand l'information existe.
        provider: property.host?.name
          ? {
              // L'hôte est rattaché au logement quand l'information existe.
              // Type schema.org utilisé pour représenter une personne.
              "@type": "Person",
              // Nom de l'hôte.
              name: property.host.name,
              // Photo de l'hôte quand elle existe.
              image: property.host.picture
                ? getAbsoluteUrl(property.host.picture)
                : undefined,
            }
          : undefined,
        // Note moyenne du logement quand les données de notation existent.
        aggregateRating:
          property.rating_avg && property.ratings_count
            ? {
                // La note moyenne est incluse uniquement si elle est exploitable.
                // Type schema.org utilisé pour représenter une note moyenne.
                "@type": "AggregateRating",
                // Valeur moyenne de la note.
                ratingValue: property.rating_avg,
                // Nombre d'avis ou de notes reçus.
                reviewCount: property.ratings_count,
                // Note maximale possible.
                bestRating: 5,
                // Note minimale possible.
                worstRating: 1,
              }
            : undefined,
        // Offre commerciale associée au logement quand le prix existe.
        offers: property.price_per_night
          ? {
              // L'offre précise le prix affiché pour une nuit.
              // Type schema.org utilisé pour représenter une offre.
              "@type": "Offer",
              // Prix par nuit.
              price: property.price_per_night,
              // Devise du prix.
              priceCurrency: "EUR",
              // Indique que le logement est présenté comme disponible.
              availability: "https://schema.org/InStock",
              // URL de l'offre, ici la fiche logement.
              url: pageUrl,
            }
          : undefined,
      },
    ],
  };
}

function getAbsoluteUrl(url: string) {
  return new URL(url, siteUrl).toString();
}
