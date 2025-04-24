import React from "react";
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
import AboutCards from "../Components/AboutCards";
import Aboutcounter from "../Components/Aboutcounter";
import TeamSlider from "../Components/TeamSlider";
import CoreValues from "../Components/CoreValues";
import Footer from "../Components/Footer";

export const About = () => {
  return (
    <>
      <div className="aboutpage">
        <Homehero Herottesxt={Herottesxt.AboutText} />

        <AboutCards />
        <Aboutcounter />
        <CoreValues />
        <TeamSlider />
        <Footer />
      </div>
    </>
  );
};
