import React from "react";
import PropTypes from "prop-types";

const SliderBanner = ({ heading, description, className = "" }) => {
  return (
    <div
      className={`absolute top-8 left-8 sm:top-12 sm:left-12 md:top-16 md:left-16 z-20 bg-white p-4 md:p-6 w-[90%] sm:w-[450px] max-w-md shadow-lg rounded-lg ${className}`}
    >
      <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800">
        {heading}
      </h2>
      <p className="text-sm sm:text-base md:text-lg text-gray-600 mt-2">
        {description}
      </p>
    </div>
  );
};

export default SliderBanner;
