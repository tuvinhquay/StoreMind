"use client";

import { usePathname } from "next/navigation";

export default function VideoBackground() {
  const pathname = usePathname();
  const source = pathname === "/" ? "/assets/videos/login.mp4" : "/assets/videos/hinhnen.mp4";
  const overlayClasses = pathname === "/" ? "bg-slate-950/20" : "bg-slate-950/24";
  const videoClasses = pathname === "/" ? "w-full h-full object-cover opacity-60 brightness-90" : "w-full h-full object-cover opacity-45 brightness-85";

  return (
    <div className="pointer-events-none fixed inset-0 -z-50 overflow-hidden">
      <video className={videoClasses} autoPlay muted loop playsInline>
        <source src={source} type="video/mp4" />
      </video>
      <div className={`absolute inset-0 ${overlayClasses}`} />
    </div>
  );
}
