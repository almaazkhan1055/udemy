import React from "react";
import CourseTabs from "./CourseTabs";

const CourseList = ({ data }) => {
  return (
    <div
      className={`bg-[#F7F9FA] ${
        data ? "" : "animate-pulse w-full bg-gray-200"
      }`}
    >
      <div className="md:my-10 max-md:pt-0 bg-white flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900 px-10">
          {data?.heading}
        </h2>
        <p className="text-lg text-gray-500 mb-10 px-10">{data?.desc}</p>
        <CourseTabs tabsData={data?.tabsData} />
      </div>
    </div>
  );
};

export default CourseList;
