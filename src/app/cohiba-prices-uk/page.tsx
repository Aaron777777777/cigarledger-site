import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: "Cohiba Prices UK | Cigar Ledger",
  description: "Compare Cohiba prices in the UK, including popular Cohiba cigars, UK buying routes and landed cost checks.",
};

export default function Page() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="/">Home</a>
          <a href="/cigars">Cigars</a>
          <a href="/about">About</a>
          <a href="/privacy">Privacy</a>
          <a href="/terms">Terms</a>
        </nav>
        <MobileMenu />
      </header>

      <article className="seoArticle">
        <span className="kicker">Cohiba price guide</span>
        <h1>Cohiba Prices UK</h1>
        <p className="lead">
          Cohiba is one of the most searched Cuban cigar brands in the UK, and prices can move quickly depending on
          availability, size and retailer. Cigar Ledger helps you compare Cohiba prices before buying.
        </p>

        <section>
          <h2>Popular Cohiba cigars to compare</h2>
          <p>
            UK buyers often compare prices for the Cohiba Robusto, Siglo II, Siglo VI, Behike 52 and Behike 56.
            These cigars can sit in very different price brackets, so it helps to compare like-for-like before
            deciding whether a UK retailer, box split, travel purchase or import route makes sense.
          </p>
        </section>

        <section>
          <h2>Why Cohiba prices are usually higher</h2>
          <p>
            Cohiba tends to command premium pricing because of brand demand, limited availability and collector
            interest. That means even small differences between retailers can matter. A cigar that looks only
            slightly cheaper elsewhere may become expensive once postage, duty and VAT are included.
          </p>
        </section>

        <section>
          <h2>Check the real price before buying</h2>
          <p>
            The best Cohiba deal is not always the lowest headline price. Compare the UK price, estimated landed
            cost and delivery route before spending. Cigar Ledger is built to make that check quicker.
          </p>
        </section>

        <div className="relatedLinks">
          <a href="/cohiba-robusto-price-uk">Cohiba Robusto Price UK</a>
          <a href="/cohiba-siglo-ii-price-uk">Cohiba Siglo II Price UK</a>
          <a href="/cohiba-siglo-vi-price-uk">Cohiba Siglo VI Price UK</a>
          <a href="/cohiba-behike-52-price-uk">Cohiba Behike 52 Price UK</a>
          <a href="/cuban-cigar-prices-uk">Cuban Cigar Prices UK</a>
        </div>
      </article>
    </main>
  );
}
