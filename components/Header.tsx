"use client";

import { useState, useEffect } from "react";
import { usePathname, useRouter } from "next/navigation";
import Logo from "../components/Logo";
import LogoDark from "../components/LogoDark";
import Button from "../components/Button";
import QuoteIcon from "./icons/QuoteIcon";
import Link from "next/link";
import PlusIcon from "./icons/PlusIcon";

export default function Menu() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const [searchParams, setSearchParams] = useState<string | null>(null);
  const pathname = usePathname();
  const router = useRouter();
  const [activeSection, setActiveSection] = useState<string>("");

  // Set searchParams using useEffect to ensure it's only used on the client-side
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
    document.body.style.overflow =
      isMobileMenuOpen || isMegaMenuOpen ? "hidden" : "";
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
    { name: "Catálogo", path: "/productos" },
  ];

  const handleMenuClick = (option: any) => {
    if (option.isMegaMenu) {
      setIsMegaMenuOpen(!isMegaMenuOpen);
    } else {
      setActiveSection(option.path);
      setIsMobileMenuOpen(false);
      setIsMegaMenuOpen(false);
    }
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  const handleMegaMenuClick = (tabId: number) => {
    setIsMegaMenuOpen(false);
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

  const getButtonStyles = () => {
    return pathname !== "/" && pathname !== "/soluciones"
      ? "!bg-primary text-white"
      : "bg-transparent text-black";
  };

  const getLogoComponent = () => {
    if (pathname === "/soluciones") {
      return <Logo className="h-8" />;
    } else if (pathname === "/") {
      return <Logo className="h-8" />;
    } else {
      return <LogoDark className="h-8" />;
    }
  };

  const getHoverBackgroundClass = () => {
    if (pathname === "/soluciones" || pathname === "/") {
      return "hover:bg-black-200";
    } else {
      return "hover:bg-gray-100";
    }
  };

  const getMegaMenuBackgroundClass = () => {
    if (pathname === "/soluciones" || pathname === "/") {
      return "bg-black-200";
    } else {
      return "bg-white";
    }
  };

  const isNavbarWhite = () => {
    return pathname !== "/" && pathname !== "/soluciones";
  };

  return (
    <>
      <nav
        className={`flex ${getNavBarStyles()} transition duration-300 fixed w-full z-50`}
      >
        <div className="desktop-menu flex gap-5 w-full justify-start mx-auto items-center">
          <div className="flex justify-between w-full items-center gap-8 lg:gap-12 2xl:gap-20">
            <div className="flex h-full">
              <div
                className={`border-r h-full p-5 ${pathname === "/" || pathname === "/soluciones" ? "border-white border-opacity-30" : "border-primary border-opacity-20"}`}
              >
                {getLogoComponent()}
              </div>
              <ul className="flex gap-4 lg:gap-2 items-center h-full">
                {menuOptions.map((option, index) => (
                  <li key={index}>
                    {option.isMegaMenu ? (
                      <Link href={option.path}>
                        <span
                          onClick={() => handleMenuClick(option)}
                          className={`inline-flex items-center font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
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
                                (!pathname.startsWith("/soluciones") ||
                                  pathname === "/soluciones/adicionales"))
                                ? true
                                : false
                            }
                            className={`mr-2 w-4 h-4 transition-transform duration-300 ${
                              isMegaMenuOpen
                                ? "transform rotate-45"
                                : "transform rotate-0"
                            }`}
                          />

                          {option.name}
                        </span>
                      </Link>
                    ) : (
                      <Link href={option.path}>
                        <span
                          onClick={() => handleMenuClick(option)}
                          className={`inline-flex font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
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
            <div className="flex h-full">
              <ul className="flex gap-4 lg:gap-2 items-center">
                <li>
                  <Link href="/contacto">
                    <span
                      className={`inline-flex font-clash !leading-loose px-6 py-5 ${getHoverBackgroundClass()} transition duration-500 ${
                        pathname === "/contacto"
                          ? "bg-gray-50 text-primary"
                          : pathname === "/soluciones" || pathname === "/"
                            ? "text-white"
                            : "text-black"
                      }`}
                    >
                      Contacto
                    </span>
                  </Link>
                </li>
              </ul>

              <Button href="/cotizador" className={getButtonStyles()}>
                <QuoteIcon dark={!isNavbarWhite()} />
                Cotizador (2)
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {isMobileView && isMobileMenuOpen && (
        <div className="mobile-menu bg-primary text-white transition duration-300 fixed inset-0 z-50">
          <ul className="flex flex-col gap-10 py-5 px-2.5 items-start">
            {menuOptions.map((option, index) => (
              <li key={index}>
                <button
                  onClick={() => handleMenuClick(option)}
                  className="cursor-pointer"
                >
                  <span
                    className={`text-secondaryBlue cursor-pointer font-monument uppercase tracking-wider text-[12px] px-5 py-3.5 rounded-full ${getHoverBackgroundClass()} transition duration-500 ${
                      activeSection === option.path
                        ? "bg-greenLighter hover:bg-greenLighter"
                        : ""
                    }`}
                  >
                    {option.name}
                  </span>
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}

      {isMegaMenuOpen && (
        <div
          className={`mega-menu flex fixed !top-[72px] ${getMegaMenuBackgroundClass()} p-4 z-50 h-[45vh] border-b border-x border-secondary border-opacity-20 bg-[#F1F3F5] transition duration-300 rounded-b-[64px] items-center`}
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 m-auto max-w-[1400px] h-full items-center">
            <div className="col-span-1">
              <h3 className="text-primary font-extralight text-2xl font-clashdisplay !leading-none">
                Soluciones
                <br />
                <span className="font-medium">especializadas</span>
              </h3>
              <ul className="mt-12 text-2xl flex flex-col gap-6">
                <li
                  onClick={() => handleMegaMenuClick(1)}
                  className="font-clash font-medium flex gap-2 cursor-pointer"
                >
                  <span className="font-extralight">01</span> Audio
                </li>
                <li
                  onClick={() => handleMegaMenuClick(2)}
                  className="font-clash font-medium flex gap-2 cursor-pointer"
                >
                  <span className="font-extralight">02</span> Iluminación
                </li>
                <li
                  onClick={() => handleMegaMenuClick(3)}
                  className="font-clash font-medium flex gap-2 cursor-pointer"
                >
                  <span className="font-extralight">03</span> Diseño
                </li>
                <li
                  onClick={() => handleMegaMenuClick(4)}
                  className="font-clash font-medium flex gap-2 cursor-pointer"
                >
                  <span className="font-extralight">04</span> Fitness Total
                </li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-primary font-extralight text-2xl font-clashdisplay !leading-none">
                Soluciones by
                <br />
                <span className="font-medium">partners especializados</span>
              </h3>
              <ul className="mt-12 text-2xl flex flex-col gap-6">
                <li className="font-clash font-medium flex gap-2 cursor-pointer">
                  <Link href="/soluciones/adicionales">
                    <span className="font-extralight">05</span> Stages Indoor
                    Bikes
                  </Link>
                </li>
                <li className="font-clash font-medium flex gap-2 cursor-pointer">
                  <Link href="/soluciones/adicionales">
                    <span className="font-extralight">06</span> Equipamiento de
                    Gimnasios
                  </Link>
                </li>
                <li className="font-clash font-medium flex gap-2 cursor-pointer">
                  <Link href="/soluciones/adicionales">
                    <span className="font-extralight">07</span> Piso para
                    Gimnasios
                  </Link>
                </li>
              </ul>
            </div>

            <div className="col-span-1">
              <h3 className="text-primary font-extralight text-2xl font-clashdisplay !leading-none">
                Soluciones
                <br />
                <span className="font-medium">adicionales</span>
              </h3>
              <ul className="mt-12 text-2xl flex flex-col gap-6">
                <li className="font-clash font-medium flex gap-2 cursor-pointer">
                  <Link href="/soluciones/adicionales">
                    <span className="font-extralight">08</span> Circuito Cerrado
                    de TV
                  </Link>
                </li>
                <li className="font-clash font-medium flex gap-2 cursor-pointer">
                  <Link href="/soluciones/adicionales">
                    <span className="font-extralight">09</span> Infraestructura
                    de Red
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .hamburger-icon {
          display: none;
        }
        .desktop-menu {
          display: flex;
        }
        .mobile-menu {
          display: none;
        }
        @media (max-width: 1024px) {
          .hamburger-icon {
            display: block;
            cursor: pointer;
          }
          .line {
            width: 25px;
            height: 1.5px;
            background-color: #3b46ba;
            margin: 5px;
            transition: transform 0.4s;
          }
          .open:nth-child(1) {
            transform: translateY(6.5px) rotate(45deg);
          }
          .open:nth-child(2) {
            opacity: 0;
          }
          .open:nth-child(3) {
            transform: translateY(-6.5px) rotate(-45deg);
          }
          .desktop-menu {
            display: none;
          }
          .mobile-menu {
            display: flex;
            flex-direction: column;
            position: fixed;
            top: 85px;
            left: 10px;
            width: calc(100vw - 20px);
            height: auto;
            background-color: #fff;
            border-radius: 32px;
            padding: 20px;
            z-index: 999;
            transform: translateX(${isMobileMenuOpen ? "0" : "-100%"});
            transition: transform 0.3s ease-in-out;
          }
        }
        .mega-menu {
          display: block;
          position: fixed;
          inset: 0;
          z-index: 1000;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}
