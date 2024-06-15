import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import clsx from "clsx";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "More株式会社",
  description: "More株式会社",
};

const isDev = process.env.NEXT_PUBLIC_IS_DEV === "true";

export default function RootLayout(props: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, "font-sans")}>
      <head>{isDev && <meta name="robots" content="noindex, nofollow" />}</head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{props.children}</main>
        <Footer />
      </body>
    </html>
  );
}
