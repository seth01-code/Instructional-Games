import React from "react";
import Section from "./Section";
import { socials } from "../constants";

const Footer = () => {
  return (
    <Section crosses className="!px-0 !py-10">
      <div
        id="contact"
        className="container flex flex-col sm:justify-between justify-center items-center gap-10 max-sm:flex-col"
      >
        <p className="caption text-n-4 lg:block">
          © {new Date().getFullYear()}. All rights reserved.
        </p>

        <ul className=" grid grid-cols-3 grid-rows-1 gap-7">
          {socials.map((item) => (
            <div className="">
            <p className="font-code text-gray-500 hover:text-white uppercase text-[1rem] max-md:text-[14px] max-sm:text-[1rem]">{item.title}</p>
            </div>
          ))}
        </ul>
      </div>
    </Section>
  );
};

export default Footer;
