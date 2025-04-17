import React, { useRef } from "react";
import { Routes, Route } from "react-router-dom";
import Lenis from "@studio-freight/lenis";
import Home from "./pages/Home";
import { About } from "./pages/About";
import Projects from "./pages/Projects";
import Services from "./pages/Services";
import { useGSAP } from "@gsap/react";

const App = () => {
  const lenisRef = useRef(null);

  // Set up Lenis smooth scrolling
  useGSAP(() => {
    lenisRef.current = new Lenis({
      duration: 1.2,
      easing: (t) => 1 - Math.pow(1 - t, 2),
      smooth: true,
    });

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
      <Routes>
        <Route path="/" element={<Home lenis={lenisRef.current} />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Services />} /> {/* Updated from /contact-us */}
      </Routes>
    </>
  );
};

export default App;
