export default function WatchlistPage() {
  return (
    <main className="ledgerApp">
      <section className="dealsHeader">
        <div>
          <p className="heroLabel">Watchlist</p>
          <h1>Track cigars you care about.</h1>
        </div>
      </section>

      <section className="emptyState">
        <h2>Watchlist coming next.</h2>
        <p>This will use browser storage first, then account sync later if needed.</p>
        <a href="/cigars">Search cigars →</a>
      </section>
    </main>
  );
}
