import React from "react";
import logo from "../assets/logo.png";

const Info = () => {
  return (
    <section className="py-[100px]">
      <div className="container flex justify-center items-center flex-col gap-5 font-primary uppercase">
        <img src={logo} alt="" className="max-w-[8rem]" />
        <p className="text-white text-xl text-center">
          Chubu is a region in central Japan known for its stunning landscapes,
          rich cultural heritage, and diverse wildlife. Nestled between the
          Kanto region to the east and the Kansai region to the west, Chubu is a
          captivating destination that offers a perfect blend of modernity and
          tradition.
        </p>
        <p className="text-white text-xl text-center">
          One of the unique aspects of Chubu is its association with the beloved
          Shiba dog. The Shiba is a native Japanese breed known for its
          distinctive appearance, spirited personality, and unwavering loyalty.
          Chubu is particularly renowned for being the natural habitat of the
          Shiba dog, making it a popular destination for dog enthusiasts and
          animal lovers alike.
        </p>
        <p className="text-white text-xl text-center">
          The picturesque mountains, forests, and rural landscapes of Chubu
          provide an ideal environment for Shiba dogs to thrive. The region's
          moderate climate and abundant natural resources make it a perfect home
          for this resilient and adaptable breed. Shiba dogs can often be seen
          exploring the lush greenery, chasing after butterflies, or frolicking
          in the rivers and streams that adorn the Chubu region.
        </p>
      </div>
    </section>
  );
};

export default Info;
