"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Footer from "@/components/Footer";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import BrandStripClients from "@/components/BrandStripClients";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Marquee from "react-fast-marquee";
import ContactLight from "@/components/ContactLight";
import FacebookIcon from "@/components/icons/FacebookIcon";
import InstagramIcon from "@/components/icons/InstagramIcon";

const Contacto: FC = () => {
  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-24 lg:pt-40">
        <div className="px-4 lg:px-44 flex flex-col gap-6 lg:gap-12">
          <div className="flex gap-4 lg:gap-8 text-primary items-center lg:-ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Contacto</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            ¿Estás listo para impulsar tu
            <br /> <span className="font-medium">Fitness Center?</span>
          </h3>
        </div>
      </main>

      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 pb-12 lg:gap-32 lg:pt-16 lg:pb-28 px-[30px]  lg:px-[120px] bg-white bg-no-repeat bg-center bg-cover relative text-primary z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-48 max-w-[1300px] mx-auto z-2 relative w-full">
          <ContactLight />
          <div className="flex flex-col gap-14 ">
            <div className="flex gap-8 font-clash">
              <div className="flex flex-col gap-8 lg:gap-16 font-normal tracking-wide text-lg">
                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">
                    ¿Necesitas ayuda personalizada?
                  </span>
                  <Link
                    href="mailto:contacto@gewinnsolutions.com"
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

      <section className="bg-white z-30 relative">
        <div className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
          <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
            <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
            <BrandStripClients />
          </div>
        </div>
      </section>

      <section className="bg-gradient-to-b from-primary to-secondary py-24 relative z-30">
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

export default Contacto;
