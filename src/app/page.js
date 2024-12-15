"use client";
import React from "react";
import Header from "./components/Header";
import Slider from "./components/Slider";
import Testimonials from "./components/Testimonials";
import WhatWeOffer from "./components/WhatWeOffer";
import Plans from "./components/Plans";
import CourseList from "./components/CourseList";
import Review from "./components/Review";
import Trending from "./components/Trending";
import TopTrending from "./components/TopTrending";
import ViewersFav from "./components/ViewersFav";
import Article from "./components/Article";
import Footer from "./components/Footer";

const Home = () => {
  return (
    <>
      <Header />
      <Slider />
      <CourseList />
      <Testimonials />
      <WhatWeOffer />
      <Plans />
      <Review />
      <Trending />
      <TopTrending />
      <ViewersFav />
      <Article />
      <Footer />
    </>
  );
};

export default Home;
