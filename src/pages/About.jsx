import React from "react";
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
import Aboutcounter from "../Components/Aboutcounter";
import TeamSlider from "../Components/TeamSlider";

export const About = () => {
  return (
    <>
      <div className="aboutpage">
        <Homehero Herottesxt={Herottesxt.AboutText} />
        <Aboutcounter/>
        <TeamSlider/>
      </div>
    </>
  );
};
