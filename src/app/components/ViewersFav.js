import React from "react";
import Carousel from "./Carousel";
import CourseCard from "./CourseCard";

const ViewersFav = ({ data }) => {
  return (
    <div className="p-10">
      <h2
        className={`text-3xl font-bold text-gray-900 mb-5 ${
          data ? "" : "animate-pulse w-full bg-gray-200"
        }`}
      >
        {data?.heading}
      </h2>
      <Carousel
        items={data?.courses}
        renderItem={(course) => <CourseCard courseCard={[course]} />}
      />
    </div>
  );
};

export default ViewersFav;
