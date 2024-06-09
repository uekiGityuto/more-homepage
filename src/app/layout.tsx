import type { Metadata } from "next";
import { Noto_Sans_JP } from "next/font/google";
import "./globals.css";
import clsx from "clsx";

const notoSansJP = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

export const metadata: Metadata = {
  title: "More株式会社",
  description: "More株式会社",
};

const isDev = process.env.NEXT_PUBLIC_IS_DEV === "true";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="ja" className={clsx(notoSansJP.variable, "font-sans")}>
      <head>{isDev && <meta name="robots" content="noindex, nofollow" />}</head>
      <body>{children}</body>
    </html>
  );
}
