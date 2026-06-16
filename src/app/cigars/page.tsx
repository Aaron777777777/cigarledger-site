import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "All Cigars UK | Cigar Ledger",
  description: "Find cigars in the UK and compare prices before buying. Check UK retailers and estimated import costs with Cigar Ledger.",
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
        <h1>All Cigars UK</h1>
        <p className="lead">Browse popular cigars, compare UK prices and discover new favourites. Download Cigar Ledger to compare prices, track favourites and find the best cigar deals.</p>

        <section><h2>Cheap does not always mean best value</h2><p>A lower listed price can become expensive once taxes, shipping and landed costs are added. Comparing properly helps avoid false savings.</p></section>

        <section><h2>Compare before ordering</h2><p>Cigar Ledger is designed to make price checking quicker by helping smokers compare UK prices and estimate whether importing still makes sense.</p></section>

        <section><h2>Find better buying routes</h2><p>Use the app as a quick check before your next cigar order so you can buy with more confidence.</p></section>

        <section>
          <h2>Use Cigar Ledger before you buy</h2>
          <p>
            The cigars page is designed as a starting point for UK smokers who want to compare prices before ordering.
            Use it to move from brand research into actual price checking, especially when comparing Cuban cigars,
            budget cigars, premium singles and boxes.
          </p>
        </section>

        <section>
          <h2>Compare brands, sizes and buying routes</h2>
          <p>
            A Robusto, Churchill, Toro or Petit Corona can vary a lot in price depending on the brand and retailer.
            Cigar Ledger helps you think beyond the sticker price by checking UK prices, estimated import costs and
            whether a supposed deal is still worth it after delivery and taxes.
          </p>
        </section>

        <section>
          <h2>Useful cigar price guides</h2>
          <p>
            Start with Cuban cigar prices, Cohiba prices, Montecristo prices and cheap cigars UK if you want the
            highest-value pages. These guides link together so you can compare options without jumping between
            random retailer pages.
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
          <a href="/cheap-cigars-uk">All Cigars UK</a>
          <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
          <a href="/compare-cigar-prices-uk">Compare Cigar Prices</a>
          <a href="/cigar-import-duty-uk">Cigar Import Duty</a>
          <a href="/cigar-landed-cost-uk">Cigar Landed Cost</a>
        </div>
      </article>
    </main>
  );
}
