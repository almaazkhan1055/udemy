import React from "react";
import { HomePageData } from "../Data/HomePageData";
import WhatWeOfferCard from "./WhatWeOfferCard";

const WhatWeOffer = () => {
  const { WhatWeOffer } = HomePageData;
  return (
    <div className="bg-[#F7F9FA] p-10">
      <h2 className="text-3xl font-bold text-gray-900">
        {WhatWeOffer.heading}
      </h2>
      <WhatWeOfferCard WhatWeOffer={WhatWeOffer.offers} />
    </div>
  );
};

export default WhatWeOffer;
