import React from "react";

const CourseTopics = ({ topics, activeTopicIndex, setActiveTopicIndex }) => {
  return (
    <>
      {topics?.map((topic, index) => (
        <div
          onClick={() => setActiveTopicIndex(index)}
          key={index}
          className={`px-6 py-2 rounded-full whitespace-nowrap hover:bg-gray-300 cursor-pointer ${
            activeTopicIndex === index
              ? "bg-gray-800 text-white"
              : "bg-gray-200 text-gray-800"
          }`}
        >
          <h5 className="font-bold">{topic.name}</h5>
          <span className="text-sm">{topic.totalLearners} +learners</span>
        </div>
      ))}
    </>
  );
};

export default CourseTopics;
