"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { id: 1, name: "QSC", image: "/img/clients/qsc.svg" },
  { id: 2, name: "Shure", image: "/img/clients/shure.svg" },
  { id: 3, name: "Allen & Heath", image: "/img/clients/allenandheath.svg" },
  { id: 4, name: "Electro-Voice", image: "/img/clients/electro-voice.svg" },
  { id: 5, name: "EAW", image: "/img/clients/eaw.svg" },
  { id: 6, name: "Sonos", image: "/img/clients/sonos.svg" },
  { id: 7, name: "QSC", image: "/img/clients/qsc.svg" },
  { id: 8, name: "Shure", image: "/img/clients/shure.svg" },
  { id: 9, name: "Allen & Heath", image: "/img/clients/allenandheath.svg" },
  { id: 10, name: "Electro-Voice", image: "/img/clients/electro-voice.svg" },
  { id: 11, name: "EAW", image: "/img/clients/eaw.svg" },
  { id: 12, name: "Sonos", image: "/img/clients/sonos.svg" },
];

const useIsMobile = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return isMobile;
};

const BrandStripAV: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <div className="w-full">
      <Marquee
        gradient={false}
        speed={isMobile ? 25 : 35}
      >
        {brands.map((brand, index) => (
          <div
            key={`${brand.id}-${index}`}
            className="flex items-center h-20 lg:h-24"
          >
            <div className="relative h-5 lg:h-6 w-20 lg:w-28 opacity-40 mx-8 lg:mx-12">
              <Image
                src={brand.image}
                alt={brand.name}
                fill
                style={{ objectFit: "contain", filter: "brightness(0) invert(1)" }}
              />
            </div>
            <div className="w-px h-5 bg-white/20" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default BrandStripAV;
