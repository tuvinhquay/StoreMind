/**
 * BƯỚC 5 — TẠO AUTH PROVIDER (KHUNG SẴN)
 *
 * ⚠️ Chỉ tạo context khung gồm: user, tenantId, loading state
 * Chưa làm login.
 */

"use client";

import React, { createContext, useContext, useState, useEffect } from "react";
import type { AppUser } from "@/modules/auth/types";
import { onAuthStateChanged, signInWithGoogle, logout as firebaseLogout } from "@/modules/auth/auth.service";
import { createTenantIfNeeded } from "@/modules/auth/createTenantIfNeeded";

interface AuthContextType {
  user: AppUser | null;
  tenantId: string | null;
  loading: boolean;
  loginWithGoogle: () => Promise<void>;
  logout: () => Promise<void>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<AppUser | null>(null);
  const [tenantId, setTenantId] = useState<string | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(async (firebaseUser) => {
      if (!firebaseUser) {
        setUser(null);
        setTenantId(null);
        setLoading(false);
        return;
      }

      try {
        const tenantId = await createTenantIfNeeded(firebaseUser);
        const resolvedTenantId = tenantId ?? "";
        setTenantId(resolvedTenantId);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          name: firebaseUser.displayName ?? "",
          photoURL: firebaseUser.photoURL ?? undefined,
          tenantId: resolvedTenantId,
        });
      } catch (error) {
        console.error("AuthProvider error creating tenant:", error);
        setUser({
          uid: firebaseUser.uid,
          email: firebaseUser.email ?? "",
          name: firebaseUser.displayName ?? "",
          photoURL: firebaseUser.photoURL ?? undefined,
          tenantId: "",
        });
      } finally {
        setLoading(false);
      }
    });

    return () => unsubscribe();
  }, []);

  async function loginWithGoogle() {
    setLoading(true);
    try {
      await signInWithGoogle();
    } finally {
      setLoading(false);
    }
  }

  async function logout() {
    setLoading(true);
    try {
      await firebaseLogout();
    } finally {
      setLoading(false);
      setUser(null);
      setTenantId(null);
    }
  }

  return (
    <AuthContext.Provider
      value={{ user, tenantId, loading, loginWithGoogle, logout }}
    >
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
