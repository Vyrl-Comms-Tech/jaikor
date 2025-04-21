import React from "react";
import '../Styles/Servicepage.css';
import Homehero from "../Components/Homehero";
import Herottesxt from "../Utils/Herotext";
import Servicedetais from "../Components/Servicedetais";
import Servicetrust from "../Components/Servicetrust";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";
const Services = () => {
  return (
    <>
      <div className="service">
        <Homehero Herottesxt={Herottesxt.ServicesText} />
        <Servicedetais/>
        <Servicetrust/>
        <ConnectSection/>
        <Footer/>
      </div>
    </>
  );
};

export default Services;
