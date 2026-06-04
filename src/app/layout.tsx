import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cigar Ledger | UK Cigar Price Comparison & EU Import Costs",
  description:
    "Find the cheapest cigars before you buy. Compare UK cigar prices, estimate EU import and landed costs, then smoke with others on Herf Station.",
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
