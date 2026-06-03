import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Cigar Ledger | UK Cigar Price Comparison",
  description:
    "Compare UK cigar prices, check EU landed costs and find better value before buying cigars online.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en-GB">
      <body>
        <header className="siteHeader">
          <a href="/" className="brand">Cigar Ledger</a>
          <nav>
            <a href="/cigars">Cigars</a>
            <a href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger" target="_blank">
              Google Play
            </a>
          </nav>
        </header>
        {children}
      </body>
    </html>
  );
}
