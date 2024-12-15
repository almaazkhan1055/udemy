import React from "react";
import { HomePageData } from "../Data/HomePageData";
import { FaArrowRight } from "react-icons/fa";

const Trending = () => {
  const { trending } = HomePageData;
  return (
    <div className="p-10 flex max-md:flex-wrap items-center justify-between">
      <div className="w-[400px]">
        <h3 className="text-3xl font-bold text-gray-900 mb-5">
          {trending.heading}
        </h3>
        <p className="text-xl">{trending.desc}</p>
        <button className="border border-black px-4 py-2 flex items-center gap-2 mt-5">
          {trending.btn} <FaArrowRight />
        </button>
      </div>
      <div className="object-contain">
        <img
          src="https://cms-images.udemycdn.com/96883mtakkm8/1qvvR0FDKv9chruIpia6Sc/b2af22a0097e47de4e4354237e3f378c/Onsite_Desktop_GLSTR25.png"
          alt="img"
        />
      </div>
    </div>
  );
};

export default Trending;
