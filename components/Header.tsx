"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../components/Logo";
import LogoDark from "../components/LogoDark";
import Link from "next/link";
import PlusIcon from "./icons/PlusIcon";
import ArrowIcon from "./icons/ArrowIcon";

export default function Header() {
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  const isAV = pathname.startsWith("/av");
  const isFitness = pathname.startsWith("/fitness");
  const isHome = pathname === "/";
  const isDark = isAV || isFitness || isHome;

  // Close mega menu on outside click
  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (megaMenuRef.current && !megaMenuRef.current.contains(e.target as Node)) {
        setIsMegaMenuOpen(false);
      }
    };
    if (isMegaMenuOpen) document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const checkMobile = () => setIsMobileView(window.innerWidth <= 1024);
    const handleScroll = () => {
      const main = document.querySelector("main");
      if (main && pathname === "/fitness") {
        setIsScrolledPastMain(window.pageYOffset > main.offsetTop + 100);
      } else if (isAV) {
        setIsScrolledPastMain(window.pageYOffset > 80);
      }
    };
    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [pathname, isAV]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Hide header on home (it's a full-screen split)
  if (isHome) return null;

  // ── AV NAV CONFIG ──
  const avMenuOptions = [
    { name: "Nosotros", path: "/av/nosotros" },
    { name: "Servicios", path: "/av#servicios", isMegaMenu: true },
  ];

  const avMegaItems = [
    { id: 1, label: "Audio Hi-Fi", path: "/av#servicios" },
    { id: 2, label: "Pro Audio & Video", path: "/av#servicios" },
    { id: 3, label: "Tratamiento Acústico", path: "/av#servicios" },
  ];

  // ── FITNESS NAV CONFIG ──
  const fitnessMenuOptions = [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Soluciones", path: "#", isMegaMenu: true },
  ];

  const fitnessMegaItems = [
    { id: 1, label: "Audio", path: "/soluciones?tab=1" },
    { id: 2, label: "Iluminación", path: "/soluciones?tab=2" },
    { id: 3, label: "Diseño", path: "/soluciones?tab=3" },
    { id: 4, label: "Fitness Total", path: "/soluciones?tab=4" },
  ];

  const menuOptions = isAV ? avMenuOptions : fitnessMenuOptions;
  const megaItems = isAV ? avMegaItems : fitnessMegaItems;
  const contactPath = isAV ? "/av/contacto" : "/contacto";
  const homePath = isAV ? "/av" : "/fitness";

  // ── STYLES ──
  const getNavStyle = () => {
    if (isAV) {
      // fluid.glass style: floating pill, always glass
      return "bg-transparent text-white";
    }
    return isScrolledPastMain
      ? "bg-[#040404]/95 backdrop-blur-md text-white border-b border-white/20"
      : "bg-transparent text-white border-b border-white/20";
  };

  const borderColor = isDark ? "border-white/10" : "border-primary/20";
  const hoverBg = isDark ? "hover:bg-white/5" : "hover:bg-gray-100";
  const textColor = isDark ? "text-white" : "text-black";

  // For AV: floating glass nav bar
  if (isAV) {
    return (
      <>
        <nav className="fixed top-0 left-0 right-0 z-50 px-4 sm:px-6 pt-4">
          <div
            className="max-w-[1400px] mx-auto flex items-center justify-between px-4 lg:px-6 h-14 rounded-2xl transition-all duration-500"
            style={{
              background: isScrolledPastMain
                ? "rgba(8,8,8,0.75)"
                : "rgba(255,255,255,0.04)",
              backdropFilter: "blur(24px) saturate(160%)",
              WebkitBackdropFilter: "blur(24px) saturate(160%)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            {/* Logo */}
            <Link href="/av" className="flex items-center">
              <Logo className="h-5 lg:h-6" />
            </Link>

            {/* Desktop links */}
            <ul className="hidden lg:flex items-center gap-1">
              {avMenuOptions.map((option, i) => (
                <li key={i}>
                  <Link
                    href={option.path}
                    className="px-4 py-2 rounded-xl text-white/60 hover:text-white hover:bg-white/5 font-clash text-sm transition-all duration-300"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Right side */}
            <div className="flex items-center gap-3">
              {/* Back to home pill */}
              <Link
                href="/"
                className="hidden lg:flex items-center gap-2 px-3 py-1.5 rounded-full text-white/30 hover:text-white/60 font-clash text-[10px] tracking-[0.25em] uppercase transition-all duration-300"
                style={{ border: "1px solid rgba(255,255,255,0.06)" }}
              >
                <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Inicio
              </Link>

              {/* Contact pill */}
              <Link
                href="/av/contacto"
                className="inline-flex items-center px-4 py-2 rounded-xl font-clash text-sm text-[#080808] bg-white hover:bg-[#C9A96E] transition-all duration-300"
              >
                Contacto
              </Link>

              {/* Hamburger */}
              <button
                className="lg:hidden flex flex-col items-center justify-center cursor-pointer gap-1.5 p-1"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                aria-label="Toggle menu"
              >
                <span className={`block w-5 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "rotate-45 translate-y-[4px]" : ""}`} />
                <span className={`block w-5 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "opacity-0" : ""}`} />
                <span className={`block w-5 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "-rotate-45 -translate-y-[4px]" : ""}`} />
              </button>
            </div>
          </div>
        </nav>

        {/* Mobile menu — AV */}
        {isMobileView && (
          <div
            className={`lg:hidden fixed top-[76px] left-4 right-4 rounded-2xl text-white transition-all duration-300 z-50 overflow-hidden ${
              isMobileMenuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
            }`}
            style={{
              background: "rgba(8,8,8,0.92)",
              backdropFilter: "blur(24px)",
              WebkitBackdropFilter: "blur(24px)",
              border: "1px solid rgba(255,255,255,0.08)",
            }}
          >
            <ul className="flex flex-col p-6 gap-2">
              {avMenuOptions.map((option, i) => (
                <li key={i}>
                  <Link
                    href={option.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="block text-white/70 hover:text-white font-clash text-base py-2 px-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                  >
                    {option.name}
                  </Link>
                </li>
              ))}
              <li>
                <Link
                  href="/av/contacto"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white font-clash text-base py-2 px-3 rounded-xl hover:bg-white/5 transition-all duration-200"
                >
                  Contacto
                </Link>
              </li>
              <li className="pt-2 border-t border-white/[0.06]">
                <Link
                  href="/"
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="block text-white/30 font-clash text-sm py-2 px-3 tracking-[0.2em] uppercase"
                >
                  ← Inicio
                </Link>
              </li>
            </ul>
          </div>
        )}
      </>
    );
  }

  // ── FITNESS NAV ──
  return (
    <>
      <nav className={`flex transition-all duration-500 fixed w-full z-50 max-w-[100vw] ${
        isScrolledPastMain
          ? "bg-[#040404]/95 backdrop-blur-md text-white border-b border-white/20"
          : "bg-transparent text-white border-b border-white/20"
      }`}>
        <div className="flex gap-5 w-full justify-start mx-auto items-center pl-1 pr-6 lg:pl-2 lg:pr-0">
          <div className="flex justify-between w-full items-center gap-8">
            <div className="flex h-full items-center">
              <Link href="/fitness" className="border-r h-full p-5 border-white/10 flex items-center">
                <Logo className="h-6 lg:h-8" />
              </Link>
              <ul className="hidden lg:flex gap-0 items-center h-full ml-2">
                {fitnessMenuOptions.map((option, i) => (
                  <li key={i}>
                    {option.isMegaMenu ? (
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`cursor-pointer inline-flex items-center font-clash leading-loose px-6 py-5 hover:bg-white/5 transition-all duration-300 ${isMegaMenuOpen ? "bg-white/10" : ""} text-white`}
                      >
                        <PlusIcon dark={false} className={`mr-2 w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-45" : ""}`} />
                        {option.name}
                      </button>
                    ) : (
                      <Link href={option.path} className="cursor-pointer inline-flex font-clash leading-loose px-6 py-5 hover:bg-white/5 transition-all duration-300 text-white">
                        {option.name}
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <button
              className="lg:hidden flex flex-col items-center justify-center cursor-pointer gap-1.5 p-2"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              aria-label="Toggle menu"
            >
              <span className={`block w-6 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 bg-white ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
            <div className="hidden lg:flex">
              <Link href="/contacto" className="inline-flex font-clash leading-loose px-6 py-5 transition-all duration-300 bg-white text-black hover:bg-gray-100">
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Fitness mobile menu */}
      {isMobileView && (
        <div
          className={`lg:hidden fixed top-[65px] left-0 w-full bg-[#080808] border-b border-white/10 text-white transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-8 gap-4">
            {fitnessMenuOptions.map((option, i) => (
              <li key={i}>
                <button
                  onClick={() => {
                    if (!option.isMegaMenu) {
                      router.push(option.path);
                      setIsMobileMenuOpen(false);
                    } else {
                      setIsMegaMenuOpen(!isMegaMenuOpen);
                    }
                  }}
                  className="text-left w-full text-white font-clash text-lg py-2"
                >
                  {option.name}
                  {option.isMegaMenu && <ArrowIcon className="h-4 inline-block ml-2" />}
                </button>
              </li>
            ))}
            <li>
              <Link href="/contacto" onClick={() => setIsMobileMenuOpen(false)} className="text-white font-clash text-lg py-2 block">
                Contacto
              </Link>
            </li>
            <li className="pt-4 border-t border-white/10">
              <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-white/40 font-clash text-sm py-2 block tracking-[0.2em] uppercase">
                ← Cambiar división
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mega menu */}
      {isMegaMenuOpen && (
        <div
          ref={megaMenuRef}
          className="fixed top-[65px] lg:top-[73px] w-full bg-[#0d0d0d] border-b border-white/10 z-50 px-8 lg:px-16 py-8 lg:py-10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col lg:flex-row gap-8 lg:gap-16 lg:items-center justify-between">
            <div>
              <span className="text-white/30 text-xs tracking-[0.3em] uppercase font-clash block mb-2">
                {isAV ? "Servicios A/V" : "Soluciones Fitness"}
              </span>
              {isAV && (
                <p className="text-white/20 text-sm font-clash font-light max-w-xs">
                  Integración de audio, video y acústica
                </p>
              )}
            </div>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
              {megaItems.map((item) => (
                <li key={item.id}>
                  <Link
                    href={item.path}
                    onClick={() => setIsMegaMenuOpen(false)}
                    className="flex items-center gap-3 font-clash text-lg lg:text-xl text-white/70 hover:text-white transition-colors duration-200 group"
                  >
                    <span className="text-white/20 font-light text-sm">0{item.id}</span>
                    {item.label}
                    <svg
                      className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-all duration-200 -translate-x-1 group-hover:translate-x-0"
                      fill="none" stroke="currentColor" viewBox="0 0 24 24"
                    >
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                    </svg>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      )}
    </>
  );
}
