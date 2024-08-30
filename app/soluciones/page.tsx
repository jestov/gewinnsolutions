"use client";

import { FC, useState, useEffect } from "react";
import Link from "next/link";
import ContactLight from "@/components/ContactLight";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const Soluciones: FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const tab = params.get("tab");
    if (tab) {
      setActiveTab(Number(tab));
    }
  }, []);

  const servicesTabs = [
    {
      id: 1,
      title: "01 Audio",
      description:
        "Desarrollamos sistemas de sonido personalizados, con equipos especializados en fitness, contamos con la mayor experiencia en estudios boutique fitness. Nos involucramos en el tratamiento acústico desde el inicio del proyecto, para garantizar la mayor eficiencia sonora y con diseños personalizados para cada proyecto.",
      videoSrc: "/videos/1.mp4",
      img: ["/img/audio-1.jpg", "/img/audio-2.jpg", "/img/audio-3.jpg"],
      whyService:
        "Nuestro equipo de arquitectos se especializa en el diseño de espacios fitness que combinan funcionalidad y estética. Cada proyecto es personalizado para asegurar que se maximice el rendimiento del espacio y se cree una atmósfera motivadora y atractiva.",
      benefits: [
        "Diseño personalizado",
        "Renders de Alta Calidad",
        "Optimización del espacio",
        "Materiales y Acabados Premium",
      ],
    },
    {
      id: 2,
      title: "02 Iluminación",
      description:
        "Creamos ambientes únicos con soluciones de iluminación personalizadas para mejorar la experiencia de entrenamiento.",
      videoSrc: "/videos/2.mp4",
      img: [
        "/img/iluminacion-1.jpg",
        "/img/iluminacion-2.jpg",
        "/img/iluminacion-3.jpg",
      ],
      whyService:
        "La iluminación adecuada puede transformar un espacio y potenciar la motivación durante el entrenamiento. Nuestro enfoque personalizado asegura que cada proyecto tenga la atmósfera ideal.",
      benefits: [
        "Diseño de iluminación a medida",
        "Tecnología LED avanzada",
        "Control de ambientes",
        "Integración estética y funcional",
      ],
    },
    {
      id: 3,
      title: "03 Diseño",
      description:
        "Diseñamos espacios que reflejan la identidad de cada proyecto, optimizando la funcionalidad y estética.",
      videoSrc: "/videos/1.mp4",
      img: ["/img/diseno-1.jpg", "/img/diseno-2.jpg", "/img/diseno-3.jpg"],
      whyService:
        "Cada espacio fitness debe ser único y representar la identidad de la marca. Nuestro equipo se enfoca en el diseño integral que fusiona estética con funcionalidad.",
      benefits: [
        "Diseño arquitectónico",
        "Selección de materiales",
        "Visualización en 3D",
        "Coordinación del proyecto",
      ],
    },
    {
      id: 4,
      title: "04 Fitness Total",
      description:
        "Un servicio integral que incluye diseño, instalación, equipos y seguridad para crear un espacio fitness de primera clase.",
      videoSrc: "/videos/2.mp4",
      img: [
        "/img/fitness-total-1.jpg",
        "/img/fitness-total-2.jpg",
        "/img/fitness-total-3.jpg",
      ],
      whyService:
        "Con nuestro servicio Fitness Total, no solo diseñamos y equipamos, sino que también nos encargamos de la instalación y seguridad, ofreciendo una solución completa para espacios fitness.",
      benefits: [
        "Servicio llave en mano",
        "Equipos de alta calidad",
        "Instalación profesional",
        "Seguridad y networking",
      ],
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
          <h2 className="font-medium text-5xl font-clashdisplay">
            {servicesTabs[activeTab - 1].title}
          </h2>
          <p className="text-white text-opacity-80 mt-4">
            {servicesTabs[activeTab - 1].description}
          </p>
        </div>
        <div className="grid grid-cols-3 relative w-full min-h-[500px]">
          {servicesTabs[activeTab - 1].img.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Service Image ${index + 1}`}
              className="w-full"
              width={500}
              height={500}
            />
          ))}
        </div>
        <div className="grid grid-cols-2 gap-20 mx-auto max-w-[1200px] pt-20 items-start">
          <div className="flex flex-col gap-8 pt-12">
            <h2 className="font-medium text-4xl font-clashdisplay text-white">
              ¿Por qué necesito este servicio?
            </h2>
            <p className="text-white text-lg">
              {servicesTabs[activeTab - 1].whyService}
            </p>
          </div>
          <ul className="space-y-2 text-white">
            {servicesTabs[activeTab - 1].benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex lg:flex-row items-center py-12 border-b border-white border-opacity-20 text-2xl lg:text-3xl font-clash font-medium gap-6"
              >
                <span className="font-extralight">
                  {String(index + 1).padStart(2, "0")}
                </span>{" "}
                {benefit}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Remaining sections */}
    </div>
  );
};

export default Soluciones;
