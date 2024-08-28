"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import Logo from "../components/Logo";
import Button from "../components/Button";
import QuoteIcon from "./icons/QuoteIcon";

export default function Menu() {
  const [isScrolledPastMain, setIsScrolledPastMain] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isMegaMenuOpen, setIsMegaMenuOpen] = useState(false);
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
    const checkIfMobileView = () => {
      setIsMobileView(window.innerWidth <= 1024);
    };

    window.addEventListener("resize", checkIfMobileView);
    checkIfMobileView();

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

      const main = document.querySelector("main");
      if (main) {
        const mainOffset =
          main.offsetTop + main.offsetHeight - (main.offsetHeight - 100);
        setIsScrolledPastMain(window.pageYOffset > mainOffset);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", checkIfMobileView);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.overflow =
      isMobileMenuOpen || isMegaMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen, isMegaMenuOpen]);

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
      const element = document.getElementById(option.path.replace("#", ""));
      if (element) {
        window.scrollTo({
          top: element.offsetTop,
          behavior: "smooth",
        });
        window.history.pushState(null, "", option.path);
        setActiveSection(option.path);
      }
      setIsMobileMenuOpen(false);
      setIsMegaMenuOpen(false); // Cierra el megamenú si se abre un enlace normal
    }
  };

  const closeMegaMenu = () => {
    setIsMegaMenuOpen(false);
  };

  return (
    <>
      <nav
        className={`flex bg-primary bg-opacity-10 transition duration-300 ${isScrolledPastMain ? "bg-secondary bg-opacity-100" : "mt-[2.5px]"} fixed w-full z-50`}
      >
        <div className="desktop-menu flex gap-5 w-full justify-start mx-auto items-center ">
          <div className="flex justify-between w-full items-center gap-8 lg:gap-12 2xl:gap-20 border-white border-b border-opacity-30">
            <div className="flex h-full gap-4">
              <div className="border-white border-r border-opacity-30 h-full p-5">
                <Logo className="h-8" />
              </div>
              <ul className="flex gap-4 lg:gap-2 items-center">
                {menuOptions.map((option, index) => (
                  <li key={index}>
                    {option.isMegaMenu ? (
                      <button
                        onClick={() => setIsMegaMenuOpen(!isMegaMenuOpen)}
                        className="cursor-pointer"
                      >
                        <span
                          className={`inline-flex font-clash text-white !leading-loose px-4 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${
                            isMegaMenuOpen
                              ? "text-white bg-secondary hover:bg-secondary hover:text-white"
                              : ""
                          }`}
                        >
                          {option.name}
                        </span>
                      </button>
                    ) : (
                      <a
                        href={option.path}
                        onClick={() => {
                          setActiveSection(option.path);
                          setIsMobileMenuOpen(false); // Cierra el menú móvil si está abierto
                          setIsMegaMenuOpen(false); // Cierra el megamenú si está abierto
                        }}
                        className={`inline-flex font-clash text-white !leading-loose px-4 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${
                          activeSection === option.path
                            ? "text-white bg-secondary hover:bg-secondary hover:text-white"
                            : ""
                        }`}
                      >
                        {option.name}
                      </a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
            <div className="flex h-full gap-4">
              <ul className="flex gap-4 lg:gap-2 items-center">
                <li>
                  <button className="cursor-pointer">
                    <span
                      className={`inline-flex font-clash text-white !leading-loose px-4 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${activeSection === "/contacto" ? "bg-secondary text-white hover:bg-secondary hover:text-white" : ""}`}
                    >
                      Contacto
                    </span>
                  </button>
                </li>
              </ul>
              <Button href="/cotizador">
                <QuoteIcon />
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
                    className={`text-secondaryBlue cursor-pointer font-monument uppercase tracking-wider text-[12px] px-5 py-3.5 rounded-full hover:bg-gray-100 transition duration-500  ${activeSection === option.path ? "bg-greenLighter hover:bg-greenLighter" : ""}`}
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
        <div className="mega-menu fixed inset-0 bg-white p-8 z-50">
          <div className="flex justify-end">
            <button onClick={closeMegaMenu} className="text-black">
              X
            </button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-10">
            <div className="col-span-1">
              <h3 className="text-secondary font-monument">
                Soluciones especializadas
              </h3>
              <ul className="mt-4">
                <li>01 Audio</li>
                <li>02 Iluminación</li>
                <li>03 Diseño</li>
                <li>04 Fitness Total</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-secondary font-monument">
                Soluciones by partners especializados
              </h3>
              <ul className="mt-4">
                <li>05 Stages Indoor Bikes</li>
                <li>06 Equipamiento de Gimnasios</li>
                <li>07 Piso para Gimnasios</li>
              </ul>
            </div>
            <div className="col-span-1">
              <h3 className="text-secondary font-monument">
                Soluciones adicionales
              </h3>
              <ul className="mt-4">
                <li>08 Circuito Cerrado de TV</li>
                <li>09 Infraestructura de Red</li>
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
          background-color: #ffffff;
          position: fixed;
          inset: 0;
          z-index: 1000;
          overflow-y: auto;
        }
      `}</style>
    </>
  );
}
