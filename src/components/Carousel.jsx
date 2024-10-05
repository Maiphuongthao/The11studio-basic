import { useEffect, useState } from "react";
import { services } from "../constants";
import { motion, AnimatePresence } from "framer-motion";

const Carousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex - 1 < 0 ? services.length - 1 : prevIndex - 1
    );
  };

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + 1 === services.length ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="w-full h-full flex gap-2 relative items-center">
      <motion.div
        variant="text"
        color="white"
        onClick={prevSlide}
        className="hover:transition-opacity hover:duration-700 hover:opacity-70 text-white flex items-center justify-center h-12 w-12 !absolute top-2/4 z-10 rounded-full bg-color-1
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
          />
        </svg>
      </motion.div>
      <AnimatePresence>
        {services.map((item, index) => (
          <motion.div
            key={index}
            initial={{ x: 0 }}
            animate={{ x: -currentIndex * 500 }}
            transition={{ type: "spring", stiffness: 300, damping: 30 }}
            className="relative h-full min-w-[40%] hover:transition-opacity hover:duration-700 hover:opacity-70 left-30 lg:left-56 "
          >
            <img
              alt={item.alt}
              src={item.image}
              className="h-full w-full object-cover rounded-xl"
            />
            <div className="absolute inset-0 flex justify-center">
              <h2 className="mt-15 text-2xl uppercase text-white">
                {item.title}
              </h2>
            </div>
          </motion.div>
        ))}
      </AnimatePresence>
      <div className="absolute bottom-[10rem] left-2/4 z-50 flex -translate-x-2/4 gap-2">
        {services.map((_, index) => (
          <span
            key={index}
            className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
              currentIndex === index ? "w-8 bg-white" : "w-4 bg-white/50"
            }`}
            onClick={() => setCurrentIndex(index)}
          />
        ))}
      </div>
      <motion.div
        onClick={nextSlide}
        className="hover:transition-opacity hover:duration-700 hover:opacity-70 text-white flex items-center h-12 w-12 justify-center !absolute top-2/4 right-15 rounded-full bg-color-1"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={2}
          stroke="currentColor"
          className="h-6 w-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
          />
        </svg>
      </motion.div>
    </div>
  );
};

export default Carousel;
