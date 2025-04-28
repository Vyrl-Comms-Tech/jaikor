import React, { useState, useEffect } from "react";
import OurProjects from "../Components/OurProjects";
import HoverImage from "../Components/HoverImage";
import Herottesxt from "../Utils/Herotext";
import Homehero from "../Components/Homehero";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";
import HoverImageMobile from "../Components/HoverImageMobile";

const Projects = () => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  return (
    <>
      <Homehero Herottesxt={Herottesxt.ProjectText}/>
      <OurProjects />
      <HoverImage/>
      <ConnectSection/>
      <Footer/>
      {isMobile ? <HoverImageMobile /> : <HoverImage />}
    </>
  );
};

export default Projects;
