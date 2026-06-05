import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Compare Cigar Prices UK | Cigar Ledger",
  description: "Compare cigar prices in the UK. Check retailer prices, import routes and estimated landed costs before buying cigars online.",
};

export default function Page() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
          <a href="/contact">Contact</a>
        </nav>
        <MobileMenu />
      </header>

      <article className="seoArticle">
        <span className="kicker">Cigar price guide</span>
        <h1>Compare Cigar Prices UK</h1>
        <p className="lead">Cigar prices can vary widely across UK retailers. Comparing prices before buying can help cigar smokers avoid overpaying.</p>

        <section><h2>Why compare cigar prices?</h2><p>The same cigar can appear at different prices depending on retailer stock, demand and pricing strategy. A quick comparison can reveal better value.</p></section>

        <section><h2>UK prices vs import prices</h2><p>European prices can look attractive, but the final landed cost matters more than the shelf price. Duty, VAT and shipping all need to be considered.</p></section>

        <section><h2>Use Cigar Ledger as a buying check</h2><p>Cigar Ledger helps you compare prices and buying routes before placing your next order.</p></section>

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
