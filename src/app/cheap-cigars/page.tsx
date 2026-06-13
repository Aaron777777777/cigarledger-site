import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Cheap Cigars | Cigar Ledger",
  description: "Find cheap cigars without wasting time checking every retailer. Cigar Ledger helps you compare UK cigar prices, spot better value and decide what is worth adding to your humidor.",
};

export default function Page() {
  return (
    <>
      <main className="seo-page">
        <section className="seo-hero">
          <span className="kicker">CIGAR PRICE GUIDE</span>
          <h1>Cheap Cigars</h1>
          <p>Find cheap cigars without wasting time checking every retailer. Cigar Ledger helps you compare UK cigar prices, spot better value and decide what is worth adding to your humidor.</p>
        </section>

        <section className="app-grid">
          <div className="app-card primary">
            <div className="app-icon">CL</div>
            <div>
              <h2>Download Cigar Ledger</h2>
              <p>Compare UK cigar prices, track favourites and find better cigar deals from the app.</p>
              <a className="gold-button" href="https://play.google.com/store/search?q=Cigar%20Ledger&c=apps">
                Download on Android →
              </a>
            </div>
          </div>

          <div className="app-card">
            <div className="app-icon">HS</div>
            <div>
              <h2>Herf Station</h2>
              <p>Found your cigar? Join live cigar lounges with other smokers.</p>
              <div className="button-row">
                <a className="outline-button" href="/">Android →</a>
                <a className="outline-button" href="/">iOS →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-card">
          <h2>How to find better cigar prices</h2>
          <p>
            Cigar prices can vary a lot between retailers, formats and brands. A cigar that looks expensive
            in one place may be better value somewhere else, especially when you compare singles, packs and boxes.
          </p>
          <p>
            Cigar Ledger is built to make that easier. Instead of checking lots of shops manually, use the app
            to compare UK cigar prices, save cigars you are interested in and keep an eye on better-value options.
          </p>

          <h2>Why use Cigar Ledger?</h2>
          <p>
            The website gives you a quick guide, but the app is where the proper comparison tools live. You can
            search cigars, track favourites and make better buying decisions without turning every purchase into a spreadsheet.
          </p>

          <h2>Related cigar guides</h2>
          <div className="related-links">
              <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
              <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
              <a href="/best-cheap-cigars-uk">Best Cheap Cigars UK</a>
              <a href="/cigar-deals-uk">Cigar Deals UK</a>
              <a href="/best-cigar-prices-uk">Best Cigar Prices UK</a>
              <a href="/cigar-price-comparison">Cigar Price Comparison</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
