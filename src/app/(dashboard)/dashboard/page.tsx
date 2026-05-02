/**
 * BƯỚC 7 — KHUNG DASHBOARD RỖNG
 *
 * Dashboard page - Nội dung chính sẽ được thêm vào ở Prompt 02+
 */

"use client";

import { useAuth } from "@/providers/AuthProvider";

export default function DashboardPage() {
  const { user, tenantId, loading } = useAuth();

  if (loading) {
    return <div className="text-center py-8">Loading...</div>;
  }

  return (
    <div>
      <div className="bg-white rounded-lg shadow p-6">
        <h2 className="text-xl font-semibold text-gray-900 mb-4">
          Welcome to Dashboard
        </h2>
        <div className="space-y-4">
          <div className="bg-blue-50 border border-blue-200 rounded p-4">
            <p className="text-blue-900">
              {user ? `Logged in as: ${user.email}` : "Not logged in"}
            </p>
          </div>
          <div className="bg-green-50 border border-green-200 rounded p-4">
            <p className="text-green-900">
              {tenantId ? `Tenant: ${tenantId}` : "No tenant assigned"}
            </p>
          </div>
          <p className="text-gray-500 text-sm">
            Foundation phase - More features coming in Prompt 02+
          </p>
        </div>
      </div>
    </div>
  );
}
