import { secondaryLogo } from "../assets";
import Section from "./Section";

import { discounts } from "../constants";
import Button from "./Button";

const Intro = () => {
  const offerNumber = discounts.length;
  return (
    <Section id="intro" className="h-screen bg-cover bg-center bg-heading-card">
      <div className="w-full bg-color-1 overflow-x-hidden">
        <div className="animate-marquee flex font-normal hover:animate-none">
          <div className="whitespace-nowrap flex">
            {discounts.map((discount) => (
              <span
                key={discount.id}
                className="uppercase bg-color-7 mx-4 hover:transition-transform hover:scale-125"
              >
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
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
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
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
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
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
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
              </span>
            ))}
          </div>
          <div className="whitespace-nowrap flex">
            {discounts.map((discount) => (
              <span key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
              </span>
            ))}
            {discounts.map((discount) => (
              <span key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
              </span>
            ))}
            {discounts.map((discount) => (
              <span key={discount.id} className="uppercase bg-color-7 mx-4">
                <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
                  {discount.title}
                </p>
                <a
                  href="#prices"
                  className={`${offerNumber > 1 ? "" : "hidden"}`}
                >
                  Découvrir nos offres
                </a>
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="w-full h-full flex flex-col gap-5 justify-center items-center text-4xl font-bold">
        <Button href="#booking">Réserver un rendez-vous</Button>
        <div className="absolute bottom-[6rem] mx-5  lg:mx-0">
          
            <h1 className="text-color-1">
              Le designer personnel que vous cherchez est ici
            </h1>
          
          <img
            className="w-[80rem] flex-initial"
            src={secondaryLogo}
            alt="Logo secondary"
          />
          <div className="bg-color-3 text-color-1 rounded-t-lg w-[9rem] h-[4rem] text-center fixed z-10">
            <a
              className="w-full h-full rounded-t-lg flex items-center text-sm"
              href="mailto:"
            >
              Restons en contact!
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Intro;
