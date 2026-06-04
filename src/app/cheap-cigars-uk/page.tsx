export const metadata = {
  title: "Cheap Cigars UK | Cigar Ledger",
  description: "Find cheap cigars in the UK, compare prices and check better buying routes before ordering. Cigar Ledger helps UK cigar smokers compare prices, landed costs and buying routes.",
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
      </header>

      <section className="hero smallHero seoPage">
        <span className="kicker">Cigar price guide</span>
        <h1>Cheap Cigars UK</h1>
        <p>Find cheap cigars in the UK, compare prices and check better buying routes before ordering.</p>
        <p>
          Cigar prices can vary between retailers, import routes and availability.
          Cigar Ledger is built to help you check prices before spending money.
        </p>
        <p>
          Compare UK prices, estimate landed costs after duty and VAT, and find
          where your next cigar may cost less.
        </p>

        <div className="links">
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
            target="_blank"
            rel="noopener"
          >
            Download Cigar Ledger
          </a>
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station"
            target="_blank"
            rel="noopener"
          >
            Herf Station Android
          </a>
          <a
            className="button"
            href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305"
            target="_blank"
            rel="noopener"
          >
            Herf Station iOS
          </a>
        </div>
      </section>
    </main>
  );
}
