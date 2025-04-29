import React, { useEffect, useState } from "react";
import "../Styles/Grouppage.css";
import Homehero from "../Components/Homehero";
import Groupdetails from "../Components/Groupdetails";
import Herottesxt from "../Utils/Herotext";
import Companyholder from "../Components/Companyholder";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";
import Mobileprojects from "../Components/Mobileprojects";


function Grouppage() {
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
      <div className="grouppage">
        <Homehero Herottesxt={Herottesxt.GroupText} />
        <Groupdetails/>
        {isMobile ? <Mobileprojects/>:<Companyholder/>}
        <ConnectSection/>
        <Footer/>
      </div>

    </>
  );
}

export default Grouppage;
