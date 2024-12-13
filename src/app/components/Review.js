import React from "react";
import { HomePageData } from "../Data/HomePageData";
import Image from "next/image";
import Link from "next/link";
import { FaAngleRight } from "react-icons/fa";

const Review = () => {
  const { reviews } = HomePageData;

  return (
    <div className="p-10 bg-[#F7F9FA]">
      <h2 className="text-3xl font-bold text-gray-900 mb-10">
        {reviews.heading}
      </h2>
      <div className="flex items-center justify-between gap-5">
        {reviews.reviewCards.map((reviewCard, index) => (
          <div
            key={index}
            className="bg-white border border-gray-300 px-4 rounded-md flex flex-col items-start justify-center gap-2 w-[311px] h-[273px]"
          >
            <img
              src="https://s.udemycdn.com/browse_components/student-quote-unit/quote.svg"
              alt=""
              width={20}
            />
            <h3 className="text-[15px]">{reviewCard.review}</h3>
            <div className="flex items-center gap-2 my-5">
              <Image
                src={reviewCard.img}
                width={50}
                height={50}
                className="rounded-full"
                alt={reviewCard.name}
              />
              <div className="text-[12px] text-gray-500 font-semibold ">
                <p>{reviewCard.name}</p>
                <p>{reviewCard.about}</p>
              </div>
            </div>
            <Link
              href={reviewCard.link.href}
              className="flex items-center gap-2 text-[#A435F0]"
            >
              {reviewCard.link.name}
              <FaAngleRight />
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Review;
