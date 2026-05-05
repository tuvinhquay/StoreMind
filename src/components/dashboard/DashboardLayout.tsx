"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen relative flex">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-8">
          <div className="group rounded-3xl border border-white/20 bg-white/10 backdrop-blur-md p-8 shadow-2xl transition-all duration-300 hover:border-white/40 hover:bg-white/15 hover:shadow-cyan-500/10 hover:shadow-2xl">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
