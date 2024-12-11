import React from "react";
import { HomePageData } from "../Data/HomePageData";
import Image from "next/image";

const Testimonials = () => {
  const { testimonials } = HomePageData;

  return (
    <div className="px-5 flex flex-col items-center justify-between gap-5 w-full py-10 my-10">
      <h2>{testimonials.heading}</h2>
      <div className="flex items-center justify-between gap-16">
        {testimonials.brands.map((brand, index) => (
          <img key={index} src={brand} alt="brand-logo" />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
