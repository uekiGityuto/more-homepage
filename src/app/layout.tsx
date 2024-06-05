import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

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
    <html lang="jp">
      <head>{isDev && <meta name="robots" content="noindex, nofollow" />}</head>
      <body className={inter.className}>{children}</body>
    </html>
  );
}
