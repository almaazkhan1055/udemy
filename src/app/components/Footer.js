import React from "react";
import { HomePageData } from "../Data/HomePageData";

const Footer = () => {
  const { footer1, footer2, footer3 } = HomePageData.footer;

  return (
    <div className="flex flex-col">
      <div className="px-10 py-5 bg-[#1c1d1f] text-white border-y-white border-y">
        <div className="flex flex-wrap items-center md:justify-between max-md:gap-5">
          <h3 className="text-lg font-bold">{footer1.heading}</h3>
          {footer1.img.map((img, index) => (
            <img src={img} key={index} alt="companies" />
          ))}
        </div>
      </div>
      <div className="bg-[#1c1d1f] text-white px-10 py-5 flex flex-col gap-10">
        <h3 className="text-lg font-bold">{footer2.categories.title}</h3>
        <div className="grid md:grid-cols-4 grid-cols-1 gap-8">
          {footer2.categories.cards1.map((card, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3">{card.title}</h4>
              {card.items.map((item, index) => (
                <div key={index}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#101112] text-white px-10 py-5 flex flex-col gap-10">
        <div className="grid md:grid-cols-4 grid-cols-2 gap-8">
          {footer2.categories.cards2.map((card, index) => (
            <div key={index}>
              <h4 className="font-semibold mb-3">{card.title}</h4>
              {card.items.map((item, index) => (
                <div key={index * 2}>
                  <span>{item}</span>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
      <div className="bg-[#101112] text-white px-10 py-5 flex max-md:flex-col md:items-center justify-between border-y border-y-white max-md:gap-2">
        {footer3.links.map((link, index) => (
          <div key={index}>
            {index === 0 ? (
              <div className="flex items-center gap-5">
                <img src={footer3.logo} alt="...logo" width={92} />
                <h6>{link}</h6>
              </div>
            ) : index === footer3.links.length - 1 ? (
              <div className="flex items-center gap-2">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="1.5"
                  stroke="currentColor"
                  className="w-6 h-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 21a9.004 9.004 0 0 0 8.716-6.747M12 21a9.004 9.004 0 0 1-8.716-6.747M12 21c2.485 0 4.5-4.03 4.5-9S14.485 3 12 3m0 18c-2.485 0-4.5-4.03-4.5-9S9.515 3 12 3m0 0a8.997 8.997 0 0 1 7.843 4.582M12 3a8.997 8.997 0 0 0-7.843 4.582m15.686 0A11.953 11.953 0 0 1 12 10.5c-2.998 0-5.74-1.1-7.843-2.918m15.686 0A8.959 8.959 0 0 1 21 12c0 .778-.099 1.533-.284 2.253m0 0A17.919 17.919 0 0 1 12 16.5c-3.162 0-6.133-.815-8.716-2.247m0 0A9.015 9.015 0 0 1 3 12c0-1.605.42-3.113 1.157-4.418"
                  ></path>
                </svg>
                <h6>{link}</h6>
              </div>
            ) : (
              <h6>{link}</h6>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Footer;
