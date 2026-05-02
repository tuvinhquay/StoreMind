# StoreMind – AI Development Prompts History

## Prompt 01 – Project Foundation

PROMPT 01 — KHỞI TẠO NỀN MÓNG STORE MIND (BẢN TIẾNG VIỆT)
Bối cảnh

Bạn là Senior Full-Stack Architect.

Chúng ta đang xây dựng SaaS quản lý cửa hàng tên StoreMind.

Mục tiêu kiến trúc:

Web App đa nền tảng (PWA)
Next.js App Router + TypeScript
Firebase backend
Sau này tích hợp Gemini AI
Ứng dụng SaaS multi-tenant (MỖI SHOP DỮ LIỆU RIÊNG BIỆT)
Đây là PROMPT 01 → CHỈ tạo nền móng project, KHÔNG làm tính năng.
BƯỚC 0 — TẠO NHÁNH GIT TRƯỚC KHI CODE

Luôn luôn tạo branch mới trước khi viết code:

Chạy lệnh:

git checkout -b phase-0-foundation

BƯỚC 1 — CÀI ĐẶT CÁC THƯ VIỆN CẦN THIẾT

Chúng ta dùng:

Firebase
Zustand (state global)
React Query (fetch data)
next-pwa (PWA)
zod (validate)
uuid + date-fns

Chạy lệnh:

npm install firebase firebase-admin zustand @tanstack/react-query
npm install next-pwa
npm install uuid date-fns zod

BƯỚC 2 — ĐỊNH NGHĨA KIẾN TRÚC SAAS (RẤT QUAN TRỌNG)

App này là SaaS → mỗi chủ shop là 1 tenant.

Toàn bộ database Firestore PHẢI theo cấu trúc:

tenants/{tenantId}/...

Hãy tạo folder:

src/lib/tenant/

Tạo file:

src/lib/tenant/tenant.types.ts

Nội dung:

export interface Tenant {
  id: string
  name: string
  ownerUid: string
  createdAt: string
  plan: "free" | "pro"
}

Ghi chú trong code:
"All data must be stored under tenants/{tenantId}/..."

BƯỚC 3 — TẠO CẤU TRÚC THƯ MỤC CHUẨN

Tạo cấu trúc:

src/
├ app/
├ components/
├ modules/
├ lib/
├ hooks/
├ providers/
└ styles/

Trong modules/ tạo sẵn các module (để trống):

modules/

auth
dashboard
products
inventory
customers
orders
analytics
ai
settings

⚠️ Chỉ tạo thư mục, chưa code logic.

BƯỚC 4 — KHỞI TẠO FIREBASE

Tạo thư mục:

src/lib/firebase/

Tạo 2 file:

firebase.client.ts → dùng cho frontend
firebase.admin.ts → dùng cho server

Dùng biến môi trường, KHÔNG hardcode key.

Các biến cần có:

NEXT_PUBLIC_FIREBASE_API_KEY=
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=
NEXT_PUBLIC_FIREBASE_APP_ID=

BƯỚC 5 — TẠO AUTH PROVIDER (KHUNG SẴN)

Tạo file:

src/providers/AuthProvider.tsx

Chỉ tạo context khung gồm:

user
tenantId (tạm thời null)
loading state

⚠️ Chưa làm login.

BƯỚC 6 — BAO APP BẰNG PROVIDERS

Tạo:

src/providers/ReactQueryProvider.tsx

Sau đó sửa:

src/app/layout.tsx

Wrap toàn bộ app bằng:

<AuthProvider> <ReactQueryProvider>
BƯỚC 7 — TẠO KHUNG DASHBOARD RỖNG

Tạo route:

app/(dashboard)/dashboard/page.tsx

UI cần có:

Sidebar bên trái
Topbar phía trên
Vùng nội dung trống

Chỉ làm layout bằng Tailwind.
KHÔNG có logic.

BƯỚC 8 — CẤU HÌNH PWA

Tạo file:

next.config.mjs → cấu hình next-pwa

Tạo:

public/manifest.json
public/icons/

Thêm icon placeholder.

BƯỚC 9 — TẠO FILE ENV MẪU

Tạo file:

.env.example

Thêm toàn bộ biến Firebase.

BƯỚC 10 — KIỂM TRA APP

Chạy:

npm run dev

Kết quả mong muốn:

App chạy
Vào được dashboard rỗng
Không lỗi Firebase
Chưa có tính năng
KẾT THÚC PROMPT

Sau khi hoàn thành hãy in ra:

Cây thư mục project
Các package đã cài
Những gì đã sẵn sàng cho Prompt 02

## Prompt 02 – Auth + Multi-tenant

PROMPT 02 — AUTH + TẠO SHOP TỰ ĐỘNG (MULTI-TENANT)
Bối cảnh

Chúng ta tiếp tục dự án StoreMind.

Nhiệm vụ của prompt này:

Đăng nhập Google bằng Firebase
Khi user đăng nhập lần đầu → tự tạo SHOP (tenant)
Gắn user với tenantId
Tạo protected routes
Sau bước này app sẽ có user thật + shop thật

⚠️ Chỉ làm AUTH + TENANT.
KHÔNG làm sản phẩm, kho, đơn hàng.

BƯỚC 0 — TẠO NHÁNH MỚI

Chạy:

git checkout -b phase-1-auth-tenant

BƯỚC 1 — BẬT FIREBASE AUTH GOOGLE

Trong Firebase console hãy bật:
Authentication → Sign-in method → Google → Enable.

Sau đó thêm biến env:

Thêm vào .env.local

NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=
NEXT_PUBLIC_FIREBASE_PROJECT_ID=

(giữ nguyên các biến từ prompt trước)

BƯỚC 2 — TẠO USER TYPES

Tạo file:

src/modules/auth/types.ts

export interface AppUser {
  uid: string
  email: string
  name: string
  photoURL?: string
  tenantId: string
}

BƯỚC 3 — TẠO AUTH SERVICE

Tạo file:

src/modules/auth/auth.service.ts

Chức năng cần có:

signInWithGoogle()
logout()
onAuthStateChanged()

Sử dụng Firebase client SDK.

Đăng nhập bằng:
GoogleAuthProvider + signInWithPopup.

BƯỚC 4 — LOGIC TẠO TENANT TỰ ĐỘNG (QUAN TRỌNG)

Tạo file:

src/modules/auth/createTenantIfNeeded.ts

Luồng xử lý:

Khi user login:

Kiểm tra Firestore:
users/{uid} đã tồn tại chưa?
Nếu CHƯA tồn tại:
→ Tạo tenant mới:

Collection:

tenants/{tenantId}

Document:

{
 name: "Cửa hàng của {displayName}",
 ownerUid: uid,
 createdAt: now,
 plan: "free"
}
Sau đó tạo user document:

users/{uid}

{
 email,
 name,
 tenantId,
 role: "owner"
}
Nếu user đã tồn tại → chỉ load tenantId.
BƯỚC 5 — HOÀN THIỆN AUTH PROVIDER

Cập nhật:

src/providers/AuthProvider.tsx

Provider phải:

Lắng nghe onAuthStateChanged
Khi có user → gọi createTenantIfNeeded()
Lưu vào context:
user
tenantId
loading
logout()
loginWithGoogle()
BƯỚC 6 — TẠO useAuth HOOK

Tạo:

src/modules/auth/useAuth.ts

Hook trả về:

user
tenantId
loading
loginWithGoogle
logout
BƯỚC 7 — TẠO PROTECTED ROUTE

Tạo component:

src/components/ProtectedRoute.tsx

Logic:

Nếu loading → hiển thị "Loading..."
Nếu chưa login → redirect "/"
Nếu login → render children
BƯỚC 8 — TẠO TRANG LOGIN

Tạo:

src/app/page.tsx (Landing/Login)

UI đơn giản:

Logo StoreMind
Nút: "Đăng nhập với Google"

Khi login thành công → redirect /dashboard

BƯỚC 9 — BẢO VỆ DASHBOARD

Wrap toàn bộ dashboard layout bằng ProtectedRoute.

BƯỚC 10 — TEST FLOW

Chạy app và đảm bảo:

Bấm login Google → đăng nhập thành công
Firestore tự tạo:
tenants/{tenantId}
users/{uid}
Sau login → vào dashboard
Reload vẫn giữ trạng thái đăng nhập
KẾT THÚC PROMPT

In ra:

Firestore collections đã tạo
Flow login hoạt động
Những gì sẵn sàng cho Prompt 03

## Prompt 03 – Tenant Firestore Data Layer

Prompt 03 content is not available in the current repository history.
This repository currently has prompt implementations for Prompt 01 and Prompt 02 only.
