import React, { useRef, useState, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const Carousel = ({ items, renderItem }) => {
  const scrollContainerRef = useRef(null);
  const [showLeftButton, setShowLeftButton] = useState(false);
  const [showRightButton, setShowRightButton] = useState(true);

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollTo({ left: 0, behavior: "smooth" });
      updateButtonVisibility();
    }
  }, [items]);

  const updateButtonVisibility = () => {
    const container = scrollContainerRef.current;
    if (container) {
      const { scrollLeft, scrollWidth, clientWidth } = container;
      setShowLeftButton(scrollLeft > 0);
      setShowRightButton(scrollLeft + clientWidth < scrollWidth);
    }
  };

  const handleScrollLeft = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: -container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  const handleScrollRight = () => {
    const container = scrollContainerRef.current;
    if (container) {
      container.scrollBy({
        left: container.offsetWidth,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="relative my-10">
      <div
        className="flex items-center justify-between gap-5 overflow-x-scroll scroll-smooth scrollbar-hide"
        ref={scrollContainerRef}
        onScroll={updateButtonVisibility}
      >
        {items?.map((item, index) => (
          <div key={index}>{renderItem(item, index)}</div>
        ))}
      </div>

      {showLeftButton && (
        <button
          onClick={handleScrollLeft}
          className="absolute left-0 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black text-2xl font-bold top-[50%] -translate-y-[50%]"
        >
          <FaChevronLeft />
        </button>
      )}

      {showRightButton && (
        <button
          onClick={handleScrollRight}
          className="absolute right-0 bg-black text-white p-2 rounded-full hover:bg-white hover:text-black text-2xl font-bold top-[50%] -translate-y-[50%]"
        >
          <FaChevronRight />
        </button>
      )}
    </div>
  );
};

export default Carousel;
