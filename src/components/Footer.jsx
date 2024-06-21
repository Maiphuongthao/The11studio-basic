import React from "react";
import Section from "./Section";

import { links, infos, medias } from "../constants";

import { logoMark } from "../assets";
import AccessSvg from "../assets/AccessSvg";

const Footer = () => {
  return (
    <Section>
      <div className="px-5 md:px-8 py-15 containeur flex flex-col gap-3 bg-color-7 text-n-1 font-lexend font-extralight">
        <a className="flex-initial w-[3rem] md:w-[4rem] pb-8" href="#">
          <img src={logoMark} alt="logo footer" />
        </a>
        {links.map((link) => (
          <ul key={link.id} className="flex flex-col">
            <a
              target="_blank"
              href={link.url}
              className="flex gap-1 uppercase underline underline-offset-4 my-1"
            >
              <AccessSvg />
              {link.title}
            </a>
          </ul>
        ))}

        <p className="leading-loose my-5 font-light">
          <a href={`mailto:${infos.email}`}>{infos.email}</a>
          <br />
          <span className="text-color-8">Adresse</span> <br /> {infos.address}{" "}
          <br />
          <span className="text-color-8">Téléphone </span> <br />
          {infos.telephone}
        </p>

        <div className="flex flex-row justify-between">
          <ul className="flex flex-col gap-1 font-light">
            {medias.map((media) => (
              <a
                className="flex gap-1"
                key={media.id}
                target="_blank"
                href={media.url}
              >
                <AccessSvg />
                {media.title}
              </a>
            ))}
          </ul>
          <p className="caption text-wrap lg:block leading-loose">
            ©{new Date().getFullYear()} The11Studio <br />
            <a href="#">Mentions légales et Politique de confidentialité</a>
            <br />
            Tous Droits Réservés.
          </p>
        </div>
      </div>
    </Section>
  );
};

export default Footer;
