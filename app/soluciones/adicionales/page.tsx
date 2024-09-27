"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";
import PlusIcon from "@/components/icons/PlusIcon";
import Image from "next/image"; // Para manejar las imágenes eficientemente

const SolucionesAdd: FC = () => {
  const cards = [
    {
      id: 1,
      number: "04",
      title: "Stages Indoor Bikes",
      image: "/img/cycling.jpg",
      description:
        "En colaboración con nuestros partners especializados, ofrecemos stages de indoor cycling diseñados para soportar el uso intensivo y ofrecer una experiencia de usuario superior.",
      theme: "light",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="64"
          height="64"
          viewBox="0 0 64 64"
          fill="none"
        >
          <path
            d="M37.3333 18.6667C40.2789 18.6667 42.6667 16.2789 42.6667 13.3333C42.6667 10.3878 40.2789 8 37.3333 8C34.3878 8 32 10.3878 32 13.3333C32 16.2789 34.3878 18.6667 37.3333 18.6667Z"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M48 56C52.4183 56 56 52.4183 56 48C56 43.5817 52.4183 40 48 40C43.5817 40 40 43.5817 40 48C40 52.4183 43.5817 56 48 56Z"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16 56C20.4183 56 24 52.4183 24 48C24 43.5817 20.4183 40 16 40C11.5817 40 8 43.5817 8 48C8 52.4183 11.5817 56 16 56Z"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M30.6667 47.9998L34.6667 37.3332L21.6472 31.9998L29.6479 22.6667L37.6479 29.3333L46.9812 29.3333"
            stroke="#111"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 2,
      number: "05",
      title: "Equipamiento de Gimnasios",
      image: "/img/equipamiento.jpg",
      description: "El mejor equipamiento para gimnasios de alto rendimiento.",
      theme: "dark",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="65"
          height="64"
          viewBox="0 0 65 64"
          fill="none"
        >
          <path
            d="M21.0499 18.6667H12.2833C11.7586 18.6667 11.3333 19.092 11.3333 19.6167V44.3834C11.3333 44.908 11.7586 45.3334 12.2833 45.3334H21.0499C21.5746 45.3334 21.9999 44.908 21.9999 44.3834V19.6167C21.9999 19.092 21.5746 18.6667 21.0499 18.6667Z"
            stroke="#111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M53.0499 18.6667H44.2833C43.7586 18.6667 43.3333 19.092 43.3333 19.6167V44.3834C43.3333 44.908 43.7586 45.3334 44.2833 45.3334H53.0499C53.5746 45.3334 53.9999 44.908 53.9999 44.3834V19.6167C53.9999 19.092 53.5746 18.6667 53.0499 18.6667Z"
            stroke="#111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M3.3335 39.05V24.95C3.3335 24.4253 3.75883 24 4.2835 24H10.3835C10.9082 24 11.3335 24.4253 11.3335 24.95V39.05C11.3335 39.5747 10.9082 40 10.3835 40H4.2835C3.75883 40 3.3335 39.5747 3.3335 39.05Z"
            stroke="#111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M62 39.05V24.95C62 24.4253 61.5747 24 61.05 24H54.95C54.4253 24 54 24.4253 54 24.95V39.05C54 39.5747 54.4253 40 54.95 40H61.05C61.5747 40 62 39.5747 62 39.05Z"
            stroke="#111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M22 32H43.3333"
            stroke="#111"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
    {
      id: 3,
      number: "06",
      title: "Redes y seguridad",
      image: "/img/video.jpg",
      description: "Pisos de alta resistencia diseñados para gimnasios.",
      theme: "light",
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="56"
          height="55"
          viewBox="0 0 56 55"
          fill="none"
        >
          <path
            d="M2.625 48.125L9.82738 6.875H45.8393L53.0417 48.125H2.625Z"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M4.91675 37.8125H50.7501"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M7.20837 27.5H48.4584"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M9.5 17.1875H46.1667"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M27.8334 6.875V48.125"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M18.6667 8.02081L15.2292 46.9791"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
          <path
            d="M37 8.02081L40.4375 46.9791"
            stroke="#111"
            stroke-width="1.5"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">
              Soluciones by partners especializados
            </span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            Transforma tu Espacio Fitness
            <br /> <span className="font-medium">con nuestras soluciones</span>
          </h3>
        </div>
      </main>

      {/* Nueva estructura 50/50 */}
      <section className="pt-24 bg-white relative z-20">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px]">
          {cards.map((card) => (
            <div
              key={card.id}
              className="flex flex-col lg:flex-row items-center bg-[#f1f3f5] rounded-[32px] overflow-hidden lg:max-h-[50vh]"
            >
              {/* Lado izquierdo: Imagen */}
              <div className="w-full lg:w-1/2">
                <Image
                  src={card.image}
                  alt={card.title}
                  width={600}
                  height={300}
                  className="object-cover w-full"
                />
              </div>

              {/* Lado derecho: Contenido */}
              <div className="w-full lg:w-1/2 flex flex-col gap-8 p-14">
                <span className="font-clashdisplay font-extralight text-2xl text-primary">
                  {card.number}
                </span>
                <h3 className="text-4xl font-medium text-primary font-clashdisplay">
                  {card.title}
                </h3>
                <p className="text-lg text-primary font-extralight">
                  {card.description}
                </p>
                <div className="mt-4">{card.icon}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-4 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0  before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 max-w-[1400px] mx-auto z-2 relative w-full bg-primary p-28 rounded-[64px]">
          <div className="flex flex-col gap-14 items-center md:items-start">
            <div className="flex gap-8 font-clash ">
              <div className="flex flex-col gap-16 font-normal tracking-wide text-lg justify-between">
                <h1 className="font-clash text-2xl lg:text-3xl relative font-light tracking-normal">
                  ¿Estás listo para impulsar tu
                  <br />
                  <span className="font-medium text-xl lg:text-5xl">
                    Fitness Center?
                  </span>
                </h1>
                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">
                    ¿Necesitas ayuda personalizada?
                  </span>
                  <Link
                    href="mailto:contacto@gewinnsolutions.co"
                    className="text-xl lg:text-3xl font-light tracking-wide"
                  >
                    contacto@gewinnsolutions.com
                  </Link>
                  <Link
                    href="#"
                    className="text-xl lg:text-3xl font-light tracking-wide flex gap-3"
                  >
                    <WhatsAppIcon /> (+52) 1 33 3100 4726
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </section>

      <section className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStripClients />
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-secondary pt-24 relative z-30">
        <Marquee speed={40}>
          <div className="font-clashdisplay font-medium text-5xl text-mainGray text-opacity-20 whitespace-nowrap">
            Boutique Studio · Fitness Centers · Indoor Cycling · Boutique Studio
            · Fitness Centers · Indoor Cycling · Boutique Studio · Fitness
            Centers · Indoor Cycling ·{" "}
          </div>
        </Marquee>
      </section>
      <Footer />
    </div>
  );
};

export default SolucionesAdd;
