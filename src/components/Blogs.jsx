import { actualities } from "../constants";
import classNames from "classnames";
import { useState, useRef, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Virtual,
} from "swiper/modules";

const Blogs = () => {
  const [activeItem, setActiveItem] = useState(3);

  const handleSlideChange = (swiper) => {
    setActiveItem(swiper.realIndex); // Update active item when slide changes
  };

  return (
    <div id="actualities" className="bg-color-4 h-screen">
      <h2 className="uppercase font-medium text-xl md:text-3xl p-15 w-full">
        Actualités
      </h2>
      <div className="flex mb-8 w-full h-[70%]items-center justify-center">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={"3"}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          pagination={{ type: "dynamic", clickable: true }}
          navigation={{
            nextEl: ".btn-next",
            prevEl: ".btn-prev",
            clickable: true,
          }}
          modules={[EffectCoverflow, Pagination, Navigation, Virtual]}
          className="h-[580px] w-full"
          onSlideChange={handleSlideChange}
        >
          {actualities.map((item, index) => (
            <SwiperSlide
              key={item.id}
              aria-current={activeItem === index}
              virtualIndex={index}
              className={`text-center rounded-2xl relative ${
                activeItem === index ? "active-slide" : ""
              } hover:w-[12%] transition-all duration-200 h-full relative`}
            >
              <div className="rounded-2xl">
                <img
                  className="rounded-2xl absolute max-w-none w-full h-[580px] left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 object-cover"
                  src={item.photo}
                  alt={item.title}
                  onClick={() => (window.location.href = item.url)} // Navigate to URL when clicked
                />
                <div
                  className={classNames(
                    "bottom-0 w-full h-[30%] text-center p-4  transition-[transform,opacity] absolute md:p-0 bg-color-4",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0"
                  )}
                >
                  {activeItem === index && ( // Show title only when active
                    <a href={item.url}>
                      <h3 className="text-black py-6 px-3 mx-auto text-xl">
                        {item.title}
                      </h3>
                    </a>
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="flex justify-center gap-10 items-center">
        <button className="hover:bg-color-1 btn-prev hover:opacity-100 hover:text-white h-[3rem] w-[3rem] items-center flex justify-center rounded-full opacity-60 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5 8.25 12l7.5-7.5"
            />
          </svg>
        </button>
        <button className="hover:bg-color-1 btn-next hover:text-white hover:opacity-100 h-[3rem] w-[3rem] items-center flex justify-center rounded-full opacity-60 disabled:opacity-25 disabled:cursor-not-allowed transition-all ease-in-out duration-300">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="m8.25 4.5 7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Blogs;
