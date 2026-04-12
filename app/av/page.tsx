"use client";

import { FC, useRef, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import FooterAV from "@/components/FooterAV";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripAV from "@/components/BrandStripAV";
import ProcessSection from "@/components/ProcessSection";
import FAQSection from "@/components/FAQSection";
import TestimonialsAV from "@/components/TestimonialsAV";
import { Speaker, MonitorPlay, AudioWaveform } from "lucide-react";

const avFaqs = [
  {
    question: "¿Qué tipo de proyectos realizan?",
    answer: "Diseñamos e instalamos sistemas de audio, video y acústica para espacios residenciales, comerciales y corporativos. Desde home theaters y sistemas Hi-Fi hasta salas de conferencias, restaurantes y espacios de hospitalidad.",
  },
  {
    question: "¿Trabajan con marcas específicas?",
    answer: "Somos distribuidores autorizados de las mejores marcas del mercado como QSC, Shure, Allen & Heath, Electro-Voice, entre otras. Seleccionamos el equipo ideal según las necesidades específicas de cada proyecto.",
  },
  {
    question: "¿Cómo es el proceso de un proyecto?",
    answer: "Comenzamos con una consultoría para entender tus necesidades, seguido del diseño técnico, instalación profesional, calibración del sistema y capacitación. Ofrecemos soporte continuo post-instalación.",
  },
  {
    question: "¿Ofrecen mantenimiento y soporte?",
    answer: "Sí, ofrecemos planes de mantenimiento preventivo y soporte técnico continuo. Nuestro equipo está disponible para resolver cualquier necesidad que surja después de la instalación.",
  },
  {
    question: "¿Cuánto tiempo toma un proyecto típico?",
    answer: "El tiempo varía según la complejidad del proyecto. Un sistema residencial puede tomar 2-4 semanas, mientras que proyectos comerciales más grandes pueden requerir 2-3 meses desde el diseño hasta la entrega final.",
  },
];

const services = [
  {
    id: 1,
    number: "01",
    title: "Audio Hi-Fi",
    subtitle: "El sonido tiene el poder de transformar la manera en que vivimos un espacio.",
    description: "Integramos sistemas de audio Hi-Fi de referencia mundial, desde configuraciones estéreo de alta fidelidad hasta cines en casa y comercios que buscan una experiencia inmersiva.",
    image: "/img/audio-1.jpg",
    tag: "Sonido inmersivo",
    icon: Speaker,
  },
  {
    id: 2,
    number: "02",
    title: "Pro Audio & Video",
    subtitle: "Soluciones audiovisuales para espacios vanguardistas.",
    description: "Instalaciones profesionales para entornos corporativos y comerciales: videoconferencia, pantallas interactivas, videowalls y sistemas de distribución.",
    image: "/img/diseno-1.jpg",
    tag: "Experiencia visual",
    icon: MonitorPlay,
  },
  {
    id: 3,
    number: "03",
    title: "Tratamiento Acústico",
    subtitle: "El sonido de un espacio comienza con su diseño.",
    description: "Soluciones acústicas personalizadas con materiales y elementos arquitectónicos que optimizan el comportamiento sonoro del entorno.",
    image: "/img/diseno-2.jpg",
    tag: "Control del sonido",
    icon: AudioWaveform,
  },
];

function useInView(threshold = 0.2) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [threshold]);
  
  return { ref, isVisible };
}

const AVPage: FC = () => {
  const introAnim = useInView();
  const ctaAnim = useInView();
  const [activeService, setActiveService] = useState(0);
  const serviceRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY + window.innerHeight / 2;
      
      serviceRefs.current.forEach((ref, index) => {
        if (ref) {
          const rect = ref.getBoundingClientRect();
          const elementTop = rect.top + window.scrollY;
          const elementBottom = elementTop + rect.height;
          
          if (scrollPosition >= elementTop && scrollPosition < elementBottom) {
            setActiveService(index);
          }
        }
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div>
      {/* Fixed Video Background */}
      <div className="fixed inset-0 w-full h-screen z-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          preload="auto"
          className="absolute inset-0 w-full h-full object-cover"
        >
          <source src="/videos/audioandvideo.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-black/20" />
      </div>

      {/* Hero - Scrollable content over fixed video */}
      <section className="relative z-10 h-[calc(100dvh+80px)] flex flex-col">
        {/* Centered content */}
        <div className="h-dvh flex items-center justify-center px-6 lg:px-12 pt-20">
          <div className="max-w-4xl text-center">
            <span className="text-white text-xs tracking-[0.2em] uppercase mb-8 block font-clash">
              Audio & Video
            </span>
            <h1 className="text-2xl lg:text-5xl text-white font-light !leading-[1.2] mb-10">
              Diseñamos experiencias donde el{" "}
              <span className="font-medium">sonido</span>, la{" "}
              <span className="font-medium">imagen</span> y la{" "}
              <span className="font-medium">luz</span> trabajan en equilibrio con la arquitectura.
            </h1>
            <div className="flex justify-center">
              <ButtonWithArrow href="#servicios" dark={true}>
                Descubrir servicios
              </ButtonWithArrow>
            </div>
          </div>
        </div>

        {/* Brand strip - sticky at bottom, appears after 100dvh */}
        <div className="sticky bottom-0 border-t border-white/10">
          <BrandStripAV />
        </div>
      </section>

      {/* Intro Statement + Services Start */}
      <section id="servicios" className="relative z-20 bg-[#f5f5f3] pt-32 lg:pt-48 px-6 lg:px-16">
        <div className="max-w-[1600px] mx-auto">
          {/* Philosophy text */}
          <div 
            ref={introAnim.ref}
            className={`flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 lg:gap-16 mb-24 lg:mb-40 transition-all duration-1000 ${
              introAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div className="flex items-center gap-4 shrink-0">
              <div className="w-2 h-2 bg-black"></div>
              <span className="text-black text-sm lg:text-base font-clash uppercase tracking-wide">
                Nuestra filosofía
              </span>
            </div>
            <p className="text-lg lg:text-2xl font-light !leading-[1.5] text-black max-w-3xl">
              Creemos que la tecnología debe ser <span className="font-medium">invisible pero transformadora.</span> Cada proyecto es una oportunidad de crear espacios que se experimentan de manera completamente distinta.
            </p>
          </div>

          {/* First service images - intro to sticky */}
          <div className="grid grid-cols-2 gap-4 lg:gap-6 pb-12">
            <div className="relative aspect-[4/3] overflow-hidden">
              <Image
                src={services[0].image}
                alt={services[0].title}
                fill
                className="object-cover rounded-[12px]"
              />
            </div>
            <div className="relative aspect-[4/3] overflow-hidden self-end">
              <Image
                src={services[1].image}
                alt={services[1].title}
                fill
                className="object-cover rounded-[12px]"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Intro Block */}
      <section id="servicios-intro" className="relative z-20 bg-[#f5f5f3] pt-12 lg:pt-20 pb-16 lg:pb-2 px-6 lg:px-16">
        <div className="max-w-[1100px] mx-auto text-center">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-black"></div>
            <span className="text-black text-sm lg:text-base font-clash uppercase tracking-wide">
              Nuestros servicios
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light text-black !leading-[1.1] mb-6">
            Soluciones integrales de<br />
            <span className="font-medium">audio, video y acústica</span>
          </h2>
          <p className="text-black/60 text-base lg:text-lg max-w-2xl mx-auto leading-relaxed">
            Cada espacio tiene necesidades únicas. Diseñamos e implementamos sistemas personalizados que transforman tu experiencia.
          </p>
        </div>
      </section>

      {/* Services - Sticky Scroll */}
      <section id="servicios" className="relative z-20 bg-[#f5f5f3]">
        <div className="grid lg:grid-cols-2 min-h-screen">
          {/* Left side - Sticky image */}
          <div className="hidden lg:block relative">
            <div className="sticky top-0 h-screen flex items-center justify-center p-12">
              <div className="relative w-full max-w-lg aspect-[4/5] rounded-[12px] overflow-hidden">
                {services.map((service, index) => (
                  <Image
                    key={service.id}
                    src={service.image}
                    alt={service.title}
                    fill
                    className={`object-cover transition-opacity duration-700 ${
                      activeService === index ? "opacity-100" : "opacity-0"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Right side - Scrolling content */}
          <div className="px-6 lg:px-16 py-20 lg:py-0">
            {services.map((service, index) => (
              <div
                key={service.id}
                ref={(el) => { serviceRefs.current[index] = el; }}
                className="min-h-screen flex flex-col justify-center py-20 lg:py-32"
              >
                {/* Mobile image */}
                <div className="lg:hidden relative w-full aspect-[4/5] rounded-[100px] overflow-hidden mb-10">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover"
                  />
                </div>

                <div className="flex items-center gap-4 mb-4">
                  <div className="w-2 h-2 bg-black"></div>
                  <span className="text-black text-sm font-clash uppercase tracking-wide">
                    {service.tag}
                  </span>
                </div>
                <div className="flex items-center gap-4 mb-6">
                  {(() => {
                    const IconComponent = service.icon;
                    return <IconComponent className={`w-10 h-10 lg:w-12 lg:h-12 text-black/30 transition-all duration-500 ${
                      activeService === index ? "opacity-100" : "lg:opacity-30"
                    }`} strokeWidth={1} />;
                  })()}
                  <h3 className={`text-4xl lg:text-6xl font-clashdisplay font-medium text-black transition-all duration-500 ${
                    activeService === index ? "opacity-100 translate-y-0" : "lg:opacity-30 lg:translate-y-4"
                  }`}>
                    {service.number} {service.title}
                  </h3>
                </div>
                <p className={`text-lg lg:text-xl text-black !leading-[1.3] mb-6 max-w-sm transition-all duration-500 delay-100 ${
                  activeService === index ? "opacity-100" : "lg:opacity-30"
                }`}>
                  {service.subtitle}
                </p>
                <p className={`text-base text-black/50 leading-relaxed max-w-md transition-all duration-500 delay-200 ${
                  activeService === index ? "opacity-100" : "lg:opacity-30"
                }`}>
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <div id="proceso">
        <ProcessSection />
      </div>

      {/* Testimonials */}
      <div id="testimonios">
        <TestimonialsAV />
      </div>

      {/* FAQ Section */}
      <div id="faq">
        <FAQSection faqs={avFaqs} contactLink="/av#contacto" />
      </div>

      {/* CTA + Clients Section - Transparent to show video */}
      <section className="relative z-10 py-20 lg:py-32 overflow-hidden">
        <div className="max-w-[1200px] mx-auto px-6 lg:px-16">
          {/* CTA Content */}
          <div 
            ref={ctaAnim.ref}
            className={`text-center transition-all duration-1000 ${
              ctaAnim.isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            {/* Badge */}
            <div className="flex items-center justify-center gap-4 mb-6">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-white text-sm lg:text-base font-clash uppercase tracking-wide">
                Espacios que confían en nosotros
              </span>
            </div>

            {/* Title */}
            <h2 className="text-3xl lg:text-5xl font-light text-white !leading-[1.1] mb-8">
              Diseño, ingeniería y<br />
              <span className="font-medium">pasión por el detalle.</span>
            </h2>

            {/* Description */}
            <p className="text-white text-base lg:text-lg font-light max-w-2xl mx-auto mb-12">
              Un equipo de ingenieros especializados en audio y tecnología audiovisual, 
              apasionados por crear experiencias que trascienden lo técnico.
            </p>

            {/* Clients Grid */}
            <div className="grid grid-cols-2 lg:grid-cols-4 border border-white/20 mb-12">
              {[
                { name: "Hiiver", image: "/img/clients/hiiver.svg" },
                { name: "Alive", image: "/img/clients/alive.svg" },
                { name: "Refuse", image: "/img/clients/refuse.svg" },
                { name: "Space Studio", image: "/img/clients/spacestudio.svg" },
                { name: "CTRL", image: "/img/clients/ctrl.svg" },
                { name: "Kardio", image: "/img/clients/kardio.png" },
                { name: "Vivo47", image: "/img/clients/vivo47.png" },
                { name: "La Loma Golf", image: "/img/clients/laloma.png" },
              ].map((client, index) => (
                <div 
                  key={client.name}
                  className={`flex items-center justify-center p-8 lg:p-10 border-white/20 ${
                    index % 4 !== 3 ? "border-r" : ""
                  } ${index < 4 ? "border-b" : ""}`}
                >
                  <div className="relative h-6 lg:h-8 w-20 lg:w-28">
                    <Image
                      src={client.image}
                      alt={client.name}
                      fill
                      style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
                    />
                  </div>
                </div>
              ))}
            </div>

            {/* CTA Button */}
            <div className="flex justify-center">
              <ButtonWithArrow href="#contacto" dark={true}>
                Hablemos de tu proyecto
              </ButtonWithArrow>
            </div>
          </div>
        </div>
      </section>

      {/* Contact */}
      <section id="contacto" className="relative z-20 bg-secondary py-20 lg:py-32 px-6 lg:px-12">
        <div className="max-w-[1400px] mx-auto">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-24">
            <div>
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-white"></div>
              <span className="text-white text-sm font-clash uppercase tracking-wide">Contacto</span>
            </div>
              <h2 className="text-3xl lg:text-5xl font-clashdisplay font-light text-white !leading-[1.1] mt-4 mb-8">
                Listo para transformar<br />
                <span className="font-medium">tu espacio?</span>
              </h2>
              
              <div className="space-y-4 mb-12">
                <p className="text-white/50 text-sm font-clash">¿Necesitas ayuda personalizada?</p>
                <Link
                  href="mailto:contacto@gewinnsolutions.com"
                  className="text-white text-xl lg:text-3xl font-clash font-light block hover:text-white/80 transition-colors"
                >
                  contacto@gewinnsolutions.com
                </Link>
                <Link
                  href="https://api.whatsapp.com/send/?phone=523331004726"
                  target="_blank"
                  className="text-white text-xl lg:text-3xl font-clash font-light flex items-center gap-3 hover:text-white/80 transition-colors"
                >
                  <WhatsAppIcon /> (+52) 1 33 3100 4726
                </Link>
              </div>
            </div>
            
            <div>
              <Contact />
            </div>
          </div>
        </div>
      </section>

      <div className="relative z-20">
        <FooterAV />
      </div>
    </div>
  );
};

export default AVPage;
