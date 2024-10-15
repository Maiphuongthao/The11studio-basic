import { Fragment, useEffect, useState } from "react";
import {
  Typography,
  IconButton,
  Collapse,
  MenuList,
  MenuItem,
  Menu,
  MenuHandler,
  ListItem,
} from "@material-tailwind/react";
import { ChevronDownIcon } from "@heroicons/react/16/solid";
import "animate.css";

import { favicon, faviconBlack } from "../assets";
import { navigation, services } from "../constants";
import { Link } from "react-router-dom";
import classNames from "classnames";

const NavListMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleOpen = () => setIsMobileMenuOpen((cur) => !cur);

  const renderItems = (
    <div className="w-dvh justify-center lg:items-start items-center lg:bg-color-4 hover:outline-none lg:rounded-lg flex flex-col lf:flex-row">
      {services.map(({ url, title }, key) => (
        <a href={url} key={key} className="outline-none hover:outline-none">
          <MenuItem>
            <Typography
              as="h2"
              variant="small"
              className={`rounded-full uppercase p-2 lg:p-0`}
            >
              {title}
            </Typography>
          </MenuItem>
        </a>
      ))}
    </div>
  );

  return navigation.map(({ url, title, icon }, key) => (
    <Fragment key={key}>
      <Menu
        open={isMenuOpen}
        handler={setIsMenuOpen}
        placement="bottom"
        offset={{ mainAxis: 20 }}
        allowHover
        className={`${icon ? "" : `hidden`} `}
      >
        <MenuHandler
          className={`${icon ? "" : `hidden`} text-[1,5rem] font-semibold`}
        >
          <Typography as="div" variant="small">
            <ListItem
              className={`flex rounded-full text-color-1 uppercase transition ease-in-out delay-150 duration-300 hover:transition-all hover:bg-color-4`}
              selected={isMenuOpen || isMobileMenuOpen}
              onClick={toggleOpen}
            >
              <a
                href={url}
                className="outline-none rounded-full hover:outline-none"
              >
                {title}
              </a>

              <ChevronDownIcon
                strokeWidth={1}
                className={`hidden h-6 w-6 transition-transform lg:block ${
                  isMenuOpen ? "rotate-180" : ""
                }`}
              />
              <ChevronDownIcon
                strokeWidth={1}
                className={`block h-6 w-6 transition-transform lg:hidden ${
                  isMobileMenuOpen ? "rotate-180" : ""
                }`}
              />
            </ListItem>
          </Typography>
        </MenuHandler>
        <MenuList
          className={`${
            icon ? "lg:block hidden " : `hidden`
          } bg-inherit border-0 shadow-none text-color-1`}
        >
          {renderItems}
        </MenuList>
      </Menu>
      <div className={`${icon ? "flex lg:hidden" : `hidden`} `}>
        <Collapse open={isMobileMenuOpen}>{renderItems}</Collapse>
      </div>
    </Fragment>
  ));
};

const NavListList = () => {
  return (
    <div
      className={classNames(
        "flex bg-color-2 bg-opacity-50 pt-5 text-[1,5rem]",
        "flex-col lg:flex-row font-semibold rounded-full lg:pt-0 lg:items-center"
      )}
    >
      <div className="flex flex-col justify-center items-center w-full">
        <NavListMenu />
      </div>
      <div className="flex flex-col lg:flex-row justify-center items-center">
        {navigation.map(({title, icon }, key) => (
          <ListItem
            key={key}
            className={`${
              icon ? "hidden" : ""
            } rounded-full transition ease-in-out delay-150 duration-300 text-color-1 hover:transition-all md:hover:bg-color-4 hover:bg-inherit uppercase justify-center lg:p-0`}
          >
            <div className="rounded-full p-3 outline-none hover:outline-none hover:bg-color-4 md:hover:bg-inherit">
              <Link to={`services/${title}`}>
                <div>{title}</div>
              </Link>
            </div>
          </ListItem>
        ))}
      </div>
    </div>
  );
};

const NavBar = () => {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      window.innerWidth >= 960 && setOpenNav(false);
    });
  }, []);

  return (
    <div className={`relative`}>
      <div
        className={`fixed w-full z-10 ${
          openNav ? "bg-color-2 py-8" : "top-15"
        } `}
      >
        <div className="flex w-full items-center px-15">
          <div className="items-center justify-center flex">
            {" "}
            <Link to="/">
              <div className={`flex flex-initial w-[6rem]`}>
                <img alt="favicon" src={openNav ? faviconBlack : favicon} />
              </div>
            </Link>
          </div>

          <div className={`w-full items-center justify-end flex`}>
            <div className="hidden lg:block rounded-full ">
              <NavListList />
            </div>

            <IconButton
              variant="text"
              className="lg:hidden rounded-full "
              ripple={false}
              onClick={() => setOpenNav(!openNav)}
            >
              {openNav ? (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  className="size-6"
                  viewBox="0 0 24 24"
                  stroke="white"
                  strokeWidth="3"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              ) : (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth="3"
                  stroke="white"
                  className="size-6"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3.75 9h16.5m-16.5 6.75h16.5"
                  />
                </svg>
              )}
            </IconButton>
          </div>
        </div>
        <div>
          <Collapse open={openNav}>
            <NavListList />
          </Collapse>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
