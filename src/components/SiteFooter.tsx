import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="siteFooter">
      <div>
        <strong>Cigar Ledger</strong><br />
        UK cigar price comparison by Vanta Labs.<br />
        Built for cigar smokers who check before they buy.
      </div>

      <div className="footerLinks">
        <Link href="/">Home</Link>
        <Link href="/about">About</Link>
        <Link href="/privacy">Privacy</Link>
        <Link href="/terms">Terms</Link>
      </div>

      <div>© 2026 Vanta Labs</div>
    </footer>
  );
}
