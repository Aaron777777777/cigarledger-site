import SiteFooter from "@/components/SiteFooter";
import MobileMenu from "@/components/MobileMenu";
import { getCigars } from "@/lib/cigars";
import CigarSearchApp from "@/components/CigarSearchApp";

export const dynamic = "force-dynamic";

export default async function CigarsPage() {
  const cigars = await getCigars();

  return <CigarSearchApp cigars={cigars as any} />;
}
