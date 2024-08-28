"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import LogoWhite from "./LogoWhite";
import { usePathname } from "next/navigation";
import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import Jestov from "./icons/Jestov";

const socialOptions = [
  {
    name: "Instagram",
    icon: <InstagramIcon color="#B6B6B6" className="h-8" />,
    link: "#",
  },
  {
    name: "Facebook",
    icon: <FacebookIcon color="#B6B6B6" className="h-8" />,
    link: "#",
  },
];

const menuItems = [
  {
    links: [
      { name: "Nosotros", href: "/nosotros" },
      { name: "Soluciones", href: "#" },
      { name: "Catálogo", href: "/catalogo" },
    ],
  },
];

export default function Footer() {
  const pathname = usePathname();
  const [activeSection, setActiveSection] = useState<string>("");

  useEffect(() => {
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
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const isActive = (route: string) => {
    return route === activeSection;
  };

  return (
    <div className="w-full bg-secondary relative z-30">
      <footer className="flex flex-col py-12 md:py-24 px-[30px] xl:px-24 gap-12 lg:gap-24 text-white relative z-1 w-full max-w-[1800px] mx-auto">
        <div className="flex flex-col gap-8 md:gap-0 items-center md:flex-row justify-center md:justify-between w-full border-y border-mainGray border-opacity-20 py-12">
          <LogoWhite className="h-[90px]" />
          {menuItems.map((menu, index) => (
            <div
              key={index}
              className="flex gap-6 lg:gap-10 2xl:gap-2 items-center w-full justify-center"
            >
              <ul className="flex flex-col md:flex-row gap-2 md:gap-4 w-full items-center justify-center">
                {menu.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <Link
                      href={link.href}
                      className={`inline-flex text-mainGray hover:text-secondaryBlue !leading-loose font-clash font-normal text-lg px-5 py-3.5 rounded-full hover:bg-gray-100 transition duration-500 ${
                        isActive(link.href)
                          ? "!text-secondaryBlue bg-greenLighter hover:bg-greenLighter"
                          : ""
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
          <div className="flex flex-col gap-6 items-center md:items-end">
            <ul className="flex items-center gap-6 md:ml-auto">
              {socialOptions.map((social, index) => (
                <li key={index}>
                  <Link
                    href={social.link}
                    target="_blank"
                    className="text-inherit hover:opacity-85 transition duration-500"
                  >
                    {social.icon}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="flex gap-4 justify-between font-clash">
          <p className="text-base text-secondaryGray">
            <span className="font-medium">
              © Gewinn Solutions {new Date().getFullYear()}.
            </span>{" "}
            Todos los derechos reservados.
          </p>
          <p className="text-base text-secondaryGray">
            Diseñado y desarrollado por <Jestov />
          </p>
        </div>
      </footer>
    </div>
  );
}
