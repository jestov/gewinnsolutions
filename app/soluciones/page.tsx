"use client";

import { FC, useState, useEffect, useRef } from "react";
import Link from "next/link";
import ContactLight from "@/components/ContactLight";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";

const Soluciones: FC = () => {
  const [activeTab, setActiveTab] = useState(1);
  const servicesTabs = [
    {
      id: 1,
      title: "01 Audio",
      description:
        "Desarrollamos sistemas de sonido personalizados, con equipos especializados en fitness, contamos con la mayor experiencia en estudios boutique fitness. Nos involucramos en el tratamiento acústico desde el inicio del proyecto, para garantizar la mayor eficiencia sonora y con diseños personalizados para cada proyecto.",
      videoSrc: "/videos/1.mp4",
    },
    {
      id: 2,
      title: "02 Iluminación",
      description:
        "Creamos ambientes únicos con soluciones de iluminación personalizadas para mejorar la experiencia de entrenamiento.",
      videoSrc: "/videos/2.mp4",
    },
    {
      id: 3,
      title: "03 Diseño",
      description:
        "Diseñamos espacios que reflejan la identidad de cada proyecto, optimizando la funcionalidad y estética.",
      videoSrc: "/videos/1.mp4",
    },
    {
      id: 4,
      title: "04 Fitness Total",
      description:
        "Un servicio integral que incluye diseño, instalación, equipos y seguridad para crear un espacio fitness de primera clase.",
      videoSrc: "/videos/2.mp4",
    },
  ];
  return (
    <div className="relative bg-primary">
      <main className="p-[20px] bg-cover text-white z-20 bg-primary flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 items-center -ml-10">
            <div className="h-2 w-2 bg-white"></div>
            <span className="font-clash text-lg">Nuestra soluciones</span>
          </div>
          <h3 className="text-3xl lg:text-6xl font-clashdisplay font-extralight">
            Transforma tu Espacio Fitness
            <br /> <span className="font-medium">con nuestras soluciones</span>
          </h3>
        </div>
      </main>

      <section className="w-full bg-primary relative z-20 py-12">
        <div className="mx-[20px] rounded-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center items-center min-h-[87vh]">
          <video
            key={activeTab} // Ensure video reloads when tab changes
            autoPlay
            loop
            muted
            className="absolute z-10 w-full object-cover min-h-[105vh] max-w-none"
          >
            <source
              src={servicesTabs[activeTab - 1].videoSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute w-7/12 flex flex-col justify-center items-center gap-4 bottom-0 z-40">
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-180"></div>

            {/* Tab Navigation */}
            <div className="w-full h-full grid grid-cols-4 rounded-t-[32px] border-t-4 border-l-4 border-r-4 border-primary overflow-hidden">
              {servicesTabs.map((service) => (
                <button
                  key={service.id}
                  className={`px-4 py-9 h-[120px] border-r-4 border-primary ${
                    activeTab === service.id
                      ? "bg-primary text-white text-2xl font-clashdisplay font-medium"
                      : "bg-transparent text-white hover:bg-primary hover:bg-opacity-15 last:border-none text-2xl font-clashdisplay font-medium transition ease-in-out duration-500 relative first:before:absolute first:before:-bottom-[0px] first:before:-left-[0px] first:before:w-[32px] first:before:h-[32px] first:before:bg-[url('/img/substract3.svg')] first:before:bg-no-repeat first:before:bg-contain first:before:rotate-180 last:before:absolute last:before:bottom-0 last:before:-right-[0px] last:before:w-[32px] last:before:h-[32px] last:before:bg-[url('/img/substract3.svg')] last:before:rotate-90 last:before:bg-no-repeat last:before:bg-contain"
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  {service.title}
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className="text-white z-20 w-4/6 mx-auto py-20 text-xl flex font-extralight flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-4xl font-clashdisplay">
              {servicesTabs[activeTab - 1].title}
            </h2>
          </div>
          <p className="text-white text-opacity-80">
            {servicesTabs[activeTab - 1].description}
          </p>
        </div>
      </section>

      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-4 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0  before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 max-w-[1400px] mx-auto z-2 relative w-full bg-white text-primary p-28 rounded-[64px]">
          <div className="flex flex-col gap-14 items-center md:items-start">
            <div className="flex gap-8 font-clash ">
              <div className="flex flex-col gap-16 font-normal tracking-wide text-lg justify-between">
                <h1 className="font-clash text-2xl lg:text-3xl relative font-light tracking-normal">
                  ¿Estás listo para impulsar tu
                  <br />
                  <span className="font-medium text-xl lg:text-5xl">
                    fitness center?
                  </span>
                </h1>
                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">
                    ¿Necesitas ayuda personalizada?
                  </span>
                  <Link
                    href="mailto:info@gewinnsolutions.co"
                    className="text-xl lg:text-3xl font-light tracking-wide"
                  >
                    info@gewinnsolutions.com
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
          <ContactLight />
        </div>
      </section>

      <section className="bg-white z-30 relative">
        <div className="ml-auto w-full py-8 bg-primary relative z-30">
          <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
            <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <BrandStripClients />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-secondary py-24 relative z-30">
        <Marquee speed={40}>
          <div className="font-clashdisplay font-medium text-5xl text-mainGray text-opacity-20 whitespace-nowrap">
            Boutique Studio Fitness Centers · Indoor Cycling · Boutique Studio
            Fitness Centers · Indoor Cycling · Boutique Studio Fitness Centers ·
            Indoor Cycling ·{" "}
          </div>
        </Marquee>
      </section>
      <Footer />
    </div>
  );
};

export default Soluciones;
