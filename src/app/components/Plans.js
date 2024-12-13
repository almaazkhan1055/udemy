import React from "react";
import { HomePageData } from "../Data/HomePageData";
import { FaArrowRight } from "react-icons/fa";
import { TiTick } from "react-icons/ti";

const Plans = () => {
  const { plans } = HomePageData;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-gray-900">{plans.heading}</h2>
      <p className="text-lg text-gray-500 mb-10">{plans.desc}</p>
      <div className="flex items-center justify-between gap-5">
        {plans.planCards.map((planCard, index) => (
          <div
            key={index}
            className={`border border-gray-200 shadow-md border-t-[8px] ${
              planCard.name === "Personal Plan"
                ? "border-t-[#A435F0]"
                : "border-t-[#5022C3]"
            }  h-[550px] w-[500px] rounded-md`}
          >
            <div className="bg-gray-50 p-4">
              <h3 className="font-bold text-lg">{planCard.name}</h3>
              <span className="text-[14px]">{planCard.audience}</span>
              <div className="flex items-center text-gray-300 text-md">
                img{planCard.details}
              </div>
            </div>
            <div className="my-2 p-4">
              <h6 className="font-bold">{planCard.price}</h6>
              <p
                className={`text-[14px] text-gray-300 ${
                  planCard.billing ? "mb-5" : "mb-10"
                }`}
              >
                {planCard.billing}
              </p>
              <div className="w-full flex items-center justify-center">
                <button className="bg-gray-800 hover:bg-gray-700 text-white font-bold flex items-center justify-between px-24 py-3 gap-3">
                  {planCard.btnText} <FaArrowRight />
                </button>
              </div>
              <ul className="text-[15px] my-5">
                {planCard.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <div className="border border-[#44B4A2] rounded-full">
                      <TiTick color="#44B4A2" />
                    </div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Plans;
