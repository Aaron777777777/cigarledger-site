import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cigar Import Duty UK | Cigar Ledger",
  description: "Estimate cigar import duty in the UK. Check whether importing cigars could save money after duty, VAT and delivery.",
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
        <h1>Cigar Import Duty UK</h1>
        <p className="lead">Importing cigars into the UK can look cheaper at first glance, but duty, VAT and delivery can change the final price.</p>

        <section><h2>Why import duty matters</h2><p>When cigars are imported, the final cost may include tobacco duty, VAT, delivery and handling charges. These costs can reduce or remove any saving.</p></section>

        <section><h2>Compare landed cost, not shelf price</h2><p>The important number is the estimated landed cost: what the cigar may actually cost once it reaches you in the UK.</p></section>

        <section><h2>Check before importing</h2><p>Cigar Ledger helps smokers estimate import costs and compare them with UK retailer prices.</p></section>

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
