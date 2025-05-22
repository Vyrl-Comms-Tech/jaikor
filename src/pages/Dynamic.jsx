import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom';
import Homehero from "../Components/Homehero";
import ConnectSection from '../Components/ConnectSection';
import Footer from '../Components/Footer';
import Herottesxt from "../Utils/Herotext";
import DynamicSection from '../Components/DynamicSection';
import DynamicSectionMobile from '../Components/DynamicSectionMobile';

const Dynamic = () => {
  const { projectId } = useParams();
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);

  useEffect(() => {
    // Scroll to top when component mounts or projectId changes
    const scrollToTop = () => {
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'instant' // Use 'instant' instead of smooth for immediate scroll
      });
    };
    
    scrollToTop();
    
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [projectId]);
  
  return (
   <>
    <div className="grouppage">
        <Homehero Herottesxt={Herottesxt.GroupText} />
        {isMobile ? <DynamicSectionMobile projectId={projectId} /> : <DynamicSection projectId={projectId} />}
        <ConnectSection/>
        <Footer/>
      </div>
   </>
  )
}

export default Dynamic