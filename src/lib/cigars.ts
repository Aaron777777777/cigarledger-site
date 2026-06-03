import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export type Cigar = {
  id: string;
  name?: string;
  brand?: string;
  imageUrl?: string;
  sortOrder?: number;
  ukPrices?: unknown;
  euPrices?: unknown;
};

export async function getCigars(): Promise<Cigar[]> {
  const q = query(collection(db, "cigars"), orderBy("sortOrder", "asc"), limit(80));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...(doc.data() as Omit<Cigar, "id">),
  }));
}
