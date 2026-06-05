import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cigar Landed Cost UK | Cigar Ledger",
  description: "Estimate cigar landed costs in the UK. Compare final cigar prices after import costs, duty, VAT and delivery.",
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
        <h1>Cigar Landed Cost UK</h1>
        <p className="lead">The landed cost of a cigar is the estimated final price after purchase price, shipping, duty and VAT are considered.</p>

        <section><h2>Why landed cost matters</h2><p>A cigar can look cheaper from an overseas retailer but become more expensive once import charges are added.</p></section>

        <section><h2>What affects landed cost?</h2><p>Purchase price, delivery, currency conversion, duty, VAT and handling fees can all affect the final cost.</p></section>

        <section><h2>Compare final prices</h2><p>Cigar Ledger helps cigar smokers compare the total buying route rather than just the advertised price.</p></section>

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
