import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Financial Prudence - Adekoya Anuoluwapo",
    default: "Financial Prudence - Adekoya Anuoluwapo",
  },
  description: "A comprehensive guide to structured thinking, disciplined action, and understanding how money truly works."
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
