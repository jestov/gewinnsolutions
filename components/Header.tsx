"use client";

import { useState, useEffect, useRef } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../components/Logo";
import LogoDark from "../components/LogoDark";
import Button from "../components/Button";
import QuoteIcon from "./icons/QuoteIcon";
import Link from "next/link";
import PlusIcon from "./icons/PlusIcon";
import ArrowIcon from "./icons/ArrowIcon";

export default function Menu() {
  const megaMenuRef = useRef<HTMLDivElement | null>(null);
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        megaMenuRef.current &&
        !megaMenuRef.current.contains(event.target as Node)
      ) {
        setIsMegaMenuOpen(false);
      }
    };

    if (isMegaMenuOpen) {
      document.addEventListener("click", handleClickOutside);
    } else {
      document.removeEventListener("click", handleClickOutside);
    }

    return () => {
      document.removeEventListener("click", handleClickOutside);
    };
  }, [isMegaMenuOpen]);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setSearchParams(params.get("tab"));
  }, []);

  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    const handleScroll = () => {
      const sections = document.querySelectorAll("section");
      let currentSection = "";

      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;
        if (
          window.scrollY >= sectionTop - sectionHeight / 3 &&
          window.scrollY < sectionTop + sectionHeight - sectionHeight / 3
        ) {
          currentSection = section.getAttribute("id") || "";
        }
      });

      setActiveSection(`#${currentSection}`);

      if (pathname === "/") {
        const main = document.querySelector("main");
        if (main) {
          const mainOffset =
            main.offsetTop + main.offsetHeight - (main.offsetHeight - 100);
          setIsScrolledPastMain(window.pageYOffset > mainOffset);
        }
      }
    };

    checkIfMobileView();
    if (pathname === "/") {
      window.addEventListener("scroll", handleScroll);
    }
    window.addEventListener("resize", checkIfMobileView);

    return () => {
      window.removeEventListener("resize", checkIfMobileView);
      if (pathname === "/") {
        window.removeEventListener("scroll", handleScroll);
      }
    };
  }, [pathname]);

  useEffect(() => {
    if (isMegaMenuOpen) {
      document.body.style.overflow = "auto";
    } else if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }

    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isMegaMenuOpen]);

  useEffect(() => {
    setIsMegaMenuOpen(false);
  }, [pathname]);

  const menuOptions = [
    { name: "Nosotros", path: "/nosotros" },
    {
      name: "Soluciones",
      path: "#",
      isMegaMenu: true,
    },
  ];

  const handleMenuClick = (option: any) => {
    if (option.isMegaMenu) {
      setIsMegaMenuOpen(!isMegaMenuOpen);
    } else {
      setActiveSection(option.path);
      setIsMobileMenuOpen(false);
      setIsMegaMenuOpen(false);
      router.push(option.path);
    }
  };

  const handleMegaMenuClick = (tabId: number) => {
    setIsMegaMenuOpen(false);
    setIsMobileMenuOpen(false);
    router.push(`/soluciones?tab=${tabId}`);
  };

  const getNavBarStyles = () => {
    if (pathname === "/soluciones") {
      return "bg-primary text-white border-b border-white border-opacity-30";
    } else if (pathname === "/") {
      return isScrolledPastMain
        ? "bg-secondary bg-opacity-100 text-white border-b border-white border-opacity-30"
        : "bg-transparent text-white border-b border-white border-opacity-20";
    } else {
      return "bg-white text-black border-b border-primary border-opacity-20";
    }
  };

  const getHoverBackgroundClass = () => {
    return pathname === "/" || pathname === "/soluciones"
      ? "hover:bg-black-200"
      : "hover:bg-gray-100";
  };

  const getLogoComponent = () => {
    if (pathname === "/soluciones" || pathname === "/") {
      return <Logo className="h-6 lg:h-8" />;
    } else {
      return <LogoDark className="h-6 lg:h-8" />;
    }
  };

  return (
    <>
      <nav
        className={`flex ${getNavBarStyles()} transition duration-300 fixed w-full z-50 max-w-[100vw]`}
      >
        <div className="flex gap-5 w-full justify-start mx-auto items-center pl-1 pr-6 lg:pl-2 lg:pr-0">
          {/* Logo + Menu */}
          <div className="flex justify-between w-full items-center gap-8">
            <div className="flex h-full items-center">
              <div
                className={`border-r h-full p-5 ${
                  pathname === "/" || pathname === "/soluciones"
                    ? "border-white border-opacity-30"
                    : "border-primary border-opacity-20"
                }`}
              >
                {getLogoComponent()}
              </div>

              {/* Desktop Menu */}
              <ul className="hidden lg:flex gap-4 items-center h-full">
                {menuOptions.map((option, index) => (
                  <li key={index}>
                    {option.isMegaMenu ? (
                      <span
                        onClick={() => handleMenuClick(option)}
                        className={`cursor-pointer inline-flex items-center font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
                          isMegaMenuOpen
                            ? "text-primary bg-[#F1F3F5]"
                            : pathname === "/soluciones" || pathname === "/"
                              ? "text-white"
                              : "text-black"
                        }`}
                      >
                        <PlusIcon
                          dark={
                            isMegaMenuOpen ||
                            (pathname !== "/" &&
                              !pathname.startsWith("/soluciones"))
                          }
                          className={`mr-2 w-4 h-4 transition-transform duration-300 ${
                            isMegaMenuOpen
                              ? "transform rotate-45"
                              : "transform rotate-0"
                          }`}
                        />
                        {option.name}
                      </span>
                    ) : (
                      <Link href={option.path}>
                        <span
                          onClick={() => handleMenuClick(option)}
                          className={`cursor-pointer inline-flex font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
                            pathname === option.path
                              ? "text-primary bg-gray-50"
                              : pathname === "/soluciones" || pathname === "/"
                                ? "text-white"
                                : "text-black"
                          }`}
                        >
                          {option.name}
                        </span>
                      </Link>
                    )}
                  </li>
                ))}
              </ul>
            </div>

            {/* Hamburger Button */}
            <div
              className="lg:hidden flex flex-col items-center justify-center cursor-pointer"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            >
              <div
                className={`line transition-all duration-300 ${
                  isMobileMenuOpen ? "rotate-45 translate-y-1.5" : ""
                } w-6 h-0.5 ${
                  pathname === "/" || pathname === "/soluciones"
                    ? "bg-white"
                    : "bg-black"
                }`}
              />
              <div
                className={`line transition-all duration-300 ${
                  isMobileMenuOpen ? "opacity-0" : ""
                } w-6 h-0.5 mt-1 ${
                  pathname === "/" || pathname === "/soluciones"
                    ? "bg-white"
                    : "bg-black"
                }`}
              />
              <div
                className={`line transition-all duration-300 ${
                  isMobileMenuOpen ? "-rotate-45 -translate-y-1.5" : ""
                } w-6 h-0.5 mt-1 ${
                  pathname === "/" || pathname === "/soluciones"
                    ? "bg-white"
                    : "bg-black"
                }`}
              />
            </div>

            {/* Contacto */}
            <div className="hidden lg:flex">
              <Link href="/contacto">
                <span
                  className={`inline-flex font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
                    pathname === "/contacto" || pathname === "/nosotros"
                      ? "bg-black text-white "
                      : pathname === "/soluciones" || pathname === "/"
                        ? "text-black bg-white"
                        : "text-white bg-white"
                  }`}
                >
                  Contacto
                </span>
              </Link>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMobileView && (
        <div
          className={`lg:hidden fixed top-[65px] left-0 w-full border-b border-white border-opacity-30 bg-primary text-white transition-transform duration-300 z-50 ${
            isMobileMenuOpen ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-4 p-8">
            {menuOptions.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuClick(option)}
                  className="text-left w-full"
                >
                  <span
                    className={`text-white font-clash text-base lg:text-lg py-2 block ${
                      activeSection === option.path ? "font-semibold" : ""
                    }`}
                  >
                    {option.name}
                    {option.name === "Soluciones" && (
                      <ArrowIcon className="h-4 inline-block ml-2" />
                    )}
                  </span>
                </button>
              </li>
            ))}
            <li>
              <Link
                href="/contacto"
                onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              >
                <span className="text-white font-clash text-base lg:text-lg py-2 block">
                  Contacto
                </span>
              </Link>
            </li>
          </ul>
        </div>
      )}

      {/* Mega Menu */}
      {isMegaMenuOpen && (
        <div
          ref={megaMenuRef}
          className={`mega-menu w-full flex flex-col fixed top-[65px] lg:!top-[73px] ${pathname === "/soluciones" || pathname === "/" ? "bg-black-200" : "bg-white"} px-4 z-50 lg:h-[27vh] border-b border-x border-secondary border-opacity-20 bg-[#F1F3F5] transition duration-300 lg:rounded-b-[64px] items-center overflow-auto`}
        >
          <div className="flex flex-col w-full gap-8 lg:gap-12 m-auto max-w-[1400px] h-full lg:items-center lg:justify-center p-8 text-sm opacity-80">
            <div
              onClick={() => setIsMegaMenuOpen(false)}
              className="text-black flex gap-1 -ml-1 lg:hidden"
            >
              <ArrowIcon dark={true} className="h-5 rotate-180 opacity-80" />
              Menú
            </div>

            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between w-full lg:items-center">
              <h3 className="text-primary font-extralight text-lg lg:text-2xl font-clashdisplay !leading-none">
                Soluciones
                <br />
                <span className="font-medium">especializadas</span>
              </h3>
              <ul className="text-2xl flex flex-col lg:flex-row gap-2 lg:gap-6">
                {[1, 2, 3, 4].map((tab) => (
                  <li
                    key={tab}
                    onClick={() => handleMegaMenuClick(tab)}
                    className="font-clash font-medium flex gap-2 cursor-pointer text-lg lg:text-xl"
                  >
                    <span className="font-extralight">0{tab}</span>{" "}
                    {
                      ["Audio", "Iluminación", "Diseño", "Fitness Total"][
                        tab - 1
                      ]
                    }
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex flex-col lg:flex-row gap-6 lg:gap-12 justify-between w-full lg:items-center">
              <h3 className="text-primary font-extralight text-lg lg:text-2xl font-clashdisplay !leading-none">
                Soluciones por
                <br />
                <span className="font-medium">partners especializados</span>
              </h3>
              <ul className="text-2xl flex flex-col lg:flex-row gap-2 lg:gap-6">
                <li className="font-clash font-medium flex gap-2 cursor-pointer text-lg lg:text-xl">
                  <Link
                    href="/soluciones/adicionales#stages-indoor-bikes"
                    onClick={() => handleMegaMenuClick(1)}
                  >
                    <span className="font-extralight">05</span> Stages Indoor
                    Bikes
                  </Link>
                </li>
                <li className="font-clash font-medium flex gap-2 cursor-pointer text-lg lg:text-xl">
                  <Link
                    href="/soluciones/adicionales#equipamiento-de-gimnasios"
                    onClick={() => handleMegaMenuClick(1)}
                  >
                    <span className="font-extralight">06</span> Equipamiento de
                    Gimnasios
                  </Link>
                </li>
                <li className="font-clash font-medium flex gap-2 cursor-pointer text-lg lg:text-xl">
                  <Link
                    href="/soluciones/adicionales#redes-y-seguridad"
                    onClick={() => handleMegaMenuClick(1)}
                  >
                    <span className="font-extralight">07</span> Redes y
                    Seguridad
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
