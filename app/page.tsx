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
import PlusIcon from "@/components/icons/PlusIcon";
import StagesDark from "@/components/icons/StagesDark";
import WifiDark from "@/components/icons/WifiDark";
import GymDark from "@/components/icons/GymDark";
import Light from "@/components/icons/Light";
import Grid from "@/components/icons/Grid";
import Speaker from "@/components/icons/Speaker";
import Stages from "@/components/icons/Stages";
import Gym from "@/components/icons/Gym";
import Wifi from "@/components/icons/Wifi";
import

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
    icon: <Stages />,
  },
  {
    id: 2,
    number: "05",
    title: "Equipamiento de Gimnasios",
    image: "/img/equipamiento.jpg",
    description: "El mejor equipamiento para gimnasios de alto rendimiento.",
    theme: "dark",
    icon: <Gym />,
  },
  {
    id: 3,
    number: "06",
    title: "Redes y Seguridad",
    image: "/img/video.jpg",
    description: "Pisos de alta resistencia diseñados para gimnasios.",
    theme: "light",
    icon: <Wifi />,
  },
  // Add more cards
];

const servicesTabs = [
  {
    id: 1,
    title: "01 Audio",
    description:
      "Instalamos sistemas de <span class='font-medium'>sonido personalizados,</span> con equipos y <span class='font-medium'>tratamiento acústico especializado</span> para garantizar un sonido extraordinario, <span class='font-medium'>adaptado a las exigencias de cada espacio,</span> creando <span class='font-medium'>experiencias envolventes y energizantes</span> que potencian el rendimiento en cada sesión.",
    videoSrc: "/videos/audio.mp4",
  },
  {
    id: 2,
    title: "02 Iluminación",
    description:
      "Planificamos y ejecutamos <span class='font-medium'>diseños de iluminación adaptados a cualquier entorno,</span> con especialidad en LED pixel. <span class='font-medium'>Creamos efectos visuales dinámicos y personalizados</span> que no solo realzan la estética, sino que <span class='font-medium'>optimizan la funcionalidad de cada espacio.</span>",
    videoSrc: "/videos/iluminacion.mp4",
  },
  {
    id: 3,
    title: "03 Diseño",
    description:
      "Nuestro equipo de arquitectos crea <span class='font-medium'>espacios que equilibran funcionalidad y estética,</span> cuidando cada detalle desde la distribución hasta la <span class='font-medium'>identidad única de cada proyecto.</span> Transformamos tus <span class='font-medium'>ideas en espacios que inspiran y motivan</span> la experiencia del usuario.",
    videoSrc: "/videos/diseno.mp4",
  },
  {
    id: 4,
    title: "04 Fitness Total",
    description:
      "<span class='font-medium'>Convierte tu visión en realidad con Fitness Total.</span> Nuestro paquete integral abarca <span class='font-medium'>diseño, instalación y equipamiento para un espacio fitness de primera clase,</span> asegurando un entorno funcional y excepcional que <span class='font-medium'>eleva la experiencia de tus usuarios.</span>",
    videoSrc: "/videos/main.mp4",
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
    <>
      <div className="relative top-[5px] z-0 overflow-hidden lg:overflow-visible">
        <main className="mx-[5px] sticky top-[5px] z-0 flex flex-col justify-center items-center min-h-[70vh] gap-32 md:gap-44 pb-12 md:pb-28 px-[20px] rounded-b-[64px] overflow-hidden bg-cover text-white before:absolute before:inset-0 before:bg-gradient-to-t before:from-secondary/60 before:to-secondary/5 before:z-20 z-4">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute z-10 w-auto min-h-[110vh] max-w-none"
          >
            <source src="/videos/1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>

          <div className="relative w-full max-w-[1600px] flex flex-col justify-center items-center text-center pt-[100px] smx-auto gap-8 lg:px-4 px-[10px] z-20">
            <div className="flex flex-col gap-10 max-w-6xl z-11 relative">
              <h1 className="text-3xl lg:text-7xl text-white font-clashdisplay font-light !leading-none">
                Diseñamos{" "}
                <span className="font-medium">Experiencias Fitness</span>
                <br />
                para <span className="font-medium">desafiar tus límites.</span>
              </h1>
            </div>
          </div>
        </main>
      </div>
      <div className="mx-auto w-24 h-24 md:w-32 md:h-32 rounded-full bg-white -mt-10 md:-mt-14 relative z-40 flex flex-col justify-center items-center gap-2">
        <ArrowIcon className="rotate-90 h-8 w-8 md:h-12 md:w-12" dark={true} />
        <span className="text-mainGray font-extralight tracking-wide text-xs">
          SCROLL
        </span>
      </div>
      <section className="bg-white px-[20px] w-full z-20 pt-8 md:pt-4 -mt-12 md:-mt-16  rounded-t-3xl z-4 relative">
        <div className=" max-w-[1100px] mx-auto flex flex-col items-center lg:items-start gap-8 pt-12 pb-14 md:pt-32 md:pb-24 lg:min-h-[60vh]">
          <h2 className="text-2xl lg:text-5xl font-clash font-light !leading-snug tracking-tight text-center md:text-left">
            <span className="text-mainGray text-base lg:text-xl relative font-light font-sans -top-0.5 tracking-normal">
              (01) Nosotros
            </span>{" "}
            Nuestra misión es{" "}
            <span className="font-medium">
              diseñar y construir espacios{" "}
              <span className="italic">fitness</span>
            </span>{" "}
            que cumplan con los{" "}
            <span className="font-medium">más altos estándares</span> de{" "}
            <span className="font-medium">funcionalidad y estética</span> y
            además que inspiren a las personas a alcanzar sus objetivos{" "}
            <span className="font-medium">de salud y bienestar</span>
          </h2>
          <ButtonWithArrow href="/nosotros">
            Conoce nuestra historia
          </ButtonWithArrow>
        </div>
      </section>
      <section className="mb-12 lg:mb-24 px-[20px] bg-cover text-white z-20 lg:h-[70vh] bg-white top-[74px]  sticky lg:max-w-3/4 lg:w-3/4 mx-auto">
        <div className="flex justify-center rounded-[32px] lg:rounded-[64px] relative overflow-hidden h-full">
          <VideoPlayer />
        </div>
      </section>

      <section className="ml-auto text-center w-full lg:w-3/4 bg-gray-50 z-20 relative rounded-tl-[64px] border-t border-mainGray border-opacity-20">
        <div className=" w-full bg-[#f1f3f5] py-6 flex flex-col justify-center items-center gap-12 bottom-0 z-40 rounded-tl-[64px]">
          <div className="absolute bottom-0 lg:-left-[61px] lg:w-[61px] lg:h-[61px] lg:bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain"></div>
          <BrandStrip gradientColor={true} />
        </div>{" "}
      </section>
      <section className="pt-14 lg:pt-40 pb-10 lg:pb-28 bg-[#f1f3f5] w-full relative z-20 px-[20px] lg:px-64">
        <p className=" max-w-[1200px] mx-auto text-center container font-light text-xl lg:text-5xl font-clash !leading-snug tracking-tight">
          <span className="font-medium">
            &quot;Con pasión por la excelencia, hemos dejado una huella
            significativa
          </span>{" "}
          en la industria del fitness,{" "}
          <span className="font-medium">
            creando ambientes que inspiran bienestar.&quot;
          </span>
        </p>

        <div className="flex mx-auto justify-between px-[20px] py-8 lg:py-12 items-center gap-4 w-full lg:w-2/3 animate-pulse">
          <Speaker />
          <Light />
          <Grid />
          <StagesDark />
          <GymDark />
          <WifiDark />
        </div>
        <h1 className="text-xl lg:text-2xl font-clashdisplay font-light !leading-none text-center min-h-[75px] ">
          Construyendo con maestría
          <br />
          <span className="font-medium lg:text-5xl"> {typedText}</span>
        </h1>
      </section>
      <section className="pt-24 bg-[#f1f3f5] relative z-30 text-center">
        <span className="text-mainGray text-base lg:text-xl relative font-light font-sans tracking-normal  mx-auto -bottom-[15px]">
          (02) Soluciones
        </span>
      </section>
      <section className="w-full bg-[#f1f3f5] relative z-20 py-12">
        <div className="flex lg:hidden relative lg:absolute w-full lg:w-7/12 bg-[#f1f3f5] pb-6 flex-col justify-center items-center gap-2 -top-[5px] z-40 rounded-b-[64px] lg:h-[114px] mb-8 px-[15px]">
          <div className="hidden lg:flex absolute top-[5px] -left-[59.9px] w-[61px] h-[61px] bg-[url('/img/substract5.svg')] bg-no-repeat bg-contain"></div>
          <div className="hidden lg:flex  absolute top-[5px] -right-[59.9px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-180"></div>

          <h3 className="text-2xl lg:text-4xl text-primary text-center font-clashdisplay font-extralight">
            <span className="font-medium">Especialistas</span> en{" "}
            <span className="font-medium">espacios fitness</span> y{" "}
            <span className="font-medium">experiencias</span> de entrenamiento
          </h3>
        </div>
        <div className="lg:mx-[20px] rounded-[64px] overflow-hidden relative bg-cover text-white z-4 flex justify-center items-center min-h-[70vh]">
          <div className="hidden lg:flex relative lg:absolute w-full lg:w-7/12 bg-[#f1f3f5] pb-6 flex-col justify-center items-center gap-2 -top-[5px] z-40 rounded-b-[64px] lg:h-[114px]">
            <div className="absolute top-[5px] -left-[59.9px] w-[61px] h-[61px] bg-[url('/img/substract5.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute top-[5px] -right-[59.9px] w-[61px] h-[61px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-180"></div>

            <h3 className="text-2xl lg:text-4xl text-primary text-center font-clashdisplay font-extralight">
              <span className="font-medium">Especialistas</span> en{" "}
              <span className="font-medium">espacios fitness</span> y<br />{" "}
              <span className="font-medium">experiencias</span> de entrenamiento
            </h3>
          </div>
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

          <div className="absolute w-full lg:w-7/12 flex flex-col justify-center items-center gap-4 bottom-0 z-40">
            <div className="absolute bottom-0 -left-[60px] w-[60px] h-[60px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain"></div>
            <div className="absolute bottom-0 -right-[60px] w-[60px] h-[60px] bg-[url('/img/substract4.svg')] bg-no-repeat bg-contain rotate-90"></div>

            {/* Tab Navigation */}
            <div className="w-full h-full grid grid-cols-4">
              {servicesTabs.map((service) => (
                <button
                  key={service.id}
                  className={`px-4 py-9 lg:h-[124px] lg:first:border-l-4 border-r-2 lg:border-r-4 border-[#f1f3f5] border-t-2 lg:border-t-4 lg:first:rounded-tl-[64px] lg:last:rounded-tr-[64px] ${
                    activeTab === service.id
                      ? "bg-[#f1f3f5] text-primary text-xl lg:text-2xl font-clashdisplay font-medium w-full"
                      : "bg-transparent text-white hover:bg-white hover:bg-opacity-15 text-xl lg:text-2xl font-clashdisplay font-medium transition ease-in-out duration-500 relative first:before:absolute first:before:-bottom-[0px] first:before:-left-[0px] first:before:w-[60px] first:before:h-[60px] first:before:bg-[url('/img/substract5.svg')] first:before:bg-no-repeat first:before:bg-contain first:before:rotate-180 last:before:absolute last:before:bottom-0 last:before:-right-[0px] last:before:w-[60px] last:before:h-[60px] last:before:bg-[url('/img/substract4.svg')] last:before:bg-no-repeat last:before:bg-contain border-t-4 border-r-4 border-[#f1f3f5]"
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
        <div className="text-primary z-20 w-full lg:w-4/6 mx-auto py-8 lg:py-20 text-xl flex font-extralight flex-col gap-8 px-[15px]">
          <div className="flex justify-between items-center">
            <h2 className="font-medium text-3xl lg:text-5xl font-clashdisplay">
              {servicesTabs[activeTab - 1].title}
            </h2>
            <ButtonWithArrow
              href={`soluciones?tab=${servicesTabs[activeTab - 1].id}`}
            >
              Conocer más
            </ButtonWithArrow>
          </div>
          <p
            className="text-primary text-base lg:text-xl text-opacity-80"
            dangerouslySetInnerHTML={{
              __html: servicesTabs[activeTab - 1].description,
            }}
          ></p>
        </div>
      </section>
      <hr className="h-px bg-gray-200 border-0 relative w-full z-20" />
      <section className="py-12 lg:py-32 bg-white relative z-20 px-[15px]">
        <div className="mx-auto max-w-[1200px] flex flex-col gap-24">
          <div className="flex flex-col gap-8">
            <div className="flex flex-col lg:flex-row gap-8 justify-between">
              <h3 className="text-2xl lg:text-4xl text-left text-primary font-clashdisplay font-extralight w-full">
                Soluciones por{" "}
                <span className="font-medium">
                  partners
                  <br />
                  especializados
                </span>
              </h3>
              <p className="font-extralight text-base lg:text-lg">
                Ofrecemos{" "}
                <span className="font-medium">Soluciones Integrales</span> a
                través de alianzas estratégicas con líderes de la industria,
                diseñadas para
                <span className="font-medium">
                  {" "}
                  optimizar cada aspecto de tu centro fitness.
                </span>
                <br /> <br />
                Desde equipos y accesorios de alto rendimiento hasta{" "}
                <span className="font-medium">
                  sistemas avanzados de seguridad y conectividad,
                </span>{" "}
                garantizamos un entorno seguro, eficiente y de última
                tecnología,{" "}
                <span className="font-medium">
                  impulsando el éxito de tu negocio.
                </span>
              </p>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-[40px]">
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
                    <h3 className="text-2xl lg:text-4xl font-medium">
                      {card.title}
                    </h3>
                  </div>

                  <div className="absolute bottom-6 left-6">{card.icon}</div>

                  <Link
                    href={`/soluciones/adicionales#${card.title.toLowerCase().replace(/\s+/g, "-")}`}
                    className={`absolute bottom-0 right-0 ${
                      card.theme === "dark"
                        ? "bg-primary before:bg-[url('/img/substract3.svg')] after:bg-[url('/img/substract3.svg')]"
                        : "bg-white before:bg-[url('/img/substract2.svg')] after:bg-[url('/img/substract2.svg')]"
                    } p-8 rounded-tl-[32px] cursor-pointer before:absolute before:bottom-1.5 before:-left-[32px] before:w-[32px] before:h-[32px]  before:bg-no-repeat before:bg-contain before:rotate-90
                           after:absolute after:-top-[32px] after:right-1.5 after:w-[32px] after:h-[32px]  after:bg-no-repeat after:bg-contain after:rotate-90`}
                  >
                    <PlusIcon
                      dark={card.theme === "light"}
                      className="w-6 h-6 lg:h-8 lg:w-8 relative -right-[2px]"
                    />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      <section className="py-24 bg-white z-20 w-full relative lg:sticky lg:top-[60px] px-[15px]">
        <div className="grid lg:grid-cols-2 bg-primary rounded-[64px] overflow-hidden min-h-[75vh] mx-auto max-w-[1300px]">
          <div className="w-full h-full relative min-h-[350px]">
            <Image
              src="/img/ft_bg.jpg"
              className="object-cover "
              layout="fill"
              alt="Fitness Total"
            />
          </div>
          <div className="w-full h-full bg-primary flex flex-col p-12 lg:p-20 justify-center items-start gap-6 lg:gap-10">
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
            <p className="font-extralight text-base lg:text-lg text-white">
              Transforma tu{" "}
              <span className="font-semibold">visión en realidad</span> con
              nuestro servicio{" "}
              <span className="font-semibold">Fitness TOTAL.</span> Este{" "}
              <span className="font-semibold">paquete completo</span> incluye
              todo lo necesario para{" "}
              <span className="font-semibold">
                crear un espacio de <span className="italic">fitness</span> de
                primera clase
              </span>
              , desde el diseño y la instalación, hasta el equipamiento,
              seguridad y conectividad.
            </p>
            <ButtonWithArrow href="/contacto" dark={true}>
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
        <div className="flex w-full bg-primary py-24"></div>
      </section>
      <section className="bg-gradient-to-b from-primary to-secondary -mt-20 relative z-30">
        <Marquee speed={40}>
          <div className="font-clashdisplay font-medium text-5xl text-mainGray text-opacity-20 whitespace-nowrap mr-[8px]">
            Boutique Studios · Fitness Centers · Indoor Cycling · Gimnasios ·
            Wellness Centers · Boutique Studios · Fitness Centers · Indoor
            Cycling · Gimnasios · Wellness Centers ·{" "}
          </div>
        </Marquee>
      </section>
      <section
        id="contact"
        className="flex flex-col justify-end items-end gap-12 md:gap-32 pt-12 md:pt-36 pb-12 md:pb-20 px-[30px]  md:px-[60px] bg-secondary bg-no-repeat bg-center bg-cover relative text-white before:absolute before:rounded-t-[64px] before:inset-0 before:bg-gradient-to-t before:from-secondary/30 before:to-secondary/100 before:z-0 z-40"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-32 max-w-[1400px] lg:mx-auto z-2 relative w-full">
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
              </div>
            </div>
          </div>
          <Contact />
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Home;
