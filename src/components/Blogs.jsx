import { actualities } from "../constants";
import classNames from "classnames";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { EffectCoverflow, Pagination, Navigation } from "swiper/modules";

const Blogs = () => {
  const [activeItem, setActiveItem] = useState(3);

  const handleSlideChange = (swiper) => {
    setActiveItem(swiper.realIndex); // Update active item when slide changes
    console.log("index" + swiper.realIndex);
  };

  console.log("active" + activeItem);

  return (
    <div
      id="actualities"
      className="bg-color-4 h-screen px-15 pt-15 flex flex-col gap-15"
    >
      <h2 className="uppercase font-medium text-2xl md:text-4xl w-full h-[10%] text-color-1 pt-10">
        Actualités
      </h2>
      <div className="flex w-full items-center justify-center rounded-2xl">
        <Swiper
          grabCursor={true}
          centeredSlides={true}
          loop={true}
          slidesPerView={3}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 0,
            depth: 100,
            modifier: 2.5,
          }}
          breakpoints={{
            360: {
              slidesPerView: 1,
            },
            769: {
              slidesPerView: 3,
            },
          }}
          pagination={{ clickable: true }}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="h-[580px] w-full rounded-2xl"
          onSlideChange={handleSlideChange}
        >
          {actualities.map((item, index) => (
            <SwiperSlide
              key={item.id}
              aria-current={activeItem === index}
              virtualIndex={index}
              className={`text-center rounded-2xl relative ${
                activeItem === index ? "active-slide flex" : ""
              } hover:w-[12%] transition-all duration-200 h-full relative`}
            >
              <div
                className={classNames(
                  "rounded-2xl",
                  activeItem === index ? "flex flex-col" : ""
                )}
              >
                <img
                  className={classNames(
                    "rounded-2xl w-full h-[580px]",
                    "object-cover",
                    activeItem === index ? "h-[400px]" : ""
                  )}
                  src={item.photo}
                  alt={item.title}
                  onClick={() => (window.location.href = item.url)}
                />
                <div
                  className={classNames(
                    "w-full h-[30%] text-center p-4 transition-[transform,opacity] md:p-0 bg-inherit rounded-b-lg",
                    activeItem === index
                      ? "md:translate-x-0 md:opacity-100"
                      : "md:translate-x-4 md:opacity-0"
                  )}
                >
                  {activeItem === index && ( // Show title only when active
                    <a href={item.url}>
                      <h3 className="text-color-1 py-10 px-3 mx-auto text-xl w-full h-full">
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
    </div>
  );
};

export default Blogs;
