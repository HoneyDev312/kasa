import { SITE_BASE_URL } from "@/lib/config";
import type { JsonLinkedDataValue } from "@/shared/JsonLinkedData";

const siteUrl = SITE_BASE_URL.replace(/\/$/, "");

/**
 * Génère les données structurées globales du site.
 * Elles décrivent la marque Kasa et le site web dans un format compris par
 * les moteurs de recherche.
 */
export function getWebsiteJsonLinkedData(): JsonLinkedDataValue {
  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        // Identifie la marque Kasa auprès des moteurs de recherche.
        "@type": "Organization",
        "@id": `${siteUrl}/#organization`,
        name: "Kasa",
        url: siteUrl,
        logo: `${siteUrl}/brand/logo.svg`,
      },
      {
        // Décrit le site web et le relie à l'organisation Kasa.
        "@type": "WebSite",
        "@id": `${siteUrl}/#website`,
        name: "Kasa",
        url: siteUrl,
        publisher: {
          "@id": `${siteUrl}/#organization`,
        },
        inLanguage: "fr-FR",
      },
    ],
  };
}
