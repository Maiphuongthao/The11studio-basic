import { useEffect, useRef } from "react";
import { services } from "../constants";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/scrollbar";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { Keyboard, Scrollbar, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";

const Carousel = () => {
  return (
    <div className="w-full h-full relative">
      <Swiper
        slidesPerView={1}
        centeredSlides={false}
        slidesPerGroupSkip={1}
        grabCursor={true}
        spaceBetween={10}
        keyboard={{
          enabled: true,
        }}
        breakpoints={{
          769: {
            slidesPerView: 2.5,
            slidesPerGroup: 2.5,
          },
        }}
        navigation={true}
        pagination={{
          clickable: true,
        }}
        modules={[Keyboard, Scrollbar, Navigation, Pagination]}
        className="h-[80%] w-full"
      >
        <div>
          {services.map((item, index) => (
            <SwiperSlide
              key={index}
              id={item.title}
              className="relative over:transition-opacity hover:duration-700"
            >
              <Link to={`services/${item.title}`}>
                <img
                  alt={item.alt}
                  src={item.image}
                  className="h-full w-full object-cover rounded hover:backdrop-blur-md"
                />
                <div className="hover:bg-color-1 absolute inset-0 hover:bg-opacity-30 hover:backdrop-blur-sm transition ease-in-out delay-100 duration-200 hover:transition-all">
                  <div className=" flex justify-center w-full h-full hover:items-center text-2xl hover:text-4xl transition ease-in-out duration-100 hover:transition-all">
                    <h2 className="mt-15 uppercase flex justify-center text-center text-white ">
                      {item.title}
                    </h2>
                  </div>
                </div>
              </Link>
            </SwiperSlide>
          ))}
        </div>
      </Swiper>
    </div>
  );
};

export default Carousel;
