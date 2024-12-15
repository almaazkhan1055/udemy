import React from "react";
import { Carousel } from "flowbite-react";
import { HomePageData } from "../Data/HomePageData";
import Image from "next/image";
import SliderBanner from "./SliderBanner";

const Slider = () => {
  const { carousel, sliderbanner } = HomePageData;

  return (
    <div className="relative h-56 sm:h-64 xl:h-96 2xl:h-96">
      <Carousel>
        {carousel.map((img, index) => (
          <div key={index} className="relative h-full">
            <Image
              src={img}
              alt={index + "img"}
              className="w-full"
              layout="fill"
            />

            <SliderBanner
              heading={sliderbanner[index]?.heading}
              description={sliderbanner[index]?.description}
            />
          </div>
        ))}
      </Carousel>
    </div>
  );
};

export default Slider;
