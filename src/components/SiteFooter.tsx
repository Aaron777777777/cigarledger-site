import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>Cigar Ledger</strong><br />
        UK cigar price comparison by Vanta Labs.
      </div>

      <div className="footerLinks">
        <Link href="/cigar-price-comparison">Compare prices</Link>
        <Link href="/cheap-cigars-uk">Cheap cigars</Link>
        <Link href="/contact">Contact</Link>
      </div>

      <div className="footerLegal">
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
        <span>© 2026 Vanta Labs</span>
      </div>
    </footer>
  );
}
