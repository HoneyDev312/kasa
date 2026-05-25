import type { Metadata } from "next";
import { Footer, Header } from "@/shared/layout";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "Kasa",
  description: "Plateforme de location immobiliere entre particuliers.",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="fr">
      <body>
        <div className="page-container">
          <Header />
          <main className="page-main">{children}</main>
          <Footer />
          {modal}
        </div>
      </body>
    </html>
  );
}
