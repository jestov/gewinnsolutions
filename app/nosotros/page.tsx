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

const Nosotros: FC = () => {
  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 h-[91vh] bg-white top-[74px]">
        <div className="flex justify-center rounded-[64px] relative overflow-hidden h-full">
          <VideoPlayer />
        </div>
      </main>

      <section className="mx-auto text-center w-3/4 bg-white z-20 relative rounded-t-[64px] border-t border-mainGray border-opacity-20">
        <div className=" w-full bg-white py-8 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStrip />
        </div>{" "}
      </section>
      <section className="py-24 bg-white relative z-30">mhmm</section>
      <section className="pt-12 bg-white relative z-30 text-center">
        <span className="text-mainGray text-xl relative font-light font-sans tracking-normal  mx-auto -bottom-[15px]">
          (02) Soluciones
        </span>
      </section>

      <section className="bg-white px-[20px] w-full z-20 -mt-16  rounded-t-3xl z-4 relative">
        <div className=" max-w-[1100px] mx-auto flex flex-col items-start gap-8 pt-12 pb-6 md:pt-32 md:pb-24 min-h-[60vh]">
          <h2 className="text-5xl font-clash font-light !leading-snug tracking-tight">
            <span className="text-mainGray text-xl relative font-light font-sans -top-0.5 tracking-normal">
              (01) Nosotros
            </span>{" "}
            <span className="font-medium">Nuestra misión</span> es diseñar y
            construir{" "}
            <span className="font-medium">
              espacios de fitness que cumplan con los más altos estándares de
              funcionalidad y estética
            </span>{" "}
            y además que inspiren a las personas a alcanzar sus objetivos de
            salud y bienestar
          </h2>
          <ButtonWithArrow href="/nosotros">
            Conoce nuestra historia
          </ButtonWithArrow>
        </div>
      </section>

      <section className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStripClients />
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-secondary py-24 -mt-20 relative z-30">
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
