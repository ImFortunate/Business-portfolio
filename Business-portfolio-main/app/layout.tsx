import type { Metadata } from "next";
import { Bricolage_Grotesque, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { BookingModalProvider } from "@/components/booking/BookingModalProvider";
import { TawkChat } from "@/components/TawkChat";
import { site } from "@/content";

const bricolage = Bricolage_Grotesque({
  variable: "--font-display",
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  variable: "--font-serif",
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  display: "swap",
});

const jetBrainsMono = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  display: "swap",
});

const siteUrl = site.url;
const description =
  "Strategy, UI/UX design and development under one roof, for startups and growing companies that need to ship fast without cutting corners.";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: `${site.name} — Design & Development Studio`,
  description,
  openGraph: {
    title: `${site.name} — Design & Development Studio`,
    description,
    url: siteUrl,
    siteName: site.name,
    images: [{ url: "/og-image.jpg", width: 1200, height: 630 }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: `${site.name} — Design & Development Studio`,
    description,
    images: ["/og-image.jpg"],
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${bricolage.variable} ${instrumentSerif.variable} ${jetBrainsMono.variable}`}
    >
      <body className="min-h-full bg-bg text-text font-display antialiased">
        <BookingModalProvider>{children}</BookingModalProvider>
        <TawkChat />
      </body>
    </html>
  );
}
