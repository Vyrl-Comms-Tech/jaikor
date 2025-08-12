import React, { useEffect, useRef } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
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
import Dynamic from "./pages/Dynamic";
gsap.registerPlugin(ScrollTrigger);

const App = () => {
  const lenisRef = useRef(null);
  const location = useLocation();
  const containerRef = useRef(null);

  // Set up Lenis smooth scrolling
  useGSAP(() => {
    lenisRef.current = new Lenis({
      duration: 1.5,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // تیز تر اور ہموار ایزنگ
      smooth: true,
      wheelMultiplier: 0.8, // اسکرول کی رفتار میں معمولی اضافہ
      touchMultiplier: 1.2,
      smoothTouch: true,
      touchInertiaMultiplier: 0.8,
      infinite: false,
      stopScroll: true, // اسکرول کے آخر میں جٹر کو روکنے کے لیے
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
  
  // Handle page transitions with GSAP
  useEffect(() => {
    if (containerRef.current) {
      // Timeline for page transition
      const tl = gsap.timeline();
      
      // Fade out
      tl.to(containerRef.current, {
        opacity: 0,
        duration: 0.3,
        onComplete: () => {
          // Force React to rerender at this point
          window.scrollTo(0, 0);
        }
      });
      
      // Fade in
      tl.to(containerRef.current, {
        opacity: 1,
        duration: 0.3
      });
    }
  }, [location.pathname]);

  return (
    <div ref={containerRef}>
      <Routes>
        <Route path="/" element={<Home lenis={lenisRef.current} />} />
        <Route path="/about" element={<About />} />
        <Route path="/group" element={<Group />} />
        {/* <Route path="/dynamic" element={<Dynamic />} /> */}
        <Route path="/Projects/:projectId" element={<Dynamic />} />
        <Route path="/Projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
};

export default App;