"use client";
import React, { useState } from "react";
import Image from "next/image";
import ArrowSmallIcon from "./icons/ArrowSmallIcon";
import BrandStrip from "./BrandStrip";
import Link from "next/link";

type Testimonial = {
  name: string;
  role: string;
  content: string;
  image: string;
  raised?: string;
  company?: string;
  link?: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Sebastian Ruales",
    role: "CEO, BIA",
    content:
      '"Optiks was key in advising us on advanced financial strategies that propelled our business forward."',
    image: "/img/testimonials/3.jpg",
    raised: "US$26+ MM raised",
    company: "BIA",
    link: "https://forbes.co/2024/05/06/emprendedores/bia-energy-es-admitida-en-la-red-de-emprendedores-endeavor",
  },
  {
    name: "Oscar Herrera",
    role: "CFO, Rappi",
    content:
      '"JP was a key asset to our financial team at Rappi. I have no doubt that Optiks will be invaluable to growing companies and startups, sharing valuable financial learnings."',
    image: "/img/testimonials/2.jpg",
  },
  {
    name: "José Gedeon",
    role: "CEO, Cobre",
    content:
      "Optiks's deep understanding of advanced financial strategies made a significant impact on our startup's growth and success.",
    image: "/img/testimonials/jose.jpg",
    raised: "US$25+ MM Raised",
    company: "Cobre",
    link: "https://forbes.co/2023/10/10/emprendedores/cobre-obtiene-us13-millones-para-su-plataforma-de-pagos-que-usan-mas-de-100-empresas",
  },
  {
    name: "Stephanie Gomez",
    role: "CEO, Bacu",
    content:
      '"Thanks to Optiks, we navigated complex financial strategies with ease and achieved remarkable success."',
    image: "/img/testimonials/1.jpg",
    raised: "US$8+ MM Raised",
    company: "Bacu",
    link: "https://forbes.co/2023/03/23/emprendedores/bacu-arranca-con-us6-millones-buscando-ser-una-gran-cadena-de-restaurantes",
  },
  {
    name: "Javier Aldape",
    role: "CEO, Kredi",
    content:
      '"Optiks provided the crucial expertise we needed to leverage sophisticated financial solutions, helping us grow with their fast, plug-and-play strategies."',
    image: "/img/testimonials/aldape.jpg",
    raised: "Raised US$2+ MM",
    company: "Kredi",
    link: "https://www.forbes.com.mx/kredi-marketplace-creditos-hipotecarios-2-mdd-mexico/",
  },
];

const Testimonials: React.FC = () => {
  const [current, setCurrent] = useState(0);
  const length = testimonials.length;

  const nextSlide = () => {
    if (current < length - 1) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  return (
    <section className="text-white md:py-12 py-10 w-full">
      <div className="flex flex-col gap-12 md:gap-20 items-center justify-center w-full">
        <div className="flex flex-col gap-6 md:gap-10 items-center  px-2 lg:px-12">
          <h3 className="text-3xl md:text-5xl font-monument uppercase text-center relative before:absolute after:absolute before:bg-[url('/img/title_left.svg')] after:bg-[url('/img/title_right.svg')] before:bg-contain after:bg-contain before:bg-no-repeat after:bg-no-repeat before:w-[120%] before:h-[120%] before:left-[-5%] before:top-[-12.5%] after:w-[120%] after:h-[120%] after:left-[102.75%] after:top-[-12.5%]">
            Our <span className="text-greenLighter">Clients</span>
          </h3>
          <h4 className="text-white text-xl md:text-4xl w-full text-center">
            Our clients have a combined funding of
            <span className="text-greenLighter"> ~US400 MM</span>
          </h4>
        </div>
        <BrandStrip />
        <div className="relative flex flex-col gap-10 md:gap-14 justify-center items-center overflow-hidden max-w-6xl w-full px-[15px]">
          <button
            className={`absolute left-0 z-10 transform md:-translate-y-[60px] text-2xl text-white p-4 md:p-6 transition duration-300 rounded-full focus:outline-none ${
              current === 0
                ? "opacity-50 bg-secondaryBlue cursor-not-allowed"
                : "bg-secondaryBlue hover:bg-primary"
            }`}
            onClick={prevSlide}
            disabled={current === 0}
          >
            <ArrowSmallIcon className="rotate-180" />
          </button>
          <button
            className={`absolute right-0 z-10 transform md:-translate-y-[60px] text-2xl text-white p-4 md:p-6 transition duration-300 rounded-full focus:outline-none ${
              current === length - 1
                ? "opacity-50 bg-secondaryBlue cursor-not-allowed"
                : "bg-secondaryBlue hover:bg-primary"
            }`}
            onClick={nextSlide}
            disabled={current === length - 1}
          >
            <ArrowSmallIcon />
          </button>
          <div
            className="flex transition-transform duration-1000 ease-in-out w-full"
            style={{ transform: `translateX(-${current * 100}%)` }}
          >
            {testimonials.map((testimonial, index) => (
              <div key={index} className="min-w-full">
                <div className="border border-white border-opacity-10 rounded-[32px] mx-4 md:mx-auto p-8 md:p-16  max-w-3xl flex flex-col gap-8 min-h-[200px]">
                  <div className="flex items-center">
                    <Image
                      className="w-14 h-14 md:w-20 md:h-20 rounded-full border-2 border-white"
                      width={180}
                      height={180}
                      src={testimonial.image}
                      alt={testimonial.name}
                    />
                    <div className="ml-6 flex flex-col gap-3">
                      <h3 className="text-xl md:text-2xl !leading-none text-greenLighter">
                        {testimonial.name}
                      </h3>
                      <p className="text-base !leading-none">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                  <p className="text-xl md:text-3xl !leading-snug">
                    {testimonial.content}
                  </p>
                  {testimonial.raised && (
                    <div className="flex justify-between items-center">
                      <span className="text-mainGray text-opacity-80 uppercase tracking-wider text-lg">
                        {testimonial.raised}
                      </span>
                      {testimonial.link && (
                        <Link
                          href={testimonial.link}
                          target="_blank"
                          className="min-w-[200px] flex justify-between items-center gap-4 px-5 md:px-5.5 py-4 md:py-5 rounded-full cursor-pointer bg-greenLighter hover:bg-greenLight text-secondary transition duration-500"
                        >
                          <div>Read more about {testimonial.company}</div>
                          <span className="inline-block ml-2">
                            <ArrowSmallIcon />
                          </span>
                        </Link>
                      )}
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="relative w-full flex justify-center py-4 gap-3 md:gap-4">
            {testimonials.map((_, index) => (
              <div
                key={index}
                className={`cursor-pointer w-10 md:w-14 h-1 md:h-1.5 rounded-full transition duration-500 ${
                  index === current
                    ? "bg-greenLighter"
                    : "bg-white bg-opacity-20 hover:bg-opacity-50"
                }`}
                onClick={() => setCurrent(index)}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
