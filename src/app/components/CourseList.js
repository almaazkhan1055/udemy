import React from "react";
import { HomePageData } from "../Data/HomePageData";
import CourseTabs from "./CourseTabs";

const CourseList = () => {
  const { courseList } = HomePageData;

  return (
    <div className="my-10">
      <h2 className="text-[36px] font-bold">{courseList.heading}</h2>
      <p className="text-[20px] text-gray-500 mb-10">{courseList.desc}</p>
      <CourseTabs tabsData={courseList.tabsData} />
    </div>
  );
};

export default CourseList;
