import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cigar Price Checker UK | Cigar Ledger",
  description: "Use Cigar Ledger as a cigar price checker for UK cigar prices and premium cigar deals.",
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
        <h1>Cigar Price Checker UK</h1>
        <p className="lead">Cigars in the UK can be hard to judge because the listed price is not always the final cost. Import costs and delivery can quickly change the value.</p>

        <section><h2>Cheap does not always mean best value</h2><p>A lower listed price can become expensive once taxes, shipping and landed costs are added. Comparing properly helps avoid false savings.</p></section>

        <section><h2>Compare before ordering</h2><p>Cigar Ledger is designed to make price checking quicker by helping smokers compare UK prices and estimate whether importing still makes sense.</p></section>

        <section><h2>Find better buying routes</h2><p>Use the app as a quick check before your next cigar order so you can buy with more confidence.</p></section>

        <section>
          <h2>What a cigar price checker should include</h2>
          <p>
            A useful cigar price checker should help you look beyond the first price you see. UK buyers need to think about
            retailer price, availability, delivery, duty, VAT and whether an import route still saves money after everything is included.
          </p>
        </section>

        <section>
          <h2>Check premium cigars before spending</h2>
          <p>
            Price checking matters most on premium cigars, Cuban cigars and larger box purchases. A small difference on each cigar
            can add up quickly, especially when comparing Cohiba, Montecristo, Partagas, Davidoff and other popular brands.
          </p>
        </section>

        <section>
          <h2>Turn research into a quick buying check</h2>
          <p>
            Use this page for search, then use Cigar Ledger when you are close to ordering. The app is built to make the final
            comparison faster so you can buy with more confidence.
          </p>
        </section>


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
          <a href="/cheap-cigars-uk">Cigar Price Checker UK</a>
          <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
          <a href="/compare-cigar-prices-uk">Compare Cigar Prices</a>
          <a href="/cigar-import-duty-uk">Cigar Import Duty</a>
          <a href="/cigar-landed-cost-uk">Cigar Landed Cost</a>
        </div>
      </article>
    </main>
  );
}
