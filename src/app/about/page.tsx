import SiteFooter from "@/components/SiteFooter";
export const metadata = {
  title: "About Cigar Ledger | UK Cigar Price Comparison",
  description:
    "Cigar Ledger helps UK cigar smokers compare cigar prices, estimate import costs and find cheaper buying routes.",
};

export default function AboutPage() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>

        <nav>
          <a href="/">Home</a>
          <a href="/contact">Contact</a>
        </nav>
      </header>

      <section className="hero standardHero">
        <span className="kicker">About</span>
        <h1>Built to help cigar smokers buy smarter.</h1>
        <p>
          Cigar Ledger helps UK cigar smokers compare prices, estimate landed
          costs, and check better buying routes before placing an order.
        </p>
      </section>

      <section className="section homeSection">
        <div className="products">
          <article className="product">
            <div className="product-top">
              <img className="app-icon" src="/cl.png" alt="Cigar Ledger app icon" />
              <div>
                <div className="tag">Price Comparison</div>
                <h3>Cigar Ledger</h3>
                <p>Find cheaper cigars before you buy.</p>
              </div>
            </div>

            <div className="links">
              <a
                className="button"
                href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
                target="_blank"
                rel="noopener"
              >
                Google Play
              </a>
            </div>
          </article>

          <article className="product">
            <div className="product-top">
              <img className="app-icon" src="/hs.png" alt="Herf Station app icon" />
              <div>
                <div className="tag">Cigar Community</div>
                <h3>Herf Station</h3>
                <p>Join live virtual lounges with other cigar smokers.</p>
              </div>
            </div>

            <div className="links">
              <a
                className="button"
                href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station"
                target="_blank"
                rel="noopener"
              >
                Google Play
              </a>

              <a
                className="button"
                href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305"
                target="_blank"
                rel="noopener"
              >
                App Store
              </a>
            </div>
          </article>
        </div>
      </section>

      <SiteFooter />
    </main>
  );
}
