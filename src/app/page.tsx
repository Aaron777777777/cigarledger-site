export default function Home() {
  return (
    <main className="page">
      <section className="hero">
        <p className="kicker">Cigar Ledger</p>
        <h1>Compare cigar prices before you buy.</h1>
        <p className="heroText">
          A desktop version of Cigar Ledger — built to search cigars, compare UK prices,
          check EU landed costs and find better value.
        </p>

        <div className="actions">
          <a href="/cigars" className="button">Search cigars</a>
          <a
            href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
            className="button secondary"
            target="_blank"
          >
            Google Play
          </a>
        </div>
      </section>

      <section className="panelGrid">
        <div className="panel">
          <span>01</span>
          <h2>Search cigars</h2>
          <p>Browse cigar names, brands and formats from the Cigar Ledger database.</p>
        </div>

        <div className="panel">
          <span>02</span>
          <h2>Compare UK prices</h2>
          <p>Check retailer pricing before ordering singles or boxes.</p>
        </div>

        <div className="panel">
          <span>03</span>
          <h2>Estimate landed costs</h2>
          <p>Compare UK pricing against EU landed estimates after duty and VAT.</p>
        </div>
      </section>
    </main>
  );
}
