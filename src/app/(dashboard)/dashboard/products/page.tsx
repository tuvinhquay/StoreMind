"use client";

export default function ProductsPage() {
  return (
    <div className="space-y-6">
      <div className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
        <h2 className="text-2xl font-semibold text-slate-900">Products</h2>
        <p className="mt-2 text-slate-600">Quản lý danh sách sản phẩm và tồn kho của cửa hàng.</p>
      </div>
      <div className="grid gap-4 md:grid-cols-2">
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Tổng sản phẩm</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">128</p>
        </div>
        <div className="rounded-3xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-sm uppercase tracking-[0.2em] text-slate-500">Hết hàng</p>
          <p className="mt-4 text-4xl font-bold text-slate-900">6</p>
        </div>
      </div>
    </div>
  );
}
