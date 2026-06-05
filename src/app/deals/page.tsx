import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
import { getCigars } from "@/lib/cigars";
import CigarDealsApp from "@/components/CigarDealsApp";

export const dynamic = "force-dynamic";

export default async function DealsPage() {
  const cigars = await getCigars();

  return <CigarDealsApp cigars={cigars as any} />;
}
