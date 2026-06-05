import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="cl-footer">
      <div className="cl-footer-inner">
        <div>
          <p className="cl-footer-title">Cigar Ledger</p>
          <p className="cl-footer-text">UK cigar price comparison by Vanta Labs.</p>
          <p className="cl-footer-text">Built for cigar smokers who check before they buy.</p>
        </div>

        <nav className="cl-footer-links" aria-label="Footer navigation">
          <Link href="/cigar-price-comparison">Compare prices</Link>
          <Link href="/cheap-cigars-uk">Cheap cigars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>

        <p className="cl-footer-copy">© 2026 Vanta Labs</p>
      </div>
    </footer>
  );
}
