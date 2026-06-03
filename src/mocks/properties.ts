import type {
  PropertyDetails,
  PropertySummary,
} from "@/features/properties/properties.types";

export const mockProperties: PropertyDetails[] = [
  {
    id: "c67ab8a7",
    title: "Appartement cosy",
    description:
      "Votre maison loin de chez vous. Que vous veniez de l'autre bout du monde, ou juste de quelques stations de RER, vous vous sentirez chez vous dans notre appartement.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-20-3.jpg",
    ],
    location: "Ile de France - Paris 17e",
    price_per_night: 182,
    rating_avg: 5,
    ratings_count: 24,
    host: {
      id: 2,
      name: "Nathalie Jean",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-12.jpg",
    },
    equipments: [
      "Équipements de base",
      "Micro-Ondes",
      "Douche italienne",
      "Frigo",
      "WIFI",
    ],
    tags: ["Batignolle", "Montmartre"],
  },
  {
    id: "b9123946",
    title: "Magnifique appartement proche Canal Saint Martin",
    description:
      "Profitez du charme de la vie parisienne dans un magnifique appartement. À 3 minutes à pied du Canal Saint Martin, vous serez proche des transports et de nombreux commerces.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-1-3.jpg",
    ],
    location: "Ile de France - Paris 10e",
    price_per_night: 145,
    rating_avg: 4,
    ratings_count: 18,
    host: {
      id: 3,
      name: "Della Case",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
    },
    equipments: [
      "Parking",
      "Sèche Cheveux",
      "Machine à laver",
      "Wi-fi",
      "Cuisine équipée",
    ],
    tags: ["Canal Saint Martin", "République", "Appartement"],
  },
  {
    id: "46d188c5",
    title: "Studio de charme - Buttes Chaumont",
    description:
      "À seulement deux pas des Buttes Chaumont, venez découvrir Paris dans ce studio tout équipé et décoré avec soin.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-2-3.jpg",
    ],
    location: "Ile de France - Paris 20e",
    price_per_night: 98,
    rating_avg: 3,
    ratings_count: 11,
    host: {
      id: 4,
      name: "Franck Maher",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
    },
    equipments: ["Wi-fi", "Cuisine équipée", "Télévision", "Sèche Cheveux"],
    tags: ["Buttes Chaumont", "Laumière", "Studio"],
  },
  {
    id: "7af00cd6",
    title: "Nid douillet au coeur du 11ème",
    description:
      "Venez découvrir Paris en séjournant dans ce nid douillet au coeur du 11ème, avec vue sur un parc résidentiel calme.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-3-3.jpg",
    ],
    location: "Ile de France - Paris 11e",
    price_per_night: 122,
    rating_avg: 3,
    ratings_count: 9,
    host: {
      id: 3,
      name: "Della Case",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-1.jpg",
    },
    equipments: [
      "Micro-Ondes",
      "Wi-fi",
      "Chambre Séparée",
      "Climatisation",
      "Télévision",
    ],
    tags: ["Parmentier", "Marais", "Parc", "Night Life"],
  },
  {
    id: "0979876d",
    title: "Appartement de Standing - 10e",
    description:
      "Ce loft entièrement rénové et équipé de meubles de luxe saura vous séduire. Idéalement situé dans le 10ème arrondissement.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-4-3.jpg",
    ],
    location: "Ile de France - Paris 10e",
    price_per_night: 133,
    rating_avg: 5,
    ratings_count: 31,
    host: {
      id: 4,
      name: "Franck Maher",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-2.jpg",
    },
    equipments: [
      "Frigo Américain",
      "Sèche Cheveux",
      "Wi-fi",
      "Chambre Séparée",
      "Parking",
    ],
    tags: ["Goncourt", "Proche commerces"],
  },
  {
    id: "bc6f7112",
    title: "Superbe appartement proche Tour Eiffel",
    description:
      "Ce superbe appartement refait à neuf vous place au coeur des plus belles attractions de Paris.",
    cover:
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
    pictures: [
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-1.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-2.jpg",
      "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/accommodation-7-3.jpg",
    ],
    location: "Ile de France - Paris 6e",
    price_per_night: 246,
    rating_avg: 5,
    ratings_count: 42,
    host: {
      id: 5,
      name: "Sébastien Fournier",
      picture:
        "https://s3-eu-west-1.amazonaws.com/course.oc-static.com/projects/front-end-kasa-project/profile-picture-5.jpg",
    },
    equipments: [
      "Wi-fi",
      "Sèche Cheveux",
      "Machine à laver",
      "Parking",
      "Lit King Size",
      "Ascenseur",
    ],
    tags: ["Luxe", "Tour Eiffel", "T3", "6ème"],
  },
];

const favoritePropertyIds = new Set(["c67ab8a7", "0979876d"]);

export function getMockProperties(): Promise<PropertySummary[]> {
  return Promise.resolve(mockProperties);
}

export function getMockPropertyById(id: string): Promise<PropertyDetails | null> {
  return Promise.resolve(mockProperties.find((item) => item.id === id) ?? null);
}

export function getMockFavoriteProperties(): Promise<PropertySummary[]> {
  return Promise.resolve(
    mockProperties.filter((property) => favoritePropertyIds.has(property.id))
  );
}

export function addMockFavoriteProperty(propertyId: string) {
  favoritePropertyIds.add(propertyId);

  return Promise.resolve({ ok: true });
}

export function removeMockFavoriteProperty(propertyId: string) {
  favoritePropertyIds.delete(propertyId);

  return Promise.resolve({ ok: true });
}
