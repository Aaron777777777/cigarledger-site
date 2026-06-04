export const metadata = {
  title: "Contact Cigar Ledger | Cigar Price App Support",
  description: "Contact Cigar Ledger for app support, cigar price questions, partnerships and enquiries.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="/">Home</a>
          <a href="/about">About</a>
        </nav>
      </header>

      <section className="hero smallHero">
        <span className="kicker">Contact</span>
        <h1>Questions or support?</h1>
        <p>
          For Cigar Ledger support, price questions or partnerships, contact Vanta Labs directly.
        </p>
        <p><a href="mailto:support@vantalabs.co.uk">support@vantalabs.co.uk</a></p>
      </section>
    </main>
  );
}
