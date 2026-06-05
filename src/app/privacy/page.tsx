export const metadata = {
  title: "Privacy Policy | Cigar Ledger",
  description: "Privacy Policy for Cigar Ledger and Vanta Labs apps and services.",
};

export default function PrivacyPage() {
  return (
    <main className="legal-page">
      <a href="/" className="back-link">← Back to website</a>

      <section className="legal-card">
        <span className="kicker">Privacy Policy</span>
        <h1>Privacy Policy</h1>

        <p><strong>Effective date:</strong> 30 May 2026</p>

        <p>
          VANTA LABS NW LTD is an independent software business. This Privacy Policy explains
          how we handle information across Cigar Ledger, Herf Station and Vanta Shift.
        </p>

        <h2>Information we may receive</h2>
        <p>
          We may receive information you provide directly, app usage information, subscription
          status information from Apple or Google, and basic technical information needed to
          operate and improve our services.
        </p>

        <h2>How we use information</h2>
        <p>
          We use information to provide app features, manage subscriptions, improve reliability,
          respond to support requests and keep our services secure.
        </p>

        <h2>Payments</h2>
        <p>
          Payments and subscriptions are handled by Apple App Store, Google Play, or another
          payment provider where applicable. We do not directly store your full payment card details.
        </p>

        <h2>Contact</h2>
        <p>
          For privacy or support enquiries, email <a href="mailto:support@vantalabs.co.uk">support@vantalabs.co.uk</a>.
        </p>
      </section>
    </main>
  );
}
