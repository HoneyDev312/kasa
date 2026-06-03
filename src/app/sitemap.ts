import type { MetadataRoute } from "next";
import { getProperties } from "@/features/properties";
import { SITE_BASE_URL } from "@/lib/config";

const siteUrl = SITE_BASE_URL.replace(/\/$/, "");

// Routes publiques accessibles sans authentification et utiles pour le SEO.
const publicRoutes: MetadataRoute.Sitemap = [
  {
    url: siteUrl,
    changeFrequency: "daily",
    priority: 1,
  },
  {
    url: `${siteUrl}/about`,
    changeFrequency: "monthly",
    priority: 0.7,
  },
];

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // Les annonces sont récupérées depuis l'API pour générer les URLs dynamiques.
  // En cas d'indisponibilité de l'API, le sitemap reste disponible avec les pages fixes.
  const properties = await getProperties().catch(() => []);

  const propertyRoutes = properties.map((property) => ({
    url: `${siteUrl}/announce/${property.id}`,
    changeFrequency: "weekly" as const,
    priority: 0.8,
  }));

  return [...publicRoutes, ...propertyRoutes];
}
