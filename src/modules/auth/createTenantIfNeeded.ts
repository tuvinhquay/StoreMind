import { doc, getDoc, setDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "@/lib/firebase/firebase.client";
import { User } from "firebase/auth";

export async function createTenantIfNeeded(user: User) {
  if (!user.uid || !user.email || !user.displayName) {
    throw new Error("User data is incomplete");
  }

  const userRef = doc(db, "users", user.uid);
  const userSnapshot = await getDoc(userRef);

  if (userSnapshot.exists()) {
    const existingData = userSnapshot.data() as { tenantId?: string };
    return existingData.tenantId ?? null;
  }

  const tenantsCollection = collection(db, "tenants");
  const newTenantRef = doc(tenantsCollection);
  const tenantId = newTenantRef.id;

  await setDoc(newTenantRef, {
    name: `Cửa hàng của ${user.displayName}`,
    ownerUid: user.uid,
    createdAt: serverTimestamp(),
    plan: "free",
  });

  await setDoc(userRef, {
    email: user.email,
    name: user.displayName,
    tenantId,
    role: "owner",
  });

  return tenantId;
}
