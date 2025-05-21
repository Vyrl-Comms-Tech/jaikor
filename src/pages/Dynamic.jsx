import React from 'react'
import { useParams } from 'react-router-dom';
import Homehero from "../Components/Homehero";
// import Groupdetails from "../Components/Groupdetails";
import ConnectSection from '../Components/ConnectSection';
import Footer from '../Components/Footer';
import Herottesxt from "../Utils/Herotext";
import DynamicSection from '../Components/DynamicSection';

const Dynamic = () => {
  const { projectId } = useParams();
  
  return (
   <>
    <div className="grouppage">
        <Homehero Herottesxt={Herottesxt.GroupText} />
        {/* <Groupdetails/> */}
        <DynamicSection projectId={projectId} />
        <ConnectSection/>
        <Footer/>
      </div>
   
   </>
  )
}

export default Dynamic