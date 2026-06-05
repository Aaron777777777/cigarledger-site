import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <strong>Cigar Ledger</strong>
          <p>UK cigar price comparison by Vanta Labs.</p>
          <p>Built for cigar smokers who check before they buy.</p>
        </div>

        <p className="footer-copy">© 2026 Vanta Labs</p>

        <nav className="footer-links" aria-label="Footer navigation">
          <Link href="/cigar-price-comparison">Compare prices</Link>
          <Link href="/cheap-cigars-uk">Cheap cigars</Link>
          <Link href="/about">About</Link>
          <Link href="/contact">Contact</Link>
          <Link href="/privacy">Privacy</Link>
          <Link href="/terms">Terms</Link>
        </nav>
      </div>
    </footer>
  );
}
