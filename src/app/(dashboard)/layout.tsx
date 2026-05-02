/**
 * BƯỚC 7 — KHUNG DASHBOARD RỖNG
 *
 * Layout cho dashboard group
 * Hiển thị sidebar + topbar
 */

"use client";

import React from "react";
import { ProtectedRoute } from "@/components/ProtectedRoute";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ProtectedRoute>
      <div className="flex h-screen bg-gray-50">
        {/* SIDEBAR */}
        <aside className="w-64 bg-white border-r border-gray-200 flex flex-col">
          <div className="p-6 border-b border-gray-200">
            <h2 className="text-xl font-bold text-gray-900">StoreMind</h2>
          </div>
          <nav className="flex-1 p-4">
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Dashboard
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Products
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Inventory
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Customers
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Orders
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Analytics
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="block px-4 py-2 rounded-lg text-gray-700 hover:bg-gray-100"
                >
                  Settings
                </a>
              </li>
            </ul>
          </nav>
        </aside>

        {/* MAIN CONTENT */}
        <div className="flex-1 flex flex-col">
          {/* TOPBAR */}
          <header className="bg-white border-b border-gray-200 px-8 py-4">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl font-semibold text-gray-900">Dashboard</h1>
              <div className="flex items-center gap-4">
                <button className="px-4 py-2 rounded-lg bg-indigo-600 text-white hover:bg-indigo-700">
                  Profile
                </button>
              </div>
            </div>
          </header>

          {/* CONTENT AREA */}
          <main className="flex-1 p-8 overflow-auto">{children}</main>
        </div>
      </div>
    </ProtectedRoute>
  );
}
