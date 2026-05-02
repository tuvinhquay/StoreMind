/**
 * BƯỚC 5 — TẠO AUTH PROVIDER (KHUNG SẴN)
 *
 * ⚠️ Chỉ tạo context khung gồm: user, tenantId, loading state
 * Chưa làm login.
 */

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";

interface AuthContextType {
  user: { uid: string; email?: string } | null;
  tenantId: string | null;
  loading: boolean;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<{ uid: string; email?: string } | null>(
    null
  );
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // TODO: Implement authentication check with Firebase
    // For now, just set loading to false
    setLoading(false);
  }, []);

  return (
    <AuthContext.Provider value={{ user, tenantId, loading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
}
