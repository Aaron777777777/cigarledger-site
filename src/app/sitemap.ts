import type { MetadataRoute } from "next";

const base = "https://www.cigarledger.co.uk";

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    "",
    "/about",
    "/contact",
    "/cheapest-cigars-uk",
    "/cheap-cigars-uk",
    "/compare-cigar-prices-uk",
    "/cigar-price-comparison",
    "/uk-cigar-prices",
    "/cigar-import-duty-uk",
    "/cigar-landed-cost-uk",
    "/importing-cigars-from-europe-to-uk",
    "/cheap-cuban-cigars-uk",
    "/cuban-cigar-prices",
    "/best-cigars-under-10",
    "/best-cigars-under-15",
    "/best-cigars-under-20",
    "/cohiba-siglo-ii-price-uk",
    "/montecristo-no-2-price-uk",
    "/davidoff-late-hour-price-uk",
    "/partagas-d4-price-uk",
    "/h-upmann-magnum-46-price-uk",
  ];

  return routes.map((route) => ({
    url: `${base}${route}`,
    lastModified: new Date(),
  }));
}
