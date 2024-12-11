"use client";
import React, { useState } from "react";
import CourseCard from "./CourseCard";
import Carousel from "./Carousel";

const CourseTabs = ({ tabsData }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(0);
  const [activeTopicIndex, setActiveTopicIndex] = useState(0);

  const activeTab = tabsData?.[activeTabIndex];
  const courseTopics = activeTab?.topics || [];
  const courseCards = activeTab?.topics?.[activeTopicIndex]?.courses || [];

  const handleTabClick = (index) => {
    setActiveTabIndex(index);
    setActiveTopicIndex(0);
  };

  return (
    <div className="bg-[#F7F9FA]">
      <div className="flex items-center gap-10 border-b-[1px] border-gray-300 bg-white ">
        {tabsData?.map((tab, index) => (
          <div
            onClick={() => handleTabClick(index)}
            key={index}
            className={`text-md font-bold pb-4 cursor-pointer ${
              index === activeTabIndex
                ? "border-b-2 border-black text-black"
                : "text-gray-500"
            }`}
          >
            <h3>{tab.name}</h3>
          </div>
        ))}
      </div>

      {courseTopics.length > 0 && (
        <Carousel
          items={courseTopics}
          renderItem={(topic, index) => (
            <div
              className={`px-5 whitespace-nowrap py-2 cursor-pointer rounded-full border ${
                activeTopicIndex === index
                  ? "bg-gray-800 text-white"
                  : "bg-gray-200 text-gray-800"
              }`}
              onClick={() => setActiveTopicIndex(index)}
            >
              <h5 className="font-bold">{topic.name}</h5>
              <span className="text-sm">{topic.totalLearners} +learners</span>
            </div>
          )}
        />
      )}

      {courseCards.length > 0 && (
        <Carousel
          items={courseCards}
          renderItem={(course) => <CourseCard courseCard={[course]} />}
        />
      )}

      <button className="my-10 border border-black px-5 py-3 text-black font-bold text-md hover:bg-gray-200">
        Show All {activeTab?.name} Courses
      </button>
    </div>
  );
};

export default CourseTabs;
