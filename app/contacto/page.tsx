"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import VideoPlayer from "@/components/videoPlayer";
import BrandStrip from "@/components/BrandStrip";
import BrandStripClients from "@/components/BrandStripClients";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Marquee from "react-fast-marquee";
import ContactLight from "@/components/ContactLight";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const Nosotros: FC = () => {
  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Contacto</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            ¿Estás listo para impulsar tu
            <br /> <span className="font-medium">fitness center?</span>
          </h3>
        </div>
      </main>

      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 lg:gap-32 lg:pt-16 pb-1 lg:pb-28 px-[30px]  lg:px-[120px] bg-white bg-no-repeat bg-center bg-cover relative text-primary  z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-48 max-w-[1300px] mx-auto z-2 relative w-full">
          <ContactLight />
          <div className="flex flex-col gap-14 items-center md:items-start">
            <div className="flex gap-8 font-clash">
              <div className="flex flex-col gap-16 font-normal tracking-wide text-lg">
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

                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">Social</span>
                  <Link
                    href="https://www.facebook.com/GewinnSolutions/"
                    className="text-xl lg:text-3xl font-light tracking-wide flex gap-3"
                  >
                    <FacebookIcon className="w-8" color="#111" /> Facebook
                  </Link>
                  <Link
                    href="https://www.instagram.com/gewinn_solutions/"
                    className="text-xl lg:text-3xl font-light tracking-wide flex gap-3"
                  >
                    <InstagramIcon className="w-8" color="#111" /> Instagram
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary p-[10px] z-20 w-full rounded-t-[64px] overflow-hidden">
        <div className="flex flex-col items-center h-full w-full bg-primary  min-h-[95vh] relative">
          <Image
            src="/img/ft_bg.jpg"
            className="object-cover z-20 rounded-t-[60px] "
            layout="fill"
            alt="Fitness Total"
          />
          <div className="w-full h-full z-30 absolute bg-primary bg-opacity-40 flex flex-col p-20 justify-center items-center gap-10 text-center ">
            <Image
              src="/img/ft.svg"
              width={200}
              height={50}
              alt="Fitness Total"
            />
            <h3 className="text-white text-3xl lg:text-8xl font-clashdisplay font-medium">
              Llevamos tu
              <br />
              idea de 0 <ArrowIcon className="inline h-8 w-10" /> 100
            </h3>
            <p className="font-extralight text-lg text-white lg:max-w-2xl">
              Transforma tu visión en realidad con nuestro servicio{" "}
              <span className="font-semibold">
                <i>Fitness Total.</i>
              </span>{" "}
              Este <span className="font-semibold">paquete completo</span>{" "}
              incluye todo lo necesario para crear un{" "}
              <span className="font-semibold">
                espacio de fitness de primera clase,
              </span>{" "}
              desde el diseño y la instalación hasta el equipamiento y la
              seguridad.
            </p>
            <ButtonWithArrow href="/services" dark={true}>
              Contratar Fitness Total
            </ButtonWithArrow>
          </div>
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

export default Nosotros;
