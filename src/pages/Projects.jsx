import React from "react";
import OurProjects from "../Components/OurProjects";
import HoverImage from "../Components/HoverImage";
import Herottesxt from "../Utils/Herotext";
import Homehero from "../Components/Homehero";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";

const Projects = () => {
  return (
    <>
      <Homehero Herottesxt={Herottesxt.ProjectText}/>
      <OurProjects />
      <HoverImage/>
      <ConnectSection/>
      <Footer/>
    </>
  );
};

export default Projects;
