import React from "react";
import "../Styles/Grouppage.css";
import Homehero from "../Components/Homehero";
import Groupdetails from "../Components/Groupdetails";
import Herottesxt from "../Utils/Herotext";
import Companyholder from "../Components/Companyholder";
import ConnectSection from "../Components/ConnectSection";
import Footer from "../Components/Footer";


function Grouppage() {
  return (
    <>
      <div className="grouppage">
        <Homehero Herottesxt={Herottesxt.GroupText} />
        <Groupdetails/>
        <Companyholder/>
        <ConnectSection/>
        <Footer/>
      </div>

    </>
  );
}

export default Grouppage;
