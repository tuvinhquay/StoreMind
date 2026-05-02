/**
 * Home page (landing page)
 * Người chưa login sẽ được redirect đến trang này
 */

export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100">
      <div className="text-center">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">StoreMind</h1>
        <p className="text-xl text-gray-600 mb-8">
          Platform SaaS quản lý cửa hàng thông minh
        </p>
        <p className="text-gray-500">Foundation phase - Coming soon</p>
      </div>
    </div>
  );
}
