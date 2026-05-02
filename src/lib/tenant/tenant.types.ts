/**
 * BƯỚC 2 — ĐỊNH NGHĨA KIẾN TRÚC SAAS
 *
 * ⚠️ QUAN TRỌNG: App này là SaaS → mỗi chủ shop là 1 tenant.
 * Toàn bộ database Firestore PHẢI theo cấu trúc: tenants/{tenantId}/...
 */

export interface Tenant {
  id: string;
  name: string;
  ownerUid: string;
  createdAt: string;
  plan: "free" | "pro";
}

/**
 * All data must be stored under tenants/{tenantId}/...
 */
