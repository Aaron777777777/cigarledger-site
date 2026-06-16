import MobileMenu from "@/components/MobileMenu";

export const metadata = {
  title: "Cuban Cigar Prices UK | Cigar Ledger",
  description: "Check Cuban cigar prices in the UK, compare retailers and understand landed costs before buying Cuban cigars.",
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
        <span className="kicker">Cuban cigar price guide</span>
        <h1>Cuban Cigar Prices UK</h1>
        <p className="lead">
          Cuban cigar prices in the UK can vary heavily between brands, sizes, retailers and import routes.
          Cigar Ledger helps you compare prices before buying so you can spot when a cigar is fairly priced,
          overpriced or better bought another way.
        </p>

        <section>
          <h2>Why Cuban cigar prices vary</h2>
          <p>
            The same Cuban cigar can look very different in price depending on UK retail margin, stock scarcity,
            box age, shipping charges and whether you are comparing a single stick, a three-pack or a full box.
            Popular names such as Cohiba, Montecristo, Partagas, Romeo y Julieta and H. Upmann often move first
            when availability changes.
          </p>
        </section>

        <section>
          <h2>UK price versus landed cost</h2>
          <p>
            A cheaper overseas price is not automatically a better deal. Once duty, VAT, shipping and handling are
            included, the real landed cost can be much closer to the UK price than it first appears. Cigar Ledger is
            designed to help you check the full picture rather than just the headline price.
          </p>
        </section>

        <section>
          <h2>Best way to use this guide</h2>
          <p>
            Use the website to find the right buying route, then use the app as your quick price checker before
            placing an order. It is especially useful for premium Cuban cigars where a small percentage difference
            can mean a noticeable saving.
          </p>
        </section>

        <div className="relatedLinks">
          <a href="/cohiba-prices-uk">Cohiba Prices UK</a>
          <a href="/montecristo-prices-uk">Montecristo Prices UK</a>
          <a href="/partagas-prices-uk">Partagas Prices UK</a>
          <a href="/uk-cigar-prices">UK Cigar Prices</a>
          <a href="/cigar-landed-cost-uk">Cigar Landed Cost UK</a>
        </div>
      </article>
    </main>
  );
}
