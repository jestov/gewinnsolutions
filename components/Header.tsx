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
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  // Verifica si la vista es móvil
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

  // Maneja la apertura y cierre del menú móvil
  useEffect(() => {
    const handleToggleMenu = () => {
      if (isMobileMenuOpen) {
        document.body.style.overflow = "hidden"; // Bloquea el scroll
      } else {
        document.body.style.overflow = ""; // Habilita el scroll
      }
    };

    handleToggleMenu();

    return () => {
      document.body.style.overflow = ""; // Asegura que el scroll se habilite cuando se desmonte el componente
    };
  }, [isMobileMenuOpen]);

  // Maneja los cambios en el hash de la URL
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash;
      if (hash) {
        setActiveSection(hash);
      } else {
        setActiveSection("");
      }
    };

    handleHashChange(); // Verificación inicial
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  // Verifica el pathname para resetear la sección activa cuando no hay hash
  useEffect(() => {
    const hash = window.location.hash;
    if (!hash) {
      setActiveSection("");
    } else {
      setActiveSection(hash);
    }
  }, [pathname]);

  const menuOptions = [
    { name: "Nosotros", path: "/nosotros" },
    { name: "Soluciones", path: "#" },
    { name: "Catálogo", path: "/productos" },
  ];

  const iconColor = "#3b46ba";

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  const handleMenuClick = (path: string) => {
    const element = document.getElementById(path.replace("#", ""));
    if (element) {
      window.scrollTo({
        top: element.offsetTop,
        behavior: "smooth",
      });
      window.history.pushState(null, "", path);
      setActiveSection(path);
    }
    closeMobileMenu();
  };

  const headerClasses = `flex mt-[2.5px] bg-primary bg-opacity-10 gap-12 md:gap-6 items-center justify-center w-full mx-auto inline-block transition-all duration-300 z-50 fixed max-w-[100vw] ${isScrolledPastMain ? "" : ""} ${isMobileMenuOpen ? "" : ""}`;

  return (
    <>
      <nav className={headerClasses}>
        <div className="desktop-menu flex gap-5 w-full justify-start mx-auto border-b border-white border-opacity-30 items-center">
          <div className="flex justify-between w-full items-center gap-8 lg:gap-12 2xl:gap-20">
            <div className="flex h-full gap-4">
              <div className="border-white border-r border-opacity-30 h-full p-5">
                <Logo className="h-8" />
              </div>
              <ul className="flex gap-4 lg:gap-2 items-center">
                {menuOptions.map((option, index) => (
                  <li key={index}>
                    <button
                      onClick={() => handleMenuClick(option.path)}
                      className="cursor-pointer"
                    >
                      <span
                        className={`inline-flex font-clash text-white !leading-loose px-4 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${activeSection === option.path ? "bg-secondary text-white hover:bg-secondary hover:text-white" : ""}`}
                      >
                        {option.name}
                      </span>
                    </button>
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
              <Button href="/cotizador" className="-mt-[2.5px]">
                <QuoteIcon />
                Cotizador (2)
              </Button>
            </div>
          </div>
        </div>

        {isMobileView && (
          <div className="flex justify-between w-full bg-white p-3 items-center rounded-full fixed z-50 top-[20px] mx-[10px] max-w-[95vw]">
            <div className="h-full border-white border-r ">
              <Logo />
            </div>
            <button className="hamburger-icon" onClick={toggleMobileMenu}>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
              <div className={`line ${isMobileMenuOpen ? "open" : ""}`}></div>
            </button>
            {isMobileMenuOpen && (
              <div className="mobile-menu bg-primary text-white transition duration-300">
                <ul className="flex flex-col gap-10 py-5 px-2.5 items-start">
                  {menuOptions.map((option, index) => (
                    <li key={index}>
                      <button
                        onClick={() => handleMenuClick(option.path)}
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
          </div>
        )}
      </nav>

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
          .mobile-menu.open {
            transform: translateX(0);
          }
        }
      `}</style>
    </>
  );
}
