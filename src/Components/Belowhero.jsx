import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import "../Styles/Belowhero.css";

gsap.registerPlugin(ScrollTrigger);

function Belowhero() {
  const numberRefs = useRef([]);
  const textRefs = useRef([]);
  const sectionRef = useRef(null);
  const belowLeftRefs = useRef([]);
  const belowtop = useRef([]);

  useGSAP(() => {
    // Counter animation function
    const animateNumber = (el, target) => {
      gsap.fromTo(
        el,
        { innerText: 0 },
        {
          innerText: target,
          duration: 2,
          snap: { innerText: 1 },
          onUpdate: () => {
            el.innerText = Math.floor(el.innerText) + "+";
          },
        }
      );
    };

    // Create a timeline for synchronized animations
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });

    // Add animations to the timeline
    tl.fromTo(
      numberRefs.current,
      { y: 100, opacity: 0 },
      {
        y: 0,
        opacity: 1,
        duration: 1.2,
        delay: "-0.2",
        stagger: 0.2,
        ease: "ease",
        onComplete: () => {
          numberRefs.current.forEach((ref, index) => {
            const targets = [200, 570, 6];
            animateNumber(ref, targets[index]);
          });
        },
      }
    )
      // Add staggered animation for belowleft text elements
      .fromTo(
        belowtop.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
        },
        0
      )
      .fromTo(
        belowLeftRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.25,
          ease: "power2.out",
        },
        0
      )
      .fromTo(
        ".belowright",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        0
      )
      .fromTo(
        ".aboutbox",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        0
      )
      .fromTo(
        ".aboutbox2",
        { y: 100, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.85,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        0
      )
      .fromTo(
        textRefs.current,
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          delay: 0.5,
          duration: 0.8,
          stagger: 0.2,
          ease: "power2.out",
        },
        0
      );
  }, []);

  return (
    <div className="belowhero" ref={sectionRef}>
      <div className="belowtoprow">
        <img src="Assets/Line 1.png" alt="" />
        <span>
          <p ref={(el) => (belowtop.current[0] = el)}>01</p>
          <h6 ref={(el) => (belowtop.current[1] = el)}>About</h6>
        </span>
      </div>
      <div className="belowcenter">
        <div className="belowleft">
          <h3 ref={(el) => (belowLeftRefs.current[0] = el)}>
            Since our inception in 2000, Jeikor has earned its place
            <br /> as a premier contracting company in the UAE.
          </h3>
          <h3 ref={(el) => (belowLeftRefs.current[1] = el)}>
            With over 200 successfully executed projects across residential,
            commercial, industrial, and hospitality sectors, we are trusted by
            clients for our commitment to timely delivery, quality
            craftsmanship, and operational excellence.
          </h3>
          <h3
            className="textbold"
            ref={(el) => (belowLeftRefs.current[2] = el)}
          >
            Welcome to Jeikor GP., a leading heavy civil <br /> construction
          </h3>
        </div>
        <div className="belowright">
          <h1>
            Your Partner in Heavy & Civil Construction <br />
            Dubai, UAE
          </h1>
          <div className="flex">
            <div className="aboutbox">
              <img src="Assets/Rectangle 21.png" alt="" />
            </div>
            <div className="aboutbox2">
              <div className="aboutbox">
                <h4 ref={(el) => (numberRefs.current[0] = el)}>0+</h4>
                <p ref={(el) => (textRefs.current[0] = el)}>
                  Completed Projects
                </p>
              </div>
              <div className="aboutbox">
                <h4 ref={(el) => (numberRefs.current[1] = el)}>0+</h4>
                <p ref={(el) => (textRefs.current[1] = el)}>Employees</p>
              </div>
              <div className="aboutbox">
                <h4 ref={(el) => (numberRefs.current[2] = el)}>0+</h4>
                <p ref={(el) => (textRefs.current[2] = el)}>
                  Operational Divisions
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Belowhero;
