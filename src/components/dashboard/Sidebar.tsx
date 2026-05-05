"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const menu = [
  { label: "Dashboard", href: "/dashboard" },
  { label: "Products", href: "/dashboard/products" },
  { label: "Orders", href: "/dashboard/orders" },
  { label: "Customers", href: "/dashboard/customers" },
  { label: "Settings", href: "/dashboard/settings" },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-72 min-h-screen glass-effect-strong backdrop-blur-3xl border-r border-white/10 text-white flex flex-col">
      <div className="px-6 py-8 border-b border-white/5">
        <div className="mb-6">
          <div className="flex h-16 w-16 items-center justify-center rounded-3xl bg-gradient-to-br from-blue-400 via-cyan-400 to-emerald-400 text-2xl font-bold text-slate-950 shadow-xl shadow-cyan-400/40 animate-card-in">
            SM
          </div>
          <h1 className="mt-4 text-2xl font-bold tracking-tight">StoreMind</h1>
          <p className="mt-1 text-sm text-slate-300/80">SaaS Dashboard</p>
        </div>
      </div>
      <nav className="flex-1 px-4 py-6 space-y-2 overflow-y-auto">
        {menu.map((item) => {
          const isActive = pathname === item.href;
          return (
            <Link
              key={item.href}
              href={item.href}
              className={`group relative block rounded-2xl px-5 py-3 text-sm font-medium transition-all duration-300 ${
                isActive
                  ? "glass-effect-strong shadow-lg shadow-blue-500/20 border-white/20 animate-menu-active"
                  : "text-slate-200/90 hover:glass-effect hover:border-white/15 hover:shadow-md hover:shadow-blue-400/10"
              }`}
            >
              <span className={`relative z-10 ${isActive ? "text-white" : "group-hover:text-white"}`}>
                {item.label}
              </span>
              {isActive && (
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-blue-500/20 to-cyan-500/10 -z-0" />
              )}
            </Link>
          );
        })}
      </nav>
      <div className="px-4 py-6 border-t border-white/5">
        <div className="glass-effect rounded-2xl p-4 text-center text-xs text-slate-400/80">
          Version 1.0
        </div>
      </div>
    </aside>
  );
}
