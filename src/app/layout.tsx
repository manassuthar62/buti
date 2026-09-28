import type { Metadata } from "next";
import "./globals.css";

export const viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#C26B54",
};

export const metadata: Metadata = {
  title: "NIVI BEAUTY CARE | By Arti Bhavsar - Luxury Bridal Studio & Salon (Partapur, Banswara)",
  description: "Nivi Beauty Care by Celebrity Makeup Artist Arti Bhavsar (Winner of Glam Bliss Awards, 11.3k+ Community). Specializing in HD Airbrush Bridal Makeup, Jewelry Styling, Hydra Facials & Balayage in Partapur, Banswara, Rajasthan.",
  keywords: ["nivi beauty care", "arti bhavsar", "partapur parlour", "banswara bridal makeup", "glam bliss awards", "rajasthan bridal artist", "nivi_beautycare_"],
  openGraph: {
    title: "NIVI BEAUTY CARE | By Arti Bhavsar - Partapur, Banswara",
    description: "Award-Winning Luxury Bridal Studio & Salon by Arti Bhavsar. 11.3k+ Instagram Community.",
    type: "website",
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Cinzel:wght@400;600;700;800;900&family=Playfair+Display:ital,wght@0,400;0,600;0,700;0,800;1,400&family=Plus+Jakarta+Sans:ital,wght@0,300;0,400;0,500;0,600;0,700;0,800;1,400&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-[#FCF9F5] text-[#1C1322] antialiased selection:bg-[#FDE8E9] selection:text-[#B85F48]">
        {children}
      </body>
    </html>
  );
}
