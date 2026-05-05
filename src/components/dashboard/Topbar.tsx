"use client";

import { useAuth } from "@/modules/auth/useAuth";

export function Topbar() {
  const { user, tenantId, logout } = useAuth();
  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <header className="flex items-center justify-between gap-4 border-b border-white/15 bg-black/20 backdrop-blur-2xl px-8 py-4 text-white">
      <div>
        <p className="text-sm text-slate-300">Tenant ID</p>
        <p className="text-base font-semibold text-white">{tenantId ?? "Chưa xác định"}</p>
      </div>
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-3 rounded-2xl bg-white/10 backdrop-blur-sm px-4 py-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-white font-semibold">
            {initials}
          </div>
          <div>
            <p className="text-sm font-semibold text-white">{user?.name ?? "Người dùng"}</p>
            <p className="text-xs text-slate-300">{user?.email ?? "Không có email"}</p>
          </div>
        </div>
        <button
          type="button"
          onClick={logout}
          className="rounded-2xl bg-white/20 hover:bg-white/30 px-4 py-3 text-sm font-semibold text-white transition-all backdrop-blur-sm border border-white/20"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
