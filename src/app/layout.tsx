import type { Metadata } from "next";
import "./globals.css";
import DesktopTopBar from "@/components/DesktopTopBar";

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
        <div className="desktopShell">
          <aside className="sideBar">
            <a className="sideBrand" href="/cigars">Cigar Ledger</a>

            <nav className="sideNav">
              <a href="/cigars">Search</a>
              <a href="/deals">Top Deals</a>
              <a href="/watchlist">Watchlist</a>
              <a href="/premium">Premium</a>
            </nav>

            <div className="sideCta">
              <p>Compare cigar prices on the go.</p>
              <a
                href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
                target="_blank"
              >
                Google Play →
              </a>
            </div>
          </aside>

          <main className="desktopContent">
            <DesktopTopBar />
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
