import React, { useEffect, useRef } from "react";
import "../Styles/Aboutcounter.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Aboutcounter() {
  const counters = useRef([]);
  const aboutCounterRef = useRef(null);

  useEffect(() => {
    const targetNumbers = [150, 200, 23];

    const animateCounter = (index, target) => {
      let current = 0;
      const increment = target / 70;
      const interval = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(interval);
        }
        if (counters.current[index]) {
          counters.current[index].textContent = `${Math.floor(current)}+`;
        }
      }, 20);
    };

    // GSAP ScrollTrigger to start animation when the component enters the viewport
    ScrollTrigger.create({
      trigger: aboutCounterRef.current,
      start: "top 80%", // Start animation when the top of the component is 80% down the viewport
      onEnter: () => {
        // Start counter animations
        targetNumbers.forEach((target, index) => {
          animateCounter(index, target);
        });
      },
    });
  }, []);

  return (
    <div className="Aboutcontainer" >
      <div className="Aboutcounter" ref={aboutCounterRef}>
        <img src="/Assets/Frame 842.png" alt="" />
        <div className="counterbox">
          <h1 ref={(el) => (counters.current[0] = el)}>0</h1>
          <p>
            Projects Successfully <br />
            Completed
          </p>
        </div>
        <div className="counterbox">
          <h1 ref={(el) => (counters.current[1] = el)}>0</h1>
          <p>
            Skilled Employees Across <br />
            Divisions
          </p>
        </div>
        <div className="counterbox">
          <h1 ref={(el) => (counters.current[2] = el)}>0</h1>
          <p>
            Years Of Continuous <br />
            Performance & Growth
          </p>
        </div>
      </div>
    </div>
  );
}

export default Aboutcounter;
