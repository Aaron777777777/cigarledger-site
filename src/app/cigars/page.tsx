import { getCigars } from "@/lib/cigars";

export const dynamic = "force-dynamic";

function extractPrices(source: any): number[] {
  if (!source) return [];

  if (Array.isArray(source)) {
    return source
      .map((item) => Number(String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? "").replace(/[£,]/g, "")))
      .filter((n) => Number.isFinite(n) && n > 0);
  }

  if (typeof source === "object") {
    return Object.values(source)
      .map((item: any) => Number(String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? item ?? "").replace(/[£,]/g, "")))
      .filter((n) => Number.isFinite(n) && n > 0);
  }

  return [];
}

function money(value?: number) {
  if (!value) return "Not listed";
  return `£${value.toFixed(value % 1 === 0 ? 0 : 2)}`;
}

export default async function CigarsPage() {
  const cigars = await getCigars();

  return (
    <main className="appShell">
      <section className="appTop">
        <p className="kicker">Cigar Ledger</p>
        <h1>Search cigars</h1>
        <p>Compare UK prices and EU landed costs before you buy.</p>

        <div className="searchMock">Search cigars or brands</div>

        <div className="tabs">
          <span className="active">Compare</span>
          <span>Watchlist</span>
          <span>Top Deals</span>
        </div>
      </section>

      <section className="appList">
        {cigars.map((cigar: any) => {
          const ukPrices = extractPrices(cigar.ukPrices);
          const euPrices = extractPrices(cigar.euPrices);

          const cheapestUk = ukPrices.length ? Math.min(...ukPrices) : undefined;
          const cheapestEu = euPrices.length ? Math.min(...euPrices) : undefined;

          return (
            <article className="appCigarCard" key={cigar.id}>
              <div className="thumbWrap">
                {cigar.imageUrl ? (
                  <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} />
                ) : (
                  <span>CL</span>
                )}
              </div>

              <div className="cigarInfo">
                <div className="titleRow">
                  <div>
                    <h2>{cigar.name || cigar.id}</h2>
                    <p>{cigar.brand || "Premium cigar"}</p>
                  </div>
                  <span className="chevron">›</span>
                </div>

                <div className="summaryRows">
                  <div className="summaryPill">
                    <span>UK price from</span>
                    <strong>{money(cheapestUk)}</strong>
                  </div>

                  <div className="summaryPill">
                    <span>EU landed from</span>
                    <strong>{money(cheapestEu)}</strong>
                  </div>
                </div>

                <p className="safeNote">Full retailer comparison available in Cigar Ledger.</p>
              </div>
            </article>
          );
        })}
      </section>
    </main>
  );
}
