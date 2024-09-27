"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { id: 1, name: "Hiiver", image: "/img/clients/hiiver.svg" },
  { id: 2, name: "Refuse", image: "/img/clients/refuse.svg" },
  { id: 4, name: "Kardio Fitness Hall", image: "/img/clients/kardio.png" },
  {
    id: 5,
    name: "Vivo47 Family Fitness Club",
    image: "/img/clients/vivo47.png",
  },
  { id: 6, name: "Alive", image: "/img/clients/alive.svg" },
  { id: 7, name: "Runer", image: "/img/clients/runer.png" },
  { id: 3, name: "Clymb", image: "/img/clients/clymb.png" },
  { id: 8, name: "369 cycling", image: "/img/clients/369.png" },
  { id: 9, name: "Dopamine", image: "/img/clients/dopamine.png" },
  { id: 10, name: "La Loma Golf", image: "/img/clients/laloma.png" },
  { id: 11, name: "Space Studio", image: "/img/clients/spacestudio.svg" },
  { id: 12, name: "CTRL Indoor Cycling", image: "/img/clients/ctrl.svg" },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize(); // Check window size on initial render
    window.addEventListener("resize", handleResize); // Add resize event listener

    return () => {
      window.removeEventListener("resize", handleResize); // Clean up event listener on component unmount
    };
  }, []);

  return isMobile;
};

// Definición del tipo de las props del componente
interface BrandStripProps {
  gradientColor?: boolean;
}

const BrandStrip: React.FC<BrandStripProps> = ({ gradientColor }) => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col lg:flex-row justify-evenly items-center w-full pl-[60px] pr-[30px] gap-[60px] flex-1 overflow-hidden">
      <h3 className="text-2xl lg:text-3xl text-left text-primary font-clashdisplay font-extralight">
        Nuestros <span className="font-medium">clientes</span>
      </h3>
      <div className="min-w-4/6 w-4/6">
        <div className="marquee-container w-full">
          <Marquee
            gradient={true}
            gradientColor={gradientColor ? "#F1F3F5" : undefined}
            gradientWidth={40}
            speed={isMobile ? 50 : 70}
            className="py-1 overflow-hidden"
          >
            {brands.map((brand) => (
              <div
                key={brand.id}
                className="item"
                style={{ marginRight: isMobile ? "40px" : "85px" }}
              >
                <div
                  style={{
                    minHeight: "60px",
                    maxHeight: "60px",
                    minWidth: "100px",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    position: "relative",
                  }}
                >
                  <Image
                    src={brand.image}
                    alt={brand.name}
                    layout="fill"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </div>
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
};

export default BrandStrip;
