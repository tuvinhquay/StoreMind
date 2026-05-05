"use client";

import { ReactNode } from "react";
import { Sidebar } from "@/components/dashboard/Sidebar";
import { Topbar } from "@/components/dashboard/Topbar";

export function DashboardLayout({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen flex bg-slate-950 relative overflow-hidden">
      {/* Depth background effect */}
      <div className="absolute inset-0 -z-40 animate-depth" />
      
      {/* Sidebar */}
      <Sidebar />
      
      {/* Main content area */}
      <div className="flex-1 flex flex-col">
        <Topbar />
        <main className="flex-1 overflow-auto p-8">
          <div className="glass-effect-content rounded-3xl p-8 animate-card-in">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
