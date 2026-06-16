import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cigar Price Comparison UK | Cigar Ledger",
  description: "Compare cigar prices across UK retailers and estimated import routes. Cigar Ledger helps UK cigar smokers compare prices, landed costs and buying routes.",
};

export default function Page() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <MobileMenu />
      </header>

      <section className="hero smallHero seoPage">
        <span className="kicker">Cigar price guide</span>
        <h1>Cigar Price Comparison UK</h1>
        <p>Compare cigar prices across UK retailers and estimated import routes.</p>
        <p>
          Cigar prices can vary between retailers, import routes and availability.
          Cigar Ledger is built to help you check prices before spending money.
        </p>
        <p>
          Compare UK prices, estimate landed costs after duty and VAT, and find
          where your next cigar may cost less.
        </p>

        <div className="seoDownloadGrid">
<div className="seoDownload">
          <img src="/cl.png" alt="Cigar Ledger app icon" />
          <div>
            <strong>Download Cigar Ledger</strong>
            <span>Compare UK cigar prices and landed costs before you buy.</span>
            <a
              className="button"
              href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
              target="_blank"
              rel="noopener"
            >
              Download on Android
            </a>
          </div>
        </div>
<div className="seoDownload">
          <img src="/hs.png" alt="Herf Station app icon" />
          <div>
            <strong>Herf Station</strong>
            <span>Found your cigar? Join live cigar lounges with other smokers.</span>
            <div className="links">
              <a className="button" href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station" target="_blank" rel="noopener">Android</a>
              <a className="button" href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305" target="_blank" rel="noopener">iOS</a>
            </div>
          </div>
        </div>
        </div>
      
        <section>
          <h2>Why cigar price comparison uk matters</h2>
          <p>
            Cigar prices are not fixed from one shop to another. A cigar can look expensive in one place and reasonable
            somewhere else depending on stock, retailer margin, pack size, delivery charges and import costs.
          </p>
        </section>

        <section>
          <h2>Do not compare sticker price only</h2>
          <p>
            The listed price is only part of the picture. UK buyers should also consider postage, duty, VAT, handling fees
            and whether the retailer has the cigar in stock. Cigar Ledger is built to make that comparison quicker.
          </p>
        </section>

        <section>
          <h2>Best pages to check next</h2>
          <p>
            Start with Cuban cigar prices, Cohiba prices, cheap cigars UK and best cigar prices UK. These pages cover
            the highest-intent searches and connect back to the app for quicker checking before you buy.
          </p>
        </section>

        <div className="relatedLinks">
          <a href="/cigars">All Cigars UK</a>
          <a href="/cuban-cigar-prices-uk">Cuban Cigar Prices UK</a>
          <a href="/cohiba-prices-uk">Cohiba Prices UK</a>
          <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
          <a href="/best-cigar-prices-uk">Best Cigar Prices UK</a>
        </div>

      </section>
    </main>
  );
}
