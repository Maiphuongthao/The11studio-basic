import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

import { disablePageScroll, enablePageScroll } from "scroll-lock";
import { blacklogo } from "../assets";
import { navigation, services } from "../constants";
import MenuSvg from "../assets/MenuSvg";
import ChevronSvg from "../assets/ChevronSvg";

import Button from "./Button";

const Header = () => {
  const pathname = useLocation();
  const [openNavigation, setOpenNavigation] = useState(false);
  const [color, setColor] = useState("#fff");
  const [openServices, setServices] = useState(false);

  const toggleNavigation = () => {
    if (openNavigation) {
      setOpenNavigation(false);
      enablePageScroll();
      changeColor("#fff");
    } else {
      setOpenNavigation(true);
      disablePageScroll();
    }
  };

  const changeColor = (color) => {
    setColor(color);
  };

  const toggleServices = () => {
    if (openServices) {
      setServices(false);
      enablePageScroll();
    } else {
      setServices(true);
      disablePageScroll();
    }
  };

  useEffect(() => {
    document.body.style.backgroundColor = color;
  }, [color]);

  const handleClick = () => {
    if (!openNavigation) return;
    if (!openServices) return;

    enablePageScroll();
    setServices(false);
    setColor("#ff4500");
    setOpenNavigation(false);
  };

  return (
    <div
      className={`${
        openNavigation ? "h-full bg-color-7 " : ""
      } fixed w-full md:h-auto top-0 z-50 md:bg-n-1`}
    >
      <div
        className={`flex w-full justify-between px-5 md:px-8 max-lg:pt-7 max-lg:pb-4 `}
      >
        <a className="items-center flex flex-none w-[12rem]" href="#">
          <img src={blacklogo} alt="secondary logo" />
        </a>
        <nav
          className={`${
            openNavigation ? "fixed" : "hidden"
          } top-[5rem] md:flex justify-end items-center md:top-0 bg-color-7 md:flex-row md:bg-n-1 `}
        >
          {navigation.map((item) => (
            <div
              key={item.id}
              className={`flex font-lexend text-xl font-semibold uppercase transition-colors ${
                item.submenu ? " flex-col " : ""
              } px-5 py-5 md:text-sm`}
            >
              <div className={`flex gap-2 hover-btn`}>
                <a className="" href={item.url}>
                  {item.title}{" "}
                </a>
                <Button
                  id={openServices}
                  onClick={toggleServices}
                  className={`${item.icon ? " mx-2" : "hidden"}
                    }`}
                >
                  <ChevronSvg openServices={openServices} />
                </Button>
              </div>
              <div
                className={`${
                  openServices ? "md:fixed md:top-[4.5rem]" : "hidden"
                } flex flex-col uppercase my-3 font-light text-lg md:text-xs 
                     `}
              >
                {services.map((service) => (
                  <a
                    className={`${item.submenu ? "" : "hidden"} hover-btn `}
                    key={service.id}
                    href={service.url}
                  >
                    {service.title}
                  </a>
                ))}
              </div>
            </div>
          ))}
        </nav>
        <Button
          id={openNavigation}
          className="ml:auto md:hidden"
          onClick={toggleNavigation}
        >
          <MenuSvg openNavigation={openNavigation} />
        </Button>
      </div>
    </div>
  );
};

export default Header;
