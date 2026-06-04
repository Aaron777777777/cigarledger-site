export default function Home() {
  return (
    <main className="page">
      <header>
        <a href="/" className="brand">Cigar Ledger</a>

        <nav>
          <a href="#products">Apps</a>
          <a href="#guides">Guides</a>
          <a href="#contact">Contact</a>
        </nav>
      </header>

      <section className="hero homeHero">
        <span className="kicker">For cigar smokers</span>
        <h1>Find cheaper cigars. Smoke with others.</h1>
        <p>
          Compare UK cigar prices, estimate landed costs, then join live cigar
          lounges with Herf Station.
        </p>
      </section>

      <section id="products" className="section homeSection">
        <div className="section-head">
          <span className="kicker">Two dedicated apps</span>
          <h2>Buy smarter. Herf together.</h2>
        </div>

        <div className="products">
          <article className="product">
            <div className="product-top">
              <img className="app-icon" src="/cl.png" alt="Cigar Ledger app icon" />
              <div>
                <div className="tag">Price Comparison</div>
                <h3>Cigar Ledger</h3>
                <p>Find cheaper cigars before you buy.</p>
              </div>
            </div>

            <div className="links">
              <a
                className="button"
                href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
                target="_blank"
                rel="noopener"
              >
                Google Play
              </a>
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
              <a
                className="button"
                href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station"
                target="_blank"
                rel="noopener"
              >
                Google Play
              </a>

              <a
                className="button"
                href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305"
                target="_blank"
                rel="noopener"
              >
                App Store
              </a>
            </div>
          </article>
        </div>
      </section>

      <section id="guides" className="section homeSection">
        <div className="section-head">
          <span className="kicker">Popular price guides</span>
          <h2>Find prices before you buy.</h2>
        </div>

        <div className="guideGrid">
          <a href="/cohiba-siglo-ii-price-uk">
            <span>Cuban price guide</span>
            <strong>Cohiba Siglo II</strong>
          </a>
          <a href="/montecristo-no-2-price-uk">
            <span>Cuban price guide</span>
            <strong>Montecristo No. 2</strong>
          </a>
          <a href="/davidoff-prices-uk">
            <span>Brand guide</span>
            <strong>Davidoff Prices UK</strong>
          </a>
          <a href="/partagas-serie-d-no-4-price-uk">
            <span>Cuban price guide</span>
            <strong>Partagás D No. 4</strong>
          </a>
          <a href="/h-upmann-magnum-46-price-uk">
            <span>Cuban price guide</span>
            <strong>H. Upmann Magnum 46</strong>
          </a>
          <a href="/cheap-cigars-uk">
            <span>Buying guide</span>
            <strong>Cheap Cigars UK</strong>
          </a>
        </div>
      </section>

      <section id="contact" className="section homeSection">
        <div className="section-head">
          <span className="kicker">Contact</span>
          <h2>Questions or support?</h2>
          <p>Send a message to Vanta Labs.</p>
        </div>

        <form
          className="contactForm"
          action="https://formsubmit.co/support@vantalabs.co.uk"
          method="post"
        >
          <div className="contactFormGrid">
            <label>
              Name
              <input type="text" name="name" required />
            </label>

            <label>
              Email
              <input type="email" name="email" required />
            </label>
          </div>

          <label>
            Message
            <textarea name="message" rows={6} required />
          </label>

          <input type="hidden" name="_subject" value="New Cigar Ledger website message" />
          <input type="hidden" name="_url" value="https://www.cigarledger.co.uk/" />
          <input type="hidden" name="_next" value="https://www.cigarledger.co.uk/?message=sent" />
          

          <button className="button" type="submit">
            Send Message
          </button>
        </form>
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
