"use client";

import { FC } from "react";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import VideoPlayer from "@/components/videoPlayer";
import BrandStrip from "@/components/BrandStrip";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";

const Nosotros: FC = () => {
  return (
    <div className="relative overflow-hidden lg:overflow-visible">
      <main className="p-[20px] bg-cover text-white z-20 lg:min-h-[91vh] bg-white flex flex-col gap-8 lg:gap-20 pt-24 lg:pt-40">
        <div className="px-4 lg:px-44 flex flex-col gap-6 lg:gap-12">
          <div className="flex gap-4 lg:gap-8 text-primary items-center lg:-ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Nosotros</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            <span className="font-medium">Especialistas</span> en{" "}
            <span className="font-medium">espacios fitness</span> y<br />{" "}
            <span className="font-medium">experiencias</span> de entrenamiento
          </h3>
        </div>
        <div className="flex flex-col justify-center lg:rounded-[64px] relative overflow-hidden lg:h-[70vh]">
          <div className="lg:absolute w-full lg:ml-40 lg:w-6/12 bg-white pb-8 px-[15px] lg:px-14 flex flex-col justify-center items-center gap-2 -top-[5px] rounded-b-[64px] lg:h-[124px] z-40">
            <div className="absolute top-[5px] -left-[61px] w-[61px] h-[61px]  bg-[url('/img/substract2.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[5px] -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-180"></div>
            <p className="font-extralight text-base lg:text-lg text-primary">
              Nuestra misión es diseñar y construir{" "}
              <span className="font-semibold">espacios de fitness</span> que no
              solo cumplan con los{" "}
              <span className="font-semibold">
                más altos estándares de funcionalidad y estética,
              </span>{" "}
              sino que también inspiren a las personas a alcanzar sus objetivos
              de <span className="font-semibold">salud y bienestar.</span>
            </p>
          </div>
          <VideoPlayer />
        </div>
      </main>
      <section className="text-primary text-lg lg:text-4xl mx-auto max-w-[1000px] text-center pt-10 pb-14 lg:pt-28 lg:pb-32 px-[15px]">
        <h4 className="font-extralight tracking-tight leading-relaxed">
          En nuestra firma, nos dedicamos a{" "}
          <span className="font-semibold">
            crear experiencias transformadoras
          </span>{" "}
          a través del diseño personalizado de sistemas de audio e iluminación
          para{" "}
          <span className="font-semibold">
            estudios
            <i> boutique y Fitness Centers.</i>
          </span>{" "}
          Desde la concepción arquitectónica hasta la instalación final,{" "}
          <span className="font-semibold">
            cada proyecto es una obra de pasión y precisión.
          </span>
        </h4>
      </section>
      <section className="bg-primary text-lg lg:text-xl mx-auto w-full text-white  px-[15px] pt-14 lg:pt-28 pb-64 sticky z-20 top-[70px]">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 mx-auto max-w-[1200px]">
          <h5 className="font-extralight tracking-tight leading-relaxed">
            Desde nuestros inicios, hemos abrazado el compromiso de{" "}
            <span className="font-semibold">
              convertir la visión de nuestros clientes en realidades tangibles,
            </span>{" "}
            creando espacios que no solo son funcionales y eficientes, sino
            también{" "}
            <span className="font-semibold">
              estéticamente deslumbrantes e inspiradores.
            </span>
          </h5>
          <h5 className="font-extralight tracking-tight leading-relaxed">
            Nuestro equipo de arquitectos cuida cada detalle,{" "}
            <span className="font-semibold">
              desde la distribución y armonía de los espacios, hasta la creación
              de renders de alta calidad que te permiten visualizar el resultado
              de tu sueño.
            </span>{" "}
            Con pasión por la excelencia hemos dejado una huella significativa
            en la industria del fitness, creando{" "}
            <span className="font-semibold">
              ambientes que inspiran bienestar.
            </span>
          </h5>
        </div>
      </section>

      <section className="lg:mr-auto text-center w-full max-w-full lg:w-3/4 bg-white z-30 relative rounded-tr-[64px] border-t border-mainGray border-opacity-20 -mt-36">
        <div className=" w-full bg-white py-8 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStrip gradientColor={false} />
        </div>{" "}
      </section>

      <section className="py-14 lg:py-28 relative z-30 bg-white">
        <div className="max-w-[1200px] mx-auto px-4">
          <h2 className="text-center text-2xl lg:text-4xl font-medium mb-6 font-clashdisplay">
            Principios <span className="font-extralight">que nos</span> impulsan
          </h2>
          <p className="text-center text-base lg:text-lg font-light mb-10 lg:mb-20 lg:w-3/4 mx-auto">
            Nuestros valores guían cada paso que damos, desde la{" "}
            <span className="font-semibold">creación de espacios fitness</span>{" "}
            hasta la implementación de{" "}
            <span className="font-semibold">soluciones innovadoras.</span> Con
            una <span className="font-semibold">visión</span> clara, buscamos{" "}
            <span className="font-semibold">
              inspirar bienestar y elevar el rendimiento
            </span>{" "}
            en cada proyecto.
          </p>

          <div>
            <div className="flex flex-col md:flex-row justify-between gap-4 lg:items-center py-6 lg:py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Excelencia
              </h3>
              <p className="text-base lg:text-lg  font-light lg:w-2/4 ">
                Nos comprometemos a{" "}
                <span className="font-semibold">
                  entregar resultados de la más alta calidad
                </span>{" "}
                en cada proyecto que emprendemos.
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 lg:items-center py-6 lg:py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Innovación
              </h3>
              <p className="text-base lg:text-lg  font-light lg:w-2/4 ">
                Fomentamos la creatividad y la implementación de soluciones
                vanguardistas con{" "}
                <span className="font-semibold">
                  equipos de tecnología premium.
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 lg:items-center py-6 lg:py-12 border-b border-primary border-opacity-20">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Colaboración
              </h3>
              <p className="text-base lg:text-lg font-light  lg:w-2/4">
                Creemos en el{" "}
                <span className="font-semibold">
                  poder del trabajo en equipo
                </span>{" "}
                y promovemos la colaboración entre nuestros empleados, socios y
                clientes para{" "}
                <span className="font-semibold">
                  alcanzar objetivos en común.
                </span>
              </p>
            </div>

            <div className="flex flex-col md:flex-row justify-between gap-4 lg:items-center py-6 lg:py-12">
              <h3 className="text-xl lg:text-3xl font-medium font-clash">
                Compromiso
              </h3>
              <p className="text-base lg:text-lg  font-light lg:w-2/4">
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
        <div className="ml-auto lg:max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
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
            Fitness Centers · Indoor Cycling · Boutique Studio · Fitness Centers
            · Indoor Cycling ·{" "}
          </div>
        </Marquee>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-12 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-secondary bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0 before:bg-gradient-to-t before:from-secondary/30 before:to-secondary/100 before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 max-w-[1400px] mx-auto z-2 relative w-full">
          <div className="flex flex-col gap-14 items-start">
            <div className="flex gap-8 font-clash">
              <span className="text-mainGray text-lg hidden">(04)</span>
              <div className="flex flex-col gap-16 font-normal tracking-wide text-lg">
                Contacto
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
                    href="mailto:contacto@gewinnsolutions.com"
                    className="text-xl lg:text-3xl font-light tracking-wide"
                    target="_blank"
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
          <Contact />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default Nosotros;
