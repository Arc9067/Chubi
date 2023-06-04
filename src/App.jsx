import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import ABout from "./Components/ABout";
import Info from "./Components/Info";
import Footer from "./Components/Footer";
import Aos from "aos";

const App = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="min-h-screen w-full bg-primary text-white">
      <Header />
      <Hero />
      <ABout />
      <Info />
      <Footer />
    </div>
  );
};

export default App;
