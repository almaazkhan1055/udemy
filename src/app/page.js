"use client";
import React, { useEffect, useState } from "react";
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
  const [data, setData] = useState(null);
  console.log(data);

  useEffect(() => {
    fetch("https://almaazkhan1055.github.io/udemy_data/udemy-data.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <>
      <Header data={data?.header} />
      <Slider data={data} />
      <CourseList data={data?.courseList} />
      <Testimonials data={data?.testimonials} />
      <WhatWeOffer data={data?.whatWeOffer} />
      <Plans data={data?.plans} />
      <Review data={data?.reviews} />
      <Trending data={data?.trending} />
      <TopTrending data={data?.topTrending} />
      <ViewersFav data={data?.viewersFav} />
      <Article data={data?.article} />
      <Footer data={data?.footer} />
    </>
  );
};

export default Home;
