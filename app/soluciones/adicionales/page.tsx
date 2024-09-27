"use client";

import { FC, useState } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";
import PlusIcon from "@/components/icons/PlusIcon";

const SolucionesAdd: FC = () => {
  const [activeCard, setActiveCard] = useState<number | null>(null);

  const cards = [
    {
      id: 1,
      number: "04",
      title: "Stages Indoor Bikes",
      image: "/img/cycling.jpg",
      description:
        "En colaboración con nuestros partners especializados, ofrecemos stages de indoor cycling diseñados para soportar el uso intensivo y ofrecer una experiencia de usuario superior.",
      theme: "light",
    },
    {
      id: 2,
      number: "05",
      title: "Equipamiento de Gimnasios",
      image: "/img/equipamiento.jpg",
      description: "El mejor equipamiento para gimnasios de alto rendimiento.",
      theme: "dark",
    },
    {
      id: 3,
      number: "06",
      title: "Redes y seguridad",
      image: "/img/video.jpg",
      description: "Pisos de alta resistencia diseñados para gimnasios.",
      theme: "light",
    },
  ];

  const toggleDescription = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Soluciones adicionales</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            Transforma tu Espacio Fitness
            <br /> <span className="font-medium">con nuestras soluciones</span>
          </h3>
        </div>
      </main>

      <section className="pt-32 bg-white relative z-20">
        <div className="mx-auto max-w-[1320px] flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 justify-between">
              <h3 className="text-2xl lg:text-3xl text-left text-primary font-clashdisplay font-extralight w-full">
                Soluciones por{" "}
                <span className="font-medium">
                  partners
                  <br />
                  especializados
                </span>
              </h3>
              <p className="font-extralight text-lg">
                Descubre nuestras soluciones integrales ofrecidas a través de{" "}
                <span className="font-semibold">
                  socios confiables, diseñadas para satisfacer todas las
                  necesidades de tu gimnasio.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-3 gap-[40px]">
              {cards.slice(0, 3).map((card) => (
                <div
                  key={card.id}
                  className={`relative w-full bg-cover bg-center rounded-xl overflow-hidden flex flex-col p-6 aspect-vertical border border-primary border-opacity-15 text-white ${
                    card.theme === "dark" ? "bg-black" : "bg-white"
                  }`}
                >
                  <div
                    className="absolute inset-0 bg-cover top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-xl"
                    style={{ backgroundImage: `url(${card.image})` }}
                  ></div>
                  <div
                    className={`absolute inset-0 bg-gradient-to-b from-black to-transparent opacity-70 top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-xl`}
                  ></div>

                  <div className="z-20 relative flex flex-col gap-1 font-clashdisplay">
                    <span className="font-extralight text-2xl">
                      {card.number}
                    </span>
                    <br />
                    <h3 className="text-4xl font-medium">{card.title}</h3>
                  </div>

                  <div
                    className={`absolute bottom-0 right-0 ${
                      card.theme === "dark"
                        ? "bg-primary before:bg-[url('/img/substract3.svg')] after:bg-[url('/img/substract3.svg')]"
                        : "bg-white before:bg-[url('/img/substract2.svg')] after:bg-[url('/img/substract2.svg')]"
                    } p-8 rounded-tl-[32px] cursor-pointer before:absolute before:bottom-1.5 before:-left-[32px] before:w-[32px] before:h-[32px] before:bg-no-repeat before:bg-contain before:rotate-90
                           after:absolute after:-top-[32px] after:right-1.5 after:w-[32px] after:h-[32px] after:bg-no-repeat after:bg-contain after:rotate-90`}
                    onClick={() => toggleDescription(card.id)}
                  >
                    <PlusIcon
                      dark={card.theme === "light"}
                      className="h-8 w-8 relative -right-[2px]"
                    />
                  </div>

                  {activeCard === card.id && (
                    <div className="z-20 relative mt-4 p-4 bg-opacity-80 bg-primary text-white  rounded-2xl font-clash text-lg font-extralight">
                      <p>{card.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
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
