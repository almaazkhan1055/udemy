import Image from "next/image";
import React from "react";

const CourseCard = ({ courseCard }) => {
  return (
    <>
      {courseCard?.map((course, index) => {
        return (
          <div
            key={index}
            className="border-2 border-gray-200 w-[300px] pt-0 rounded-md shadow-md"
          >
            <Image
              width={300}
              height={174}
              src={course.image}
              alt={course.name}
              className="w-full rounded-md"
            />
            <div className="p-5 pt-2">
              <h4 className="text-black font-bold text-md truncate">
                {course.name}
              </h4>
              <p className="text-gray-500">
                {course.tutor.map((tutor, index) => (
                  <span key={index}>{tutor}, </span>
                ))}
              </p>
              <p className="font-bold text-sm">{course.rating}</p>
              <p className="font-bold text-md mb-2">$ {course.price}</p>
              <span className="bg-[#ECEB98] p-1 text-sm font-semibold">
                {course.tag}
              </span>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default CourseCard;
