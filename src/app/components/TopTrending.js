import React from "react";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const TopTrending = ({ data }) => {
  return (
    <div className="bg-[#F7F9FA] p-10">
      <div className="border border-b-gray-300 border-t-0 border-l-0 border-r-0">
        <h2 className="text-3xl font-bold text-gray-900 mb-5">
          {data?.heading}
        </h2>
      </div>
      <div
        className={`flex flex-wrap justify-between ${
          data ? "" : "animate-pulse w-full bg-gray-200"
        }`}
      >
        {data?.cards.map((card) => (
          <div
            key={card.title}
            className={`md:my-10 my-5 ${
              data ? "" : "animate-pulse w-full bg-gray-200"
            }`}
          >
            <h3
              className={`text-gray-900 font-bold ${
                card.title === "ChatGPT is a top skill"
                  ? "text-3xl"
                  : "text-2xl"
              }`}
            >
              {card.title}
            </h3>
            {card.courses.map((course) => (
              <div key={course.name}>
                <div className="my-5">
                  <Link
                    className="flex items-center gap-5 text-[#371783] font-semibold text-[18px]"
                    href="#"
                  >
                    {course.name} <FaAngleRight />
                  </Link>
                  <p className="text-[#6a6f73] text-sm">
                    {course.learners} learners
                  </p>
                </div>
                {course.btn && (
                  <button className="text-lg font-semibold border border-black px-16 py-2 mt-5">
                    {course.btn}
                  </button>
                )}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TopTrending;
