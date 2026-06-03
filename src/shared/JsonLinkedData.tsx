export type JsonLinkedDataValue =
  | string
  | number
  | boolean
  | null
  | JsonLinkedDataValue[]
  | { [key: string]: JsonLinkedDataValue | undefined };

type JsonLinkedDataProps = {
  data: JsonLinkedDataValue;
};

/**
 * Injecte des données structurées JSON-LD dans le HTML de la page.
 * Le remplacement du caractère `<` limite le risque d'injection dans le script.
 */
export function JsonLinkedData({ data }: JsonLinkedDataProps) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(data).replace(/</g, "\\u003c"),
      }}
    />
  );
}
