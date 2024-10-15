import { secondaryLogo } from "../assets";
import { Link } from "react-router-dom";

import { discounts } from "../constants";
import Button from "./Button";

const Intro = () => {
  const offerNumber = discounts.length;
  return (
    <div
      id="intro"
      className=" relative h-screen bg-cover bg-center bg-heading-card"
    >
      <div className="w-full bg-color-1 overflow-x-hidden">
        <div className="animate-marquee flex font-normal hover:animate-none text-color-4 p-4">
          <div className="whitespace-nowrap flex">
            {discounts.map((discount) => (
              <span
                key={discount.id}
                className="uppercase bg-color-7 mx-4 hover:transition-transform hover:scale-125"
              >
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
            {discounts.map((discount) => (
              <span
                key={discount.id}
                className="uppercase bg-color-7 mx-4 hover:transition-transform hover:scale-125"
              >
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
            {discounts.map((discount) => (
              <span
                key={discount.id}
                className="uppercase bg-color-7 mx-4 hover:transition-transform hover:scale-125"
              >
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
            {discounts.map((discount) => (
              <span
                key={discount.id}
                className="uppercase bg-color-7 mx-4 hover:transition-transform hover:scale-125"
              >
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
          </div>
          <div className="whitespace-nowrap flex">
            {discounts.map((discount) => (
              <div key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </div>
            ))}
            {discounts.map((discount) => (
              <span key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
            {discounts.map((discount) => (
              <span key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <Link to="/prices">
                  <div className={`${offerNumber > 1 ? "" : "hidden"}`}>
                    Découvrir nos offres
                  </div>
                </Link>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-5 justify-center items-center">
        <Link to="https://www.planity.com/the-11-studio-78180-montigny-le-bretonneux">
          <Button className="w-[25rem] h-[5rem] font-extrabold">
            Réserver un rendez-vous
          </Button>
        </Link>
      </div>
      <img
        className="w-[100%] absolute bottom-5 flex-initial p-4"
        src={secondaryLogo}
        alt="Logo secondary"
      />
      <div className="bottom-0 fixed z-10 p-5">
        <div className="bg-color-3 text-color-1 rounded-t-lg w-[9rem] h-[4rem] text-center ">
          <a
            className="w-full h-full rounded-t-lg flex items-center text-sm"
            href="mailto:bonjour@the11studio.fr"
          >
            Restons en contact!
          </a>
        </div>
      </div>
    </div>
  );
};

export default Intro;
