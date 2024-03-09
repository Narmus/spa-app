import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "spa-app",
  description: "Single Page Application",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <div className="layout-headers">Commercial Auto Policy</div>
        <div className="layout-children">{children}</div>
        <div className="layout-footers">Footer</div>
      </body>
    </html>
  );
}
