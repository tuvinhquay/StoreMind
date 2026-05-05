"use client";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Customers</h2>
        <p className="mt-2 text-slate-600">Quản lý khách hàng, dữ liệu liên hệ và hành vi mua hàng.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Khách hàng mới</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">15</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Tổng khách hàng</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">3.2k</p>
        </div>
      </div>
    </div>
  );
}
