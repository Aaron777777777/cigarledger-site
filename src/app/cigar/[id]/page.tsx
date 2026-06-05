import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
import { getCigars } from "@/lib/cigars";

export const dynamic = "force-dynamic";

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

export default async function CigarDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const cigars = await getCigars();
  const cigar: any = cigars.find((item: any) => item.id === id);

  if (!cigar) {
    return (
      <main className="ledgerApp">
        <a className="goldBack" href="/cigars">← Back to search</a>
        <section className="emptyState">
          <h1>Cigar not found</h1>
          <p>This cigar could not be loaded.</p>
        </section>
      </main>
    );
  }

  const uk = extractPrices(cigar.ukPrices);
  const eu = extractPrices(cigar.euPrices);
  const ukFrom = uk.length ? Math.min(...uk) : undefined;
  const euFrom = eu.length ? Math.min(...eu) : undefined;

  return (
    <main className="ledgerApp">
      <a className="goldBack" href="/cigars">← Back to search</a>

      <section className="detailCard">
        <div className="detailCigarImage">
          {cigar.imageUrl ? <img src={cigar.imageUrl} alt={cigar.name || "Cigar"} /> : <b>CL</b>}
        </div>

        <p className="heroLabel">{cigar.brand || "Cigar Ledger"}</p>
        <h1>{cigar.name || cigar.id}</h1>

        <div className="detailStats">
          <div>
            <span>UK price from</span>
            <strong>{money(ukFrom)}</strong>
          </div>
          <div>
            <span>EU landed from</span>
            <strong><span className="lockedPrice">£--</span></strong>
          </div>
        </div>

        <div className="detailMeta">
          <span>{cigar.country || "Country unknown"}</span>
          <span>{cigar.strength || "Strength unknown"}</span>
          <span>{cigar.ringGauge ? `${cigar.ringGauge} RG` : "Ring gauge unknown"}</span>
          <span>{cigar.lengthMm ? `${cigar.lengthMm}mm` : "Length unknown"}</span>
        </div>

        <p className="safeNote">Unlock EU landed prices and full retailer comparison with <a className="inlineProLink" href="/premium">Cigar Ledger Pro</a>.</p>
      </section>
    </main>
  );
}
