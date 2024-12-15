import React, { useState } from "react";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Article = ({ data }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % data?.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? data?.length - 1 : prevIndex - 1
    );
  };

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="relative">
      <div className="relative overflow-hidden bg-[#F7F9FA]">
        <div
          className="flex transition-transform duration-500"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {data?.map((card, index) => (
            <div
              key={index}
              className="flex items-center flex-wrap-reverse justify-between min-w-full "
            >
              <div
                className={`p-10 max-md:py-0 pr-16 flex flex-col gap-8 md:w-1/2 ${
                  data ? "" : "animate-pulse w-full bg-gray-200"
                }`}
              >
                <div className="flex items-center justify-start">
                  <img
                    src={card.articleCard.logo}
                    alt="logo"
                    className="h-[43px]"
                  />
                </div>
                <h2 className="text-3xl font-bold text-gray-900">
                  {card.articleCard.heading}
                </h2>
                <div className="flex md:items-center items-end gap-5">
                  {card.articleCard.acheivements.map((achievement, index) => (
                    <div
                      key={index}
                      className="border border-b-gray-300 border-r-0 border-t-0 border-l-0 pb-5"
                    >
                      <h4 className="text-4xl font-bold text-gray-800">
                        {achievement.percent}
                      </h4>
                      <p className="max-md:text-sm max-md:mt-2">
                        {achievement.desc}
                      </p>
                    </div>
                  ))}
                </div>
                <div>
                  <button className="bg-black hover:bg-gray-800 cursor-pointer flex items-center gap-3 font-bold text-white px-4 py-3">
                    {card.articleCard.btn} <FaArrowRight />
                  </button>
                </div>
              </div>
              <div
                className={`md:w-1/2 md:pr-10 ${
                  data ? "" : "animate-pulse w-full bg-gray-200"
                }`}
              >
                <img
                  alt={card.articleCard.heading}
                  src={card.articleCard.img}
                  className="w-full h-[646px] object-cover"
                />
              </div>
            </div>
          ))}
        </div>

        <div className="md:absolute bottom-10 left-5 flex md:gap-5 gap-2 items-center md:px-5 max-md:px-10 max-md:py-5">
          <button
            onClick={handlePrev}
            className="border border-black rounded-full md:text-2xl p-3 shadow-xl bg-white hover:bg-gray-100"
            aria-label="Previous Slide"
          >
            <FaChevronLeft />
          </button>
          <div className="flex gap-2 justify-between items-center">
            {data?.map((_, index) => (
              <button
                key={index}
                onClick={() => handleIndicatorClick(index)}
                className={`rounded-full p-1 ${
                  index === currentIndex
                    ? "bg-[#a435f0] w-6 transition-all duration-1000"
                    : "bg-gray-300"
                }`}
                aria-label={`Go to slide ${index + 1}`}
              ></button>
            ))}
          </div>
          <button
            onClick={handleNext}
            className="border border-black rounded-full md:text-2xl p-3 shadow-xl bg-white hover:bg-gray-100"
            aria-label="Next Slide"
          >
            <FaChevronRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Article;
