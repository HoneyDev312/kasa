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
