export const metadata = {
  title: "Terms of Use | Cigar Ledger",
  description: "Terms of Use for Cigar Ledger and Vanta Labs apps and services.",
};

export default function TermsPage() {
  return (
    <main className="legal-page">
      <a href="/" className="back-link">← Back to website</a>

      <section className="legal-card">
        <span className="kicker">Terms of Use</span>
        <h1>Terms of Use</h1>

        <p><strong>Last updated:</strong> 30 May 2026</p>

        <p>
          These Terms of Use apply to Vanta Labs apps and services, including Cigar Ledger,
          Herf Station and Vanta Shift.
        </p>

        <h2>Subscriptions</h2>
        <p>
          Some features may require a paid subscription. Prices are shown at checkout and may
          vary by country or region. Subscriptions renew automatically unless cancelled through
          your Apple ID or Google Play account settings.
        </p>

        <h2>Use of the apps</h2>
        <p>
          You agree to use our apps lawfully and responsibly. Cigar-related apps are intended
          for adults only and do not sell tobacco products.
        </p>

        <h2>No affiliation</h2>
        <p>
          Vanta Labs is independent and is not affiliated with Apple, Google, Habanos S.A.,
          cigar manufacturers, or listed retailers unless explicitly stated.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms from time to time. Any updated version will be posted on this page.
        </p>
      </section>
    </main>
  );
}
