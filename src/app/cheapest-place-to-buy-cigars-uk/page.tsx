import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cheapest Place to Buy Cigars UK | Cigar Ledger",
  description: "Compare UK cigar prices and find cheaper places to buy cigars with Cigar Ledger.",
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
        <h1>Cheapest Place to Buy Cigars UK</h1>
        <p className="lead">Cigars in the UK can be hard to judge because the listed price is not always the final cost. Import costs and delivery can quickly change the value.</p>

        <section><h2>Cheap does not always mean best value</h2><p>A lower listed price can become expensive once taxes, shipping and landed costs are added. Comparing properly helps avoid false savings.</p></section>

        <section><h2>Compare before ordering</h2><p>Cigar Ledger is designed to make price checking quicker by helping smokers compare UK prices and estimate whether importing still makes sense.</p></section>

        <section><h2>Find better buying routes</h2><p>Use the app as a quick check before your next cigar order so you can buy with more confidence.</p></section>

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
          <a href="/cheap-cigars-uk">Cheapest Place to Buy Cigars UK</a>
          <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
          <a href="/compare-cigar-prices-uk">Compare Cigar Prices</a>
          <a href="/cigar-import-duty-uk">Cigar Import Duty</a>
          <a href="/cigar-landed-cost-uk">Cigar Landed Cost</a>
        </div>
      </article>
    </main>
  );
}
