import React from "react";

import { logoPrimary, homepage1 } from "../assets";
import Section from "./Section";

import { discounts } from "../constants";

const Intro = () => {
  const offerNumber = discounts.length;
  return (
    <Section
      id="intro"
      className="bg-color-2 py-[6rem] text-center text-wrap font-lexend"
    >
      <div className="flex flex-col gap-5 px-5 md:px-8">
        <img src={homepage1} alt="tatouing fineline shadow on hand" />
        <div className="flex flex-col items-center justify-center gap-6">
          <img
            className="w-[10rem] flex-initial"
            src={logoPrimary}
            alt="Logo Primary"
          />
          <h3 className="uppercase">
            vis pour les moments qui éveillent la passion
          </h3>
        </div>
      </div>
      {discounts.map((discount) => (
        <div
          key={discount.id}
          className="uppercase bg-color-7 mt-5 text-n-1 text-light"
        >
          <p className={`${offerNumber <= 1 ? "" : "hidden"}`}>
            {discount.title}
          </p>
          <a href="#prices" className={`${offerNumber > 1 ? "" : "hidden"}`}>
            Découvrir nos offres
          </a>
        </div>
      ))}
    </Section>
  );
};

export default Intro;
