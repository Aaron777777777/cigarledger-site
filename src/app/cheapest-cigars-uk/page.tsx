import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cheapest Cigars UK | Cigar Ledger",
  description: "Find the cheapest cigars in the UK. Compare UK prices, estimate import and landed costs, and check better buying routes with Cigar Ledger.",
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

      <article className="seoArticle">
        <span className="kicker">Cigar price guide</span>
        <h1>Cheapest Cigars UK</h1>
        <p className="lead">Finding the cheapest cigars in the UK is not always as simple as checking one retailer. Prices can vary between UK cigar shops, online retailers and European import routes.</p>

        <section><h2>How to find cheaper cigars</h2><p>Before buying, compare the UK retail price against possible import routes. A cigar that looks cheaper abroad may cost more once duty, VAT, delivery and currency conversion are included.</p></section>

        <section><h2>Why prices vary</h2><p>Cigar prices change because of retailer margins, stock availability, import costs, duty, VAT and shipping. Cigar Ledger helps you check the full picture before placing an order.</p></section>

        <section><h2>Use Cigar Ledger before buying</h2><p>Search inside Cigar Ledger to compare UK prices, estimate landed costs and find where your next cigar may cost less.</p></section>

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

        <div className="relatedLinks">
          <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
          <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
          <a href="/compare-cigar-prices-uk">Compare Cigar Prices</a>
          <a href="/cigar-import-duty-uk">Cigar Import Duty</a>
          <a href="/cigar-landed-cost-uk">Cigar Landed Cost</a>
        </div>
      </article>
    </main>
  );
}
