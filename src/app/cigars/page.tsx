import { getCigars } from "@/lib/cigars";

export const dynamic = "force-dynamic";

export const metadata = {
  title: "All Cigars | Cigar Ledger UK Cigar Price Search",
  description:
    "Search cigars, compare UK cigar prices and find cheaper cigar options with Cigar Ledger.",
};

function priceFrom(prices: any) {
  if (!prices) return null;
  const values = Array.isArray(prices) ? prices : Object.values(prices);
  const nums = values
    .map((item: any) =>
      Number(String(item?.price ?? item?.singlePrice ?? item?.boxPrice ?? item ?? "").replace(/[£,]/g, ""))
    )
    .filter((n) => Number.isFinite(n) && n > 0);
  return nums.length ? Math.min(...nums) : null;
}

export default async function CigarsPage() {
  const cigars = await getCigars();
  const visible = cigars.slice(0, 48);

  return (
    <main className="legal-page">
      <section className="legal-card">
        <p className="kicker">Cigar Ledger</p>
        <h1>Search cigars and compare UK cigar prices</h1>

        <p>
          Browse popular cigars, check UK price ranges and use Cigar Ledger to find cheaper places to buy.
          For full live comparisons, watchlists and premium price tools, use the app.
        </p>

        <div className="cta-row">
          <a className="primary-cta" href="https://play.google.com/store/search?q=Cigar%20Ledger&c=apps">
            Download Cigar Ledger
          </a>
          <a className="secondary-cta" href="/">
            Explore Vanta cigar apps
          </a>
        </div>

        <section className="guide-grid">
          {visible.map((cigar: any) => {
            const uk = priceFrom(cigar.ukPrices);
            return (
              <article className="guide-card" key={cigar.id}>
                {cigar.imageUrl ? <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} /> : null}
                <h2>{cigar.name || "Cigar"}</h2>
                <p>{cigar.brand || "Cigar price guide"}</p>
                <strong>{uk ? `UK from £${uk.toFixed(uk % 1 === 0 ? 0 : 2)}` : "Price guide in app"}</strong>
                <a href={`/cigar/${cigar.id}`}>View cigar →</a>
              </article>
            );
          })}
        </section>
      </section>
    </main>
  );
}
