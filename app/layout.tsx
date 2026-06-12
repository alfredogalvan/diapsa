import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Header from "@/components/organisms/Header";
import Footer from "@/components/organisms/Footer";
import JsonLd, {
  organizationSchema,
  localBusinessSchema,
  createWebsiteSchema,
} from "@/components/atoms/JsonLd";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const BASE_URL = "https://grupodiapsa.com";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  themeColor: "#002e46",
};

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: "Grupo DIAPSA | Mantenimiento Predictivo Industrial",
    template: "%s | Grupo DIAPSA",
  },
  description:
    "Empresa líder en mantenimiento predictivo industrial, monitoreo de condición y servicios de mantenimiento para Mexico y Sudamérica.",
  keywords: [
    "mantenimiento predictivo",
    "monitoreo de condición",
    "servicios de mantenimiento",
    "termografía infrarroja",
    "análisis de vibraciones",
    "ultrasonido industrial",
    "estudios eléctricos",
    "diagnóstico de maquinaria",
    "cámaras termográficas",
    "HIKMIKRO",
    "mantenimiento industrial México",
    "mantenimiento predictivo Sudamérica",
    "monitoreo de condición Sudamérica",
    "confiabilidad de equipos",
    "Grupo DIAPSA",
  ],
  authors: [{ name: "Grupo DIAPSA", url: BASE_URL }],
  creator: "Grupo DIAPSA",
  publisher: "Grupo DIAPSA",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  openGraph: {
    type: "website",
    locale: "es_MX",
    url: BASE_URL,
    siteName: "Grupo DIAPSA",
    title: "Grupo DIAPSA | Mantenimiento Predictivo Industrial",
    description:
      "Mantenimiento predictivo, monitoreo de condición y servicios de mantenimiento industrial para Mexico y Sudamérica.",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
        alt: "Grupo DIAPSA - Mantenimiento Predictivo Industrial",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Grupo DIAPSA | Mantenimiento Predictivo Industrial",
    description:
      "Mantenimiento predictivo, monitoreo de condición y servicios de mantenimiento industrial para Mexico y Sudamérica.",
    images: ["/images/og-image.png"],
    creator: "@grupodiapsa",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: BASE_URL,
  },
  manifest: "/manifest.json",
  icons: {
    icon: [
      { url: "/icon.ico" },
      { url: "/icon.ico", sizes: "192x192", type: "image/x-icon" },
    ],
    apple: [
      { url: "/icon.ico", sizes: "152x152", type: "image/x-icon" },
    ],
  },
  category: "Industrial Services",

};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es-MX">
      <head>
        <JsonLd data={organizationSchema} />
        <JsonLd data={localBusinessSchema} />
        <JsonLd data={createWebsiteSchema()} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
