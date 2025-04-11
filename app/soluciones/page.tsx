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
        "Somos un equipo de <span class='font-semibold'>apasionados del audio</span>, dedicados a crear <span class='font-semibold'>sistemas de sonido personalizados</span> que se ajustan perfectamente a cada <span class='font-semibold'>espacio fitness</span>. Con <span class='font-semibold'>amplia experiencia</span> en <span class='font-semibold'>estudios boutique</span> y <span class='font-semibold'>wellness centers</span>, desarrollamos <span class='font-semibold'>soluciones únicas</span> que buscan <span class='font-semibold'>superar las expectativas</span> de nuestros clientes, siempre con un enfoque en <span class='font-semibold'>eficiencia</span> y <span class='font-semibold'>alto rendimiento</span>.<br /><br /> Colaboramos con <span class='font-semibold'>arquitectos</span> desde el inicio para garantizar un <span class='font-semibold'>tratamiento acústico especializado</span> que optimice la <span class='font-semibold'>calidad sonora</span>. Cada diseño es <span class='font-semibold'>personalizado</span> y asegura que el sonido se integre <span class='font-semibold'>armoniosamente</span> al espacio, elevando tanto la <span class='font-semibold'>estética</span> como la <span class='font-semibold'>experiencia auditiva</span>.",
      videoSrc: "/videos/audio.mp4",
      img: [
        "/img/audio-1.jpg",
        "/img/audio-2.jpg",
        "/img/audio-3.jpg",
        "/img/audio-4.jpg",
      ],
      whyService:
        "En nuestro equipo de <span class='font-semibold'>Ingenieros de Sonido</span>, nos especializamos en diseñar <span class='font-semibold'>sistemas de audio personalizados</span> que no solo optimizan el <span class='font-semibold'>rendimiento de los equipos instalados</span>, sino que también elevan la <span class='font-semibold'>experiencia sonora</span> de los <span class='font-semibold'>espacios fitness</span>.<br /><br /> Con una <span class='font-semibold'>amplia trayectoria</span> en la industria, combinamos <span class='font-semibold'>ingeniería avanzada</span> con una <span class='font-semibold'>visión estética</span>, asegurándonos de que el sonido no solo sea <span class='font-semibold'>impecable</span>, sino que también se integre de manera <span class='font-semibold'>armónica</span> y <span class='font-semibold'>elegante</span> en el diseño del lugar.<br /><br /> Nuestro objetivo es lograr que cada espacio <span class='font-semibold'>suene sublime</span>, sin sacrificar su <span class='font-semibold'>esplendor visual</span>.",
      benefits: [
        "Diseño personalizado",
        "Visión estética",
        "Instalación impecable y segura",
        "Excelencia sonora",
      ],
    },
    {
      id: 2,
      title: "02 Iluminación",
      description:
        "Nuestro equipo se especializa en el <span class='font-semibold'>diseño</span> y la <span class='font-semibold'>instalación de sistemas de iluminación avanzados</span> para <span class='font-semibold'>espacios fitness</span>, utilizando la <span class='font-semibold'>última tecnología en LED pixel</span>. Con <span class='font-semibold'>años de experiencia</span>, creamos <span class='font-semibold'>efectos visuales dinámicos</span> y <span class='font-semibold'>envolventes</span> que no solo transforman el ambiente, sino que también transportan a los usuarios a un <span class='font-semibold'>mundo imaginario</span> donde cada entrenamiento se siente <span class='font-semibold'>único</span>.<br /><br /> La <span class='font-semibold'>iluminación</span> no es solo un complemento, sino un <span class='font-semibold'>elemento clave</span> para elevar la <span class='font-semibold'>energía</span> y la <span class='font-semibold'>motivación</span> de los espacios, creando una <span class='font-semibold'>atmósfera</span> imposible de encontrar en otro lugar.",
      videoSrc: "/videos/iluminacion.mp4",
      img: [
        "/img/iluminacion-1.jpg",
        "/img/iluminacion-2.jpg",
        "/img/iluminacion-3.jpg",
        "/img/iluminacion-4.jpg",
      ],
      whyService:
        "A lo largo de los años, hemos perfeccionado nuestro <span class='font-semibold'>enfoque</span> para ofrecer <span class='font-semibold'>soluciones eficientes</span>, <span class='font-semibold'>seguras</span> y <span class='font-semibold'>fáciles de usar</span>, tanto para los <span class='font-semibold'>coaches</span> como para los <span class='font-semibold'>riders</span>.<br /><br /> Planificamos cada detalle meticulosamente, asegurando que la <span class='font-semibold'>estética</span> se alinee con la <span class='font-semibold'>funcionalidad</span>. Nuestro compromiso con la <span class='font-semibold'>calidad</span> garantiza que cada espacio esté <span class='font-semibold'>iluminado de manera precisa</span>, optimizando su <span class='font-semibold'>rendimiento</span> mientras resalta su <span class='font-semibold'>belleza visual</span>.<br /><br /> No solo <span class='font-semibold'>iluminamos espacios</span>, <span class='font-semibold'>creamos experiencias</span> que <span class='font-semibold'>cautivan</span> y <span class='font-semibold'>motivan</span> a quienes los habitan.",
      benefits: [
        "Diseño personalizado",
        "Tecnología LED de vanguardia",
        "Instalación eficiente y segura",
        "Amplia experiencia",
      ],
    },
    {
      id: 3,
      title: "03 Diseño",
      description:
        "Nuestro equipo de <span class='font-semibold'>arquitectos</span> se especializa en crear <span class='font-semibold'>espacios que maximizan su rendimiento</span>, equilibrando <span class='font-semibold'>diseño</span>, <span class='font-semibold'>funcionalidad</span>, <span class='font-semibold'>eficiencia</span> y <span class='font-semibold'>estética</span>. Nos enfocamos en cada detalle, desde la <span class='font-semibold'>distribución</span> hasta la <span class='font-semibold'>identidad única</span> de cada proyecto, asegurando que cada espacio sea tan <span class='font-semibold'>armonioso</span> como <span class='font-semibold'>eficiente</span>.",
      videoSrc: "/videos/1.mp4",
      img: [
        "/img/diseno-1.jpg",
        "/img/diseno-2.jpg",
        "/img/diseno-3.jpg",
        "/img/diseno-4.jpg",
      ],
      whyService:
        "Transformamos tus ideas en realidad con <span class='font-semibold'>renders de alta calidad</span> que permiten <span class='font-semibold'>visualizar el proyecto</span> antes de su ejecución.<br /><br /> Creamos <span class='font-semibold'>entornos</span> que no solo cumplen su <span class='font-semibold'>función</span>, sino que <span class='font-semibold'>inspiran</span> y <span class='font-semibold'>motivan</span> la experiencia del usuario, siempre buscando el <span class='font-semibold'>equilibrio perfecto</span> entre <span class='font-semibold'>arte</span> y <span class='font-semibold'>practicidad</span>.",
      benefits: [
        "Diseño arquitectónico integral",
        "Aprovechamiento del espacio",
        "Visualización en 3D",
        "Coordinación total del proyecto",
      ],
    },
    {
      id: 4,
      title: "04 Fitness Total",
      description:
        "<span class='font-semibold'>Fitness Total</span> es nuestra <span class='font-semibold'>solución integral</span> que transforma tu <span class='font-semibold'>espacio de fitness</span> en una <span class='font-semibold'>experiencia única</span>. Combinamos <span class='font-semibold'>diseño arquitectónico de vanguardia</span>, <span class='font-semibold'>sistemas de sonido personalizados</span> y <span class='font-semibold'>iluminación LED avanzada</span> para crear un <span class='font-semibold'>entorno motivador</span> y <span class='font-semibold'>estéticamente impresionante</span>.<br /><br /> Imagina un <span class='font-semibold'>estudio de indoor cycling</span> o <span class='font-semibold'>gimnasio</span> donde cada detalle, desde el <span class='font-semibold'>sonido envolvente</span> hasta la <span class='font-semibold'>atmósfera inmersiva</span>, está diseñado para <span class='font-semibold'>inspirar</span> y <span class='font-semibold'>energizar</span>.",
      videoSrc: "/videos/1.mp4",
      img: [
        "/img/fitness-total-1.jpg",
        "/img/fitness-total-2.jpg",
        "/img/fitness-total-3.jpg",
        "/img/fitness-total-4.jpg",
      ],
      whyService:
        "También nos encargamos de equipar tu espacio con <span class='font-semibold'>maquinaria de última generación</span>, <span class='font-semibold'>sistemas de seguridad confiables</span> y <span class='font-semibold'>redes Wi-Fi de alto rendimiento</span>.<br /><br /> Colaboramos contigo para hacer realidad tu <span class='font-semibold'>visión</span>, asegurando que tu <span class='font-semibold'>gimnasio</span>, <span class='font-semibold'>estudio</span> o <span class='font-semibold'>wellness center</span> no solo funcione de manera <span class='font-semibold'>óptima</span>, sino que también ofrezca una <span class='font-semibold'>experiencia excepcional</span> para todos sus usuarios.",
      benefits: [
        "Diseño Integral y Personalizado",
        "Sistema de Sonido a la medida",
        "Iluminación Avanzada",
        "Equipamiento Completo y Conectividad",
      ],
    },
  ];

  return (
    <div className="relative bg-primary">
      <main className="p-[20px] bg-cover text-white z-20 bg-primary flex flex-col gap-12 lg:gap-20 pt-24 lg:pt-40">
        <div className="px-[15px] lg:px-44 flex flex-col gap-6 lg:gap-12">
          <div className="flex gap-4 lg:gap-8 items-center lg:-ml-10">
            <div className="h-2 w-2 bg-white"></div>
            <span className="font-clash text-lg">Nuestra soluciones</span>
          </div>
          <h3 className="text-3xl lg:text-6xl font-clashdisplay font-extralight">
            Transforma tu Espacio Fitness
            <br />{" "}
            <span className="font-medium">
              con nuestras Soluciones Especializadas
            </span>
          </h3>
        </div>
      </main>

      <section className="w-full bg-primary relative z-20 py-12">
        <div className="lg:mx-[20px] rounded-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center items-center min-h-[70vh]">
          <video
            key={activeTab}
            autoPlay
            loop
            muted
            preload="auto"
            playsInline
            className="absolute z-10 w-full object-cover min-h-[70vh] max-w-none"
          >
            <source
              src={servicesTabs[activeTab - 1].videoSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute w-full lg:w-7/12 flex flex-col justify-center items-center gap-4 bottom-0 z-40">
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-180"></div>

            {/* Tab Navigation */}
            <div className="w-full h-full grid grid-cols-4">
              {servicesTabs.map((service) => (
                <button
                  key={service.id}
                  className={`px-4 py-9 h-[120px] lg:first:border-l-4 border-r-2 lg:border-r-4 border-primary border-t-2 lg:border-t-4 lg:first:rounded-tl-[64px] lg:last:rounded-tr-[64px] ${
                    activeTab === service.id
                      ? "bg-primary text-white text-lg lg:text-2xl font-clashdisplay font-medium"
                      : "bg-transparent text-white hover:bg-primary hover:bg-opacity-15 text-lg lg:text-2xl font-clashdisplay font-medium transition ease-in-out duration-500 relative first:before:absolute first:before:-bottom-[0px] first:before:-left-[0px] first:before:w-[60px] first:before:h-[60px] first:before:bg-[url('/img/substract3.svg')] first:before:bg-no-repeat first:before:bg-contain first:before:rotate-180 last:before:absolute last:before:bottom-0 last:before:-right-[0px] last:before:w-[60px] last:before:h-[60px] last:before:bg-[url('/img/substract3.svg')] last:before:rotate-90 last:before:bg-no-repeat last:before:bg-contain"
                  }`}
                  onClick={() => setActiveTab(service.id)}
                >
                  <span className="inline lg:hidden">0{service.id}</span>
                  <span className="hidden lg:inline">{service.title}</span>
                </button>
              ))}
            </div>
          </div>
        </div>
        {/* Tab Content */}
        <div className="text-white z-20 px-[30px] w-full lg:w-4/6 mx-auto py-12 lg:py-20 text-xl flex font-extralight flex-col gap-8">
          <h2 className="font-medium text-3xl lg:text-5xl font-clashdisplay">
            {servicesTabs[activeTab - 1].title}
          </h2>
          <p
            className="text-white text-lg lg:text-xl text-opacity-80 lg:mt-4"
            dangerouslySetInnerHTML={{
              __html: servicesTabs[activeTab - 1].description,
            }}
          ></p>
        </div>
        <div className="grid lg:grid-cols-4 relative w-full min-h-[500px] gap-[5px]">
          {servicesTabs[activeTab - 1].img.map((image, index) => (
            <Image
              key={index}
              src={image}
              alt={`Service Image ${index + 1}`}
              className="w-full"
              width={500}
              height={500}
              quality={100}
            />
          ))}
        </div>
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 mx-auto max-w-[1200px] pt-12 lg:pt-20 items-start px-[15px]">
          <div className="flex flex-col gap-8 pt-12">
            <h2 className="font-medium text-4xl font-clashdisplay text-white">
              ¿Por qué necesito este servicio?
            </h2>
            <p
              className="text-white text-lg"
              dangerouslySetInnerHTML={{
                __html: servicesTabs[activeTab - 1].whyService,
              }}
            ></p>
          </div>
          <ul className="space-y-2 text-white">
            {servicesTabs[activeTab - 1].benefits.map((benefit, index) => (
              <li
                key={index}
                className="flex lg:flex-row items-center py-6 lg:py-12 border-b border-white border-opacity-20 text-xl lg:text-3xl font-clash font-medium gap-6"
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

      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-4 lg:pt-24 pb-12 md:pb-20 px-[0]  md:px-[60px] bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0  before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-4 max-w-[1400px] mx-auto z-2 relative w-full bg-white text-primary py-[40px] px-[30px] lg:p-28 rounded-[64px]">
          <div className="flex flex-col gap-14 items-center md:items-start">
            <div className="flex gap-8 font-clash ">
              <div className="flex flex-col gap-8 lg:gap-16 font-normal tracking-wide text-lg justify-between">
                <h1 className="font-clash text-2xl lg:text-3xl relative font-light tracking-normal">
                  ¿Estás listo para impulsar tu
                  <br />
                  <span className="font-medium text-2xl lg:text-5xl">
                    Fitness Center?
                  </span>
                </h1>
                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">
                    ¿Necesitas ayuda personalizada?
                  </span>
                  <Link
                    href="mailto:contacto@gewinnsolutions.com"
                    target="_blank"
                    className="text-xl lg:text-3xl font-light tracking-wide"
                  >
                    contacto@gewinnsolutions.com
                  </Link>
                  <Link
                    href="https://api.whatsapp.com/send/?phone=523331004726"
                    target="_blank"
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

export default Soluciones;
