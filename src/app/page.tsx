"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { useAuth } from "@/modules/auth/useAuth";

export default function Home() {
  const { user, loading, loginWithGoogle } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      router.replace("/dashboard");
    }
  }, [loading, user, router]);

  async function handleLogin() {
    await loginWithGoogle();
    router.push("/dashboard");
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 px-6">
      <div className="w-full max-w-md rounded-3xl bg-white/95 p-10 shadow-xl ring-1 ring-slate-200">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-slate-900 mb-3">StoreMind</h1>
          <p className="text-lg text-slate-600 mb-8">
            Đăng nhập để quản lý cửa hàng của bạn.
          </p>
        </div>
        <button
          type="button"
          onClick={handleLogin}
          className="w-full inline-flex items-center justify-center gap-3 rounded-2xl bg-slate-900 px-5 py-4 text-white transition hover:bg-slate-700"
        >
          <span className="text-base font-semibold">Đăng nhập với Google</span>
        </button>
      </div>
    </div>
  );
}
