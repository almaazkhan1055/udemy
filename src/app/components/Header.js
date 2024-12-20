"use client";

import { FaAngleRight } from "react-icons/fa";
import { MdOutlineShoppingCart } from "react-icons/md";
import Link from "next/link";
import React, { useState } from "react";
import { IoClose, IoMenu } from "react-icons/io5";
import { IoMdSearch } from "react-icons/io";
import { IoSearchSharp } from "react-icons/io5";
import { CiGlobe } from "react-icons/ci";

const Header = ({ data }) => {
  const [isExploreHovered, setIsExploreHovered] = useState(false);
  const [isCategoryHovered, setIsCategoryHovered] = useState(false);
  const [categoryIndex, setCategoryIndex] = useState(0);
  const [hamOpen, setHamOpen] = useState(false);

  return (
    <>
      <div
        className={`px-10 py-5 md:hidden absolute bg-white font-bold w-full h-[300px] ${
          hamOpen ? "translate-y-0" : "-translate-y-full"
        } transition-transform duration-300 ease-in-out`}
        style={{
          zIndex: 999,
        }}
      >
        <div
          className="absolute right-10 text-2xl"
          onClick={() => setHamOpen(false)}
        >
          <IoClose />
        </div>
        {data?.links.slice(0, data?.links.length - 1).map((link, index) => (
          <div key={index}>
            <Link
              href={link.url}
              className="text-gray-900 hover:text-[#a435f0] text-xl"
            >
              {link.name}
            </Link>
          </div>
        ))}
        <div className="flex mt-5 gap-2 items-center">
          {data?.userOptions.map((option, index) => (
            <Link
              key={index}
              href="#"
              className={`border-[1px] border-black px-5 py-2 font-semibold ${
                option.name === "Sign up"
                  ? "bg-black text-white"
                  : "text-gray-900"
              }`}
            >
              {option.name}
            </Link>
          ))}
          <div className="relative border-[1px] border-black p-2 flex items-center justify-center">
            <button className="text-gray-900">
              <CiGlobe className="text-xl" />
            </button>
          </div>
        </div>
      </div>

      <div
        className={`bg-white p-5 flex items-center justify-between ${
          data ? "" : "animate-pulse"
        }`}
      >
        <div className="text-2xl md:hidden" onClick={() => setHamOpen(true)}>
          <IoMenu />
        </div>
        <img src={data?.logo} about="logo" width={91} />
        <div className="text-2xl md:hidden flex items-center gap-2">
          <IoMdSearch />
          <MdOutlineShoppingCart />
        </div>
        <div className="md:flex hidden items-center justify-between gap-5">
          <span
            className="cursor-pointer"
            onMouseEnter={() => {
              setIsExploreHovered((prev) => !prev);
              setIsCategoryHovered((prev) => !prev);
            }}
          >
            {data?.links[0].name}
          </span>
          {isExploreHovered && (
            <div className="absolute left-26 top-[85px] bg-white shadow-lg p-4 z-10">
              <div className="font-bold mb-2 text-gray-600">
                {data?.menu?.title}
              </div>
              <ul>
                {data?.menu?.categories?.map((category, idx) => (
                  <li
                    key={idx}
                    className="py-1 flex items-center justify-between gap-10"
                  >
                    <span
                      className="text-gray-800 hover:text-purple-500 cursor-pointer flex justify-between gap-10"
                      onMouseEnter={() => {
                        setIsCategoryHovered((prev) => !prev);
                        setCategoryIndex(idx);
                      }}
                    >
                      {category.name}
                    </span>
                    <FaAngleRight />
                  </li>
                ))}
              </ul>
            </div>
          )}
          <div className="px-3 py-1 border-[1px] border-black rounded-full flex items-center gap-5 bg-[#f7f9fa] text-2xl">
            <IoSearchSharp color="gray" />
            <input
              type="text"
              placeholder="Search for anything"
              className="border-none w-[300px] bg-transparent font-semibold focus:outline-none"
            />
          </div>
          {data?.links.slice(1).map((link, index) => (
            <div key={index} className="relative">
              <Link
                href={link.url}
                className="text-gray-900 hover:text-blue-500"
              >
                {link.name}
              </Link>
            </div>
          ))}
          <MdOutlineShoppingCart className="text-xl" />
        </div>
        <div className="md:flex hidden justify-between items-center">
          <div className="flex gap-2 items-center">
            {data?.userOptions.map((option, index) => (
              <Link
                key={index}
                href={option.url}
                className={`border-[1px] border-black px-5 py-2 font-semibold ${
                  option.name === "Sign up"
                    ? "bg-black text-white"
                    : "text-gray-900"
                }`}
              >
                {option.name}
              </Link>
            ))}

            <div className="relative border-[1px] border-black p-2 flex items-center justify-center">
              <button className="text-gray-900">
                <CiGlobe className="text-xl" />
              </button>
            </div>
          </div>
        </div>
        {isCategoryHovered && (
          <div className="bg-white overflow-hidden absolute top-[85px] left-[430px] z-[1999]">
            <div className="font-bold mb-2 text-gray-600 mt-4">
              Popular Issues
            </div>
            <ul className="z-[1999]">
              {data?.menu.categories[categoryIndex].subcategories.map(
                (sub, index) => (
                  <li
                    key={index}
                    className="py-1 flex items-center justify-between gap-10"
                  >
                    <span className="text-gray-800 hover:text-purple-500  justify-between gap-10">
                      {sub}
                    </span>
                    <FaAngleRight />
                  </li>
                )
              )}
            </ul>
          </div>
        )}
      </div>
    </>
  );
};

export default Header;
