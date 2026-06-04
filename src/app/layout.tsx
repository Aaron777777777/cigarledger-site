import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cigar Ledger | UK Cigar Price Comparison",
  description:
    "Compare UK cigar prices, estimate EU landed costs and find cheaper cigars before you buy.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>{children}</body>
    </html>
  );
}
