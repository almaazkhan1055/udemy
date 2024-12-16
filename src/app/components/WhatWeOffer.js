import React from "react";
import WhatWeOfferCard from "./WhatWeOfferCard";

const WhatWeOffer = ({ data }) => {
  return (
    <div
      className={`bg-[#F7F9FA] p-10 ${
        data ? "" : "animate-pulse w-full bg-gray-200"
      }`}
    >
      <h2 className="text-3xl font-bold text-gray-900">{data?.heading}</h2>
      <WhatWeOfferCard data={data?.offers} />
    </div>
  );
};

export default WhatWeOffer;
