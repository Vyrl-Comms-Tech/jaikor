import React from "react";
<<<<<<< Updated upstream
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
import Aboutcounter from "../Components/Aboutcounter";
import TeamSlider from "../Components/TeamSlider";
import AboutCards from "../Components/AboutCards";
=======
import AboutCards from "../Components/AboutCards";
import Aboutcounter from "../Components/Aboutcounter";
import TeamSlider from "../Components/TeamSlider";
import CoreValues from "../Components/CoreValues";
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
>>>>>>> Stashed changes

export const About = () => {
  return (
    <>
<<<<<<< Updated upstream
      <div className="aboutpage">
        <Homehero Herottesxt={Herottesxt.AboutText} />
        <Aboutcounter/>
        <TeamSlider/>
      </div>
      <AboutCards />
=======
      <Homehero Herottesxt={Herottesxt.AboutText} />
      <AboutCards />
      <Aboutcounter />
      <CoreValues />
      <TeamSlider />
>>>>>>> Stashed changes
    </>
  );
};
