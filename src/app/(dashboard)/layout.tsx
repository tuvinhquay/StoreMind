/**
 * BƯỚC 7 — KHUNG DASHBOARD RỖNG
 *
 * Layout cho dashboard group
 * Hiển thị sidebar + topbar
 */

"use client";

import { ProtectedRoute } from "@/components/ProtectedRoute";
import { DashboardLayout as DashboardShell } from "@/components/dashboard/DashboardLayout";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <DashboardShell>{children}</DashboardShell>
    </ProtectedRoute>
  );
}
