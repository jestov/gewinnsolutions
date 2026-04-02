"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function useReveal(threshold = 0.08) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  return { ref, visible };
}

const services = [
  {
    number: "01",
    title: "Audio Hi-Fi",
    subtitle: "El sonido tiene el poder de transformar la manera en que vivimos un espacio.",
    body: "Integramos sistemas de audio Hi-Fi de referencia mundial, desde configuraciones estéreo de alta fidelidad, cines en casa hasta comercios que buscan transformar cualquier espacio en una experiencia inmersiva. Cada proyecto es cuidadosamente diseñado para lograr un sonido extraordinario y una integración estética impecable.",
    image: "/img/av/audio-hifi.jpg",
    fallback: "/img/audio-1.jpg",
    tag: "Residential · Commercial",
  },
  {
    number: "02",
    title: "Pro Audio & Video",
    subtitle: "Soluciones audiovisuales diseñadas para los espacios vanguardistas.",
    body: "Desarrollamos instalaciones profesionales de audio y video para entornos corporativos y comerciales, incluyendo videoconferencia avanzada, pantallas interactivas, videowalls y sistemas de distribución de video. Tecnología de vanguardia integrada con precisión y elegancia.",
    image: "/img/av/pro-av.jpg",
    fallback: "/img/diseno-1.jpg",
    tag: "Corporate · Hospitality",
  },
  {
    number: "03",
    title: "Tratamiento Acústico",
    subtitle: "El sonido de un espacio comienza con su diseño.",
    body: "Creamos soluciones acústicas personalizadas utilizando una amplia variedad de materiales y elementos arquitectónicos que optimizan el comportamiento sonoro del entorno. Cada proyecto se desarrolla en conjunto con arquitectos y diseñadores, logrando espacios que suenan tan bien como se ven.",
    image: "/img/av/acoustic.jpg",
    fallback: "/img/diseno-2.jpg",
    tag: "Architecture · Design",
  },
];

type Service = typeof services[0];

function ServiceBlock({ service, isEven, delay }: { service: Service; isEven: boolean; delay: number }) {
  const { ref, visible } = useReveal();
  const [imgSrc, setImgSrc] = useState(service.image);

  return (
    <div
      ref={ref}
      className={`grid grid-cols-1 lg:grid-cols-2 border-t border-white/[0.06] transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"
      }`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Image with glass overlay */}
      <div className={`relative overflow-hidden min-h-[60vw] lg:min-h-[560px] ${isEven ? "lg:order-1" : "lg:order-2"}`}>
        <img
          src={imgSrc}
          onError={() => setImgSrc(service.fallback)}
          alt={service.title}
          className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.4s] ease-out hover:scale-[1.04]"
        />
        {/* Subtle glass vignette */}
        <div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808]/40 to-transparent" />
        {/* Number watermark */}
        <span className="absolute bottom-6 right-8 text-white/[0.07] font-clashdisplay text-[8rem] font-light leading-none select-none">
          {service.number}
        </span>
      </div>

      {/* Text panel */}
      <div className={`flex flex-col justify-center px-8 py-14 lg:px-16 lg:py-24 bg-[#080808] ${isEven ? "lg:order-2" : "lg:order-1"}`}>
        <div className="flex items-center gap-4 mb-8">
          <span className="text-white/20 font-clash text-[10px] tracking-[0.5em] uppercase">{service.number}</span>
          <div className="w-3 h-px bg-white/10" />
          <span className="text-white/20 font-clash text-[10px] tracking-[0.35em] uppercase">{service.tag}</span>
        </div>
        <h3 className="font-clashdisplay font-light text-[clamp(2rem,3.5vw,3.5rem)] text-white leading-[1.05] mb-5">
          {service.title}
        </h3>
        <p className="text-white/55 text-base lg:text-[17px] font-clashdisplay font-light italic leading-snug mb-6">
          {service.subtitle}
        </p>
        <div className="w-8 h-px bg-[#C9A96E]/60 mb-8" />
        <p className="text-white/35 text-[15px] lg:text-base leading-[1.85] font-clash font-light max-w-md">
          {service.body}
        </p>
      </div>
    </div>
  );
}

const AVPage: FC = () => {
  const [scrollY, setScrollY] = useState(0);
  const introReveal = useReveal();
  const philReveal = useReveal();
  const closingReveal = useReveal();
  const contactReveal = useReveal();

  useEffect(() => {
    const onScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="av-section bg-[#080808] text-white overflow-x-hidden">

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[640px] flex flex-col justify-end">
        <video
          autoPlay loop muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollY * 0.00006})`, transformOrigin: "center" }}
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        {/* Layered gradients — fluid.glass style */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-[#080808]/20 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#080808]/30 to-transparent" />

        {/* Frosted glass bottom bar */}
        <div
          className="absolute bottom-0 left-0 right-0 h-40 pointer-events-none"
          style={{ background: "linear-gradient(to top, #080808 0%, transparent 100%)" }}
        />

        {/* Hero content */}
        <div className="relative z-10 px-6 sm:px-10 lg:px-20 pb-20 lg:pb-32 max-w-[1400px] mx-auto w-full">
          {/* Eyebrow */}
          <div className="flex items-center gap-4 mb-8">
            <div className="w-8 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">
              Engineering Exceptional Experiences
            </span>
          </div>

          {/* Headline */}
          <h1 className="font-clashdisplay font-light text-[clamp(2.6rem,6.4vw,6.4rem)] leading-[1.0] tracking-[-0.02em] max-w-5xl mb-10 text-white">
            Diseñamos experiencias donde el sonido, la tecnología y el espacio se encuentran en{" "}
            <em className="text-white/60">perfecta armonía.</em>
          </h1>

          {/* Sub + CTA row */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6 sm:gap-12">
            <p className="text-white/35 text-[11px] tracking-[0.3em] uppercase font-clash">
              Audio · Video · Acústica · Iluminación
            </p>

            {/* Glass pill button — fluid.glass style */}
            <Link
              href="#servicios"
              className="group relative inline-flex items-center gap-3 px-6 py-3 text-[11px] tracking-[0.25em] uppercase font-clash text-white/80 hover:text-white transition-all duration-500 cursor-pointer"
              style={{
                background: "color-mix(in srgb, #ffffff 10%, transparent)",
                backdropFilter: "blur(12px)",
                WebkitBackdropFilter: "blur(12px)",
                border: "1px solid rgba(255,255,255,0.12)",
                borderRadius: "100px",
              }}
            >
              <span>Explorar nuestros proyectos</span>
              <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 19l7-7-7-7" />
              </svg>
            </Link>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute right-8 bottom-12 flex flex-col items-center gap-2 opacity-25 hidden lg:flex">
          <div className="w-px h-16 bg-white overflow-hidden relative">
            <div className="absolute w-full bg-white" style={{ height: "35%", animation: "scrollDown 2s ease-in-out infinite" }} />
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="py-24 lg:py-44 px-6 sm:px-10 lg:px-20 border-t border-white/[0.05]">
        <div
          ref={introReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            introReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-[180px_1fr] gap-12 lg:gap-24 items-start">
            <div className="flex flex-col gap-3 pt-1">
              <div className="w-5 h-px bg-[#C9A96E]" />
              <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-clash leading-loose">
                Gewinn<br />Solutions
              </span>
            </div>
            <p className="font-clashdisplay font-light text-[clamp(1.6rem,3.2vw,3.2rem)] leading-[1.3] tracking-[-0.01em] text-white/80">
              En Gewinn Solutions creemos que la tecnología debe integrarse de forma natural a los espacios.{" "}
              <span className="text-white/35">
                Diseñamos soluciones donde el sonido, la imagen y la luz trabajan en equilibrio con la arquitectura para crear experiencias excepcionales.
              </span>
            </p>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="border-t border-white/[0.05]">
        <div className="px-6 sm:px-10 lg:px-20 py-10 max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-5 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Servicios</span>
          </div>
          <span className="text-white/10 text-[10px] tracking-[0.35em] uppercase font-clash hidden sm:block">
            Integración de precisión
          </span>
        </div>
        <div>
          {services.map((service, i) => (
            <ServiceBlock key={service.number} service={service} isEven={i % 2 === 0} delay={i * 80} />
          ))}
        </div>
      </section>

      {/* ─── FILOSOFÍA ─── */}
      <section className="py-24 lg:py-44 px-6 sm:px-10 lg:px-20 border-t border-white/[0.05]">
        <div
          ref={philReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            philReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            {/* Left */}
            <div>
              <div className="flex items-center gap-4 mb-10">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Filosofía</span>
              </div>
              <h2 className="font-clashdisplay font-light text-[clamp(2rem,3.5vw,3.5rem)] tracking-[-0.02em] text-white leading-[1.05] mb-10">
                Diseño, ingeniería<br />y pasión por el detalle
              </h2>
              <div className="flex flex-col gap-5">
                <p className="text-white/50 text-base lg:text-[17px] leading-[1.85] font-clash font-light">
                  Gewinn Solutions está formado por un equipo de ingenieros especializados en audio y tecnología audiovisual, apasionados por crear experiencias que trascienden lo técnico.
                </p>
                <p className="text-white/30 text-[15px] leading-[1.85] font-clash font-light">
                  Colaboramos con arquitectos, diseñadores y especialistas, integrando sonido, imagen, acústica e iluminación en proyectos donde cada elemento forma parte de un todo.
                </p>
                <p className="text-white/30 text-[15px] leading-[1.85] font-clash font-light">
                  Nuestro enfoque combina ingeniería, estética y precisión, dando como resultado espacios que se experimentan de una manera completamente distinta.
                </p>
              </div>
            </div>

            {/* Right — glass pillars */}
            <div className="grid grid-cols-2 gap-3">
              {[
                { en: "Experience", es: "Experiencia" },
                { en: "Integration", es: "Integración" },
                { en: "Precision", es: "Precisión" },
                { en: "Craftsmanship", es: "Maestría" },
              ].map((item) => (
                <div
                  key={item.en}
                  className="flex flex-col gap-3 p-7 lg:p-9 rounded-sm"
                  style={{
                    background: "color-mix(in srgb, #ffffff 4%, transparent)",
                    backdropFilter: "blur(12px)",
                    WebkitBackdropFilter: "blur(12px)",
                    border: "1px solid rgba(255,255,255,0.06)",
                  }}
                >
                  <span className="text-[#C9A96E] text-[9px] tracking-[0.5em] uppercase font-clash">{item.en}</span>
                  <span className="font-clashdisplay text-xl lg:text-2xl font-light text-white/65 leading-tight">{item.es}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="py-28 lg:py-56 px-6 sm:px-10 lg:px-20 border-t border-white/[0.05] relative overflow-hidden">
        {/* Ambient glow */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{ background: "radial-gradient(ellipse 80% 50% at 50% 100%, rgba(201,169,110,0.04) 0%, transparent 70%)" }}
        />
        <div
          ref={closingReveal.ref}
          className={`max-w-[1000px] mx-auto text-center relative z-10 transition-all duration-[1200ms] ease-out ${
            closingReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="flex items-center justify-center gap-5 mb-12">
            <div className="w-5 h-px bg-[#C9A96E]/60" />
            <span className="text-[#C9A96E]/70 text-[9px] tracking-[0.6em] uppercase font-clash">Technology in Perfect Harmony</span>
            <div className="w-5 h-px bg-[#C9A96E]/60" />
          </div>
          <h2 className="font-clashdisplay font-light text-[clamp(2.2rem,5vw,5rem)] tracking-[-0.025em] text-white leading-[1.08] mb-10">
            Diseñando experiencias donde el sonido, la luz y la tecnología encuentran su lugar.
          </h2>
          <p className="text-white/25 text-base lg:text-lg font-clash font-light leading-[1.85] max-w-lg mx-auto">
            Cada espacio tiene una historia por contar. En Gewinn Solutions creamos experiencias donde la tecnología y el diseño se convierten en parte natural del momento.
          </p>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="border-t border-white/[0.05] py-24 lg:py-44 px-6 sm:px-10 lg:px-20">
        <div
          ref={contactReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            contactReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">
            <div className="flex flex-col gap-8">
              <div className="flex items-center gap-4">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Contacto</span>
              </div>
              <h2 className="font-clashdisplay font-light text-[clamp(2.4rem,4.5vw,4.5rem)] tracking-[-0.02em] text-white leading-[1.05]">
                Hablemos sobre tu proyecto.
              </h2>
              <p className="text-white/30 text-[15px] font-clash font-light leading-[1.85] max-w-xs">
                Cuéntanos tu visión. Nuestro equipo está listo para crear algo extraordinario.
              </p>
              <div className="flex flex-col gap-3 mt-2">
                <Link href="mailto:contacto@gewinnsolutions.com" className="text-white/40 hover:text-white/80 text-[15px] font-clash font-light transition-colors duration-300">
                  contacto@gewinnsolutions.com
                </Link>
                <Link href="https://api.whatsapp.com/send/?phone=523331004726" target="_blank" className="text-white/40 hover:text-white/80 text-[15px] font-clash font-light transition-colors duration-300">
                  (+52) 1 33 3100 4726
                </Link>
              </div>
            </div>
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      <Footer />

      <style jsx global>{`
        @keyframes scrollDown {
          0% { transform: translateY(-100%); }
          100% { transform: translateY(300%); }
        }
      `}</style>
    </div>
  );
};

export default AVPage;
