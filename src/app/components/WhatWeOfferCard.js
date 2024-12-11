"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

const WhatWeOfferCard = ({ WhatWeOffer }) => {
  const [imgIndex, setImgIndex] = useState(0);
  console.log(imgIndex);

  return (
    <div className="flex items-center justify-between gap-36">
      <div className="flex flex-col gap-5 my-10">
        {WhatWeOffer.map((offer, index) => (
          <div
            onClick={() => setImgIndex(index)}
            key={index}
            className="flex items-center p-5 gap-5 bg-white rounded-lg cursor-pointer"
          >
            <Image
              width={64}
              height={64}
              src={offer.sticker}
              alt={offer.title}
            />
            <div>
              <div className="my-2 flex items-center gap-4">
                <h4 className="text-lg font-bold">{offer.title}</h4>
                {offer.enterprise && (
                  <span className="border border-purple-700 bg-transparent py-0.5 px-1.5 text-purple-700 font-medium text-sm">
                    {offer.enterprise}
                  </span>
                )}
              </div>
              <p className="text-gray-500">{offer.desc}</p>
              {offer.explore && (
                <Link
                  href="#"
                  className="text-purple-800 font-bold text-md flex items-center gap-2"
                >
                  {offer.explore} <FaArrowRight />
                </Link>
              )}
            </div>
          </div>
        ))}
      </div>

      <Image
        height={600}
        width={600}
        key={imgIndex}
        src={WhatWeOffer[imgIndex].img}
        alt={`Offer ${imgIndex}`}
        objectFit="cover"
      />
    </div>
  );
};

export default WhatWeOfferCard;