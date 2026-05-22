import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Kasa",
  description: "Plateforme de location immobiliere entre particuliers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}
