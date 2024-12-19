"use client";

import { FC, useState } from "react";
import Footer from "@/components/Footer";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import StagesDark from "@/components/icons/StagesDark";
import GymDark from "@/components/icons/GymDark";
import WifiDark from "@/components/icons/WifiDark";
import ContactContainer from "@/components/ContactContainer";
import ArrowIcon from "@/components/icons/ArrowIcon";

const SolucionesAdd: FC = () => {
  const cards = [
    {
      id: 1,
      number: "04",
      title: "Stages Indoor Bikes",
      images: ["/img/cycling.jpg", "/img/cycling_2.jpg", "/img/cycling3.jpg"],
      description:
        "Las <span class='font-semibold'>bicicletas Stages</span> se encuentran en los <span class='font-semibold'>estudios más importantes del mundo</span>, reciben más de <span class='font-semibold'>100 millones de <span class='italic'>rides</span> al año</span>. Ideales para <span class='font-semibold'>indoor cycling</span> de <span class='font-semibold'>alto rendimiento</span> y <span class='font-semibold'>estilo rítmico</span>.",
      theme: "light",
      icon: <StagesDark />,
    },
    {
      id: 2,
      number: "05",
      title: "Equipamiento de Gimnasios",
      images: [
        "/img/equipamiento.jpg",
        "/img/pisos.jpg",
        "/img/equipamiento3.jpg",
      ],
      description:
        "Ofrecemos <span class='font-semibold'>equipamiento completo para gimnasios</span>, desde <span class='font-semibold'>máquinas</span> y <span class='font-semibold'>accesorios de alta gama</span> para <span class='font-semibold'>estudios boutique</span> hasta <span class='font-semibold'>pisos especializados</span>, adaptados a todas tus <span class='font-semibold'>necesidades de entrenamiento</span> y <span class='font-semibold'>funcionalidad</span>.",
      theme: "dark",
      icon: <GymDark />,
    },
    {
      id: 3,
      number: "06",
      title: "Redes y seguridad",
      images: ["/img/video.jpg", "/img/wifi.jpg", "/img/video3.jpg"],
      description:
        "La <span class='font-semibold'>red local</span> y <span class='font-semibold'>WiFi rápida y segura</span> es crucial para el <span class='font-semibold'>rendimiento óptimo</span> y estable de tus equipos. Acompañada de <span class='font-semibold'>sistemas de seguridad</span>, garantiza la <span class='font-semibold'>conectividad</span>, <span class='font-semibold'>protección y control total</span> de tu negocio.",
      theme: "light",
      icon: <WifiDark />,
    },
  ];

  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">
              Soluciones por partners especializados
            </span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            Transforma tu Espacio Fitness
            <br /> <span className="font-medium">con nuestras soluciones</span>
          </h3>
          <p className="font-extralight text-lg text-primary lg:max-w-3xl">
            Ofrecemos{" "}
            <span className="font-semibold">Soluciones Integrales</span> a
            través de alianzas estratégicas con líderes de la industria,
            diseñadas para{" "}
            <span className="font-semibold">
              optimizar cada aspecto de tu centro fitness.
            </span>{" "}
            Desde equipos y accesorios de alto rendimiento hasta{" "}
            <span className="font-semibold">
              sistemas avanzados de seguridad y conectividad,
            </span>{" "}
            garantizamos un entorno seguro, eficiente y de última tecnología,{" "}
            <span className="font-semibold">
              impulsando el éxito de tu negocio.
            </span>
          </p>
        </div>
      </main>

      <section className="pt-24 bg-white relative z-20">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-[80px]">
          {cards.map((card) => (
            <CardWithGallery key={card.id} card={card} />
          ))}
        </div>
      </section>

      <ContactContainer />

      <section className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStripClients />
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-secondary pt-24 relative z-30">
        <Marquee speed={40}>
          <div className="font-clashdisplay font-medium text-5xl text-mainGray text-opacity-20 whitespace-nowrap mr-[8px]">
            Boutique Studios · Fitness Centers · Indoor Cycling · Gimnasios ·
            Wellness Centers · Boutique Studios · Fitness Centers · Indoor
            Cycling · Gimnasios · Wellness Centers ·{" "}
          </div>
        </Marquee>
      </section>
      <Footer />
    </div>
  );
};

const CardWithGallery: FC<{ card: any }> = ({ card }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const handleNext = () => {
    setCurrentImage((prev) => (prev + 1) % card.images.length);
  };

  const handlePrev = () => {
    setCurrentImage((prev) => (prev === 0 ? card.images.length - 1 : prev - 1));
  };

  return (
    <div
      className="flex flex-col lg:flex-row items-center bg-[#f1f3f5] rounded-[32px] overflow-hidden lg:min-h-[45vh] lg:max-h-[45vh]"
      id={card.title.toLowerCase().replace(/\s+/g, "-")}
    >
      {/* Lado izquierdo: Galería */}
      <div className="w-full lg:w-1/2 relative h-full">
        <Image
          src={card.images[currentImage]}
          alt={`${card.title} image ${currentImage + 1}`}
          width={700}
          height={400}
          className="object-cover w-full h-full aspect-square"
          quality={100}
        />
        <button
          onClick={handlePrev}
          className="absolute top-1/2 left-5 transform -translate-y-1/2 bg-black border-white border-opacity-20 rotate-180 hover:bg-primary transition duration-300 p-2 rounded-full shadow-md"
        >
          <ArrowIcon />
        </button>
        <button
          onClick={handleNext}
          className="absolute top-1/2 right-5 transform -translate-y-1/2 bg-black border-white border-opacity-20 hover:bg-primary transition duration-300 p-2 rounded-full shadow-md"
        >
          <ArrowIcon />
        </button>
      </div>

      {/* Lado derecho: Contenido */}
      <div className="w-full lg:w-1/2 flex flex-col gap-6 p-14">
        <span className="font-clashdisplay font-extralight text-2xl text-primary">
          {card.number}
        </span>
        <h3 className="text-4xl font-medium text-primary font-clashdisplay">
          {card.title}
        </h3>
        <p
          className="text-lg text-primary font-extralight"
          dangerouslySetInnerHTML={{
            __html: card.description,
          }}
        ></p>
        <div className="mt-4">{card.icon}</div>
      </div>
    </div>
  );
};

export default SolucionesAdd;
