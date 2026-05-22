export type PropertyHost = {
  id?: number;
  name: string;
  picture?: string | null;
};

export type PropertySummary = {
  id: string;
  slug?: string;
  title: string;
  description?: string | null;
  cover?: string | null;
  location?: string | null;
  price_per_night?: number | null;
  rating_avg?: number | null;
  ratings_count?: number | null;
  host?: PropertyHost;
};

export type PropertyDetails = PropertySummary & {
  pictures: string[];
  equipments: string[];
  tags: string[];
};
