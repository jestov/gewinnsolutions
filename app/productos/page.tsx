"use client";

import { FC, useState, useEffect, useRef } from "react";
import Image from "next/image";
import Footer from "@/components/Footer";
import BrandStripClients from "@/components/BrandStripClients";
import Marquee from "react-fast-marquee";
import AddCartIcon from "@/components/icons/AddCartIcon";

const Productos: FC = () => {
  const [quantities, setQuantities] = useState<{ [key: number]: number }>({});
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

  return (
    <div className="relative">
      <main className="p-[20px] bg-cover text-white z-20 bg-white flex flex-col gap-20 pt-40">
        <div className="px-44 flex flex-col gap-12">
          <div className="flex gap-8 text-primary items-center -ml-10">
            <div className="h-2 w-2 bg-primary"></div>
            <span className="font-clash text-lg">Nuestros productos</span>
          </div>
          <h3 className="text-3xl lg:text-6xl text-primary font-clashdisplay font-extralight">
            <span className="font-medium">Equipamiento</span> para tu{" "}
            <span className="font-medium">Fitness Center:</span> Innovación y
            excelencia a tu alcance
          </h3>
          <p className="text-primary font-extralight text-lg lg:max-w-xl">
            Nos esforzamos por ofrecer soluciones innovadoras y personalizadas
            que mejoren la experiencia de{" "}
            <span className="font-semibold">
              nuestros clientes y usuarios finales.
            </span>
          </p>
        </div>
      </main>

      <section className="mx-auto max-w-[1400px] pb-24">
        <div className="grid grid-cols-4 transition-transform duration-500 ease-in-out gap-0.5 w-full">
          {products.map((product) => (
            <div
              key={product.id}
              className="w-full bg-white flex flex-col justify-start p-4"
            >
              <Image
                src={product.image}
                alt={product.name}
                className="w-full h-[300px] object-contain"
                width={500}
                height={500}
                quality={100}
              />
              <div className="flex justify-between items-start gap-0.5">
                <div>
                  <div className="text-lg text-mainGray font-light">
                    {product.category}
                  </div>
                  <div className="text-xl font-medium font-clashdisplay !leading-none">
                    {product.name}
                  </div>
                  <div className="text-base font-clashdisplay">
                    ${product.price}{" "}
                    <span className="text-sm">{product.currency}</span>
                  </div>
                </div>
                <div className="flex items-center mt-1.5 border-2 border-black overflow-hidden min-w-[140px] max-w-[140px]">
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

export default Productos;
