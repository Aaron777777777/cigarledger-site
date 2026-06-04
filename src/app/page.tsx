const guides = [
  ["Cohiba Siglo II", "Popular Cuban cigar price guide", "/cohiba-siglo-ii-price-uk"],
  ["Montecristo No. 2", "Classic torpedo price guide", "/montecristo-no-2-price-uk"],
  ["Davidoff Late Hour", "Premium Davidoff price guide", "/davidoff-late-hour-price-uk"],
  ["Partagás Serie D No. 4", "Robusto price comparison", "/partagas-d4-price-uk"],
  ["H. Upmann Magnum 46", "Cuban cigar price guide", "/h-upmann-magnum-46-price-uk"],
  ["Cheap Cigars UK", "Find better value cigars", "/cheap-cigars-uk"],
];

export default function Home() {
  return (
    <>
      <header className="clHeader">
        <a className="clBrand" href="/">Cigar Ledger</a>
        <nav className="clNav">
          <a href="#guides">Guides</a>
          <a href="#features">Features</a>
          <a href="#download">Download</a>
        </nav>
      </header>

      <main>
        <section className="clHero">
          <div className="clHeroInner">
            <p className="clKicker">UK cigar price comparison</p>

            <h1>Find cheaper cigars before you buy.</h1>

            <p className="clHeroText">
              Compare UK prices, see estimated import and landed costs, and find where to buy cheaper before your next order.
            </p>

            <div className="clActions">
              <a
                className="clButton"
                href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
                target="_blank"
                rel="noopener"
              >
                Download on Android
              </a>

              <a className="clButton clButtonGhost" href="#guides">
                Browse price guides
              </a>
            </div>

            <div className="clStats">
              <div>
                <strong>UK prices</strong>
                <span>Find cheaper retailers</span>
              </div>
              <div>
                <strong>Landed costs</strong>
                <span>See import estimates</span>
              </div>
              <div>
                <strong>Save money</strong>
                <span>Know before buying</span>
              </div>
            </div>
          </div>
        </section>

        <section id="guides" className="clSection">
          <div className="clSectionHead">
            <p className="clKicker">Popular searches</p>
            <h2>Start with the cigars people actually search for.</h2>
            <p>
              Selected price guides help cigar smokers compare UK prices, check
              import routes and decide where to buy next.
            </p>
          </div>

          <div className="guideGrid">
            {guides.map(([title, detail, href]) => (
              <a className="guideCard" href={href} key={href}>
                <span>Price guide</span>
                <h3>{title}</h3>
                <p>{detail}</p>
                <b>View guide →</b>
              </a>
            ))}
          </div>
        </section>

        <section id="features" className="clSection compact">
          <div className="clSectionHead">
            <p className="clKicker">Why Cigar Ledger?</p>
            <h2>Built for one simple reason: save money.</h2>
            <p>
              Cigar prices vary wildly. Cigar Ledger helps you see where to buy cheaper, compare UK prices and check whether importing could save you money.
            </p>
          </div>

          <div className="featureList">
            <article>
              <span>01</span>
              <h3>Compare UK prices</h3>
              <p>Compare UK retailer prices before committing to your next order.</p>
            </article>

            <article>
              <span>02</span>
              <h3>Estimate import costs</h3>
              <p>See estimated landed costs after duty and VAT before importing.</p>
            </article>

            <article>
              <span>03</span>
              <h3>Save before you smoke</h3>
              <p>Find the cheaper buying route before you spend your money.</p>
            </article>
          </div>
        </section>

        <section className="clSplit">
          <div>
            <p className="clKicker">Bought your cigars?</p>
            <h2>Save money, then smoke with others.</h2>
          </div>

          <div>
            <p>
              Use Cigar Ledger to find cheaper cigars, then join other cigar smokers in live virtual lounges on Herf Station.
            </p>

            <a
              className="clButton clButtonGhost"
              href="https://apps.apple.com/app/herf-station-cigar-lounge/id6771880305"
              target="_blank"
              rel="noopener"
            >
              View Herf Station
            </a>
          </div>
        </section>

        <section id="download" className="downloadBand">
          <p className="clKicker">Download</p>
          <h2>Find cheaper cigars before your next order.</h2>
          <p>Download Cigar Ledger for Android and check UK prices, landed costs and better buying routes on the go.</p>

          <a
            className="clButton"
            href="https://play.google.com/store/apps/details?id=com.aaronsapps.cigarledger"
            target="_blank"
            rel="noopener"
          >
            Download on Android
          </a>
        </section>
      </main>
    </>
  );
}
