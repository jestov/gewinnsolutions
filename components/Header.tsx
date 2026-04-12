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
  
  // Pages with light/white backgrounds (need dark text before scroll)
  // Fitness landing and AV landing have dark heroes, so they need white text
  // /soluciones has dark video hero, but /soluciones/adicionales has light background
  const isLightPage = ["/nosotros", "/contacto", "/productos", "/soluciones/adicionales"].some(p => pathname.startsWith(p)) || pathname === "/soluciones/adicionales";
  
  // Only use dark text on light pages AND before scroll AND mega menu closed
  const useDarkText = isLightPage && !isScrolledPastMain && !isMegaMenuOpen;

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
      setIsScrolledPastMain(window.pageYOffset > 80);
    };
    checkMobile();
    window.addEventListener("scroll", handleScroll);
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", checkMobile);
    };
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMobileMenuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [isMobileMenuOpen]);

  useEffect(() => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
  }, [pathname]);

  // Hide header on home only
  if (isHome) return null;

  // ── NAV CONFIG ──
  const avMenuOptions = [
    { name: "Filosofía", path: "/av#servicios" },
    { name: "Servicios", path: "/av#servicios-intro" },
    { name: "Proceso", path: "/av#proceso" },
    { name: "Testimonios", path: "/av#testimonios" },
    { name: "FAQ", path: "/av#faq" },
  ];

  const fitnessMenuOptions = [
    { name: "Home", path: "/fitness" },
    { name: "Nosotros", path: "/nosotros" },
    { name: "Soluciones", path: "#", isMegaMenu: true },
    { name: "Fitness Total", path: "/fitness#fitness-total" },
    { name: "FAQ", path: "/fitness#faq" },
  ];

  const fitnessMegaItems = [
    { id: 1, label: "Audio", path: "/soluciones?tab=1" },
    { id: 2, label: "Iluminación", path: "/soluciones?tab=2" },
    { id: 3, label: "Diseño", path: "/soluciones?tab=3" },
    { id: 4, label: "Fitness Total", path: "/soluciones?tab=4" },
  ];

  const fitnessPartnerItems = [
    { id: 5, label: "Stages Indoor Bikes", path: "/soluciones/adicionales#stages-indoor-bikes" },
    { id: 6, label: "Equipamiento de Gimnasios", path: "/soluciones/adicionales#equipamiento-de-gimnasios" },
    { id: 7, label: "Redes y Seguridad", path: "/soluciones/adicionales#redes-y-seguridad" },
  ];

  const menuOptions = isAV ? avMenuOptions : fitnessMenuOptions;
  const megaItems = fitnessMegaItems;
  const contactPath = isAV ? "/av#contacto" : "/contacto";
  const homePath = isAV ? "/av" : "/fitness";
  const switchPath = isAV ? "/fitness" : "/av";
  const switchLabel = isAV ? "Ir a Gewinn Fitness" : "Ir a Gewinn A/V";

  return (
    <>
      <nav className={`flex transition-all duration-500 fixed w-full z-50 max-w-[100vw] ${
        isScrolledPastMain || isMegaMenuOpen
          ? "bg-black text-white border-b border-white/10"
          : isLightPage 
            ? "bg-transparent text-black border-b border-black/10"
            : "bg-transparent text-white border-b border-white/20"
      }`}>
        <div className="flex gap-5 w-full justify-start mx-auto items-center pl-1 pr-6 lg:pl-2 lg:pr-0">
          <div className="flex justify-between w-full items-center gap-8">
            <div className="flex h-full items-center">
              <Link href="/" className={`border-r h-full p-5 flex items-center ${useDarkText ? "border-black/10" : "border-white/10"}`}>
                {useDarkText ? <LogoDark className="h-6 lg:h-8" /> : <Logo className="h-6 lg:h-8" />}
              </Link>
              <ul className="hidden lg:flex gap-0 items-center h-full ml-2">
                {menuOptions.map((option, i) => (
                  <li key={i}>
                    {option.isMegaMenu ? (
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className={`cursor-pointer inline-flex items-center font-clash leading-loose px-6 py-5 transition-all duration-300 ${
                          isMegaMenuOpen ? "bg-white/10" : ""
                        } ${useDarkText ? "text-black hover:bg-black/5" : "text-white hover:bg-white/5"}`}
                      >
                        <PlusIcon dark={useDarkText} className={`mr-2 w-4 h-4 transition-transform duration-300 ${isMegaMenuOpen ? "rotate-45" : ""}`} />
                        {option.name}
                      </button>
                    ) : (
                      <Link href={option.path} className={`cursor-pointer inline-flex font-clash leading-loose px-6 py-5 transition-all duration-300 ${
                        useDarkText ? "text-black hover:bg-black/5" : "text-white hover:bg-white/5"
                      }`}>
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
              <span className={`block w-6 h-px transition-all duration-300 ${useDarkText ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "rotate-45 translate-y-[5px]" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${useDarkText ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "opacity-0" : ""}`} />
              <span className={`block w-6 h-px transition-all duration-300 ${useDarkText ? "bg-black" : "bg-white"} ${isMobileMenuOpen ? "-rotate-45 -translate-y-[5px]" : ""}`} />
            </button>
            <div className="hidden lg:flex items-center">
              {/* Division switch */}
              <Link 
                href={switchPath} 
                className={`inline-flex items-center gap-2 font-clash leading-loose px-6 py-5 transition-all duration-300 ${
                  useDarkText ? "text-black/50 hover:text-black hover:bg-black/5" : "text-white/50 hover:text-white hover:bg-white/5"
                }`}
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                {switchLabel}
              </Link>
              <Link href={contactPath} className={`inline-flex font-clash leading-loose px-6 py-5 transition-all duration-300 ${
                useDarkText ? "bg-black text-white hover:bg-black/90" : "bg-white text-black hover:bg-gray-100"
              }`}>
                Contacto
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile menu */}
      {isMobileView && (
        <div
          className={`lg:hidden fixed top-[65px] left-0 w-full bg-[#080808] border-b border-white/10 text-white transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col p-8 gap-4">
            {menuOptions.map((option, i) => (
              <li key={i}>
                {option.isMegaMenu ? (
                  <button
                    onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                    className="text-left w-full text-white font-clash text-lg py-2"
                  >
                    {option.name}
                    <ArrowIcon className="h-4 inline-block ml-2" />
                  </button>
                ) : (
                  <Link
                    href={option.path}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className="text-white font-clash text-lg py-2 block"
                  >
                    {option.name}
                  </Link>
                )}
              </li>
            ))}
            <li>
              <Link href={contactPath} onClick={() => setIsMobileMenuOpen(false)} className="text-white font-clash text-lg py-2 block">
                Contacto
              </Link>
            </li>
            <li className="pt-4 border-t border-white/10">
              <Link href={switchPath} onClick={() => setIsMobileMenuOpen(false)} className="text-white/50 font-clash text-sm py-2 flex items-center gap-2">
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 7h12m0 0l-4-4m4 4l-4 4m0 6H4m0 0l4 4m-4-4l4-4" />
                </svg>
                Cambiar a {switchLabel}
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mega menu - only for fitness */}
      {isMegaMenuOpen && !isAV && (
        <div
          ref={megaMenuRef}
          className="fixed top-[65px] lg:top-[73px] w-full bg-black border-b border-white/10 z-50 px-8 lg:px-16 py-8 lg:py-10"
        >
          <div className="max-w-[1400px] mx-auto flex flex-col gap-6">
            {/* Soluciones especializadas */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-6 border-b border-white/10">
              <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-clash">
                Soluciones especializadas
              </span>
              <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                {megaItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="flex items-center gap-2 font-clash text-base lg:text-lg text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <span className="text-white/30 font-light text-sm">0{item.id}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Soluciones por partners */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <span className="text-white/30 text-xs tracking-[0.2em] uppercase font-clash">
                Soluciones por partners especializados
              </span>
              <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8">
                {fitnessPartnerItems.map((item) => (
                  <li key={item.id}>
                    <Link
                      href={item.path}
                      onClick={() => setIsMegaMenuOpen(false)}
                      className="flex items-center gap-2 font-clash text-base lg:text-lg text-white/70 hover:text-white transition-colors duration-200"
                    >
                      <span className="text-white/30 font-light text-sm">0{item.id}</span>
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
