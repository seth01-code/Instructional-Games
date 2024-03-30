import React from "react";
import Hero from "./Hero";
import Benefits from "./Benefits";
import Footer from "./Footer";
import ButtonGradient from "../assets/svg/ButtonGradient";
import Header from "./Header";

function Home() {
  return (
    <>
      <div className="pt-[4.75rem] lg:pt-[5.25rem] overflow-hidden">
        <Header/>
        <Hero />
        <Benefits />
        <Footer />
      </div>

      <ButtonGradient />
    </>
  );
}

export default Home;
