"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useTyped from "@/hooks/useTyped"; // Asegúrate de que la ruta es correcta
import ButtonWithArrow from "@/components/ButtonWithArrow";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import VideoPlayer from "@/components/videoPlayer";
import BrandStrip from "@/components/BrandStrip";
import BrandStripClients from "@/components/BrandStripClients";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Marquee from "react-fast-marquee";
import AddCartIcon from "@/components/icons/AddCartIcon";

const products = [
  {
    id: 1,
    category: "Bikes",
    name: "Stages SC1",
    price: 3800,
    currency: "MXN",
    image: "/img/products/bike.jpg",
  },
  {
    id: 2,
    category: "Micrófonos",
    name: "Fitness Audio  SM716 UHF",
    price: 3800,
    currency: "MXN",
    image: "/img/products/smf.jpg",
  },
  {
    id: 3,
    category: "Micrófonos",
    name: "Aeromic Fitness Headmic",
    price: 3800,
    currency: "MXN",
    image: "/img/products/aeromic.jpg",
  },
  {
    id: 4,
    category: "Micrófonos",
    name: "Cyclemic for Studio Cycling Instructors",
    price: 3800,
    currency: "MXN",
    image: "/img/products/cyclemic.jpg",
  },
  // Agrega más productos según sea necesario
];

const cards = [
  {
    id: 1,
    number: "04",
    title: "Stages Indoor Bikes",
    image: "/img/cycling.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 64 64"
        fill="none"
      >
        <path
          d="M37.3333 18.6667C40.2789 18.6667 42.6667 16.2789 42.6667 13.3333C42.6667 10.3878 40.2789 8 37.3333 8C34.3878 8 32 10.3878 32 13.3333C32 16.2789 34.3878 18.6667 37.3333 18.6667Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M48 56C52.4183 56 56 52.4183 56 48C56 43.5817 52.4183 40 48 40C43.5817 40 40 43.5817 40 48C40 52.4183 43.5817 56 48 56Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M16 56C20.4183 56 24 52.4183 24 48C24 43.5817 20.4183 40 16 40C11.5817 40 8 43.5817 8 48C8 52.4183 11.5817 56 16 56Z"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M30.6667 47.9998L34.6667 37.3332L21.6472 31.9998L29.6479 22.6667L37.6479 29.3333L46.9812 29.3333"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    ),
    theme: "light", // Options: "light" or "dark"
  },
  {
    id: 2,
    number: "05",
    title: "Equipamiento de Gimnasios",
    image: "/img/equipamiento.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M21.0499 18.6667H12.2833C11.7586 18.6667 11.3333 19.092 11.3333 19.6167V44.3834C11.3333 44.908 11.7586 45.3334 12.2833 45.3334H21.0499C21.5746 45.3334 21.9999 44.908 21.9999 44.3834V19.6167C21.9999 19.092 21.5746 18.6667 21.0499 18.6667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M53.0499 18.6667H44.2833C43.7586 18.6667 43.3333 19.092 43.3333 19.6167V44.3834C43.3333 44.908 43.7586 45.3334 44.2833 45.3334H53.0499C53.5746 45.3334 53.9999 44.908 53.9999 44.3834V19.6167C53.9999 19.092 53.5746 18.6667 53.0499 18.6667Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M3.3335 39.05V24.95C3.3335 24.4253 3.75883 24 4.2835 24H10.3835C10.9082 24 11.3335 24.4253 11.3335 24.95V39.05C11.3335 39.5747 10.9082 40 10.3835 40H4.2835C3.75883 40 3.3335 39.5747 3.3335 39.05Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M62 39.05V24.95C62 24.4253 61.5747 24 61.05 24H54.95C54.4253 24 54 24.4253 54 24.95V39.05C54 39.5747 54.4253 40 54.95 40H61.05C61.5747 40 62 39.5747 62 39.05Z"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M22 32H43.3333"
          stroke="white"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    theme: "dark",
  },
  {
    id: 3,
    number: "06",
    title: "Pisos para Gimnasios",
    image: "/img/pisos.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="56"
        height="55"
        viewBox="0 0 56 55"
        fill="none"
      >
        <path
          d="M2.625 48.125L9.82738 6.875H45.8393L53.0417 48.125H2.625Z"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M4.91675 37.8125H50.7501"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M7.20837 27.5H48.4584"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M9.5 17.1875H46.1667"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M27.8334 6.875V48.125"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M18.6667 8.02081L15.2292 46.9791"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M37 8.02081L40.4375 46.9791"
          stroke="white"
          stroke-width="1.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    theme: "light",
  },
  {
    id: 4,
    number: "08",
    title: "Videovigilancia",
    image: "/img/video.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="80"
        height="80"
        viewBox="0 0 80 80"
        fill="none"
      >
        <path
          d="M50 40V50.6667C50 53.9804 47.3137 56.6667 44 56.6667H23C15.8203 56.6667 10 50.8464 10 43.6667V36.3333C10 29.1536 15.8203 23.3333 23 23.3333H43C46.866 23.3333 50 26.4673 50 30.3333V40ZM50 40L65.0795 27.4338C67.0334 25.8055 70 27.1949 70 29.7385V50.2615C70 52.8051 67.0334 54.1945 65.0794 52.5662L50 40Z"
          stroke="white"
          stroke-width="2.5"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    theme: "dark",
  },
  {
    id: 5,
    number: "09",
    title: "Infraestructura de Red",
    image: "/img/wifi.jpg",
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="65"
        height="64"
        viewBox="0 0 65 64"
        fill="none"
      >
        <path
          d="M32.6667 52.0267L32.6934 51.997"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M6.00012 21.3333C22.0001 9.33333 43.3335 9.33334 59.3335 21.3333"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M14.0001 32C24.6668 24 40.6668 24 51.3335 32"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M23.3334 41.3333C29.3346 37.6 35.9996 37.599 42.0003 41.3333"
          stroke="white"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    ),
    theme: "light",
  },
  // Add more cards
];

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

const Home: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 1024);
      if (carouselRef.current) {
        const card =
          carouselRef.current.querySelector<HTMLDivElement>(".carousel-item");
        if (card) {
          setCardWidth(card.offsetWidth);
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const nextSlide = () => {
    if (current < Math.max(products.length - 3, 0)) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const progressWidth =
    products.length > 3 ? (current / (products.length - 3)) * 100 : 0;

  const incrementQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrementQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const [activeTab, setActiveTab] = useState(1);
  const typedText = useTyped(["Fitness Centers", "Gimnasios"], 50, 50, 1000);

  return (
    <div className="relative">
      <main className="m-[5px] flex flex-col justify-center items-center min-h-[98.95vh] gap-32 md:gap-44 pb-12 md:pb-28 px-[20px] rounded-b-[64px] overflow-hidden relative bg-cover text-white before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary/60 before:to-secondary/5 before:z-20 z-4">
        <video
          autoPlay
          loop
          muted
          className="absolute z-10 w-auto min-h-[110vh] max-w-none"
        >
          <source src="/videos/1.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="relative w-full max-w-[1600px] flex flex-col justify-center items-center text-center mt-auto mx-auto gap-8 lg:px-4 px-[10px] z-20">
          <div className="flex flex-col gap-10 max-w-6xl z-11 relative">
            <h1 className="text-2xl lg:text-8xl text-white font-clashdisplay font-light !leading-none">
              Construyendo
              <br />
              <span className="font-medium">{typedText}</span>
              <br />
              con maestría
            </h1>
          </div>
        </div>
      </main>
      <div className="mx-auto w-32 h-32 rounded-full bg-white -mt-16 relative z-40 flex flex-col justify-center items-center gap-2">
        <ArrowIcon className="rotate-90 h-12 w-12" dark={true} />
        <span className="text-mainGray font-extralight tracking-wide text-xs">
          SCROLL
        </span>
      </div>
      <section className="bg-white px-[20px] pt-6 pb-12 md:pt-24 md:pb-32 min-h-[60vh] rounded-t-3xl z-4 sticky -top-[150vh] max-w-[1100px] mx-auto flex flex-col items-start gap-8">
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
          y además que inspiren a las personas a alcanzar sus objetivos de salud
          y bienestar
        </h2>
        <ButtonWithArrow href="/nosotros">
          Conoce nuestra historia
        </ButtonWithArrow>
      </section>
      <section className="m-[5px] rounded-t-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center">
        <VideoPlayer />
        <div className="absolute w-3/4 bg-white py-8 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStrip />
        </div>
      </section>
      <section className="py-24">
        <Image src="/img/animated1.svg" width={800} height={800} alt="" />
      </section>
      <section>
        <div className="m-[5px] rounded-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center items-center min-h-[98vh]">
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

          <div className="absolute w-4/6 bg-white pb-8 flex justify-center gap-12 -top-[5px] z-40 rounded-b-[64px] h-[120px]">
            <div className="absolute top-[5px] -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract2.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[5px] -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-180"></div>
            <span className="text-mainGray text-xl relative font-light font-sans -top-0.5 tracking-normal">
              (02) Soluciones
            </span>
            <h3 className="text-2xl lg:text-4xl text-left text-primary font-clashdisplay font-extralight">
              Especialistas en{" "}
              <span className="font-medium">
                espacios fitness y<br /> experiencias de entrenamiento
              </span>
            </h3>
          </div>

          <div className="absolute w-4/6 flex flex-col justify-center items-center gap-4 bottom-0 z-40">
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract.svg')] bg-no-repeat bg-contain rotate-90"></div>

            {/* Tab Navigation */}
            <div className="w-full h-full grid grid-cols-4 rounded-t-[32px] border-t-4 border-l-4 border-r-4 border-white overflow-hidden">
              {servicesTabs.map((service) => (
                <button
                  key={service.id}
                  className={`px-4 py-9 h-[120px] border-r-4 border-white "> ${
                    activeTab === service.id
                      ? "bg-white text-primary text-2xl font-clashdisplay font-medium"
                      : "bg-transparent text-white hover:bg-white hover:bg-opacity-15 last:border-none text-2xl font-clashdisplay font-medium transition ease-in-out duration-500 relative first:before:absolute first:before:-bottom-[0px] first:before:-left-[0px] first:before:w-[32px] first:before:h-[32px] first:before:bg-[url('/img/substract2.svg')] first:before:bg-no-repeat first:before:bg-contain first:before:rotate-180 last:before:absolute last:before:bottom-0 last:before:-right-[0px] last:before:w-[32px] last:before:h-[32px] last:before:bg-[url('/img/substract.svg')] last:before:bg-no-repeat last:before:bg-contain"
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
        <div className="text-primary z-20 w-4/6 mx-auto py-20 text-xl flex font-extralight flex-col gap-8">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-4xl font-clashdisplay">
              {servicesTabs[activeTab - 1].title}
            </h2>
            <ButtonWithArrow href="/services">Conocer más</ButtonWithArrow>
          </div>
          <p className="text-primary text-opacity-80">
            {servicesTabs[activeTab - 1].description}
          </p>
        </div>
      </section>
      <hr />
      <section className="py-32 mx-auto max-w-[1200px] flex flex-col gap-24">
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
          <div className="grid grid-cols-3 gap-[30px]">
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
                  className={`absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-70 top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-xl`}
                ></div>

                <div className="z-20 relative flex flex-col gap-1 font-clashdisplay">
                  <span className="font-extralight text-2xl">
                    {card.number}
                  </span>
                  <br />
                  <h3 className="text-4xl font-medium">{card.title}</h3>
                </div>

                <div className="absolute bottom-6 left-6">{card.icon}</div>

                <div
                  className={`absolute bottom-0 right-0 ${
                    card.theme === "dark"
                      ? "bg-primary before:bg-[url('/img/substract3.svg')] after:bg-[url('/img/substract3.svg')]"
                      : "bg-white before:bg-[url('/img/substract2.svg')] after:bg-[url('/img/substract2.svg')]"
                  } p-8 rounded-tl-[32px] cursor-pointer before:absolute before:bottom-1.5 before:-left-[32px] before:w-[32px] before:h-[32px]  before:bg-no-repeat before:bg-contain before:rotate-90
                         after:absolute after:-top-[32px] after:right-1.5 after:w-[32px] after:h-[32px]  after:bg-no-repeat after:bg-contain after:rotate-90`}
                >
                  <ArrowIcon
                    dark={card.theme === "light"}
                    className="h-8 w-8 relative -right-[4px]"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="grid grid-cols-3 gap-[30px]">
          <div className="flex flex-col gap-8">
            <h3 className="text-2xl lg:text-3xl text-left text-primary font-clashdisplay font-extralight w-full">
              Soluciones{" "}
              <span className="font-medium">
                <br />
                complementarias
              </span>
            </h3>
            <p className="font-extralight text-lg">
              Nuestras soluciones independientes están diseñadas para ofrecer{" "}
              <span className="font-semibold">seguridad y conectividad</span>{" "}
              sin igual, garantizando que{" "}
              <span className="font-semibold">
                tu <i>fitness center </i> opere de manera óptima y segura.
              </span>
            </p>
          </div>
          {cards.slice(3, 5).map((card) => (
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
                className={`absolute inset-0 bg-gradient-to-b  from-black to-transparent opacity-70 top-1.5 left-1.5 right-1.5 bottom-1.5 rounded-xl`}
              ></div>

              <div className="z-20 relative flex flex-col gap-1 font-clashdisplay">
                <span className="font-extralight text-2xl">{card.number}</span>
                <br />
                <h3 className="text-4xl font-medium">{card.title}</h3>
              </div>

              <div className="absolute bottom-6 left-6">{card.icon}</div>

              <div
                className={`absolute bottom-0 right-0 ${
                  card.theme === "dark"
                    ? "bg-primary before:bg-[url('/img/substract3.svg')] after:bg-[url('/img/substract3.svg')]"
                    : "bg-white before:bg-[url('/img/substract2.svg')] after:bg-[url('/img/substract2.svg')]"
                } p-8 rounded-tl-[32px] cursor-pointer before:absolute before:bottom-1.5 before:-left-[32px] before:w-[32px] before:h-[32px]  before:bg-no-repeat before:bg-contain before:rotate-90
                         after:absolute after:-top-[32px] after:right-1.5 after:w-[32px] after:h-[32px]  after:bg-no-repeat after:bg-contain after:rotate-90`}
              >
                <ArrowIcon
                  dark={card.theme === "light"}
                  className="h-8 w-8 relative -right-[4px]"
                />
              </div>
            </div>
          ))}
        </div>
      </section>
      <section className="py-24 mx-auto max-w-[1300px]">
        <div className="grid grid-cols-2 bg-primary rounded-[64px] overflow-hidden min-h-[75vh]">
          <div className="w-full h-full relative">
            <Image
              src="/img/ft_bg.jpg"
              className="object-cover"
              layout="fill"
              alt="Fitness Total"
            />
          </div>
          <div className="w-full h-full bg-primary flex flex-col p-20 justify-center items-start gap-10">
            <Image
              src="/img/ft.svg"
              width={200}
              height={50}
              alt="Fitness Total"
            />
            <h3 className="text-white text-3xl lg:text-5xl font-clashdisplay font-medium">
              Llevamos tu
              <br />
              idea de 0 <ArrowIcon className="inline" /> 100
            </h3>
            <p className="font-extralight text-lg text-white">
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
      <section className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative">
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStripClients />
        </div>
      </section>

      <section>
        <div className="flex w-full bg-primary py-24">
          <div className="w-2/12 flex flex-col justify-center items-center text-white py-10 px-4">
            <div className="font-light text-mainGray text-lg">
              (03) Productos
            </div>
            <div className="flex-1 flex items-center justify-center">
              <h3 className="text-5xl font-clashdisplay leading-none transform -rotate-90 font-medium tracking-tight">
                <span className="font-extralight">Nuestros</span> Top Picks
              </h3>
            </div>
          </div>

          <div className="w-10/12 bg-primary">
            <div className="overflow-hidden" ref={carouselRef}>
              <div
                className="flex transition-transform duration-500 ease-in-out gap-1 w-full"
                style={{
                  transform: `translateX(-${current * (100 / products.length)}%)`, // Mueve exactamente un tercio del contenedor
                  width: `${(products.length * 100) / 3}%`, // Ajusta el ancho del contenedor
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-1/3 bg-white flex flex-col justify-between p-4"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full object-cover"
                      width={700}
                      height={700}
                      quality={100}
                    />
                    <div className="p-4 flex justify-between items-end gap-4">
                      <div>
                        <div className="text-lg text-mainGray font-light">
                          {product.category}
                        </div>
                        <div className="text-2xl font-medium font-clashdisplay !leading-none">
                          {product.name}
                        </div>
                        <div className="text-lg font-clashdisplay">
                          ${product.price}{" "}
                          <span className="text-base">{product.currency}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 border-2 border-black overflow-hidden">
                        <button
                          className="w-10 h-10 flex items-center justify-center !text-4xl font-clash text-mainGray"
                          onClick={() => setQuantity((q) => Math.max(1, q - 1))}
                        >
                          -
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center font-clash font-medium text-primary">
                          {quantity.toString().padStart(2, "0")}
                        </span>
                        <button
                          className="w-10 h-10 flex items-center justify-center !text-3xl font-clash text-mainGray"
                          onClick={() => setQuantity((q) => q + 1)}
                        >
                          +
                        </button>
                        <button className="w-10 h-10 bg-black flex items-center justify-center aspect-square">
                          <AddCartIcon />
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="flex justify-between items-center py-10">
              <ButtonWithArrow href="/productos" dark={true}>
                Ver todos los productos
              </ButtonWithArrow>
              <div className="flex items-center space-x-4 px-12">
                <button
                  onClick={prevSlide}
                  className={`focus:outline-none transform rotate-180 ${
                    current === 0 ? "opacity-50 cursor-not-allowed" : ""
                  }`}
                  disabled={current === 0}
                >
                  <ArrowIcon className="h-6 lg:h-8 text-white" />
                </button>
                <div className="text-white font-clash">
                  {String(current + 1).padStart(2, "0")}
                </div>
                <div className="relative w-[200px] h-1 bg-secondaryGray">
                  <div
                    className="absolute top-0 left-0 h-full bg-white transition duration-300"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <div className="text-white font-clash">
                  {String(products.length).padStart(2, "0")}
                </div>
                <button
                  onClick={nextSlide}
                  className={`focus:outline-none ${
                    current === products.length - 3
                      ? "opacity-50 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={current === products.length - 3}
                >
                  <ArrowIcon className="h-6 lg:h-8 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-primary to-secondary py-24 -mt-20">
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

export default Home;
