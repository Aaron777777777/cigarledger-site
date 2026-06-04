export default function Home() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>
        <nav>
          <a href="#products">Apps</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero">
        <span className="kicker">For cigar smokers</span>
        <h1>Find cheaper cigars. Smoke with others.</h1>
        <p>
          Compare UK cigar prices, estimate import and landed costs, then join
          live cigar lounges with Herf Station.
        </p>
      </section>

      <section id="products" className="section">
        <div className="section-head">
          <span className="kicker">Two dedicated apps</span>
          <h2>Buy smarter. Herf together.</h2>
          <p>
            Cigar Ledger helps you find where to buy cheaper. Herf Station gives
            you somewhere to enjoy the smoke with other cigar enthusiasts.
          </p>
        </div>

        <div className="products">
          <article className="product">
            <div className="product-top">
              <img className="app-icon" src="/cl.png" alt="Cigar Ledger app icon" />
              <div>
                <div className="tag">Price Comparison</div>
                <h3>Cigar Ledger</h3>
                <p>Find the cheapest cigars before you buy.</p>
              </div>
            </div>
            <div className="links">
              <a className="button" href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger" target="_blank" rel="noopener">Google Play</a>
            </div>
          </article>

          <article className="product">
            <div className="product-top">
              <img className="app-icon" src="/hs.png" alt="Herf Station app icon" />
              <div>
                <div className="tag">Cigar Community</div>
                <h3>Herf Station</h3>
                <p>Smoke with others in live virtual cigar lounges.</p>
              </div>
            </div>
            <div className="links">
              <a className="button" href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station" target="_blank" rel="noopener">Google Play</a>
              <a className="button" href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305" target="_blank" rel="noopener">App Store</a>
            </div>
          </article>
        </div>
      </section>

      <section id="about" className="section">
        <div className="about">
          <div>
            <span className="kicker">About</span>
            <h2>Built to save cigar smokers money.</h2>
          </div>

          <div className="statement">
            <strong>Cigar Ledger helps UK cigar smokers compare before they buy.</strong>
            <p>
              Check UK prices, estimate import and landed costs, and find better
              buying routes before your next order. Once you’ve found your cigar,
              Herf Station gives you somewhere to smoke it with others.
            </p>
          </div>
        </div>
      </section>

      <section className="section seo-copy">
        <div className="section-head">
          <span className="kicker">Save money on cigars</span>
          <h2>Compare cigar prices before you buy.</h2>
          <p>
            Cigar Ledger helps UK cigar smokers compare prices, estimate import
            and landed costs, and discover whether buying from Europe could save
            money after duty and VAT.
          </p>
        </div>
      </section>

      <section id="guides" className="section">
        <div className="section-head">
          <span className="kicker">Popular price guides</span>
          <h2>Useful cigar searches.</h2>
        </div>

        <div className="guide-links">
          <a href="/cohiba-siglo-ii-price-uk">Cohiba Siglo II</a>
          <a href="/montecristo-no-2-price-uk">Montecristo No. 2</a>
          <a href="/davidoff-late-hour-price-uk">Davidoff Late Hour</a>
          <a href="/partagas-d4-price-uk">Partagás D No. 4</a>
          <a href="/h-upmann-magnum-46-price-uk">H. Upmann Magnum 46</a>
          <a href="/cheap-cigars-uk">Cheap Cigars UK</a>
        </div>
      </section>

      <section id="contact" className="section">
        <div className="section-head">
          <span className="kicker">Contact</span>
          <h2>Questions or support?</h2>
          <p>For app support, cigar price questions or partnerships, contact Vanta Labs directly.</p>
        </div>

        <div className="contact">
          <a href="mailto:support@vantalabs.co.uk">support@vantalabs.co.uk</a>
          <div>Manchester, United Kingdom</div>
        </div>
      </section>

      <footer>
        <div>
          <strong>Cigar Ledger</strong><br />
          UK cigar price comparison by Vanta Labs.
        </div>
        <div>© 2026 Vanta Labs</div>
      </footer>
    </main>
  );
}
