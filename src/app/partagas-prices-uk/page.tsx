import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export const metadata = {
  title: "Partagás Prices UK | Cigar Ledger",
  description: "Compare Partagás cigar prices before ordering. Cigar Ledger helps UK cigar smokers compare prices, landed costs and buying routes.",
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
        <h1>Partagás Prices UK</h1>
        <p>Compare Partagás cigar prices before ordering.</p>
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
          <h2>What affects prices?</h2>
          <p>
            Prices can vary because of retailer stock, cigar size, availability,
            shipping costs and overall market demand. Comparing before buying helps
            avoid paying more than necessary.
          </p>
        </section>

        <section>
          <h2>Compare before ordering</h2>
          <p>
            Looking at the listed price alone is rarely enough. UK buyers should
            also consider delivery costs, import charges and overall landed cost
            before deciding where to buy.
          </p>
        </section>

        <section>
          <h2>Use Cigar Ledger</h2>
          <p>
            Cigar Ledger helps compare UK prices, buying routes and estimated
            landed costs so you can make a more informed purchase decision.
          </p>
        </section>

      </section>
    </main>
  );
}
