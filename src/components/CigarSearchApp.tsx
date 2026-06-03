"use client";

import { useMemo, useState } from "react";

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
      Number(
        String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? item ?? "")
          .replace(/[£,]/g, "")
      )
    )
    .filter((n) => Number.isFinite(n) && n > 0);
}

function money(value?: number) {
  if (!value) return "--";
  return `£${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

function brandAsset(brand?: string) {
  if (!brand) return "";
  const slug = brand
    .toLowerCase()
    .replaceAll("&", "and")
    .replaceAll(" ", "_")
    .replaceAll("'", "");
  return `/assets/brands/${slug}.png`;
}

function enrich(cigar: Cigar) {
  const uk = extractPrices(cigar.ukPrices);
  const eu = extractPrices(cigar.euPrices);
  const ukFrom = uk.length ? Math.min(...uk) : undefined;
  const euFrom = eu.length ? Math.min(...eu) : undefined;
  const saving = ukFrom && euFrom && euFrom < ukFrom ? ukFrom - euFrom : 0;

  return { ...cigar, ukFrom, euFrom, saving };
}

export default function CigarSearchApp({ cigars }: { cigars: Cigar[] }) {
  const [query, setQuery] = useState("");
  const [filter, setFilter] = useState("All");

  const enriched = useMemo(() => cigars.map(enrich), [cigars]);

  const hero = useMemo(() => {
    return [...enriched]
      .filter((c) => c.ukFrom && c.euFrom)
      .sort((a, b) => b.saving - a.saving)[0];
  }, [enriched]);

  const visible = useMemo(() => {
    const q = query.trim().toLowerCase();

    return enriched
      .filter((c) => {
        if (!q) return true;
        return `${c.name || ""} ${c.brand || ""}`.toLowerCase().includes(q);
      })
      .filter((c) => {
        if (filter === "Cuban") return (c.country || "").toLowerCase() === "cuba";
        if (filter === "New World") return (c.country || "").toLowerCase() !== "cuba";
        if (filter === "Best Savings") return c.saving > 0;
        return true;
      })
      .filter((c) => !hero || c.id !== hero.id);
  }, [enriched, query, filter, hero]);

  return (
    <main className="ledgerApp">
      {hero && (
        <section className="heroDealCard">
          <div className="badgeRow">
            <span>BEST BOX DEAL</span>
            <span>{hero.saving > 0 ? "IMPORT VALUE" : "UK BEST"}</span>
          </div>

          <p className="heroLabel">TOP BUY THIS WEEK</p>

          <div className="heroMain">
            <div className="heroCigarImage">
              {hero.imageUrl ? <img src={hero.imageUrl} alt={hero.name || "Cigar"} /> : <b>CL</b>}
            </div>

            <div>
              <div className="brandLine">
                <img src={brandAsset(hero.brand)} alt="" />
                <h1>{hero.name}</h1>
              </div>
              <p>{hero.brand}</p>
            </div>
          </div>

          <div className="heroDecision">
            <div>
              <strong>{hero.saving > 0 ? "Import may be cheaper" : "UK currently looks best"}</strong>
              <span>Compare the full breakdown in Cigar Ledger</span>
            </div>

            <div className="heroMetric">
              <span>UK from</span>
              <strong>{money(hero.ukFrom)}</strong>
            </div>

            <div className="heroMetric">
              <span>EU landed from</span>
              <strong>{money(hero.euFrom)}</strong>
            </div>
          </div>
        </section>
      )}

      <section className="searchPanel">
        <div className="searchBox">
          <span>⌕</span>
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search cigars..."
          />
        </div>

        <div className="filterRow">
          {["All", "Cuban", "New World", "Best Savings"].map((item) => (
            <button
              key={item}
              onClick={() => setFilter(item)}
              className={filter === item ? "active" : ""}
            >
              {item}
            </button>
          ))}
        </div>
      </section>

      <h2 className="sectionLabel">ALL CIGARS</h2>

      <section className="ledgerList">
        {visible.map((cigar) => (
          <article className="ledgerCard" key={cigar.id}>
            <div className="ledgerImage">
              {cigar.imageUrl ? <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} /> : <b>CL</b>}
            </div>

            <div className="ledgerBody">
              <div className="ledgerTitle">
                <div>
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
      </section>

      <nav className="bottomNav">
        <a className="active" href="/cigars">⌕<span>Search</span></a>
        <a href="/deals">♨<span>Deals</span></a>
        <a href="/watchlist">♡<span>Watchlist</span></a>
        <a href="/premium">✪<span>Pro</span></a>
      </nav>
    </main>
  );
}
