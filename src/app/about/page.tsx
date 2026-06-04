export const metadata = {
  title: "About Cigar Ledger | UK Cigar Price Comparison",
  description: "Cigar Ledger helps UK cigar smokers compare cigar prices, estimate import costs and find cheaper buying routes.",
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

      <section className="hero smallHero">
        <span className="kicker">About</span>
        <h1>Built to help cigar smokers save money.</h1>
        <p>
          Cigar Ledger helps UK cigar smokers compare prices before buying, estimate import and landed costs, and find better value before placing an order.
        </p>
        <p>
          Herf Station then gives cigar smokers somewhere to enjoy the smoke with others in live virtual lounges.
        </p>
      </section>
    </main>
  );
}
