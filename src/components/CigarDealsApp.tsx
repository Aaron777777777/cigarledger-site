"use client";

type Cigar = {
  id: string;
  name?: string;
  brand?: string;
  country?: string;
  imageUrl?: string;
  ukPrices?: any;
  euPrices?: any;
};

function extractPrices(source: any): number[] {
  if (!source) return [];
  const values = Array.isArray(source) ? source : Object.values(source);

  return values
    .map((item: any) =>
      Number(String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? item ?? "").replace(/[£,]/g, ""))
    )
    .filter((n) => Number.isFinite(n) && n > 0);
}

function money(value?: number) {
  if (!value) return "--";
  return `£${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

function enrich(cigar: Cigar) {
  const uk = extractPrices(cigar.ukPrices);
  const eu = extractPrices(cigar.euPrices);
  const ukFrom = uk.length ? Math.min(...uk) : undefined;
  const euFrom = eu.length ? Math.min(...eu) : undefined;
  const saving = ukFrom && euFrom && euFrom < ukFrom ? ukFrom - euFrom : 0;

  return { ...cigar, ukFrom, euFrom, saving };
}

export default function CigarDealsApp({ cigars }: { cigars: Cigar[] }) {
  const deals = cigars
    .map(enrich)
    .filter((cigar) => cigar.ukFrom && cigar.euFrom && cigar.saving > 0)
    .sort((a, b) => b.saving - a.saving);

  const picks = deals.slice(0, 3);
  const bestDeals = deals.slice(0, 9);

  return (
    <main className="ledgerApp">
      <section className="dealsHeader">
        <div>
          <p className="heroLabel">Top Deals</p>
          <h1>Best cigar deals this week.</h1>
        </div>
        <span>BOX</span>
      </section>

      <section>
        <h2 className="sectionLabel">THIS WEEK&apos;S PICKS</h2>

        <div className="weeklyScroller">
          {picks.map((cigar, index) => (
            <article className="weeklyCard" key={cigar.id}>
              <span className="weeklyBadge">
                {index === 0 ? "BEST BOX GAP" : index === 1 ? "CUBAN CLASSIC" : "PREMIUM PICK"}
              </span>

              <div className="weeklyImage">
                {cigar.imageUrl ? <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} /> : <b>CL</b>}
              </div>

              <h3>{cigar.name}</h3>
              <p>{cigar.brand}</p>
              <strong>Save around {money(cigar.saving)}</strong>
            </article>
          ))}
        </div>
      </section>

      <section>
        <h2 className="sectionLabel">THIS WEEK&apos;S BEST DEALS</h2>

        <div className="ledgerList">
          {bestDeals.map((cigar, index) => (
            <article className="ledgerCard" key={cigar.id}>
              <div className="ledgerImage">
                {cigar.imageUrl ? <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} /> : <b>CL</b>}
              </div>

              <div className="ledgerBody">
                <div className="ledgerTitle">
                  <div>
                    <small className="rankBadge">#{index + 1} BEST DEAL</small>
                    <h3>{cigar.name}</h3>
                    <p>{cigar.brand}</p>
                  </div>
                  <a className="cardArrow" href={`/cigar/${cigar.id}`}>›</a>
                </div>

                <div className="ledgerPrices">
                  <div>
                    <small>UK price from</small>
                    <strong>{money(cigar.ukFrom)}</strong>
                  </div>
                  <div>
                    <small>EU landed from</small>
                    <strong>{money(cigar.euFrom)}</strong>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <nav className="bottomNav">
        <a href="/cigars">⌕<span>Search</span></a>
        <a className="active" href="/deals">♨<span>Deals</span></a>
        <a href="/watchlist">♡<span>Watchlist</span></a>
        <a href="/premium">✪<span>Pro</span></a>
      </nav>
    </main>
  );
}
