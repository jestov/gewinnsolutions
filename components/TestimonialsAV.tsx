"use client";

import { useState } from "react";
import Image from "next/image";

const testimonials = [
  {
    id: 1,
    studio: "Hiiver",
    logo: "/img/clients/hiiver.svg",
    quote: "Gewinn transformó completamente nuestra experiencia de audio. El sistema que instalaron superó todas nuestras expectativas, creando un ambiente inmersivo que nuestros clientes aman.",
    author: "Director de Operaciones",
    location: "Guadalajara, MX",
    image: "/img/audio-1.jpg",
  },
  {
    id: 2,
    studio: "Alive Studio",
    logo: "/img/clients/alive.svg",
    quote: "La atención al detalle y el profesionalismo del equipo de Gewinn es excepcional. Desde el diseño hasta la instalación, cada paso fue impecable. El resultado final habla por sí solo.",
    author: "Fundador",
    location: "Ciudad de México, MX",
    image: "/img/audio-2.jpg",
  },
  {
    id: 3,
    studio: "Space Studio",
    logo: "/img/clients/spacestudio.svg",
    quote: "Buscábamos un partner que entendiera nuestra visión de crear espacios únicos. Gewinn no solo lo entendió, sino que lo elevó a otro nivel con su expertise en audio y acústica.",
    author: "CEO",
    location: "Monterrey, MX",
    image: "/img/audio-3.jpg",
  },
];

export default function TestimonialsAV() {
  const [activeIndex, setActiveIndex] = useState(0);

  const nextTestimonial = () => {
    setActiveIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setActiveIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <section className="relative z-10 py-24 lg:py-40 overflow-hidden">
      {/* Video background with blur and noise */}
      <div className="absolute inset-0">
        <video
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover scale-125"
        >
          <source src="/videos/audioandvideo.mp4" type="video/mp4" />
        </video>
        {/* Blur overlay */}
        <div className="absolute inset-0 backdrop-blur-2xl bg-black/50" />
        {/* Noise texture */}
        <div 
          className="absolute inset-0 opacity-20 mix-blend-overlay pointer-events-none"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 512 512' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
          }}
        />
      </div>

      <div className="relative z-10 max-w-[1200px] mx-auto px-6 lg:px-12">
        {/* Header */}
        <div className="text-center mb-10 lg:mb-14">
          <div className="flex items-center justify-center gap-4 mb-6">
            <div className="w-2 h-2 bg-white"></div>
            <span className="text-white text-sm lg:text-base font-clash uppercase tracking-wide">
              Testimonios
            </span>
          </div>
          <h2 className="text-3xl lg:text-5xl font-light text-white !leading-[1.1]">
            Historias de espacios<br />
            <span className="font-medium">que transformamos.</span>
          </h2>
        </div>

        {/* Studio tabs - 3 columns */}
        <div className="grid grid-cols-3 border-y border-white/20 mb-10 lg:mb-14">
          {testimonials.map((testimonial, index) => (
            <button
              key={testimonial.id}
              onClick={() => setActiveIndex(index)}
              className={`relative py-5 text-sm lg:text-base font-clash transition-all duration-300 ${
                index !== testimonials.length - 1 ? "border-r border-white/20" : ""
              } ${
                activeIndex === index
                  ? "text-white"
                  : "text-white/40 hover:text-white/70"
              }`}
            >
              {testimonial.studio}
              {/* Active indicator line */}
              <span 
                className={`absolute bottom-0 left-0 right-0 h-[2px] bg-white transition-all duration-300 ${
                  activeIndex === index ? "opacity-100" : "opacity-0"
                }`} 
              />
            </button>
          ))}
        </div>

        {/* Testimonial card */}
        <div className="bg-black/30 backdrop-blur-sm border border-white/10 rounded-2xl p-4 lg:p-5">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Image */}
            <div className="relative aspect-[16/11] rounded-xl overflow-hidden">
              <Image
                src={testimonials[activeIndex].image}
                alt={testimonials[activeIndex].studio}
                fill
                className="object-cover transition-opacity duration-500"
              />
            </div>

            {/* Content */}
            <div className="py-4 lg:py-8 pr-4 lg:pr-8 flex flex-col justify-center">
              {/* Logo */}
              <div className="relative h-5 w-24 mb-8">
                <Image
                  src={testimonials[activeIndex].logo}
                  alt={testimonials[activeIndex].studio}
                  fill
                  className="object-contain object-left"
                  style={{ filter: "brightness(0) invert(1)" }}
                />
              </div>

              {/* Quote */}
              <p className="text-white/80 text-base lg:text-lg leading-relaxed mb-8">
                &ldquo;{testimonials[activeIndex].quote}&rdquo;
              </p>

              {/* Author */}
              <div>
                <p className="text-white text-sm font-medium">
                  {testimonials[activeIndex].author}
                </p>
                <p className="text-white/40 text-xs">
                  {testimonials[activeIndex].location}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation arrows */}
        <div className="flex justify-center gap-4 mt-10">
          <button
            onClick={prevTestimonial}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            aria-label="Anterior"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <button
            onClick={nextTestimonial}
            className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white/40 hover:text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300"
            aria-label="Siguiente"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
}
