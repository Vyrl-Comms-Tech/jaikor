import React, { useState, useEffect } from "react";
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
import AboutCards from "../Components/AboutCards";
import AboutCardMobile from "../Components/AboutCardMobile";
import Aboutcounter from "../Components/Aboutcounter";
import TeamSlider from "../Components/TeamSlider";
import CoreValues from "../Components/CoreValues";
import Footer from "../Components/Footer";

export const About = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 980);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 980);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <div className="aboutpage">
        <Homehero Herottesxt={Herottesxt.AboutText} />
        {isMobile ? <AboutCardMobile /> : <AboutCards />}
        <Aboutcounter />
        {/* <CoreValues />
        <TeamSlider />
        <Footer /> */}
      </div>
    </>
  );
};
