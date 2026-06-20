import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: "Quintero Prices UK | Cigar Ledger",
  description: "Compare Quintero cigar prices in the UK, check buying routes and estimate landed costs before buying.",
};

export default function Page() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="/">Home</a>
          <a href="/cigars">Cigars</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <MobileMenu />
      </header>

      <article className="seoArticle">
        <span className="kicker">Cigar price guide</span>
        <h1>Quintero Prices UK</h1>

        <p className="lead">
          Compare Quintero cigar prices in the UK before buying. Prices can vary between retailers,
          formats, stock levels and import routes, so the cheapest headline price is not always
          the best final deal.
        </p>

        <section>
          <h2>Why Quintero prices vary</h2>
          <p>
            Quintero prices can change depending on stock, cigar size, box quantity, retailer margin,
            age, demand and availability. A single cigar, small pack and full box can all show different
            value once delivery and buying route are considered.
          </p>
        </section>

        <section>
          <h2>UK price versus import price</h2>
          <p>
            Overseas prices can look attractive at first, but duty, VAT, delivery and handling can quickly
            remove the saving. The useful comparison is not just the shelf price, but the full landed cost
            by the time the cigars reach you.
          </p>
        </section>

        <section>
          <h2>How to compare before buying</h2>
          <p>
            Check the UK price, compare similar Cuban brands, look at the cigar size, then decide whether
            buying locally or importing makes more sense. Cigar Ledger is designed to make that final check
            quicker before placing an order.
          </p>
        </section>

        <div className="seoDownloadGrid">
          <div className="seoDownload">
            <img src="/cl.png" alt="Cigar Ledger app icon" />
            <div>
              <strong>Download Cigar Ledger</strong>
              <span>Compare UK cigar prices and landed costs before you buy.</span>
              <a className="button" href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger" target="_blank" rel="noopener">Download on Android</a>
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
          <a href="/cuban-cigar-prices-uk">Cuban Cigar Prices UK</a>
          <a href="/cohiba-prices-uk">Cohiba Prices UK</a>
          <a href="/montecristo-prices-uk">Montecristo Prices UK</a>
          <a href="/partagas-prices-uk">Partagas Prices UK</a>
          <a href="/uk-cigar-prices">UK Cigar Prices</a>
        </div>
      </article>
    </main>
  );
}
