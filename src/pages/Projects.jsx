import React, { useState, useEffect } from "react";
import OurProjects from "../Components/OurProjects";
import HoverImage from "../Components/HoverImage";
<<<<<<< Updated upstream
import Herottesxt from "../Utils/Herotext";
import Homehero from "../Components/Homehero";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";
=======
import HoverImageMobile from "../Components/HoverImageMobile";
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
      <HoverImage/>
      <ConnectSection/>
      <Footer/>
=======
      {isMobile ? <HoverImageMobile /> : <HoverImage />}
>>>>>>> Stashed changes
    </>
  );
};

export default Projects;
