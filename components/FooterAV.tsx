"use client";

import Link from "next/link";
import LogoWhite from "./LogoWhite";
import InstagramIcon from "../components/icons/InstagramIcon";
import FacebookIcon from "../components/icons/FacebookIcon";
import Osmium from "./icons/Osmium";

export default function FooterAV() {
  const links = {
    servicios: [
      { name: "Audio Hi-Fi", href: "/av#servicios" },
      { name: "Pro Audio & Video", href: "/av#servicios" },
      { name: "Tratamiento Acústico", href: "/av#servicios" },
    ],
    navegacion: [
      { name: "Filosofía", href: "/av#servicios" },
      { name: "Proceso", href: "/av#proceso" },
      { name: "Testimonios", href: "/av#testimonios" },
      { name: "FAQ", href: "/av#faq" },
      { name: "Contacto", href: "/av#contacto" },
    ],
  };

  return (
    <div className="w-full bg-secondary relative z-30 overflow-hidden">
      <footer className="relative z-10 py-12 md:py-12 px-[30px] xl:px-24 max-w-[1800px] mx-auto">
        {/* Main content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 mb-12 lg:mb-12 border-y border-mainGray border-opacity-20 py-24">
          {/* Logo and description */}
          <div className="lg:col-span-4">
            <LogoWhite className="h-[90px] mb-6" />
            <p className="text-mainGray/80 font-clash text-sm leading-none! max-w-xs mb-8">
              Soluciones integrales de audio, video y acústica para espacios que buscan experiencias extraordinarias.
            </p>
            <div className="flex items-center gap-6">
              <Link 
                href="https://www.instagram.com/gewinnsolutions" 
                target="_blank"
                className="text-mainGray hover:text-white transition duration-500"
              >
                <InstagramIcon color="currentColor" className="h-8" />
              </Link>
              <Link 
                href="https://www.facebook.com/gewinnsolutions" 
                target="_blank"
                className="text-mainGray hover:text-white transition duration-500"
              >
                <FacebookIcon color="currentColor" className="h-8" />
              </Link>
            </div>
          </div>

          {/* Links columns */}
          <div className="lg:col-span-8 grid grid-cols-2 md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-mainGray/60 font-clashdisplay text-xs uppercase tracking-[4px] mb-8">
                Servicios
              </h4>
              <ul className="space-y-3">
                {links.servicios.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className="text-mainGray hover:text-white font-clash text-lg transition duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-mainGray/60 font-clashdisplay text-xs uppercase tracking-[4px] mb-8">Navegación</h4>
              <ul className="space-y-3">
                {links.navegacion.map((link, i) => (
                  <li key={i}>
                    <Link 
                      href={link.href}
                      className="text-mainGray hover:text-white font-clash text-lg transition duration-500"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="text-mainGray/60 font-clashdisplay text-xs uppercase tracking-[4px] mb-8">Contacto</h4>
              <ul className="space-y-3">
                <li>
                  <Link 
                    href="mailto:contacto@gewinnsolutions.com"
                    className="text-mainGray hover:text-white font-clash text-lg transition duration-500"
                  >
                    contacto@gewinnsolutions.com
                  </Link>
                </li>
                <li>
                  <Link 
                    href="https://api.whatsapp.com/send/?phone=523331004726"
                    target="_blank"
                    className="text-mainGray hover:text-white font-clash text-lg transition duration-500"
                  >
                    +52 33 3100 4726
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row text-center md:text-left gap-4 justify-between font-clash">
          <p className="text-sm text-secondaryGray/60">
            <span className="font-medium">© Gewinn Solutions {new Date().getFullYear()}.</span>{" "}
            Todos los derechos reservados.
          </p>
          <p className="text-sm text-secondaryGray/60">
            Diseñado y desarrollado por <Osmium />
          </p>
        </div>
      </footer>

   
    </div>
  );
}
