import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: "Por Larrañaga Prices UK | Cigar Ledger",
  description: "Compare Por Larrañaga cigar prices in the UK, check buying routes and estimate landed costs before buying.",
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
        <h1>Por Larrañaga Prices UK</h1>
        <p className="lead">
          Compare Por Larrañaga cigar prices in the UK before buying. Cigar Ledger helps UK cigar smokers check prices,
          compare buying routes and understand whether a deal still makes sense after delivery, duty and VAT.
        </p>

        <section>
          <h2>Why Por Larrañaga prices vary</h2>
          <p>
            Prices can change depending on retailer stock, cigar size, availability, box age and demand. Comparing first
            helps avoid paying more than necessary for the same cigar.
          </p>
        </section>

        <section>
          <h2>UK price versus landed cost</h2>
          <p>
            An overseas price can look cheaper at first, but the final landed cost matters more. Duty, VAT, shipping and
            handling can quickly change whether importing is actually worthwhile.
          </p>
        </section>

        <section>
          <h2>Use Cigar Ledger before ordering</h2>
          <p>
            Use this guide for research, then use the app as a quick price checker before placing your next order.
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
