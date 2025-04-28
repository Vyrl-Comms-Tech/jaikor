import React, { useState, useEffect } from "react";
import Homehero from "../Components/Homehero";
import Belowhero from "../Components/Belowhero";
import Cardsection from "../Components/Cardsection";
import LargeSection from "../Components/LargeSection";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";

import Herottesxt from "../Utils/Herotext";
import LargeSectionMobile from "../Components/LargeSectionMobile";

const Home = ({ lenis }) => {
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 680);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 680);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <>
      <Homehero Herottesxt={Herottesxt.HomeText}/>
      <Belowhero />
      <Cardsection/>
    
      {/* <LargeSection lenis={lenis} /> */}
      {/* <ConnectSection/> */}
      {/* <Footer/> */}
      {isMobile ? (
        <LargeSectionMobile />
      ) : (
        <LargeSection lenis={lenis} />
      )}
      <ConnectSection/>
      <Footer/>
    </>
  );
};

export default Home;
