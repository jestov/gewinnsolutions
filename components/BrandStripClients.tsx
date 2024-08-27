"use client";
import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";

const brands = [
  { id: 1, name: "QSC", image: "/img/clients/qsc.svg" },
  { id: 2, name: "EAW", image: "/img/clients/eaw.svg" },

  { id: 3, name: "Electro-Voice", image: "/img/clients/electro-voice.svg" },
  {
    id: 4,
    name: "Fitness Audio",
    image: "/img/clients/fitnessaudio.svg",
  },
  { id: 5, name: "Shure", image: "/img/clients/shure.svg" },
  { id: 6, name: "Sonos", image: "/img/clients/sonos.svg" },
  { id: 7, name: "Allen & Heath", image: "/img/clients/allenandheath.svg" },
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

const BrandStripClients = () => {
  const isMobile = useIsMobile();

  return (
    <div className="flex flex-col lg:flex-row justify-center items-center w-full pl-[10px] pr-[60px] gap-[20px] overflow-hidden">
      <h3 className="text-2xl lg:text-3xl text-center font-clashdisplay font-extralight text-white w-full min-w-[150px]">
        Nuestras <span className="font-medium">marcas</span>
      </h3>
      <div className="min-w-4/6 w-2/3">
        <div className="marquee-container w-full">
          <Marquee
            gradient={true}
            gradientWidth={40}
            gradientColor="#111111"
            speed={isMobile ? 50 : 70}
            className="py-1 overflow-hidden"
          >
            {" "}
            {/* Set speed based on device */}
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

export default BrandStripClients;
