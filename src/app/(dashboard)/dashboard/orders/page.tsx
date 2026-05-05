"use client";

export default function OrdersPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Orders</h2>
        <p className="mt-2 text-slate-600">Theo dõi đơn hàng mới, trạng thái vận chuyển và doanh thu.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Đơn mới</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">24</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Doanh thu hôm nay</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">$4.2k</p>
        </div>
      </div>
    </div>
  );
}
