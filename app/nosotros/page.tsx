"use client";

import { FC } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import VideoPlayer from "@/components/videoPlayer";
import BrandStrip from "@/components/BrandStrip";
import BrandStripClients from "@/components/BrandStripClients";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Marquee from "react-fast-marquee";

const Nosotros: FC = () => {
  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 min-h-[91vh] bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Nosotros</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            Especialistas en{" "}
            <span className="font-medium">
              espacios fitness y<br /> experiencias de entrenamiento
            </span>
          </h3>
        </div>
        <div className="flex rounded-[64px] relative overflow-hidden h-full">
          <div className="absolute ml-32 w-6/12 bg-white pb-8 px-14 flex flex-col justify-center items-center gap-2 -top-[5px] rounded-b-[64px] h-[124px] z-40">
            <div className="absolute top-[5px] -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract2.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[5px] -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-180"></div>
            <p className="font-extralight text-lg text-primary">
              <span className="font-semibold">Nuestra misión </span>es diseñar y
              construir{" "}
              <span className="font-semibold">
                espacios de fitness que cumplan con los más altos estándares de
                funcionalidad y estética
              </span>
              y además inspiren a las personas a alcanzar sus objetivos de salud
              y bienestar.
            </p>
          </div>
          <VideoPlayer />
        </div>
      </main>
      <section className="text-primary text-2xl lg:text-4xl mx-auto max-w-[1000px] text-center pt-28 pb-32">
        <h4 className="font-extralight tracking-tight leading-relaxed">
          En nuestra firma, nos dedicamos a crear experiencias transformadoras a
          través del diseño personalizado de sistemas de audio e iluminación
          para estudios{" "}
          <span className="font-semibold">
            <i>boutique y fitness centers.</i> Desde la concepción
            arquitectónica hasta la instalación final,
          </span>{" "}
          cada proyecto es una obra de pasión y precisión.{" "}
        </h4>
      </section>
      <section className="bg-primary text-lg lg:text-xl mx-auto w-full text-white pt-28 pb-64 sticky z-20 top-[70px]">
        <div className="grid grid-cols-2 gap-20 mx-auto max-w-[1200px]">
          <h5 className="font-extralight tracking-tight leading-relaxed">
            Desde nuestros inicios, hemos abrazado el compromiso de{" "}
            <span className="font-semibold">
              convertir la visión de nuestros clientes en realidades tangibles,
            </span>{" "}
            creando espacios que no solo son funcionales y eficientes, sino
            también estéticamente deslumbrantes e inspiradores.
          </h5>
          <h5 className="font-extralight tracking-tight leading-relaxed">
            Nuestro equipo de arquitectos cuida cada detalle,{" "}
            <span className="font-semibold">
              desde la distribución y armonía de los espacios, hasta la creación
              de renders de alta calidad que te permiten visualizar el resultado
              de tu sueño.
            </span>
            Con pasión por la excelencia hemos dejado una huella significativa
            en la industria del fitness, creando ambientes que inspiran
            bienestar.
          </h5>
        </div>
      </section>

      <section className="mr-auto text-center w-3/4 bg-white z-30 relative rounded-tr-[64px] border-t border-mainGray border-opacity-20 -mt-36">
        <div className=" w-full bg-white py-8 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStrip />
        </div>{" "}
      </section>

      <section className="py-28 relative z-30 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-4xl font-medium mb-6 font-clashdisplay">
            Principios <span className="font-extralight">que nos</span> impulsan
          </h2>
          <p className="text-center text-lg font-light mb-20 lg:w-2/4 mx-auto">
            Con pasión por la excelencia{" "}
            <span className="font-semibold">
              hemos dejado una huella significativa en la industria del fitness
            </span>
            , creando ambientes que inspiran bienestar.
          </p>

          <div>
            <div className="flex justify-between items-center py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Excelencia
              </h3>
              <p className="text-lg font-light lg:w-2/4 ">
                Nos comprometemos a{" "}
                <span className="font-semibold">
                  entregar resultados de la más alta calidad
                </span>{" "}
                en cada proyecto que emprendemos.
              </p>
            </div>

            <div className="flex justify-between items-center py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Innovación
              </h3>
              <p className="text-lg font-light lg:w-2/4 ">
                Fomentamos la creatividad y la implementación de soluciones
                vanguardistas con{" "}
                <span className="font-semibold">tecnología premium.</span>
              </p>
            </div>

            <div className="flex justify-between items-center py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Colaboración
              </h3>
              <p className="text-lg font-light  lg:w-2/4">
                Creemos en el{" "}
                <span className="font-semibold">
                  poder del trabajo en equipo
                </span>{" "}
                y promovemos la colaboración entre nuestros empleados, socios y
                clientes para{" "}
                <span className="font-semibold">
                  alcanzar objetivos comunes.
                </span>
              </p>
            </div>

            <div className="flex justify-between items-center py-12">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Compromiso
              </h3>
              <p className="text-lg font-light lg:w-2/4">
                Valoramos la confianza de nuestros clientes y nos dedicamos a{" "}
                <span className="font-semibold">
                  cumplir y superar sus expectativas.
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-white z-30 relative">
        <div className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
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
            Boutique Studio Fitness Centers · Indoor Cycling · Boutique Studio
            Fitness Centers · Indoor Cycling · Boutique Studio Fitness Centers ·
            Indoor Cycling ·{" "}
          </div>
        </Marquee>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-12 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-secondary bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0 before:bg-gradient-to-t before:from-secondary/30 before:to-secondary/100 before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 max-w-[1400px] mx-auto z-2 relative w-full">
          <div className="flex flex-col gap-14 items-center md:items-start">
            <div className="flex gap-8 font-clash">
              <span className="text-mainGray text-lg">(04)</span>
              <div className="flex flex-col gap-16 font-normal tracking-wide text-lg">
                Contacto
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
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
