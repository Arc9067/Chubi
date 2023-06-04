import React from "react";
import logo from "../assets/logo.png";

const ABout = () => {
  return (
    <section className="py-[50px] w-full bg-secondary">
      <div className="container grid lg:grid-cols-2 items-center">
        <img
          src={logo}
          alt=""
          className="md:max-w-[30rem] hover:scale-75 transition rotate-3"
        />
        <div className="flex flex-col gap-10 ">
          <article className="flex flex-col gap-3 items-start">
            <h1 className="font-Inter font-bold text-3xl">SYMBOL: $CHUBU</h1>
            <p className="text-gray-400 max-w-[500px]">
              Unlock Your Dream: Purchase a Token and Be a Part of Chubu's
              Journey. Use the Contract Address Provided on Our Official Website
            </p>
            <a
              href=""
              className="flex items-center gap-2 bg-white font-Inter font-medium text-primary px-5 py-4 rounded-2xl uppercase"
            >
              buy chubu
            </a>
            <div className="w-full lg:w-11/12 bg-white h-[1px] mt-6"></div>
          </article>
          <article className="flex flex-col gap-3 items-start">
            <h1 className="font-Inter font-bold text-3xl">USEFUL LINKS</h1>
            <div className="flex items-center gap-4">
              <a
                href=""
                className="flex items-center gap-2 bg-white font-Inter font-medium text-primary px-5 py-4 rounded-2xl uppercase"
              >
                dextool
              </a>
              <a
                href=""
                className="flex items-center gap-2 bg-white font-Inter font-medium text-primary px-5 py-4 rounded-2xl uppercase"
              >
                email
              </a>
            </div>
            <div className="w-full lg:w-11/12 bg-white h-[1px] mt-6"></div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ABout;
