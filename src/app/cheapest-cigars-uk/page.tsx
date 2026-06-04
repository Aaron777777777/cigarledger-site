export const metadata = {
  title: "Cheapest Cigars UK | Find Cheaper Cigars Before You Buy",
  description:
    "Find the cheapest cigars in the UK. Compare UK cigar prices, estimate import and landed costs, and check better buying routes with Cigar Ledger.",
};

export default function CheapestCigarsUkPage() {
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

      <section className="hero smallHero">
        <span className="kicker">Cheap cigars UK</span>
        <h1>Cheapest cigars UK.</h1>
        <p>
          Cigar prices can vary between UK retailers and European import routes.
          Cigar Ledger helps you compare prices before buying.
        </p>
        <p>
          Use the app to check UK prices, estimate import and landed costs, and
          find where your next cigar may cost less.
        </p>
        <p>
          <a
            className="button"
            href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
            target="_blank"
            rel="noopener"
          >
            Download Cigar Ledger
          </a>
        </p>
      </section>
    </main>
  );
}
