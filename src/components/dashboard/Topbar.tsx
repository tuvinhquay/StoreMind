"use client";

import { useAuth } from "@/modules/auth/useAuth";

export function Topbar() {
  const { user, tenantId, logout } = useAuth();
  const initials = user?.name ? user.name.charAt(0).toUpperCase() : "U";

  return (
    <header className="glass-effect-strong backdrop-blur-2xl border-b border-white/10 px-8 py-4 text-white">
      <div className="flex items-center justify-between gap-6">
        <div className="min-w-0">
          <p className="text-xs uppercase tracking-widest text-slate-400/70">Tenant</p>
          <p className="mt-1 text-base font-semibold truncate text-slate-100">{tenantId ?? "Loading..."}</p>
        </div>
        <div className="flex items-center gap-4">
          <div className="glass-effect rounded-2xl px-5 py-3 flex items-center gap-3">
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-gradient-to-br from-blue-400 to-cyan-400 text-sm font-bold text-slate-900 shadow-lg shadow-cyan-400/30">
              {initials}
            </div>
            <div className="hidden sm:block">
              <p className="text-sm font-medium leading-tight text-white">{user?.name ?? "User"}</p>
              <p className="text-xs text-slate-300/70 truncate max-w-xs">{user?.email ?? "email@example.com"}</p>
            </div>
          </div>
          <button
            type="button"
            onClick={logout}
            className="glass-effect rounded-2xl px-5 py-3 text-sm font-medium text-white transition-all duration-300 hover:glass-effect-strong hover:shadow-md hover:shadow-blue-400/10"
          >
            Logout
          </button>
        </div>
      </div>
    </header>
  );
}
