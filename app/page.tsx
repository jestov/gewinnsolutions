"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Logo from "@/components/Logo";
import ArrowIcon from "@/components/icons/ArrowIcon";

const HomePage: FC = () => {
  const [active, setActive] = useState<"av" | "fitness" | null>(null);
  const [mounted, setMounted] = useState(false);
  const avVideoRef = useRef<HTMLVideoElement>(null);
  const fitnessVideoRef = useRef<HTMLVideoElement>(null);

  useEffect(() => {
    const t = setTimeout(() => setMounted(true), 80);
    return () => clearTimeout(t);
  }, []);

  // Desktop: hover. Mobile: tap to activate, tap again to navigate
  useEffect(() => {
    if (active === "av") {
      avVideoRef.current?.play();
      fitnessVideoRef.current?.pause();
    } else if (active === "fitness") {
      fitnessVideoRef.current?.play();
      avVideoRef.current?.pause();
    } else {
      avVideoRef.current?.play();
      fitnessVideoRef.current?.play();
    }
  }, [active]);

  const handleMobileTap = (side: "av" | "fitness", href: string, e: React.MouseEvent) => {
    // On touch devices, first tap activates, second navigates
    if (window.matchMedia("(hover: none)").matches) {
      if (active !== side) {
        e.preventDefault();
        setActive(side);
      }
      // else let the Link navigate naturally
    }
  };

  return (
    <div className="fixed inset-0 flex flex-col lg:flex-row overflow-hidden bg-[#080808]">

      {/* ── A/V SIDE ── */}
      <Link
        href="/av"
        onClick={(e) => handleMobileTap("av", "/av", e)}
        className={`relative flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
          active === "fitness"
            ? "flex-[0.28] lg:flex-[0.35]"
            : active === "av"
            ? "flex-[0.72] lg:flex-[0.65]"
            : "flex-[0.5]"
        }`}
        onMouseEnter={() => setActive("av")}
        onMouseLeave={() => setActive(null)}
      >
        <video
          ref={avVideoRef}
          autoPlay loop muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
          style={{
            transform: active === "av" ? "scale(1.04)" : "scale(1)",
            filter: active === "fitness" ? "grayscale(1) blur(2px)" : "grayscale(0) blur(0px)",
          }}
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        {/* Gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 45%, rgba(8,8,8,0.15) 100%)",
            opacity: active === "fitness" ? 0.95 : 0.75,
          }}
        />

        {/* Desktop divider */}
        <div className="absolute right-0 top-0 bottom-0 w-px bg-white/10 hidden lg:block" />

        {/* Content */}
        <div
          className={`relative z-10 transition-all duration-700 ease-out p-6 sm:p-8 lg:p-12 xl:p-16 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "200ms" }}
        >
          {/* Tag */}
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div
              className="h-px bg-[#C9A96E] transition-all duration-500"
              style={{ width: active === "av" ? "28px" : "14px" }}
            />
            <span className="text-[#C9A96E] text-[9px] lg:text-[10px] tracking-[0.35em] uppercase font-clash">
              Audio · Video · Acústica
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-clashdisplay font-medium text-white leading-tight mb-3 lg:mb-4 transition-all duration-500 tracking-[0.25px]"
            style={{
              fontSize: active === "av"
                ? "clamp(2rem, 5vw, 3.5rem)"
                : active === "fitness"
                ? "clamp(1.2rem, 2.5vw, 2rem)"
                : "clamp(1.6rem, 3.5vw, 2.75rem)",
            }}
          >
            Gewinn <span className="font-light italic">A/V</span>
          </h2>

          {/* Description — hidden when other side is active on mobile */}
          <p
            className="text-white font-clash font-normal text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-sm transition-all duration-500"
            style={{
              opacity: active === "fitness" ? 0 : active === "av" ? 1 : 0.5,
              maxHeight: active === "fitness" ? "0" : "80px",
              overflow: "hidden",
            }}
          >
            Integración de audio, video y acústica para espacios que inspiran.
          </p>

          {/* CTA button */}
          <div
            className="mt-5 lg:mt-8 transition-all duration-300 inline-flex"
            style={{
              opacity: active === "av" ? 1 : 0,
              transform: active === "av" ? "translateX(0)" : "translateX(-10px)",
              pointerEvents: active === "av" ? "auto" : "none",
            }}
          >
            <div className="border-2 border-white text-white flex font-medium justify-between items-center font-clash text-sm lg:text-base tracking-wide rounded-r-[26px] leading-5 max-h-[52px]">
              <div className="py-3 px-4 lg:py-4 lg:px-5">Explorar</div>
              <div className="aspect-square min-h-full rounded-r-[24px] p-3 lg:p-4 bg-white">
                <ArrowIcon dark={true} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ── FITNESS SIDE ── */}
      <Link
        href="/fitness"
        onClick={(e) => handleMobileTap("fitness", "/fitness", e)}
        className={`relative flex flex-col justify-end overflow-hidden cursor-pointer transition-all duration-700 ease-in-out ${
          active === "av"
            ? "flex-[0.28] lg:flex-[0.35]"
            : active === "fitness"
            ? "flex-[0.72] lg:flex-[0.65]"
            : "flex-[0.5]"
        }`}
        onMouseEnter={() => setActive("fitness")}
        onMouseLeave={() => setActive(null)}
      >
        <video
          ref={fitnessVideoRef}
          autoPlay loop muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out"
          style={{
            transform: active === "fitness" ? "scale(1.04)" : "scale(1)",
            filter: active === "av" ? "grayscale(1) blur(2px)" : "grayscale(0) blur(0px)",
          }}
        >
          <source src="/videos/diseno.mp4" type="video/mp4" />
        </video>

        {/* Gradient */}
        <div
          className="absolute inset-0 transition-opacity duration-700"
          style={{
            background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.55) 45%, rgba(8,8,8,0.15) 100%)",
            opacity: active === "av" ? 0.95 : 0.75,
          }}
        />

        {/* Content */}
        <div
          className={`relative z-10 transition-all duration-700 ease-out p-6 sm:p-8 lg:p-12 xl:p-16 ${
            mounted ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
          }`}
          style={{ transitionDelay: "350ms" }}
        >
          {/* Tag */}
          <div className="flex items-center gap-3 mb-4 lg:mb-6">
            <div
              className="h-px bg-white/50 transition-all duration-500"
              style={{ width: active === "fitness" ? "28px" : "14px" }}
            />
            <span className="text-white/50 text-[9px] lg:text-[10px] tracking-[0.35em] uppercase font-clash">
              Fitness · Diseño · Equipamiento
            </span>
          </div>

          {/* Title */}
          <h2
            className="font-clashdisplay font-medium tracking-[0.25px] text-white leading-tight mb-3 lg:mb-4 transition-all duration-500"
            style={{
              fontSize: active === "fitness"
                ? "clamp(2rem, 5vw, 3.5rem)"
                : active === "av"
                ? "clamp(1.2rem, 2.5vw, 2rem)"
                : "clamp(1.6rem, 3.5vw, 2.75rem)",
            }}
          >
            Gewinn <span className="font-light italic">Fitness</span>
          </h2>

          {/* Description */}
          <p
            className="text-white font-clash font-normal text-sm lg:text-base leading-relaxed max-w-xs lg:max-w-sm transition-all duration-500"
            style={{
              opacity: active === "av" ? 0 : active === "fitness" ? 1 : 0.5,
              maxHeight: active === "av" ? "0" : "80px",
              overflow: "hidden",
            }}
          >
            Espacios fitness de alto rendimiento, diseñados con maestría.
          </p>

          {/* CTA button */}
          <div
            className="mt-5 lg:mt-8 transition-all duration-300 inline-flex"
            style={{
              opacity: active === "fitness" ? 1 : 0,
              transform: active === "fitness" ? "translateX(0)" : "translateX(-10px)",
              pointerEvents: active === "fitness" ? "auto" : "none",
            }}
          >
            <div className="border-2 border-white text-white flex font-medium justify-between items-center font-clash text-sm lg:text-base tracking-wide rounded-r-[26px] leading-5 max-h-[52px]">
              <div className="py-3 px-4 lg:py-4 lg:px-5">Explorar</div>
              <div className="aspect-square min-h-full rounded-r-[24px] p-3 lg:p-4 bg-white">
                <ArrowIcon dark={true} />
              </div>
            </div>
          </div>
        </div>
      </Link>

      {/* ── CENTER LOGO ── */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none z-20">
        <div
          className={`flex flex-col items-center gap-4 lg:gap-6 transition-all duration-700 ${
            mounted ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
          style={{ opacity: active ? 0 : undefined, transition: "opacity 0.4s ease" }}
        >
          <Logo className="h-7 lg:h-10 drop-shadow-2xl" />
          <span className="text-[10px] lg:text-[12px] text-white/60 tracking-[0.5em] uppercase font-clash">
            Select your experience
          </span>
        </div>
      </div>

      {/* Mobile horizontal divider */}
      <div className="absolute left-0 right-0 lg:hidden pointer-events-none z-10"
        style={{ top: active === "av" ? "72%" : active === "fitness" ? "28%" : "50%", transition: "top 0.7s ease-in-out" }}
      >
        <div className="w-full h-px bg-white/10" />
      </div>
    </div>
  );
};

export default HomePage;
