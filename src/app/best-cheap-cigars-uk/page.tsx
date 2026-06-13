import type { Metadata } from "next";
import SiteFooter from "@/components/SiteFooter";

export const metadata: Metadata = {
  title: "Best Cheap Cigars UK | Cigar Ledger",
  description: "Explore the best cheap cigars in the UK, from everyday smokes to affordable premium cigars. Download Cigar Ledger to compare cigar prices and find better deals.",
};

export default function Page() {
  return (
    <>
      <main className="seo-page">
        <nav className="seo-nav">
          <a href="/">CIGAR LEDGER</a>
          <div>
            <a href="/">Home</a>
            <a href="/cigars">All Cigars</a>
            <a href="/cigar-price-comparison">Compare Prices</a>
          </div>
        </nav>

        <section className="seo-hero">
          <span className="kicker">CIGAR PRICE GUIDE</span>
          <h1>Best Cheap Cigars UK</h1>
          <p>Explore the best cheap cigars in the UK, from everyday smokes to affordable premium cigars. Cigar Ledger helps you compare prices, track favourites and make better buying decisions from the app.</p>
        </section>

        <section className="app-grid">
          <div className="app-card primary">
            <img className="app-logo" src="/cl.png" alt="Cigar Ledger app icon" />
            <div>
              <h2>Download Cigar Ledger</h2>
              <p>Compare UK cigar prices, save favourites and find better-value cigars without checking every retailer manually.</p>
              <a className="gold-button" href="https://play.google.com/store/search?q=Cigar%20Ledger&c=apps">
                Download on Android →
              </a>
            </div>
          </div>

          <div className="app-card">
            <img className="app-logo" src="/hs.png" alt="Herf Station app icon" />
            <div>
              <h2>Herf Station</h2>
              <p>Found your cigar? Join live cigar lounges with other smokers and talk through what you are enjoying.</p>
              <div className="button-row">
                <a className="outline-button" href="/">Android →</a>
                <a className="outline-button" href="/">iOS →</a>
              </div>
            </div>
          </div>
        </section>

        <section className="content-card">
          <h2>How to find better cigar prices</h2>
          <p>
            Searches like <strong>best cheap cigars UK</strong>, <strong>value cigars UK</strong> and <strong>affordable premium cigars</strong> usually mean one thing:
            you want to enjoy a good cigar without overpaying. The problem is that cigar prices can vary between retailers,
            pack sizes, singles and boxes.
          </p>
          <p>
            Cigar Ledger is built as a simple way to compare UK cigar prices before you buy. The website gives you a quick
            guide, while the app gives you the better experience for searching, saving favourites and checking prices on the go.
          </p>

          <h2>What makes a cigar good value?</h2>
          <p>
            The cheapest cigar is not always the best buy. A better-value cigar is one that gives you the flavour, size,
            brand and smoking time you want at a sensible price. That is why comparing price ranges matters more than just
            picking the lowest number.
          </p>

          <h2>Why use the app?</h2>
          <p>
            The full Cigar Ledger experience lives in the app. Use it to compare cigars, keep track of favourites and avoid
            having to search the same retailer pages again and again.
          </p>

          <h2>What should you look for in a good value cigar?</h2>
          <p>
            Price is only one part of the equation. A cigar that costs less today
            is not necessarily better value if it does not suit your preferred
            strength, flavour profile or smoking time. Many experienced smokers
            focus on overall value rather than simply finding the lowest price.
          </p>

          <p>
            Comparing cigars across different retailers can reveal surprisingly
            large differences. Singles, packs and boxes can all produce different
            effective prices, making comparison important before buying.
          </p>

          <h2>Why do cigar prices vary so much?</h2>
          <p>
            Retailers operate with different overheads, stock levels, shipping
            arrangements and promotions. The same cigar can often be listed at
            noticeably different prices depending on where you look.
          </p>

          <p>
            Exchange rates, import costs and availability can also influence
            pricing. Premium Cuban cigars in particular can fluctuate depending
            on stock and demand.
          </p>

          <h2>How Cigar Ledger helps</h2>
          <p>
            Cigar Ledger was built to make cigar price comparison easier. Instead
            of manually checking retailer after retailer, the app helps users
            compare UK cigar prices, discover better-value options and keep track
            of favourites in one place.
          </p>

          <p>
            Whether you are looking for everyday cigars, affordable Cubans or
            simply trying to get the best value for money, Cigar Ledger helps
            remove much of the guesswork from the buying process.
          </p>

          <h2>Popular searches related to this topic</h2>
          <p>
            Many visitors also search for cheap cigars UK, cheapest cigars UK,
            cigar deals UK, cigar discounts UK, Cuban cigar prices and cigar
            price comparison tools before making a purchase decision.
          </p>


          <h2>Related cigar guides</h2>
          <div className="related-links">
              <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
              <a href="/cheapest-cigars-uk">Cheapest Cigars UK</a>
              <a href="/cigar-deals-uk">Cigar Deals UK</a>
              <a href="/cigar-discounts-uk">Cigar Discounts UK</a>
              <a href="/best-cigar-prices-uk">Best Cigar Prices UK</a>
              <a href="/cigar-price-comparison">Cigar Price Comparison</a>
          </div>
        </section>
      </main>

      <SiteFooter />
    </>
  );
}
