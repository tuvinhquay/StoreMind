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
    <aside className="w-72 min-h-screen bg-black/30 backdrop-blur-2xl border-r border-white/15 text-white">
      <div className="px-8 py-8">
        <div className="mb-8">
          <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-blue-400 to-cyan-400 text-xl font-bold text-slate-900 shadow-lg shadow-cyan-400/50">
            SM
          </div>
          <h1 className="mt-4 text-2xl font-semibold">StoreMind</h1>
          <p className="mt-1 text-sm text-slate-300">SaaS store dashboard</p>
        </div>
        <nav className="space-y-2">
          {menu.map((item) => {
            const isActive = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                className={`block rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-300 ${
                  isActive
                    ? "bg-gradient-to-r from-blue-500/40 to-cyan-500/40 border border-white/30 shadow-lg shadow-cyan-400/20"
                    : "text-slate-100 hover:bg-white/20 hover:shadow-lg hover:shadow-blue-500/20"
                }`}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>
      </div>
    </aside>
  );
}
