import type { Metadata } from "next";
import { Archivo_Black, Work_Sans } from "next/font/google";
import { Footer } from "@/components/Footer";
import { Grain } from "@/components/Grain";
import { Nav } from "@/components/Nav";
import { personJsonLd, site } from "@/content/content";
import "./globals.css";

const archivoBlack = Archivo_Black({
  weight: "400",
  subsets: ["latin"],
  variable: "--font-archivo",
  display: "swap",
});

const workSans = Work_Sans({
  weight: ["400", "500", "600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-work",
  display: "swap",
});

const metadataBase =
  site.url !== "TODO" && site.url.startsWith("http")
    ? new URL(site.url)
    : undefined;

export const metadata: Metadata = {
  title: {
    default: site.title,
    template: `%s — ${site.name}`,
  },
  description: site.description,
  ...(metadataBase ? { metadataBase } : {}),
  alternates: {
    canonical: metadataBase ? "/" : undefined,
  },
  openGraph: {
    title: site.title,
    description: site.description,
    type: "website",
    locale: site.locale,
    siteName: site.name,
    ...(metadataBase ? { url: metadataBase } : {}),
  },
  twitter: {
    card: "summary_large_image",
    title: site.title,
    description: site.description,
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const jsonLd = personJsonLd();

  return (
    <html
      lang="en"
      className={`${archivoBlack.variable} ${workSans.variable}`}
    >
      <body className="bg-paper font-sans text-ink antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main" className="skip-link">
          {site.skipToContent}
        </a>
        <div className="site-wrap">
          <Grain />
          <Nav />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
