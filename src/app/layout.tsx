import type { Metadata } from "next";
import { Vazirmatn, Inter } from "next/font/google";
import "./globals.css";

const vazirmatn = Vazirmatn({
  subsets: ["arabic", "latin"],
  weight: ["300", "400", "500", "600", "700", "800"],
  variable: "--font-vazirmatn",
  display: "swap",
});

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://pouriamombeni.github.io"),
  title: "پوریا ممبنی | دکترای اقتصاد و مدیریت صنعتی",
  description:
    "وب‌سایت شخصی و آکادمیک دکتر پوریا ممبنی. متخصص حوزه اقتصاد و مدیریت صنعتی، رتبه ۲ کنکور دکتری مدیریت صنعتی.",
  keywords: [
    "پوریا ممبنی",
    "دکتر پوریا ممبنی",
    "Pouria Mombeni",
    "دکترای اقتصاد",
    "مدیریت صنعتی",
    "تحلیل اقتصادی",
    "رتبه ۲ کنکور دکتری مدیریت صنعتی",
    "تحقیق در عملیات",
  ],
  authors: [{ name: "پوریا ممبنی", url: "https://pouriamombeni.github.io" }],
  creator: "Pouria Mombeni",
  openGraph: {
    type: "profile",
    locale: "fa_IR",
    alternateLocale: ["en_US"],
    url: "https://pouriamombeni.github.io",
    title: "پوریا ممبنی | دکترای اقتصاد و مدیریت صنعتی",
    description:
      "وب‌سایت شخصی و آکادمیک پوریا ممبنی. دکترای اقتصاد و رتبه ۲ کنکور دکتری مدیریت صنعتی.",
    siteName: "Pouria Mombeni Academic Portfolio",
    images: [
      {
        url: "/images/pouria-mombeni.jpg",
        width: 800,
        height: 1000,
        alt: "پوریا ممبنی",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "پوریا ممبنی | دکترای اقتصاد",
    description:
      "وب‌سایت رسمی و آکادمیک پوریا ممبنی - رتبه ۲ کنکور دکتری مدیریت صنعتی",
    images: ["/images/pouria-mombeni.jpg"],
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" className={`${vazirmatn.variable} ${inter.variable}`}>
      <body className="min-h-screen bg-slate-50 text-slate-900 selection:bg-navy-900 selection:text-white font-sans">
        {children}
      </body>
    </html>
  );
}
