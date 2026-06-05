import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="vanta-footer">
      <div>
        <strong>Cigar Ledger</strong>
        <p>UK cigar price comparison by Vanta Labs.</p>
      </div>

      <nav>
        <Link href="/cigar-price-comparison">Compare prices</Link>
        <Link href="/cheap-cigars-uk">Cheap cigars</Link>
        <Link href="/about">About</Link>
        <Link href="/contact">Contact</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </nav>
    </footer>
  );
}
