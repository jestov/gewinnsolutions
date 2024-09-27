"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import useTyped from "@/hooks/useTyped";
import ButtonWithArrow from "@/components/ButtonWithArrow";
import WhatsAppIcon from "@/components/icons/WhatsappIcon";
import VideoPlayer from "@/components/videoPlayer";
import BrandStrip from "@/components/BrandStrip";
import BrandStripClients from "@/components/BrandStripClients";
import ArrowIcon from "@/components/icons/ArrowIcon";
import Marquee from "react-fast-marquee";
import AddCartIcon from "@/components/icons/AddCartIcon";
import ChevronIcon from "@/components/icons/ChevronIcon";
import PlusIcon from "@/components/icons/PlusIcon";

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
    image: "/img/products/aeormic.jpg",
  },
  {
    id: 4,
    category: "Micrófonos",
    name: "Cyclemic for Studio Cycling Instructors",
    price: 3800,
    currency: "MXN",
    image: "/img/products/cyclemic.jpg",
  },
  {
    id: 5,
    category: "Bikes",
    name: "Stages SC1",
    price: 3800,
    currency: "MXN",
    image: "/img/products/bike.jpg",
  },
  {
    id: 6,
    category: "Micrófonos",
    name: "Fitness Audio  SM716 UHF",
    price: 3800,
    currency: "MXN",
    image: "/img/products/smf.jpg",
  },
  {
    id: 7,
    category: "Micrófonos",
    name: "Aeromic Fitness Headmic",
    price: 3800,
    currency: "MXN",
    image: "/img/products/aeormic.jpg",
  },
  {
    id: 8,
    category: "Micrófonos",
    name: "Cyclemic for Studio Cycling Instructors",
    price: 3800,
    currency: "MXN",
    image: "/img/products/cyclemic.jpg",
  },
  {
    id: 9,
    category: "Micrófonos",
    name: "Aeromic Fitness Headmic",
    price: 3800,
    currency: "MXN",
    image: "/img/products/aeormic.jpg",
  },
  // Agrega más productos según sea necesario
];

const cards = [
  {
    id: 1,
    number: "04",
    title: "Stages Indoor Bikes",
    image: "/img/cycling.jpg",
    description: "Descubre nuestras bicicletas indoor de alta calidad.",
    theme: "light", // Options: "light" or "dark"
  },
  {
    id: 2,
    number: "05",
    title: "Equipamiento de Gimnasios",
    image: "/img/equipamiento.jpg",
    description: "El mejor equipamiento para gimnasios de alto rendimiento.",
    theme: "dark",
  },
  {
    id: 3,
    number: "06",
    title: "Redes y seguridad",
    image: "/img/video.jpg",
    description: "Pisos de alta resistencia diseñados para gimnasios.",
    theme: "light",
  },
  // Add more cards
];

const servicesTabs = [
  {
    id: 1,
    title: "01 Audio",
    description:
      "Desarrollamos <strong>sistemas de sonido personalizados</strong>, con equipos especializados en fitness, contamos con la mayor experiencia en estudios boutique fitness. Nos involucramos en el <strong>tratamiento acústico</strong> desde el inicio del proyecto, para garantizar la mayor eficiencia sonora y con diseños personalizados para cada proyecto.",
    videoSrc: "/videos/1.mp4",
  },
  {
    id: 2,
    title: "02 Iluminación",
    description:
      "Creamos <strong>ambientes únicos</strong> con soluciones de iluminación personalizadas para mejorar la <strong>experiencia de entrenamiento</strong>.",
    videoSrc: "/videos/2.mp4",
  },
  {
    id: 3,
    title: "03 Diseño",
    description:
      "Diseñamos <strong>espacios que reflejan la identidad</strong> de cada proyecto, optimizando la <strong>funcionalidad</strong> y estética.",
    videoSrc: "/videos/1.mp4",
  },
  {
    id: 4,
    title: "04 Fitness Total",
    description:
      "Un <strong>servicio integral</strong> que incluye diseño, instalación, equipos y seguridad para crear un <strong>espacio fitness de primera clase</strong>.",
    videoSrc: "/videos/2.mp4",
  },
];

const Home: FC = () => {
  const [current, setCurrent] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [cardWidth, setCardWidth] = useState(0);
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
  const [activeCard, setActiveCard] = useState<number | null>(null);

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
    if (current < Math.max(products.length - 4, 0)) {
      setCurrent(current + 1);
    }
  };

  const prevSlide = () => {
    if (current > 0) {
      setCurrent(current - 1);
    }
  };

  const progressWidth =
    products.length > 3 ? (current / (products.length - 4)) * 100 : 0;

  const incrementQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: (prevQuantities[id] || 1) + 1,
    }));
  };

  const decrementQuantity = (id: number) => {
    setQuantities((prevQuantities) => ({
      ...prevQuantities,
      [id]: Math.max(1, (prevQuantities[id] || 1) - 1),
    }));
  };

  const [activeTab, setActiveTab] = useState(1);
  const typedText = useTyped(["Fitness Centers", "Gimnasios"], 50, 50, 1000);

  const toggleDescription = (id: number) => {
    setActiveCard(activeCard === id ? null : id);
  };

  return (
    <div className="relative">
      <div className="relative top-[5px] z-0">
        <main className="mx-[5px] sticky top-[5px] z-0 flex flex-col justify-center items-center min-h-[70vh] gap-32 md:gap-44 pb-12 md:pb-28 px-[20px] rounded-b-[64px] overflow-hidden bg-cover text-white before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary/60 before:to-secondary/5 before:z-20 z-4">
          <video
            autoPlay
            loop
            muted
            className="absolute z-10 w-auto min-h-[110vh] max-w-none"
          >
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative w-full max-w-[1600px] flex flex-col justify-center items-center text-center pt-[100px] smx-auto gap-8 lg:px-4 px-[10px] z-20">
            <div className="flex flex-col gap-10 max-w-6xl z-11 relative">
              <h1 className="text-2xl lg:text-6xl text-white font-clashdisplay font-light !leading-none">
                Construyendo
                <br />
                <span className="font-medium">{typedText}</span>
                <br />
                con maestría
              </h1>
            </div>
          </div>
        </main>
      </div>
      <div className="mx-auto w-32 h-32 rounded-full bg-white -mt-14 relative z-40 flex flex-col justify-center items-center gap-2">
        <ArrowIcon className="rotate-90 h-12 w-12" dark={true} />
        <span className="text-mainGray font-extralight tracking-wide text-xs">
          SCROLL
        </span>
      </div>
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
      <section className="p-[20px] bg-cover text-white z-20 h-[70vh] bg-white top-[74px]  sticky">
        <div className="flex justify-center rounded-[64px] relative overflow-hidden h-full">
          <VideoPlayer />
        </div>
      </section>

      <section className="mx-auto text-center w-3/4 bg-gray-50 z-20 relative rounded-t-[64px] border-t border-mainGray border-opacity-20">
        <div className=" w-full bg-[#f1f3f5] py-8 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain"></div>
          <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStrip gradientColor={true} />
        </div>{" "}
      </section>
      <section className="pt-24 bg-[#f1f3f5] relative z-30 text-center">
        <span className="text-mainGray text-xl relative font-light font-sans tracking-normal  mx-auto -bottom-[15px]">
          (02) Soluciones
        </span>
      </section>

      <section className="w-full bg-[#f1f3f5] relative z-20 py-12">
        <div className="mx-[20px] rounded-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center items-center min-h-[70vh]">
          <video
            key={activeTab} // Ensure video reloads when tab changes
            autoPlay
            loop
            muted
            className="absolute z-10 w-full object-cover min-h-[70vh] max-w-none"
          >
            <source
              src={servicesTabs[activeTab - 1].videoSrc}
              type="video/mp4"
            />
            Your browser does not support the video tag.
          </video>

          <div className="absolute w-7/12 bg-[#f1f3f5] pb-8 flex flex-col justify-center items-center gap-2 -top-[5px] z-40 rounded-b-[64px] h-[124px]">
            <div className="absolute top-[5px] -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract5.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[5px] -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-180"></div>

            <h3 className="text-2xl lg:text-4xl text-primary text-center font-clashdisplay font-extralight">
              Especialistas en{" "}
              <span className="font-medium">
                espacios fitness y<br /> experiencias de entrenamiento
              </span>
            </h3>
          </div>

          <div className="absolute w-7/12 flex flex-col justify-center items-center gap-4 bottom-0 z-40">
            <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute bottom-0 -right-[61px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-90"></div>

            {/* Tab Navigation */}
            <div className="w-full h-full grid grid-cols-4 rounded-t-[32px] border-t-4 border-l-4 border-r-4 border-[#f1f3f5] overflow-hidden">
              {servicesTabs.map((service) => (
                <button
                  key={service.id}
                  className={`px-4 py-9 h-[120px] border-r-4 border-[#f1f3f5] "> ${
                    activeTab === service.id
                      ? "bg-[#f1f3f5] text-primary text-xl lg:text-2xl font-clashdisplay font-medium"
                      : "bg-transparent text-white hover:bg-white hover:bg-opacity-15 last:border-none text-xl lg:text-2xl font-clashdisplay font-medium transition ease-in-out duration-500 relative first:before:absolute first:before:-bottom-[0px] first:before:-left-[0px] first:before:w-[32px] first:before:h-[32px] first:before:bg-[url('/img/substract5.svg')] first:before:bg-no-repeat first:before:bg-contain first:before:rotate-180 last:before:absolute last:before:bottom-0 last:before:-right-[0px] last:before:w-[32px] last:before:h-[32px] last:before:bg-[url('/img/substract4.svg')] last:before:bg-no-repeat last:before:bg-contain"
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
            <h2 className="font-medium text-3xl lg:text-5xl font-clashdisplay">
              {servicesTabs[activeTab - 1].title}
            </h2>
            <ButtonWithArrow href="/contacto">
              Contratar servicio
            </ButtonWithArrow>
          </div>
          <p
            className="text-primary lg:text-xl text-opacity-80"
            dangerouslySetInnerHTML={{
              __html: servicesTabs[activeTab - 1].description,
            }}
          ></p>
        </div>
      </section>
      <hr className="h-px bg-gray-200 border-0 relative w-full z-20" />
      <section className="py-32 bg-white relative z-20">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div className="flex gap-8 justify-between">
              <h3 className="text-2xl lg:text-4xl text-left text-primary font-clashdisplay font-extralight w-full">
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
            <div className="grid grid-cols-3 gap-[40px]">
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
                    onClick={() => toggleDescription(card.id)}
                  >
                    <PlusIcon
                      dark={card.theme === "light"}
                      className="h-8 w-8 relative -right-[2px]"
                    />
                  </div>

                  {activeCard === card.id && (
                    <div className="z-20 relative mt-4 p-4 bg-opacity-80 bg-primary text-white  rounded-2xl">
                      <p>{card.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white z-20 w-full sticky top-[60px]">
        <div className="grid grid-cols-2 bg-primary rounded-[64px] overflow-hidden min-h-[75vh] mx-auto max-w-[1300px]">
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
      <section className="ml-auto max-w-[1350px] py-8 bg-primary rounded-tl-[64px] relative z-30">
        <div className="w-full bg-primary flex flex-col justify-center items-center gap-8 bottom-0 z-40 rounded-t-[64px]">
          <div className="absolute -top-[61px] right-0 w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <div className="absolute bottom-0 -left-[61px] w-[61px] h-[61px] bg-[url('/img/substract3.svg')] bg-no-repeat bg-contain rotate-90"></div>
          <BrandStripClients />
        </div>
      </section>
      <section className="bg-primary z-30 relative">
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
                  width: `${(products.length * 100) / 4}%`, // Ajusta el ancho del contenedor
                }}
              >
                {products.map((product) => (
                  <div
                    key={product.id}
                    className="w-1/3 bg-white flex flex-col justify-between py-2.5 px-3"
                  >
                    <Image
                      src={product.image}
                      alt={product.name}
                      className="w-full object-cover max-h-[500px] my-auto"
                      width={700}
                      height={700}
                      quality={100}
                    />
                    <div className="p-1.5 flex justify-between items-end gap-4">
                      <div>
                        <div className="text-lg text-mainGray font-light">
                          {product.category}
                        </div>
                        <div className="text-xl font-medium font-clashdisplay !leading-none">
                          {product.name}
                        </div>
                        <div className="text-lg font-clashdisplay">
                          ${product.price}{" "}
                          <span className="text-base">{product.currency}</span>
                        </div>
                      </div>
                      <div className="flex items-center mt-4 border-2 border-black overflow-hidden min-w-[140px] max-w-[150px]">
                        <button
                          className="w-10 h-10 flex items-center justify-center !text-4xl font-clash text-mainGray"
                          onClick={() => decrementQuantity(product.id)}
                        >
                          -
                        </button>
                        <span className="w-10 h-10 flex items-center justify-center font-clash font-medium text-primary">
                          {String(quantities[product.id] || 1).padStart(2, "0")}
                        </span>
                        <button
                          className="w-10 h-10 flex items-center justify-center !text-3xl font-clash text-mainGray"
                          onClick={() => incrementQuantity(product.id)}
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
                <div className="text-white font-clash">
                  {String(current + 1).padStart(2, "0")}
                </div>
                <div className="relative w-[200px] h-[1px] bg-mainGray bg-opacity-40">
                  <div
                    className="absolute -top-[1px] left-0 h-[3.5px]  bg-white transition duration-300"
                    style={{ width: `${progressWidth}%` }}
                  ></div>
                </div>
                <div className="text-white font-clash">
                  {String(products.length).padStart(2, "0")}
                </div>
                <button
                  onClick={prevSlide}
                  className={`focus:outline-none transform  ${
                    current === 0 ? "opacity-30 cursor-not-allowed" : ""
                  }`}
                  disabled={current === 0}
                >
                  <ChevronIcon className="h-7 text-white" />
                </button>
                <button
                  onClick={nextSlide}
                  className={`focus:outline-none rotate-180 ${
                    current === products.length - 3
                      ? "opacity-30 cursor-not-allowed"
                      : ""
                  }`}
                  disabled={current === products.length - 3}
                >
                  <ChevronIcon className="h-7 text-white" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-gradient-to-b from-primary to-secondary py-24 -mt-20 relative z-30">
        <Marquee speed={40}>
          <div className="font-clashdisplay font-medium text-5xl text-mainGray text-opacity-20 whitespace-nowrap">
            Boutique Studio · Fitness Centers · Indoor Cycling · Boutique Studio
            · Fitness Centers · Indoor Cycling · Boutique Studio · Fitness
            Centers · Indoor Cycling ·{" "}
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
                    Fitness Center?
                  </span>
                </h1>
                <div className="flex flex-col gap-3">
                  <span className="text-mainGray text-base">
                    ¿Necesitas ayuda personalizada?
                  </span>
                  <Link
                    href="mailto:contacto@gewinnsolutions.co"
                    className="text-xl lg:text-3xl font-light tracking-wide"
                  >
                    contacto@gewinnsolutions.com
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
