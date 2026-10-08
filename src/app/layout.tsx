import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Great_Vibes, Plus_Jakarta_Sans, Amiri, Cinzel } from "next/font/google";
import "./globals.css";
import { WEDDING_DATA } from "@/data/wedding";
import { MusicPlayerProvider } from "@/components/MusicPlayer";
import AppShell from "@/components/AppShell";

const serifFont = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-serif",
  display: "swap",
});

const displayFont = Cinzel({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const scriptFont = Great_Vibes({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-script",
  display: "swap",
});

const sansFont = Plus_Jakarta_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-sans",
  display: "swap",
});

const arabicFont = Amiri({
  subsets: ["arabic"],
  weight: ["400", "700"],
  variable: "--font-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: `${WEDDING_DATA.groom.name} ❤️ ${WEDDING_DATA.bride.name} — Wedding Invitation`,
  description: `You are cordially invited to celebrate the wedding union of ${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name}.`,
  keywords: ["wedding invitation", WEDDING_DATA.groom.name, WEDDING_DATA.bride.name, "Shekhpura wedding"],
  openGraph: {
    title: `${WEDDING_DATA.groom.name} & ${WEDDING_DATA.bride.name} Wedding Invitation`,
    description: `Join us in celebrating our wedding ceremony at ${WEDDING_DATA.venue.name}.`,
    type: "website",
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  themeColor: "#24050A",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${serifFont.variable} ${displayFont.variable} ${scriptFont.variable} ${sansFont.variable} ${arabicFont.variable} h-[100dvh] max-h-[100dvh] overflow-hidden`}
    >
      <body className="h-[100dvh] max-h-[100dvh] w-screen overflow-hidden bg-wedding-cream text-wedding-maroon-deep font-sans selection:bg-wedding-gold selection:text-wedding-maroon-deep antialiased m-0 p-0">
        <MusicPlayerProvider>
          <AppShell>
            {children}
          </AppShell>
        </MusicPlayerProvider>
      </body>
    </html>
  );
}
