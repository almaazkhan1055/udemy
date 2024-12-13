import React from "react";
import { HomePageData } from "../Data/HomePageData";
import Carousel from "./Carousel";
import CourseCard from "./CourseCard";

const ViewersFav = () => {
  const { viewersFav } = HomePageData;

  return (
    <div className="p-10">
      <h2 className="text-3xl font-bold text-gray-900 mb-5">
        {viewersFav.heading}
      </h2>
      <Carousel
        items={viewersFav.courses}
        renderItem={(course) => <CourseCard courseCard={[course]} />}
      />
    </div>
  );
};

export default ViewersFav;
