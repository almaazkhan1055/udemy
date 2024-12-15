import React from "react";

const Testimonials = ({ data }) => {
  return (
    <div
      className={`px-5 flex flex-col items-center justify-between gap-5 w-full py-10 md:my-10 ${
        data ? "" : "animate-pulse w-full bg-gray-200"
      }`}
    >
      <h2 className={`${data ? "" : "animate-pulse w-full bg-gray-200"}`}>
        {data?.heading}
      </h2>
      <div
        className={
          "flex flex-wrap items-center gap-10 md:justify-between justify-start md:gap-16"
        }
      >
        {data?.brands.map((brand, index) => (
          <img key={index} src={brand} alt="brand-logo" />
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
