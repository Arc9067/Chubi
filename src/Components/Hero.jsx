import React from "react";
import logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-[100px]">
      <div className="container flex justify-center items-center flex-col gap-5">
        <img src={logo} alt="" className="md:max-w-[20rem]" />
        <h1
          className="text-3xl md:text-4xl font-primary uppercase max-w-[800px] mx-auto text-center shad font-bold"
          data-aos="fade-left"
          data-aos-duration="1500"
        >
          Discover Chubu: Where Majestic Landscapes Meet the Enchanting Shiba
          Dogs
        </h1>

        <a
          href=""
          className="flex items-center gap-2 bg-white font-Inter font-medium text-primary px-5 py-4 rounded-2xl uppercase"
        >
          buy chubu
        </a>
      </div>
    </section>
  );
};

export default Hero;
