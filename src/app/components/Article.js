import React, { useState } from "react";
import { HomePageData } from "../Data/HomePageData";
import Image from "next/image";
import { FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Article = () => {
  const { article } = HomePageData;
  const [carouselIndex, setCarouselIndex] = useState(0);

  function handleLeft() {
    if (carouselIndex > 0) {
      setCarouselIndex((prev) => prev - 1);
    }
  }

  function handleRight() {
    if (carouselIndex < article.length - 1) {
      setCarouselIndex((prev) => prev + 1);
    }
  }

  return (
    <div className="relative overflow-hidden p-10">
      <div
        className="flex transition-transform duration-500 gap-10"
        style={{
          transform: `translateX(-${carouselIndex * 100}%)`,
        }}
      >
        {article.map((card, index) => (
          <div
            key={index}
            className="flex items-center justify-between min-w-full"
          >
            <div className="p-10 pl-0 pr-16 flex flex-col gap-8 w-1/2">
              <Image
                width={275}
                height={48}
                src={card.articleCard.logo}
                alt="logo"
              />
              <h2 className="text-3xl font-bold text-gray-900">
                {card.articleCard.heading}
              </h2>
              <div className="flex items-center gap-5">
                {card.articleCard.acheivements.map((achievement, index) => (
                  <div
                    key={index}
                    className="border border-b-gray-300 border-r-0 border-t-0 border-l-0 pb-5"
                  >
                    <h4 className="text-4xl font-bold text-gray-800">
                      {achievement.percent}
                    </h4>
                    <p>{achievement.desc}</p>
                  </div>
                ))}
              </div>
              <div>
                <div className="bg-black hover:bg-[#2D2F31] cursor-pointer gap-3 justify-center font-bold text-white px-4 py-3 inline-block">
                  <button className="flex items-center gap-3">
                    {card.articleCard.btn} <FaArrowRight />
                  </button>
                </div>
              </div>
            </div>
            <div className="w-1/2">
              <img
                src={card.articleCard.img}
                className="w-[600px] h-[646px] object-cover"
              />
            </div>
          </div>
        ))}
      </div>

      <div className="absolute bottom-10 flex items-center gap-2 justify-between px-10">
        <button
          className={`border border-black rounded-full text-2xl p-3 shadow-xl ${
            carouselIndex === 0 && "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleLeft}
          disabled={carouselIndex === 0}
        >
          <FaChevronLeft />
        </button>

        {article.map((_, index) => (
          <div
            className={`rounded-full p-1 bg-gray-300 transition-transform duration-1000 ${
              carouselIndex === index ? "w-6 bg-[#A435F0]" : ""
            }`}
            style={{
              transform: `translateX(-${carouselIndex * 10}%)`,
            }}
          ></div>
        ))}

        <button
          className={`border border-black rounded-full text-2xl p-3 shadow-xl ${
            carouselIndex === article.length - 1 &&
            "opacity-50 cursor-not-allowed"
          }`}
          onClick={handleRight}
          disabled={carouselIndex === article.length - 1}
        >
          <FaChevronRight />
        </button>
      </div>
    </div>
  );
};

export default Article;
