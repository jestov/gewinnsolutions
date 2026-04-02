"use client";

import { FC, useEffect, useRef, useState } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

function useReveal(threshold = 0.06) {
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

/* ── Reusable glass panel style ── */
const glass = {
  background: "rgba(255,255,255,0.03)",
  backdropFilter: "blur(24px) saturate(160%)",
  WebkitBackdropFilter: "blur(24px) saturate(160%)",
  border: "1px solid rgba(255,255,255,0.07)",
} as React.CSSProperties;

const glassDark = {
  background: "rgba(8,8,8,0.55)",
  backdropFilter: "blur(32px) saturate(140%)",
  WebkitBackdropFilter: "blur(32px) saturate(140%)",
  border: "1px solid rgba(255,255,255,0.06)",
} as React.CSSProperties;

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

function ServiceCard({ service, index }: { service: Service; index: number }) {
  const { ref, visible } = useReveal();
  const [imgSrc, setImgSrc] = useState(service.image);
  const isEven = index % 2 === 0;

  return (
    <div
      ref={ref}
      className={`mx-4 sm:mx-6 lg:mx-8 mb-4 rounded-2xl overflow-hidden transition-all duration-1000 ease-out ${
        visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
      }`}
      style={{ transitionDelay: `${index * 100}ms` }}
    >
      <div className={`grid grid-cols-1 lg:grid-cols-2 min-h-[520px] lg:min-h-[600px]`}>
        {/* Image side */}
        <div className={`relative overflow-hidden min-h-[56vw] lg:min-h-full ${isEven ? "lg:order-1" : "lg:order-2"}`}>
          <img
            src={imgSrc}
            onError={() => setImgSrc(service.fallback)}
            alt={service.title}
            className="absolute inset-0 w-full h-full object-cover transition-transform duration-[1.6s] ease-out hover:scale-[1.05]"
          />
          {/* Grain overlay */}
          <div
            className="absolute inset-0 opacity-[0.15] pointer-events-none"
            style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px" }}
          />
          {/* Glass number tag */}
          <div
            className="absolute top-6 left-6 px-3 py-1.5 rounded-full"
            style={glassDark}
          >
            <span className="text-white/40 font-clash text-[10px] tracking-[0.4em] uppercase">{service.number}</span>
          </div>
          {/* Tag pill */}
          <div
            className="absolute bottom-6 right-6 px-3 py-1.5 rounded-full"
            style={glassDark}
          >
            <span className="text-white/40 font-clash text-[10px] tracking-[0.3em] uppercase">{service.tag}</span>
          </div>
        </div>

        {/* Text side — glass panel */}
        <div
          className={`flex flex-col justify-center px-8 py-12 lg:px-14 lg:py-16 ${isEven ? "lg:order-2" : "lg:order-1"}`}
          style={{ background: "rgba(10,10,10,0.92)", borderLeft: isEven ? "1px solid rgba(255,255,255,0.05)" : "none", borderRight: !isEven ? "1px solid rgba(255,255,255,0.05)" : "none" }}
        >
          <div className="w-5 h-px bg-[#C9A96E]/50 mb-8" />
          <h3 className="font-clashdisplay font-light text-[clamp(2.2rem,3.8vw,3.8rem)] text-white leading-[1.02] tracking-[-0.025em] mb-5">
            {service.title}
          </h3>
          <p className="text-white/50 text-base lg:text-[17px] font-clashdisplay font-light italic leading-[1.5] mb-7">
            {service.subtitle}
          </p>
          <p className="text-white/30 text-[14px] lg:text-[15px] leading-[1.9] font-clash font-light">
            {service.body}
          </p>
        </div>
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
    <div className="av-section min-h-screen overflow-x-hidden" style={{ background: "#080808", color: "#fff" }}>

      {/* ─── AMBIENT BACKGROUND ORBS (persistent, fixed) ─── */}
      <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
        <div className="absolute top-[-20%] left-[-10%] w-[70vw] h-[70vw] rounded-full opacity-[0.07]"
          style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)", filter: "blur(80px)" }} />
        <div className="absolute bottom-[10%] right-[-15%] w-[60vw] h-[60vw] rounded-full opacity-[0.05]"
          style={{ background: "radial-gradient(circle, #4a6fa5 0%, transparent 70%)", filter: "blur(100px)" }} />
        <div className="absolute top-[50%] left-[30%] w-[40vw] h-[40vw] rounded-full opacity-[0.04]"
          style={{ background: "radial-gradient(circle, #C9A96E 0%, transparent 70%)", filter: "blur(120px)" }} />
      </div>

      {/* ─── HERO ─── */}
      <section className="relative h-screen min-h-[640px] flex flex-col justify-end z-10">
        <video
          autoPlay loop muted playsInline preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
          style={{ transform: `scale(${1 + scrollY * 0.00005})`, transformOrigin: "center" }}
        >
          <source src="/videos/1.mp4" type="video/mp4" />
        </video>

        {/* Grain on video */}
        <div
          className="absolute inset-0 opacity-[0.12] pointer-events-none z-10"
          style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px" }}
        />

        <div className="absolute inset-0 z-10" style={{ background: "linear-gradient(to top, #080808 0%, rgba(8,8,8,0.4) 50%, rgba(8,8,8,0.1) 100%)" }} />

        {/* Hero content — floating glass card at bottom */}
        <div className="relative z-20 px-4 sm:px-6 lg:px-8 pb-8 lg:pb-12 max-w-[1400px] mx-auto w-full">
          <div
            className="rounded-2xl p-8 lg:p-12"
            style={glassDark}
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="w-6 h-px bg-[#C9A96E]" />
              <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Engineering Exceptional Experiences</span>
            </div>

            <h1 className="font-clashdisplay font-light text-[clamp(2.2rem,5.5vw,5.5rem)] leading-[1.02] tracking-[-0.025em] max-w-4xl mb-8 text-white">
              Diseñamos experiencias donde el sonido, la tecnología y el espacio se encuentran en{" "}
              <em className="text-white/50">perfecta armonía.</em>
            </h1>

            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-10">
              <p className="text-white/30 text-[11px] tracking-[0.35em] uppercase font-clash">
                Audio · Video · Acústica · Iluminación
              </p>
              <Link
                href="#servicios"
                className="group inline-flex items-center gap-3 px-5 py-2.5 rounded-full text-[11px] tracking-[0.25em] uppercase font-clash text-white/70 hover:text-white transition-all duration-500 cursor-pointer"
                style={glass}
              >
                Explorar nuestros proyectos
                <svg className="w-3 h-3 transition-transform duration-300 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M5 12h14M12 19l7-7-7-7" />
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ─── INTRO ─── */}
      <section className="relative z-10 py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div
          ref={introReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            introReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div
            className="rounded-2xl p-8 lg:p-14"
            style={glass}
          >
            <div className="grid grid-cols-1 lg:grid-cols-[160px_1fr] gap-10 lg:gap-20 items-start">
              <div className="flex flex-col gap-3">
                <div className="w-5 h-px bg-[#C9A96E]" />
                <span className="text-white/20 text-[10px] tracking-[0.4em] uppercase font-clash leading-loose">
                  Gewinn<br />Solutions
                </span>
              </div>
              <p className="font-clashdisplay font-light text-[clamp(1.5rem,3vw,3rem)] leading-[1.3] tracking-[-0.015em] text-white/80">
                En Gewinn Solutions creemos que la tecnología debe integrarse de forma natural a los espacios.{" "}
                <span className="text-white/35">
                  Diseñamos soluciones donde el sonido, la imagen y la luz trabajan en equilibrio con la arquitectura para crear experiencias excepcionales.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── SERVICIOS ─── */}
      <section id="servicios" className="relative z-10 pb-4">
        <div className="px-4 sm:px-6 lg:px-8 py-8 max-w-[1400px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-4">
            <div className="w-5 h-px bg-[#C9A96E]" />
            <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Servicios</span>
          </div>
          <span className="text-white/10 text-[10px] tracking-[0.35em] uppercase font-clash hidden sm:block">
            Integración de precisión
          </span>
        </div>

        {services.map((service, i) => (
          <ServiceCard key={service.number} service={service} index={i} />
        ))}
      </section>

      {/* ─── FILOSOFÍA ─── */}
      <section className="relative z-10 py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div
          ref={philReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            philReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl overflow-hidden" style={glass}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left text */}
              <div className="p-8 lg:p-14">
                <div className="flex items-center gap-4 mb-10">
                  <div className="w-5 h-px bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Filosofía</span>
                </div>
                <h2 className="font-clashdisplay font-light text-[clamp(2rem,3.5vw,3.5rem)] tracking-[-0.025em] text-white leading-[1.05] mb-10">
                  Diseño, ingeniería<br />y pasión por el detalle
                </h2>
                <div className="flex flex-col gap-5">
                  <p className="text-white/50 text-[15px] lg:text-base leading-[1.9] font-clash font-light">
                    Gewinn Solutions está formado por un equipo de ingenieros especializados en audio y tecnología audiovisual, apasionados por crear experiencias que trascienden lo técnico.
                  </p>
                  <p className="text-white/30 text-[14px] leading-[1.9] font-clash font-light">
                    Colaboramos con arquitectos, diseñadores y especialistas, integrando sonido, imagen, acústica e iluminación en proyectos donde cada elemento forma parte de un todo.
                  </p>
                  <p className="text-white/30 text-[14px] leading-[1.9] font-clash font-light">
                    Nuestro enfoque combina ingeniería, estética y precisión, dando como resultado espacios que se experimentan de una manera completamente distinta.
                  </p>
                </div>
              </div>

              {/* Right — 2x2 glass pillars */}
              <div className="grid grid-cols-2 border-l border-white/[0.05]">
                {[
                  { en: "Experience", es: "Experiencia" },
                  { en: "Integration", es: "Integración" },
                  { en: "Precision", es: "Precisión" },
                  { en: "Craftsmanship", es: "Maestría" },
                ].map((item, i) => (
                  <div
                    key={item.en}
                    className={`flex flex-col justify-end p-7 lg:p-10 ${i < 2 ? "border-b border-white/[0.05]" : ""} ${i % 2 === 0 ? "border-r border-white/[0.05]" : ""}`}
                    style={{ background: i % 2 === 0 ? "rgba(255,255,255,0.015)" : "transparent" }}
                  >
                    <span className="text-[#C9A96E]/60 text-[9px] tracking-[0.5em] uppercase font-clash mb-3">{item.en}</span>
                    <span className="font-clashdisplay text-2xl lg:text-3xl font-light text-white/60 leading-tight">{item.es}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── BRAND STATEMENT ─── */}
      <section className="relative z-10 py-16 lg:py-32 px-4 sm:px-6 lg:px-8">
        <div
          ref={closingReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-[1200ms] ease-out ${
            closingReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-12"
          }`}
        >
          <div className="rounded-2xl p-10 lg:p-20 text-center relative overflow-hidden" style={glass}>
            {/* Inner ambient glow */}
            <div
              className="absolute inset-0 pointer-events-none"
              style={{ background: "radial-gradient(ellipse 60% 40% at 50% 100%, rgba(201,169,110,0.06) 0%, transparent 70%)" }}
            />
            {/* Grain */}
            <div
              className="absolute inset-0 opacity-[0.08] pointer-events-none"
              style={{ backgroundImage: "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='1'/%3E%3C/svg%3E\")", backgroundSize: "128px" }}
            />
            <div className="relative z-10">
              <div className="flex items-center justify-center gap-5 mb-12">
                <div className="w-5 h-px bg-[#C9A96E]/50" />
                <span className="text-[#C9A96E]/60 text-[9px] tracking-[0.6em] uppercase font-clash">Technology in Perfect Harmony</span>
                <div className="w-5 h-px bg-[#C9A96E]/50" />
              </div>
              <h2 className="font-clashdisplay font-light text-[clamp(2rem,5vw,5rem)] tracking-[-0.025em] text-white leading-[1.08] mb-10 max-w-4xl mx-auto">
                Diseñando experiencias donde el sonido, la luz y la tecnología encuentran su lugar.
              </h2>
              <p className="text-white/25 text-base lg:text-lg font-clash font-light leading-[1.85] max-w-lg mx-auto">
                Cada espacio tiene una historia por contar. En Gewinn Solutions creamos experiencias donde la tecnología y el diseño se convierten en parte natural del momento.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CONTACTO ─── */}
      <section id="contacto" className="relative z-10 py-16 lg:py-28 px-4 sm:px-6 lg:px-8">
        <div
          ref={contactReveal.ref}
          className={`max-w-[1400px] mx-auto transition-all duration-1000 ease-out ${
            contactReveal.visible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
          }`}
        >
          <div className="rounded-2xl overflow-hidden" style={glass}>
            <div className="grid grid-cols-1 lg:grid-cols-2">
              {/* Left */}
              <div className="p-8 lg:p-14 flex flex-col gap-8 border-b lg:border-b-0 lg:border-r border-white/[0.05]">
                <div className="flex items-center gap-4">
                  <div className="w-5 h-px bg-[#C9A96E]" />
                  <span className="text-[#C9A96E] text-[10px] tracking-[0.5em] uppercase font-clash">Contacto</span>
                </div>
                <h2 className="font-clashdisplay font-light text-[clamp(2.2rem,4vw,4rem)] tracking-[-0.025em] text-white leading-[1.05]">
                  Hablemos sobre tu proyecto.
                </h2>
                <p className="text-white/30 text-[14px] font-clash font-light leading-[1.9] max-w-xs">
                  Cuéntanos tu visión. Nuestro equipo está listo para crear algo extraordinario.
                </p>
                <div className="flex flex-col gap-3 mt-auto">
                  <Link href="mailto:contacto@gewinnsolutions.com" className="link-underline text-white/40 hover:text-white/70 text-[14px] font-clash font-light transition-colors duration-300 w-fit">
                    contacto@gewinnsolutions.com
                  </Link>
                  <Link href="https://api.whatsapp.com/send/?phone=523331004726" target="_blank" className="link-underline text-white/40 hover:text-white/70 text-[14px] font-clash font-light transition-colors duration-300 w-fit">
                    (+52) 1 33 3100 4726
                  </Link>
                </div>
              </div>
              {/* Right — form */}
              <div className="p-8 lg:p-14">
                <Contact />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-10">
        <Footer />
      </div>

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
