import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { FaTelegramPlane } from "react-icons/fa";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState(0);
  const [headerBackground, setHeaderBackground] = useState(false);

  const handleScroll = () => {
    const position = window.pageYOffset;
    setScrollPosition(position);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (scrollPosition > 300) {
      // Change the value according to your desired scroll position
      setHeaderBackground(true); // Change to your desired background color
    } else {
      setHeaderBackground(false);
    }
  }, [scrollPosition]);
  return (
    <header
      className={`py-2 z-50 w-full fixed top-0 ${
        headerBackground ? "bg-white text-primary " : "bg-primary"
      }`}
    >
      <div className="container font-primary flex justify-between items-center">
        <a
          href=""
          className="flex justify-between items-center uppercase font-primary text-2xl font-bold"
        >
          <img src={Logo} alt="" className="w-[4rem]" />
          chubu
        </a>
        <a
          href=""
          className="flex items-center gap-2 bg-primary text-white px-5 py-2 rounded-2xl uppercase"
        >
          <FaTelegramPlane /> telegram
        </a>
      </div>
    </header>
  );
};

export default Header;
