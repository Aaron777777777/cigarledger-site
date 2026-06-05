import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Cohiba Robusto Price UK | Cigar Ledger",
  description: "Check Cohiba Robusto prices in the UK. Cigar Ledger helps UK cigar smokers compare prices, landed costs and buying routes.",
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

      <section className="hero smallHero seoPage seoArticle cigarDetailPage">
        <span className="kicker">Cigar price guide</span>
        <h1>Cohiba Robusto Price UK</h1>
        <p className="lead">
          Check Cohiba Robusto prices before you buy. UK cigar prices can move between shops,
          availability, import routes and landed costs.
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
          <h2>Check the UK price first</h2>
          <p>
            Before ordering Cohiba Robusto, compare the current UK retail price against other
            buying routes so you have a clearer baseline.
          </p>
        </section>

        <section>
          <h2>Do not ignore landed cost</h2>
          <p>
            A cheaper overseas price can change once duty, VAT, delivery and currency
            conversion are included.
          </p>
        </section>

        <section>
          <h2>Use Cigar Ledger before buying</h2>
          <p>
            Cigar Ledger helps you compare prices and estimate the true cost before
            spending money on your next cigar.
          </p>
        </section>



        <div className="relatedLinks">
          <span>Related guides</span>
          <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
          <a href="/cigar-price-comparison">Cigar price comparison</a>
          <a href="/cigar-landed-cost-uk">Cigar landed cost UK</a>
          <a href="/cuban-cigar-prices-uk">Cuban cigar prices UK</a>
        </div>
      </section>
    </main>
  );
}
