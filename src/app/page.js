import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import CourseList from "./components/CourseList";
import Testimonials from "./components/Testimonials";
import WhatWeOffer from "./components/WhatWeOffer";

const Home = () => {
  return (
    <div className="overflow-hidden">
      <Header />
      <Slider />
      <CourseList />
      <Testimonials />
      <WhatWeOffer />
    </div>
  );
};

export default Home;
