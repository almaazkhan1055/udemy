import React from "react";
import { FaArrowRight } from "react-icons/fa";

const Trending = ({ data }) => {
  console.log(data);

  return (
    <div className="p-10 flex max-md:flex-wrap items-center justify-between">
      <div
        className={`w-[400px] ${
          data ? "" : "animate-pulse w-full bg-gray-200"
        }`}
      >
        <h3 className="text-3xl font-bold text-gray-900 mb-5">
          {data?.heading}
        </h3>
        <p className="text-xl">{data?.desc}</p>
        <button className="border border-black px-4 py-2 flex items-center gap-2 mt-5">
          {data?.btn} <FaArrowRight />
        </button>
      </div>
      <div className="object-contain">
        <img src={data?.img} alt="img" />
      </div>
    </div>
  );
};

export default Trending;
