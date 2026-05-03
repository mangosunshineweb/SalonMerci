import type { Metadata } from "next";
import { Cormorant_Garamond, Manrope } from "next/font/google";
import "./globals.css";

const headingFont = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-heading",
  weight: ["500", "600", "700"],
});

const bodyFont = Manrope({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600", "700"],
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "HairSalon",
  name: "Salon Merci",
  url: "https://salonmerci.dk",
  address: {
    "@type": "PostalAddress",
    streetAddress: "Søndergade 20",
    addressLocality: "Odense",
    postalCode: "5000",
    addressCountry: "DK",
  },
};

export const metadata: Metadata = {
  title: "Salon Merci | Frisør i Odense",
  description:
    "Salon Merci er en frisørsalon på Søndergade 20, 5000 Odense. Book din tid nemt og hurtigt online via Timma.",
  metadataBase: new URL("https://salonmerci.dk"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Salon Merci | Frisør i Odense",
    description:
      "Book din tid hos Salon Merci på Søndergade 20, Odense. Online booking via Timma.",
    url: "https://salonmerci.dk",
    siteName: "Salon Merci",
    locale: "da_DK",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="da">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={`${headingFont.variable} ${bodyFont.variable}`}>
        {children}
      </body>
    </html>
  );
}
