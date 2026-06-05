import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
export default function WatchlistPage() {
  return (
    <main className="ledgerApp">
      <section className="dealsHeader">
        <div>
          <p className="heroLabel">Watchlist</p>
          <h1>Your saved cigars.</h1>
        </div>
      </section>

      <section className="emptyState">
        <h2>Watchlist coming next.</h2>
        <p>We’ll mirror the app watchlist here once the core Search and Deals screens are locked.</p>
        <a href="/cigars">Search cigars →</a>
      </section>
    </main>
  );
}
