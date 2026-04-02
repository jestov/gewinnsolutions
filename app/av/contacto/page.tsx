"use client";

import { FC } from "react";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Link from "next/link";

const AVContactPage: FC = () => {
  return (
    <div className="bg-[#080808] text-white min-h-screen">
      {/* Header spacer */}
      <div className="h-[73px]" />

      <section className="py-24 lg:py-40 px-8 lg:px-16">
        <div className="max-w-[1400px] mx-auto">
          <div className="flex items-center gap-4 mb-12">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-clash">Contacto</span>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <h1 className="font-clashdisplay font-light text-4xl lg:text-6xl xl:text-7xl text-white leading-tight">
                Hablemos sobre tu proyecto.
              </h1>
              <p className="text-white/40 text-base font-clash font-light leading-relaxed max-w-sm">
                Cuéntanos tu visión. Nuestro equipo de ingenieros y diseñadores está listo para crear algo extraordinario.
              </p>
              <div className="w-12 h-px bg-white/10" />
              <div className="flex flex-col gap-4">
                <Link
                  href="mailto:contacto@gewinnsolutions.com"
                  className="text-white/60 hover:text-white text-lg font-clash font-light transition-colors duration-300"
                >
                  contacto@gewinnsolutions.com
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=523331004726"
                  target="_blank"
                  className="text-white/60 hover:text-white text-lg font-clash font-light transition-colors duration-300"
                >
                  (+52) 1 33 3100 4726
                </Link>
              </div>

              {/* Values */}
              <div className="mt-8 grid grid-cols-2 gap-px bg-white/5">
                {["Experience", "Integration", "Precision", "Craftsmanship"].map((v) => (
                  <div key={v} className="bg-[#080808] p-6 flex items-center">
                    <span className="text-[#C9A96E] text-xs tracking-[0.3em] uppercase font-clash">{v}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right — form */}
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default AVContactPage;
