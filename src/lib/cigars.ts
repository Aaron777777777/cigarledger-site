import { collection, getDocs, limit, orderBy, query } from "firebase/firestore";
import { db } from "./firebase";

export type Cigar = {
  id: string;
  name?: string;
  brand?: string;
  country?: string;
  imageUrl?: string;
  sortOrder?: number;
  boxQuantity?: number;
  lengthMm?: number;
  ringGauge?: number;
  strength?: string;
  ukPrices?: unknown;
  euPrices?: unknown;
};

function cleanFirestoreData(data: any) {
  const clean = { ...data };

  if (clean.updatedAt?.toDate) {
    clean.updatedAt = clean.updatedAt.toDate().toISOString();
  }

  return JSON.parse(JSON.stringify(clean));
}

export async function getCigars(): Promise<Cigar[]> {
  const q = query(collection(db, "cigars"), orderBy("sortOrder", "asc"), limit(120));
  const snap = await getDocs(q);

  return snap.docs.map((doc) => ({
    id: doc.id,
    ...cleanFirestoreData(doc.data()),
  }));
}
