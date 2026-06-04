export const metadata = {
  title: "H. Upmann Magnum 46 Price UK | Cigar Ledger",
  description: "Compare H. Upmann Magnum 46 prices before ordering. Cigar Ledger helps UK cigar smokers compare prices, landed costs and buying routes.",
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
        <h1>H. Upmann Magnum 46 Price UK</h1>
        <p>Compare H. Upmann Magnum 46 prices before ordering.</p>
        <p>
          Cigar prices can vary between retailers, import routes and availability.
          Cigar Ledger is built to help you check prices before spending money.
        </p>
        <p>
          Compare UK prices, estimate landed costs after duty and VAT, and find
          where your next cigar may cost less.
        </p>

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

        <div className="secondaryDownload">
          <p>Found your cigar? Join live cigar lounges with Herf Station.</p>
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
