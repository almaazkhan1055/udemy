import React from "react";
import { HomePageData } from "../Data/HomePageData";
import CourseTabs from "./CourseTabs";

const CourseList = () => {
  const { courseList } = HomePageData;

  return (
    <div className="bg-[#F7F9FA]">
      <div className="md:my-10 max-md:pt-0 bg-white flex flex-col">
        <h2 className="text-3xl font-bold text-gray-900 px-10">
          {courseList.heading}
        </h2>
        <p className="text-lg text-gray-500 mb-10 px-10">{courseList.desc}</p>
        <CourseTabs tabsData={courseList.tabsData} />
      </div>
    </div>
  );
};

export default CourseList;
