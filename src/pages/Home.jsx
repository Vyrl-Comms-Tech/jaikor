import React from "react";
import Homehero from "../Components/Homehero";
import Belowhero from "../Components/Belowhero";
import Cardsection from "../Components/Cardsection";
import LargeSection from "../Components/LargeSection";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";


const Home = ({ lenis }) => {
  return (
    <>
      <Homehero />
      <Belowhero />
      <Cardsection/>
      <LargeSection lenis={lenis} />
      <ConnectSection/>
      <Footer/>
    </>
  );
};

export default Home;
