import React from "react";

const SliderBanner = ({ heading, description }) => {
  return (
    <div className="absolute top-16 left-16 z-20 bg-white p-4 w-[450px] shadow-lg">
      <h2 className="text-2xl font-bold text-gray-800">{heading}</h2>
      <p className="text-lg text-gray-600">{description}</p>
    </div>
  );
};

export default SliderBanner;
