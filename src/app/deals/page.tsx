import { getCigars } from "@/lib/cigars";

export const dynamic = "force-dynamic";

function extractPrices(source: any): number[] {
  if (!source) return [];

  const values = Array.isArray(source) ? source : Object.values(source);

  return values
    .map((item: any) =>
      Number(
        String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? item ?? "")
          .replace(/[£,]/g, "")
      )
    )
    .filter((n) => Number.isFinite(n) && n > 0);
}

function money(value?: number) {
  if (!value) return "—";
  return `£${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

export default async function DealsPage() {
  const cigars = await getCigars();

  const enriched = cigars.map((cigar: any) => {
    const uk = extractPrices(cigar.ukPrices);
    const eu = extractPrices(cigar.euPrices);

    return {
      ...cigar,
      ukFrom: uk.length ? Math.min(...uk) : undefined,
      euFrom: eu.length ? Math.min(...eu) : undefined,
    };
  });

  const picks = enriched.slice(0, 6);
  const deals = enriched.slice(1, 8);

  return (
    <main className="phoneApp">
      <header className="appDealHeader">
        <h1>TOP DEALS</h1>
        <span>THIS WEEK</span>
        <button>BOX</button>
      </header>

      <section className="dealSection">
        <h2>THIS WEEK’S PICKS</h2>

        <div className="pickScroller">
          {picks.map((cigar: any, index: number) => (
            <article className="pickCard" key={cigar.id}>
              <div className="badge">
                {index === 0 ? "BEST BOX GAP" : index === 1 ? "CUBAN CLASSIC" : "PREMIUM PICK"}
              </div>

              <div className="pickImage">
                {cigar.imageUrl ? (
                  <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} />
                ) : (
                  <span>CL</span>
                )}
              </div>

              <h3>{cigar.name || cigar.id}</h3>
              <p>{cigar.brand || "Premium cigar"}</p>
              <strong>UK from {money(cigar.ukFrom)}</strong>
            </article>
          ))}
        </div>

        <div className="dots">
          <span className="active"></span>
          <span></span>
          <span></span>
        </div>
      </section>

      <section className="dealSection">
        <h2>THIS WEEK’S BEST DEALS</h2>

        <div className="dealList">
          {deals.map((cigar: any, index: number) => (
            <article className="dealCard" key={cigar.id}>
              <div className="dealRank">#{index + 1} BEST DEAL</div>

              <div className="dealBody">
                <div className="dealImage">
                  {cigar.imageUrl ? (
                    <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} />
                  ) : (
                    <span>CL</span>
                  )}
                </div>

                <div>
                  <h3>{cigar.name || cigar.id}</h3>
                  <p>{cigar.brand || "Premium cigar"}</p>

                  <div className="pricePair">
                    <div>
                      <span>UK price from</span>
                      <strong>{money(cigar.ukFrom)}</strong>
                    </div>
                    <div>
                      <span>EU landed from</span>
                      <strong>{money(cigar.euFrom)}</strong>
                    </div>
                  </div>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="herfCta">
        <h2>Smoke it with others?</h2>
        <p>Join a live lounge on Herf Station.</p>
        <a
          href="https://play.google.com/store/apps/details?id=com.vantalabs.herf_station"
          target="_blank"
        >
          Open Herf Station →
        </a>
      </section>

      <nav className="bottomNav">
        <a href="/cigars">⌕<span>Search</span></a>
        <a className="active" href="/deals">♨<span>Deals</span></a>
        <a href="#">♡<span>Watchlist</span></a>
        <a href="#">✪<span>Pro</span></a>
      </nav>
    </main>
  );
}
