import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "lenis";
import gsap from "gsap";
import Group from "./pages/Grouppage";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { useGSAP } from "@gsap/react";
import "./Styles/Global.css";
import Contact from "./pages/Contact";
import ScrollTrigger from "gsap/ScrollTrigger";
import MobileNavbar from "./Components/MobileNavbar";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null);

  // Set up Lenis smooth scrolling
  useGSAP(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(1.6, -7 * t)),
      smooth: true,
      wheelMultiplier: 0.8,
      touchMultiplier: 0.8,
      smoothTouch: true,
      touchInertiaMultiplier: 0.6,
      infinite: false,
    });

    // Sync Lenis with GSAP ScrollTrigger
    lenisRef.current.on("scroll", ScrollTrigger.update);

    // Create a more precise RAF loop
    gsap.ticker.add((time) => {
      lenisRef.current.raf(time * 1000);
    });

    // Disable GSAP lag smoothing
    gsap.ticker.lagSmoothing(0);

    function raf(time) {
      lenisRef.current?.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenisRef.current?.destroy();
    };
  }, []);

  return (
    <>
    <MobileNavbar />
      <Routes>
        <Route path="/" element={<Home lenis={lenisRef.current} />} />
        <Route path="/about" element={<About />} />
        <Route path="/group" element={<Group />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />{" "}
        {/* Updated from /contact-us */}
      </Routes>
    </>
  );
};

export default App;
