"use client";

export default function SettingsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Settings</h2>
        <p className="mt-2 text-slate-600">Cấu hình cửa hàng, cài đặt SaaS và quyền truy cập người dùng.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Mã tenant</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">SM-2026</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Trạng thái</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">Active</p>
        </div>
      </div>
    </div>
  );
}
