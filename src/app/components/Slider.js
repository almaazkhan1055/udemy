import React from "react";
import { Carousel } from "flowbite-react";
import Image from "next/image";
import SliderBanner from "./SliderBanner";

const Slider = ({ data }) => {
  return (
    <div
      className={`relative h-56 sm:h-64 xl:h-96 2xl:h-96 ${
        data ? "" : "animate-pulse w-full bg-gray-200"
      }`}
    >
      <Carousel>
        {data?.carousel.map((img, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={img}
              alt={index + "img"}
              className="w-full"
              layout="fill"
            />

            <SliderBanner
              heading={data?.sliderbanner[index]?.heading}
              description={data?.sliderbanner[index]?.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
