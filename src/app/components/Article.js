// import React from "react";
// import { HomePageData } from "../Data/HomePageData";
// import Image from "next/image";
// import { FaArrowRight } from "react-icons/fa";

// const Article = () => {
//   const { article } = HomePageData;

//   return (
//     <div className="bg-[#F7F9FA] flex justify-between gap-8 px-10">
//       {article.map((item, index) => (
//         <div
//           key={index}
//           className="flex items-center justify-between w-full lg:w-[48%] bg-white rounded-lg shadow-lg p-8"
//         >
//           <div className="flex flex-col gap-6 w-1/2">
//             <Image
//               width={275}
//               height={48}
//               src={item.articleCard.logo}
//               alt={`logo-${index}`}
//             />
//             <h2 className="text-2xl font-bold text-gray-900">
//               {item.articleCard.heading}
//             </h2>
//             <div className="flex items-center gap-6">
//               {item.articleCard.acheivements.map((achievement, idx) => (
//                 <div key={idx} className="border-b-2 pb-3 border-gray-300">
//                   <h4 className="text-4xl font-bold text-gray-800">
//                     {achievement.percent}
//                   </h4>
//                   <p className="text-gray-600">{achievement.desc}</p>
//                 </div>
//               ))}
//             </div>
//             <div>
//               <div className="bg-black hover:bg-[#2D2F31] cursor-pointer gap-3 justify-center font-bold text-white px-4 py-3 inline-block">
//                 <button className="flex items-center gap-3">
//                   {item.articleCard.btn} <FaArrowRight />
//                 </button>
//               </div>
//             </div>
//           </div>
//           <div className="w-1/2 flex items-center justify-center">
//             <img
//               src={item.articleCard.img}
//               alt={`article-img-${index}`}
//               className="rounded-md"
//             />
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Article;

import React from "react";
import { HomePageData } from "../Data/HomePageData";
import Image from "next/image";
import { FaArrowRight } from "react-icons/fa";

const Article = () => {
  const { article } = HomePageData;

  return (
    <div className="bg-[#F7F9FA] flex items-center justify-between">
      {article.map((Card, index) => (
        <div key={index} className="flex items-center justify-between">
          <div className="p-10 pr-16  flex flex-col gap-8">
            <Image
              width={275}
              height={48}
              src={Card.articleCard.logo}
              alt="logo"
            />
            <h2 className="text-3xl font-bold text-gray-900">
              {Card.articleCard.heading}
            </h2>
            <div className="flex items-center gap-5">
              {Card.articleCard.acheivements.map((acheivement, index) => (
                <div
                  key={index}
                  className="border border-b-gray-300 border-r-0 border-t-0 border-l-0 pb-5"
                >
                  <h4 className="text-4xl font-bold text-gray-800">
                    {acheivement.percent}
                  </h4>
                  <p>{acheivement.desc}</p>
                </div>
              ))}
            </div>
            <div>
              <div className="bg-black hover:bg-[#2D2F31] cursor-pointer gap-3 justify-center font-bold text-white px-4 py-3 inline-block">
                <button className="flex items-center gap-3">
                  {Card.articleCard.btn} <FaArrowRight />
                </button>
              </div>
            </div>
          </div>
          <div className="">
            <img src={Card.articleCard.img} />
          </div>
        </div>
      ))}
      {/* <div className="p-10 pr-16 w-1/2 flex flex-col gap-8">
        <Image
          width={275}
          height={48}
          src={article[0].articleCard.logo}
          alt="logo"
        />
        <h2 className="text-3xl font-bold text-gray-900">
          {article[0].articleCard.heading}
        </h2>
        <div className="flex items-center gap-5">
          {article[0].articleCard.acheivements.map((acheivement, index) => (
            <div
              key={index}
              className="border border-b-gray-300 border-r-0 border-t-0 border-l-0 pb-5"
            >
              <h4 className="text-4xl font-bold text-gray-800">
                {acheivement.percent}
              </h4>
              <p>{acheivement.desc}</p>
            </div>
          ))}
        </div>
        <div>
          <div className="bg-black hover:bg-[#2D2F31] cursor-pointer gap-3 justify-center font-bold text-white px-4 py-3 inline-block">
            <button className="flex items-center gap-3">
              {article[0].articleCard.btn} <FaArrowRight />
            </button>
          </div>
        </div>
      </div>
      <div className="w-1/2">
        <img src={article[0].articleCard.img} />
      </div> */}
    </div>
  );
};

export default Article;
