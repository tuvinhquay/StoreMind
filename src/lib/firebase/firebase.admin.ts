/**
 * BƯỚC 4 — KHỞI TẠO FIREBASE (ADMIN)
 *
 * ⚠️ Chỉ dùng trong Server Components hoặc API Routes
 * Dùng biến môi trường, KHÔNG hardcode key.
 */

import admin from "firebase-admin";

// Initialize Firebase Admin SDK
if (!admin.apps.length) {
  admin.initializeApp({
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    // Nếu dùng service account, thêm vào environment variables
    // credential: admin.credential.cert({...})
  });
}

export const adminDb = admin.firestore();
export const adminAuth = admin.auth();

export default admin;
