export default function PremiumPage() {
  return (
    <main className="ledgerApp">
      <section className="premiumHero">
        <p className="heroLabel">Cigar Ledger Pro</p>
        <h1>Unlock the full cigar comparison.</h1>
        <p>
          Free users can browse UK prices. Pro unlocks EU landed comparisons,
          savings signals and the full buying-route view.
        </p>

        <a
          className="premiumButton"
          href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
          target="_blank"
        >
          Get Cigar Ledger on Google Play →
        </a>
      </section>

      <section className="premiumGrid">
        <div>
          <h2>EU landed prices</h2>
          <p>Compare estimated import costs after duty and VAT.</p>
        </div>

        <div>
          <h2>Full comparison view</h2>
          <p>See the buying route instead of guessing across retailers.</p>
        </div>

        <div>
          <h2>Better buying decisions</h2>
          <p>Spot when UK looks best and when import routes may be worth checking.</p>
        </div>
      </section>
    </main>
  );
}
