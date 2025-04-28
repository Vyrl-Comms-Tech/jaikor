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
  const lineRef = useRef(null); // Add this new ref

  useGSAP(() => {
    // ! house svg

    // ... existing GSAP line animation code ...

    // Animate house svg
    const houseSvg = sectionRef.current.querySelector(".house-svg");
    if (houseSvg) {
      const svgPaths = Array.from(houseSvg.querySelectorAll("path")); // Convert NodeList to Array
      svgPaths.forEach((p) => {
        const length = p.getTotalLength ? p.getTotalLength() : 0;
        gsap.set(p, {
          strokeDasharray: length,
          strokeDashoffset: length,
          fillOpacity: 0,
        });
      });
      // Create stroke animation
      gsap.to(svgPaths, {
        strokeDashoffset: 0,
        duration: 0.4,
        stagger: 0.1,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".belowhero", // Changed trigger to match your component
          start: "top-=8% bottom",
          end: "bottom center",
          toggleActions: "play none none reverse",
          markers: false,
          markers:true
        },
      });

      // Create fill animation
      gsap.to(svgPaths, {
        fillOpacity: 1,
        duration: 0.5,
        stagger: 0.01,
        ease: "power4.inOut",
        scrollTrigger: {
          trigger: ".belowhero", // Changed trigger to match your component
          start: "top center",
          end: "bottom center",
          toggleActions: "play none none reverse",
        },
        delay: 0.5,
      });
    }

    // Add line drawing animation
    gsap.set(lineRef.current, {
      strokeDasharray: lineRef.current.getTotalLength(),
      strokeDashoffset: lineRef.current.getTotalLength(),
    });

    gsap.to(lineRef.current, {
      strokeDashoffset: 0,
      duration: 1.25,
      ease: "power2.inOut",
      scrollTrigger: {
        trigger: ".belowhero",
        start: "top center",
        toggleActions: "play none none reverse",
      },
    });
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
        { x: "-50", opacity: 0 },
        {
          x: 0,
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
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1787"
          height="30"
          viewBox="0 0 1787 30"
          fill="none"
        >
          <path
            ref={lineRef}
            d="M0 1L108.837 1L148.226 28.8406L1787 28.8406"
            stroke="#111E57"
            strokeWidth="0.4"
          />
        </svg>
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
              {/* <img src="Assets/Rectangle 21.png" alt="" /> */}
              <svg
                className="house-svg"
                xmlns="http://www.w3.org/2000/svg"
                version="1.1"
                viewBox="0 0 1800 876"
              >
                <path
                  transform="translate(744,210)"
                  d="m0 0h101l2 4v85l1 5h55l-1-78 1-7 3-2 10 6 10 7 14 10 5 4 7 4 8 5v2l5 2 11 8 11 7 10 7 11 7 5 4 1 2 1 107 1 1h21l1-15 4-4 22-1 1-15 2-3 23-1 1-25 3-2h24l3 2 1 25 37 1 1 1 1 9v92h5l6-2v-2l16-8 5-3 5-2 30-16 6-3 4-4 1-16 2 1 1 59 43-1 1-90 4-4 18-7 8-4 4-1 1-73 2-2h16l2 2 1 62 3 1 14-6 5-2h6l1 1v126l141 1 2 6v53l1 24 2 1h74l2-1 1-25 5-3h72l3 3 1 117 5 3 17 3 11 1 7 3 1 2v136l-1 2h-3l-1-5v-38l-1-93-5-3-30-5-2-1-15-2-17-3-12 2-6 2-11 2-25 5-13 3-12 2-5 3-1 130h-4v-234h-9l-1 234h-3l-1-4v-68l-1-162-9-1-1 235h-2l-1-227-1-7h-8l-1 188v44l-1 2h-3l-1-322-138 1v321h-3l-1-1-1-444-1-2-9 3-16 6-11 5-16 6-10 4-12 5-1 1v82l-1 10-5 2h-41l-5-3v-38l-5 1-19 10-9 5-12 7-16 8-13 7-3 2v322l-4 2-1-1v-329l-1-100h-35l-3-3v-23l-1-1h-20l-1 23-2 3-7 1h-14l-2 1v13l-2 5-2 1-24 1v13l-2 5-1 1-24 1-1 390-4-1-1-1v-502l-10-8-11-7-14-10-15-10-13-9-19-13-15-10-3-1-1 80h40l21 1 1 1v489h-4l-1-52v-434l-1-1h-116l-1 2v483l-1 2-3-1-1-199v-378l-2-3h-72v381h36l30 1 1 1v197l-3 2-1-5v-191l-3-1h-134l1 194-3 3-1-1v-41h-3l-4 7-7 6-15 1-7 2v24h-4v-23l-11-6h-5l-2 2-14 1-8 3v22l-2 3h-2l-1-2v-24l-6-2-5-3-12-1-7-6-4-6-5-6v-10l4-5 1-10 3-4-2-1-19 1-1 6-2 4-2-1v-11l2-2 41-1 5-3 8-2 10 3 5 4h13l9-5 3-1h9l8 4 5 3h7l7 3 6 7 1 9 2-1v-402l-1-1-7-1-1 358h-3l-1-5v-351l-1-1h-9l-1 10v346l-4 1-1-356-1-1h-8l-1 1-1 356h-3l-1-5v-347l-1-5h-9l-1 1-1 356h-2l-1-357-11-1-2-1-1-3v-38l-1-1h-71l-2 1v10l1 4v22l-1 3-1 107v209l1 42-1 37v73l-3 2-1-1-1-48v-101h-170l-1 149h-3l-1-1v-361l-1-65h-111l-1 1v340l5 2 7 2 5-2 8-4h8l14 7 3 1 7-2 5 5h2l2-5 4 1v8l-3 1 2 8 6 10 1 6h-2l-2 5-9 10-6 5-14 1-8 2v24l-3 1-1-4v-11l1-10-10-3-15 1-7 3-1 24-4-1-1-4v-19l-10-6-12-1-8-6-4-7-5-7v-5l-1-1-21-1-2-1v-11l1-1 29-1 1-4 2-2-1-1-30-1-2-2v-10l1-1 49-1h13l1-7h-46l-16-1-2-2v-10l2-2 60-1 1-5-2-1-59-1-2-2v-10l2-2 60-1 1-5-1-1-59-1-3-3v-9l5-3h48l10-1v-6l-61-1-2-2v-10l3-2h52l8-1v-5l-1-1-60-1-2-2v-10l4-2h57l2-1v-5l-1-1-60-1-2-2v-10l1-1 61-1 1-1v-5l-1-1-61-1-1-1v-10l2-2 17-1h43l2-7-62-1-2-2v-10l3-2 59-1 1-5-2-1-59-1-2-2v-10l1-2 62-1v-5l-2-1-59-1-2-2-1-8 2-4 2-1 59-1 1-7h-74v323l-1 2h-3l-1-2-1-52 1-186-10 3-9 4-7 2-23 9-9 3-19 7-10 5v205l-1 2h-4v-209l6-4 15-5 10-4 19-7 8-3 14-5 15-6 4-2 1-30v-49l1-3 2-1 75-1 1-18v-83l3-3 11-1h102l2-1 1-66 3-4h16l3 2 1 35 5 4v2l4 2 4 5 1 14v287h41v-270l5-5 23-10 11-5 13-5 3-2h5l24 22 3 4v239l1 31 9 1v-276l1-83 2-2h80l2 3 1 41 3 1h65l3 2 1 266 2 1h43l2-6v-376zm3 3-1 3v378l2 2h15l1-1v-381l-1-1zm580 75-3 2v68l4 1 8-4 2-4-1-62-2-1zm-960 6-1 1v346l1 1h13l1-2v-342l-1-3-2-1zm18 38-1 1v308l1 1h7l2-1 1-11v-122l-1-168-4-5-3-3zm110 16-10 5-10 4-13 6-12 5-6 4v268l2 2h76l1-1v-270l-7-8-9-9-7-6zm-261 134-49 1-2 3 1 4 3 1h54l2-2-1-6zm-49 23-2 2 1 5 1 1h56l2-2-1-5-1-1zm0 22-2 2 1 6h58l1-1v-5l-4-2zm1415 3-2 2-1 25-1 2-12 1-1 6v86l1 1h8l2-1 1-5v-6h2l1 9 3 1 19-4 2-1 12-2 2-1h8l6 2 19 2v-116l-1-1zm-1415 19-2 2 1 6 1 1h56l2-1v-7l-2-1zm1373 11-2 2v95l1 2h7l2-1v-97l-1-1zm13 0-2 3v92l1 1h8l2-1 1-7v-86l-2-2zm-1386 11-2 1v6l2 2h56l2-1v-7l-1-1zm-1 22-1 7 4 2h54l2-2v-6l-1-1zm1 22-2 3 1 5 3 1h54l2-2v-6l-1-1zm0 22-2 3 1 5 4 1h53l2-2-1-6-13-1zm0 23-2 2 1 5 1 1h56l2-2-1-5-5-1zm0 22-2 2 1 6h58l1-1v-5l-3-2zm0 22-2 2 1 6 4 1h40l8-4 6-2-1-3zm53 7-7 3-3 2-11 2-5 6v7l-5 6v8l8 10 3 4h2v2l2 1 13 1 4 3 5-1 1-5-5-6-8-7-4-4h-2l1-2 14 12 4 1-1-4-5-10-10-9 3-1 5 7 5-1 4-5v-8l3-5 3-4-7-3zm363 0-9 4-3 2-10 1-4 4v8l-5 7v8l8 10 1 3 7 4 12 1 4 3 4-1 1-5-4-6-11-9h-2l-1-3 4 2 4 4h3v2l7 4 1-3-3-7-13-13h3l8 9 3-1 1-5h2l1 5v6h4l3-6 3-1-4 7-5 7-1 3v9l4 2 5-1h10l7-4 5-7 5-4 1-2v-7l-7-9-3-11-4-3-13-1-6-4-7-2zm44 0-8 4v4l3 4 2 6 2 5 5 5 3 1v-6l2-1 1 13h3l3-6v-2h3l-5 10-4 5-1 9 1 4 19-1 7-4 4-6 6-7 1-5-3-6-4-4-3-12-5-3-12-1-9-5-3-1zm-369 0-8 3-5 3-11 1-4 7v6l-5 6v7l4 6h2l2 5 5 5 3 2 12 1 4 3 4 1 2-2v-6l-11-10-8-7h3 2l1 3 7 6h2l1 3 3-1v-6l-5-6-8-7-3-5 5 3 8 8h3v-5l2-1v9l2 4 4-5 1-3 3-1-4 8-5 8v12l15-1 7-1 5-5 8-9 1-8-2-5-4-4-3-11-6-4-11-1-7-4zm-91 15-2 2v5l2 2h18l4-1 2-3v-4l-3-1zm465 22-2 5h4l-1-5zm-6 5-4 5 1 4 6 4 4-1 1-6-7-6zm-396 5v6l1 1h5l1-3-4-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(14,800)"
                  d="m0 0h1758l1 2-25 1h-1732l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,705)"
                  d="m0 0h30l-1 4h-22l1 3 3 2 11 1 10-2 13-6 10 2 9 5h11l5 4 2 1 2-5 3 1-1 15 4 6 3 1 1-2h4v10l-4 2-7 8-6 8-5 4-14 1-7 3-1 23-3 2-2-2v-24l-6-2-5-3h-12l-3 2-14 1-7 3-1 24h-3l-1-1v-24l-4-1-7-4-13-1-7-6-2-5-7-8v-9l5-5v-7l3-7 3-3 4 1 4-2 8-2 6-3 9-2zm-8 6-7 3-5 3-10 1-4 4-1 9-5 7v6l7 9 4 6 5 3 12 1 4 3 5-1 1-5-5-6-8-7-5-4-1-2 6 4 11 9 2-1v-6l-9-10-5-4-2-4 6 4 6 7 4-1v-5h2l1 12 4-1 2-5h3l-3 4v3l-3 1-3 6-1 9 2 3 14-1 7-1 5-5 3-5 5-4 2-7-8-12-2-9-5-4-12-1-8-5zm53 0-8 3-8 4 1 4 5 8 5 1 2 4 4 5 3-1 1-5h3v11h4l4-7 1 3-7 10-2 4v8l2 3 20-2 2-1v-2l4-2 4-6 5-5v-7l-7-9-2-9-4-2v-2l-2-1-12-1-6-4-6-2zm-10 21-1 2h2zm2 3 3 9 4 7 2 2h5v-6l-9-10zm0 16-4 4v2h-2v5h7l7 4h4l2-5-4-6-5-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(210,252)"
                  d="m0 0h13l7 2 7 3 9 6 8 2 9 6 1 3 6-2h26l10 3 13 8 11 4 5 6 1 3h-4l-2-4-6-3-7-1-7-6-9-4-8-2h-17l-12 2-5-5-4-3-11-3-6-5-11-5-4-1h-9l-9 1-12 5-5 4-12 2-5 5-3 6-1 1-15 2-8 6-5 8-3-1 2-6 6-8 8-4 12-4 4-5 5-4 11-2 6-3 13-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(460,373)"
                  d="m0 0h3v264l-3-1-1-262z"
                  fill="#00000080"
                />
                <path
                  transform="translate(475,373)"
                  d="m0 0h3v263l-3-1-1-260z"
                  fill="#00000080"
                />
                <path
                  transform="translate(490,373)"
                  d="m0 0 3 1v261l-3 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1143,188)"
                  d="m0 0h18l14 7 6 4 9 2 8 7 8 1 7-1h14l10 2 7 3 8 6 11 3 6 5 2 5-3 1-4-6-12-4-5-4-13-6h-28l-7 1-2-4-3-1v-2l-6-2-7-1-10-7-10-4-11-2-13 3-12 7-4 2-11 2-3 1-2 5-3 5h-8l-10 3-4 4-6 9h-3l2-6 6-8 8-5 3-1h10l2-5 5-5 6-3 9-1 8-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(653,139)"
                  d="m0 0h13l14 5 8 6 5 2 7 2 9 7 12-1h15l10 2 10 5 3 2v2l10 2 7 4 3 4-1 3h-2l-4-6-13-4v-2l-4-2-5-3-10-3h-23l-10 1-6-6-6-3-8-2-9-6-6-3-5-1h-13l-9 2-11 6-5 3-10 1-4 3-3 6-3 3h-8l-9 3-7 7-2 5-3 1 1-6 6-8 5-4 7-3 9-2 6-7 8-4 10-2 11-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(505,373)"
                  d="m0 0 3 1v261l-3 1-1-262z"
                  fill="#00000080"
                />
                <path
                  transform="translate(913,60)"
                  d="m0 0h9l13 4 11 7 2 2 9 2 8 6 1 1h34l8 3 10 6 3 2 9 3 5 4 2 5-4-1-4-5-11-3-8-6-14-5h-18l-12 2-6-5v-2l-5-2-9-2-10-7-8-3-12-1-12 2-11 6-5 3-11 1-5 6-4 6-16 2-5 2-6 12h-3l1-4 3-6 9-8 9-3 7-1 3-5 6-5 14-3 5-3 7-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1490,267)"
                  d="m0 0 9 1 9 2 10 6 4 3 7 1 9 6 2 4 17-2 18 1 8 3 11 7 9 3 6 4 3 6h-4l-2-4-6-3-7-2-5-3v-2l-6-2-7-3-5-1h-21l-8 2-8-7-9-3-5-2-8-6-6-3-16-1-10 2-12 6-5 3-11 1-5 6-3 6-14 1-7 4-7 10h-2l1-5 1-3 8-7 5-3 13-2 4-6 4-4 15-4 14-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1345,83)"
                  d="m0 0h10l9 2 9 5 4 3v2l9 1 6 3 7 6 10-2h16l9 2 10 4 6 5 11 3 5 4 2 3v4h-2l-4-5v-2l-12-3-11-7-13-4h-16l-9 2-5-1-6-6-12-4-10-7-7-3-12-1-11 1-16 8-2 2-11 1-3 3h-2l-1 5-3 4-14 1-6 4-5 5-3 6h-2l1-6 6-8 6-4 16-4 3-5 6-5 12-2 10-6 8-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(455,105)"
                  d="m0 0 13 1 9 4 8 6 13 4 7 7 6-1 5-1h19l15 5 8 6 10 3 7 6v5h-2l-2-4-6-4-7-1-10-7-7-3-10-2h-12l-6 1h-10l-8-7-10-3-14-9-9-2-16 1-9 4-10 6-10 1-5 4-3 7-2 1-13 1-8 5-4 6-1 4-4-1 2-6 4-6 8-5 7-2 7-1 6-8 5-3 10-1 6-4 13-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1587,709)"
                  d="m0 0 5 2 10 6 7 4 3 4v33l4 4 1 22v10h-4l-1-29h-6l-1 2v28h-3l-1-2v-28l5-5v-36l-8-5-5-3v9l5 5 2 4-5-1-2-1v2l4 2 1 6-4 3h-6l-3-4 1-5 3-4-5 2-1-2 2-3 3-1 1-3v-11l-2-2zm3 28-1 5 2 1 3-2-1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(892,710)"
                  d="m0 0h5l7 5 9 5 4 4 1 34 5 5v32l-4-1v-29h-7l-1 30h-3v-32l4-4 1-20v-14l-3-3-10-5v10l5 4v2h-6l5 5-2 6-7 1-4-4v-6l-2-1 2-4 4-2v-14l-3-3zm3 27-1 3 3 3 3-1-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(445,710)"
                  d="m0 0h5l10 6 9 6 1 7v29l1 2 4 2v33l-3-1v-28l-1-1h-6l-1 3v25l-1 2h-2v-33l4-3 1-7-1-28-2-2-5-2-6-3 1 11 5 3-1 3-5-2 5 6-1 4-3 3-4 1-6-5 1-4 5-5h-3v2h-4l2-5 4-4v-11l-3-2zm3 28 1 4h3v-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,653)"
                  d="m0 0h107l3 2 1 10-4 1-2-7h-104v6l-4 1-1-6 2-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(384,691)"
                  d="m0 0h92l45 1v4h-138l-1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(799,614)"
                  d="m0 0h3v138l-4-1-1-135z"
                  fill="#00000080"
                />
                <path
                  transform="translate(725,614)"
                  d="m0 0 3 1v137h-4l-1-7 1-130z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,614)"
                  d="m0 0 3 1v136h-4v-136z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,517)"
                  d="m0 0h70l2 1 1 4v7l-3 3-25 1h-43l-4-3v-12zm5 2-3 2v6l2 2 62 1 4-4-2-6-5-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(871,566)"
                  d="m0 0h68l3 1 1 6v6l-3 3h-69l-3-2v-12zm4 3-3 3 1 6 1 1 62 1 3-3-1-7-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,690)"
                  d="m0 0h70l3 2v11l-4 2h-67l-4-2v-11zm5 3-3 1v7l1 1h65l1-5-2-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(872,640)"
                  d="m0 0h68l3 4v10l-1 1-66 1-7-1-1-1v-11zm1 4-1 1v7l1 1h64l2-4-1-4-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,537)"
                  d="m0 0h107l4 3v8l-3 2-2-1v-7h-105v6l-4 1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,369)"
                  d="m0 0h70l3 3v10l-3 2h-68l-4-2v-11zm5 3-3 2v5l2 2h64l1-7-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,319)"
                  d="m0 0h69l4 3v9l-4 4h-67l-4-2v-12zm3 4-2 3 1 5 2 1h63l2-2v-6l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(871,665)"
                  d="m0 0h68l4 3v9l-2 3h-71l-2-2v-11zm64 3-62 1-1 1v7l2 1h63l2-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,490)"
                  d="m0 0h106l3 1 1 2v9l-4-1-1-7-102 1-3 8-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(871,344)"
                  d="m0 0h67l5 3v8l-2 4h-71l-2-1v-12zm64 3-63 1-1 3 2 5 1 1h63l2-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(869,493)"
                  d="m0 0h72l2 3v9l-4 3h-68l-3-3v-11zm4 2-1 1v7l1 1 63 1 3-3v-5l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,394)"
                  d="m0 0h70l3 2v9l-4 4h-67l-4-2v-12zm4 3-2 1v7l2 1h63l2-2v-5l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(872,443)"
                  d="m0 0h68l3 3v10l-2 2-56 1h-13l-4-3v-11zm1 3-1 1v6l2 2h63l2-2v-6l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,468)"
                  d="m0 0h70l3 3v9l-3 3h-70l-2-2v-12zm5 2-3 2v5l2 2 31 1h31l3-2v-6l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(872,615)"
                  d="m0 0h27l41 1 3 3v8l-1 3-2 1h-70l-2-1v-12zm2 4-2 2v6l2 2h63l2-2v-6l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,591)"
                  d="m0 0h70l3 3v11l-1 1-63 1-10-1-1-1v-12zm4 3-2 2v6l2 2h63l2-3-1-6-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(872,418)"
                  d="m0 0h29l40 1 2 4v8l-3 2h-71l-1-2v-11zm3 3-3 2v6l1 1h65l1-1v-6l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(870,542)"
                  d="m0 0h71l2 3v9l-3 3-54 1-16-1-2-2v-11zm4 2-3 4 2 5 1 1h63l2-2-1-7-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,607)"
                  d="m0 0h107l4 4-1 8h-4l-1-8h-78l-24 1-2 7h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1388,700)"
                  d="m0 0h106l4 4v7l-4 2-3-8h-101l-3 8-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(706,615)"
                  d="m0 0 3 1v136l-3 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1386,631)"
                  d="m0 0h109l2 1 1 9-1 2-4-1-1-7h-103l-1 7-4 1-1-6 2-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(744,614)"
                  d="m0 0 2 1v137h-3l-1-136z"
                  fill="#00000080"
                />
                <path
                  transform="translate(383,672)"
                  d="m0 0h138l-1 3h-137z"
                  fill="#00000080"
                />
                <path
                  transform="translate(818,614)"
                  d="m0 0 2 1v137h-3v-137z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1386,724)"
                  d="m0 0h109l2 1 1 8-1 3-4-1-1-7-4-1-98 1-3 8h-3v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,514)"
                  d="m0 0h107l3 2 1 7-1 3-4-1-1-7h-103l-1 7h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(762,614)"
                  d="m0 0 2 1v137h-2l-1-7v-129z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1404,560)"
                  d="m0 0h90l4 4-1 9-4-1-1-7-1-1h-100l-2 1-1 7h-4l-1-4 2-6 1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1387,584)"
                  d="m0 0h107l3 2 1 8-4 2-3-8h-100l-2 1-1 6h-4l-1-3 2-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1386,748)"
                  d="m0 0h110l2 4v5l-3 2-2-1-1-6-3-1h-73l-27 1-2 6h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1388,677)"
                  d="m0 0h101l7 1 2 3v6l-1 2h-4l-1-7-1-1h-103v7l-4 1v-9l1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(782,278)"
                  d="m0 0h46l2 1v3l-2 1-45 1-2 7-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,333)"
                  d="m0 0h56v4l-53 1-1 2v6l-4 1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,313)"
                  d="m0 0h56v3l-1 1h-49l-4 2-1 9h-3v-14z"
                  fill="#00000080"
                />
                <path
                  transform="translate(781,302)"
                  d="m0 0h46l3 1v3l-2 1-45 1-2 7-3-1-1-5 3-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,433)"
                  d="m0 0h56v4l-53 1-1 5-1 4-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(552,553)"
                  d="m0 0h55v4h-50l-4 2v6l-1 2-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,673)"
                  d="m0 0h56v4h-50l-4 1v8h-4v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(552,613)"
                  d="m0 0h55v4h-51l-3 2-1 7-2 1-1-2v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(783,495)"
                  d="m0 0h43l4 2-3 3-44 1-2 7-3-1v-8l2-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,453)"
                  d="m0 0h54v4l-54 1-1 9-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,493)"
                  d="m0 0h56v4h-33l-20 1-1 1-1 8-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1093,506)"
                  d="m0 0h14l3 3v13l-3 3h-15l-3-3-1-9 2-6zm2 4-3 2v7l2 2h11l1-1v-9l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(785,471)"
                  d="m0 0 44 1v3l-2 1-44 1-2 7-3-1v-9l2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,393)"
                  d="m0 0h54v4l-53 1-2 9-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,721)"
                  d="m0 0h15l3 3v12l-4 4h-14l-3-2-1-4 1-11zm10 3-8 1-2 4 1 6 1 1 10 1 2-2v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1037,506)"
                  d="m0 0h11l4 2 1 2v11l-4 4h-15l-2-2-1-10 2-6zm7 3-8 1-1 2v7l1 2 10 1 3-2 1-7-4-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(552,373)"
                  d="m0 0h55v4h-51l-3 2v6l-1 2-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1064,697)"
                  d="m0 0h14l3 2 1 8-1 7-2 1h-17l-2-1-1-9 2-6zm2 4-2 2v8l4 2h7l2-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,721)"
                  d="m0 0h15l3 1 1 3v11l-4 4h-14l-3-2v-16zm3 3-2 3v7l1 2 9 1 4-2v-9l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1064,506)"
                  d="m0 0h13l4 3v13l-3 3h-15l-3-3v-13zm2 3-2 2v8l1 2 11 1 2-5-1-6-3-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1093,697)"
                  d="m0 0h14l3 3v13l-2 2h-18l-1-1v-14l1-2zm2 4-3 2 1 8 1 1 10 1 2-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1064,578)"
                  d="m0 0h14l3 3 1 9-2 5-2 1h-15l-3-2v-13zm1 4-1 1v9l1 1h11l1-1 1-8-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1062,626)"
                  d="m0 0h17l2 2v14l-2 2h-16l-4-4 1-12zm4 2-2 2v9l4 2h8l2-5-1-7-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,602)"
                  d="m0 0h16l3 3v12l-3 3h-16l-2-1-1-7 1-8zm3 3-2 2v8l1 2h11l3-5-2-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1046,530)"
                  d="m0 0 6 2 1 2v12l-5 3h-14l-3-5 1-12 1-1zm-10 3-1 1v10l1 1h10l3-2v-7l-3-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1063,411)"
                  d="m0 0h15l3 2v14l-2 2-13 1-5-2-1-1v-13zm3 3-2 3v7l1 2h11l2-4-1-6-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,435)"
                  d="m0 0h15l3 2v13l-3 3h-16l-2-2-1-11 2-4zm2 3-2 7v4l13 1 1-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,435)"
                  d="m0 0h15l3 1 1 2v12l-3 3h-16l-3-4v-7l2-6zm2 3-1 1v9l1 1 10 1 3-1v-10l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1035,697)"
                  d="m0 0h13l5 3v12l-2 3h-18l-1-1-1-11 2-5zm1 4-1 2v9l3 1h8l3-3v-7l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1063,602)"
                  d="m0 0h16l2 2v14l-3 2h-16l-2-2v-13zm3 3-2 2-1 7 2 3h7l3 1 3-4v-6l-2-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1093,578)"
                  d="m0 0h15l2 3v13l-2 2h-16l-3-2-1-10 2-5zm0 4-1 1v8l2 2h12v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,578)"
                  d="m0 0h16l3 3v13l-4 2h-15l-2-1-1-9 2-7zm2 4-1 1v9l1 1h11l2-2v-8l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1035,459)"
                  d="m0 0h14l3 1 1 2v12l-5 3h-11l-5-2-1-7 1-7zm2 3-2 1v9l2 2 11-1 1-1v-8l-5-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(551,653)"
                  d="m0 0h56v3l-53 1-2 10-3-1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,411)"
                  d="m0 0h16l2 3v12l-2 3-5 1h-10l-4-3v-14zm4 3-4 3v7l3 2h10l1-1v-10l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1091,626)"
                  d="m0 0h17l2 3v12l-2 3h-16l-3-2v-14zm3 3-2 2v7l2 2 11 1 1-1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1123,506)"
                  d="m0 0h11l4 2 1 4v9l-1 3-2 1h-15l-3-2v-15zm-1 4-1 2v8l1 1h13l1-2v-7l-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(604,513)"
                  d="m0 0 4 2-1 2h-54v7l-1 3-3-1v-10l2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,411)"
                  d="m0 0h15l4 4v11l-5 4h-13l-3-2-1-9 2-7zm3 3-2 2v8l1 2h12l2-3-1-7-3-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,602)"
                  d="m0 0h16l2 3v12l-2 3h-17l-2-2v-14zm4 3-4 2v8l2 2h12v-10l-3-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,533)"
                  d="m0 0h54v3l-53 1-1 8-3 2-1-1v-10l1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,483)"
                  d="m0 0h16l3 3v11l-4 4h-15l-2-2-1-10 2-5zm8 3-7 2v9l1 1h11l3-4v-6l-5-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1064,459)"
                  d="m0 0h13l4 2 1 9-2 6-7 1h-7l-5-2-1-1v-13zm2 3-2 1v9l2 2h9l2-1v-10l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,650)"
                  d="m0 0h16l2 4v11l-4 3h-13l-4-2-1-7 1-7zm2 3-2 2v8l2 1h11l1-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1063,650)"
                  d="m0 0h15l4 4-1 11-2 2-12 1-6-2-1-1v-13zm11 2-9 1-1 1v9l1 1h11l2-3-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1062,483)"
                  d="m0 0h17l2 2 1 11-2 4-4 1h-12l-4-3-1-10zm11 3-9 1-1 2 1 8 2 1h10l2-3v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1091,459)"
                  d="m0 0h16l3 2v13l-3 3h-15l-3-2v-14zm5 3-4 2v8l1 1 11 1 2-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1092,387)"
                  d="m0 0h15l3 3v13l-2 2h-17l-2-2v-13zm3 4-3 2v6l2 3 10 1 2-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,327)"
                  d="m0 0h50l-2 4h-36l-9 1-2 7h-3v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1090,531)"
                  d="m0 0h18l2 2v13l-3 3h-14l-4-2v-15zm5 2-3 3v7l3 2h10l2-4-1-7-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1062,674)"
                  d="m0 0h17l3 5v8l-1 3-2 1h-17l-2-2v-13zm4 3-2 1v9l4 2h7l3-2v-8l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,674)"
                  d="m0 0h17l2 2v13l-2 2h-18l-2-6 1-9zm2 3-1 1v9l3 2 11-1v-10l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(552,593)"
                  d="m0 0h55v3l-53 1-2 9-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1121,411)"
                  d="m0 0h15l2 1 1 7-1 9-6 2h-9l-5-3v-14zm3 3-3 2v8l2 2h12l1-8-2-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1064,745)"
                  d="m0 0h11l6 2 1 4-1 10-5 2h-13l-3-2v-14zm1 3-1 1-1 8 4 3h8l3-2-1-9-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,650)"
                  d="m0 0h15l3 1 1 2v12l-2 2-13 1-6-2-1-8 2-7zm2 3-1 1v9l1 1h13l1-2-1-8-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1122,697)"
                  d="m0 0h14l2 1 1 9-1 7-1 1h-18l-1-1v-14l1-2zm0 4-1 1v9l1 1h13l1-8-2-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1062,555)"
                  d="m0 0h17l2 1 1 5-1 9-2 2h-17l-2-2v-13zm6 2-4 2v9l2 1h10l2-4v-6l-4-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1033,555)"
                  d="m0 0h18l2 2v13l-2 2h-17l-2-2-1-11zm4 2-2 2v9l1 1h11l2-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1093,745)"
                  d="m0 0h14l2 1 1 10v5l-2 2h-17l-2-2-1-9 2-6zm1 3-2 1v9l4 2h8l2-1v-10l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1121,721)"
                  d="m0 0h15l2 1 1 9-1 7-6 2h-10l-4-2v-15zm3 3-3 2v9l1 1 12 1 2-3v-7l-1-2-7-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1120,626)"
                  d="m0 0h17l2 4-1 12-2 2h-16l-2-2v-15zm2 3-1 1v9l1 1h13l1-2-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1121,387)"
                  d="m0 0h14l4 4v10l-2 4h-17l-2-1v-15zm1 4-1 1v9l1 1h13l1-9-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1121,602)"
                  d="m0 0h15l2 2 1 12-2 4h-17l-2-2v-14zm1 4-1 1v9l2 1h12l1-9-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1120,435)"
                  d="m0 0h16l2 1 1 14-2 3h-17l-2-2v-14zm2 3-1 1v10l6 1 8-1 1-1v-7l-2-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(386,732)"
                  d="m0 0 44 1v4h-47v-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1090,555)"
                  d="m0 0h18l2 3v12l-2 2h-17l-3-5 1-11zm13 2-10 1-1 1v9l3 1h10l2-3v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(791,254)"
                  d="m0 0 38 1 1 3-47 1-1 7-4 1v-10l2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1034,745)"
                  d="m0 0h14l4 2 1 2v11l-1 2-3 1h-15l-2-2v-14zm2 3-1 1v9l2 2h8l5-2-1-9-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1121,483)"
                  d="m0 0h16l2 3v8l-1 6-4 1h-13l-3-2v-14zm0 4v10l1 1h12l2-2v-8l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,520)"
                  d="m0 0h48l1 3-5 1h-40l-3 8-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,231)"
                  d="m0 0h49v3l-46 1-2 8-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,693)"
                  d="m0 0h54l1 3-54 1-1 4-1 6-3-1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,351)"
                  d="m0 0h48v3l-45 1-1 7-4 1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1119,674)"
                  d="m0 0h18l2 6v8l-2 3h-18l-1-1v-15zm3 3-1 1v10l13 1 2-2v-8l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1120,650)"
                  d="m0 0h17l2 5v9l-2 3h-18l-1-1v-14zm2 3-1 1v9l1 1h13l1-1v-8l-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1656,672)"
                  d="m0 0h41l1 4h-41l-1 5h-4v-6l1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(781,424)"
                  d="m0 0h47v3l-45 1-2 7h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1122,745)"
                  d="m0 0h13l3 1 1 9-1 7-2 1h-14l-4-2v-14zm1 3-2 2v9l9 1 5-1 1-1v-8l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1615,555)"
                  d="m0 0 39 1v4h-41v-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1120,459)"
                  d="m0 0h16l2 1 1 11-2 5-14 1-5-2v-14zm2 3-1 1v10l5 1h8l2-2v-8l-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(781,448)"
                  d="m0 0h46l2 2-1 1-45 1-2 7h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1123,530)"
                  d="m0 0 14 1 1 1 1 10-2 6-14 1-4-1-1-2v-14zm1 3-3 2v9l1 1h12l2-2v-7l-2-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(781,544)"
                  d="m0 0h47v3l-45 1-2 8h-2l-1-4 1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,573)"
                  d="m0 0h54l-1 4h-53v7l-3 3-1-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1119,555)"
                  d="m0 0h18l2 5-1 11-1 1h-17l-2-2v-13zm10 2-8 1v10l1 1h12l2-2v-8l-3-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(550,294)"
                  d="m0 0h57v2l-54 1v9l-3 2-1-1v-12z"
                  fill="#00000080"
                />
                <path
                  transform="translate(554,473)"
                  d="m0 0h52l1 3-54 1v8l-1 2-3-1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1655,686)"
                  d="m0 0h43l-1 3-39 1-2 5h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(553,413)"
                  d="m0 0 54 1v2l-54 1v9h-4v-10l1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1614,602)"
                  d="m0 0h38l2 1v3l-39 1-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(550,354)"
                  d="m0 0h57v2l-54 1v9h-4v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(554,633)"
                  d="m0 0h52v4h-50l-3 1-1 9-3-1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1656,699)"
                  d="m0 0h40l1 3h-40l-1 6h-4v-6l1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(382,713)"
                  d="m0 0h49l-1 3h-47z"
                  fill="#00000080"
                />
                <path
                  transform="translate(485,733)"
                  d="m0 0h35v4h-35z"
                  fill="#00000080"
                />
                <path
                  transform="translate(781,375)"
                  d="m0 0 48 1v2l-46 1-1 8h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,400)"
                  d="m0 0h49l1 2-4 1h-44v7l-1 2h-2l-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1614,571)"
                  d="m0 0h39l2 1v2l-2 1h-39z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1654,713)"
                  d="m0 0h43v3h-39l-3 6-3-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(780,569)"
                  d="m0 0h48v2l-45 1-2 8-3-1 1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1654,740)"
                  d="m0 0h43l1 2-3 1h-38l-1 5h-4v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1656,726)"
                  d="m0 0h41v3l-39 1-3 6-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1613,618)"
                  d="m0 0h41v3h-41z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1250,509)"
                  d="m0 0h28l1 4-7 1-23-1v-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1614,587)"
                  d="m0 0h39l2 1v2h-43v-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1614,541)"
                  d="m0 0h38l2 1v2h-41z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,630)"
                  d="m0 0h29l1 4h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,570)"
                  d="m0 0h30l-1 4h-28z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1250,479)"
                  d="m0 0h28l1 4h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,600)"
                  d="m0 0h29v4h-28z"
                  fill="#00000080"
                />
                <path
                  transform="translate(484,713)"
                  d="m0 0h37l-1 3h-36z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,675)"
                  d="m0 0h30v3l-6 1h-24l-1-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(382,754)"
                  d="m0 0h48l-1 3h-46z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,540)"
                  d="m0 0h30l-1 4h-26l-4-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1250,660)"
                  d="m0 0h28v4h-29z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,615)"
                  d="m0 0h30v3h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,585)"
                  d="m0 0h30v3h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,495)"
                  d="m0 0h30v3h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,645)"
                  d="m0 0h30v3h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,555)"
                  d="m0 0h30v3h-30z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1613,634)"
                  d="m0 0h41l1 2-6 1h-34l-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,525)"
                  d="m0 0h30l-1 3h-29z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1249,691)"
                  d="m0 0h30l-1 3h-29z"
                  fill="#00000080"
                />
                <path
                  transform="translate(485,754)"
                  d="m0 0h35v2h-35z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,726)"
                  d="m0 0 3 2v10l-4 1-1-2v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,706)"
                  d="m0 0 3 2v10l-4 1-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,687)"
                  d="m0 0h2l1 2v10h-4l-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,630)"
                  d="m0 0h3l1 2v9l-3 2-2-2v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,608)"
                  d="m0 0 4 1v10l-3 1-2-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,591)"
                  d="m0 0 4 2v9l-5 1v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,668)"
                  d="m0 0h2l1 2v9l-1 2-4-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,611)"
                  d="m0 0h3l1 2v9l-3 2-2-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,592)"
                  d="m0 0h3l1 2v9l-3 2-2-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,478)"
                  d="m0 0 3 2v10l-4 1-1-3v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,478)"
                  d="m0 0 3 2v10h-4l-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,326)"
                  d="m0 0 4 1v10l-4 1-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,307)"
                  d="m0 0h3l1 2v9l-3 2-2-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,649)"
                  d="m0 0h2l1 2v9l-1 2-3-1-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,466)"
                  d="m0 0h3l1 2v8l-4 2-1-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,460)"
                  d="m0 0 4 1v10l-4 1-1-6v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,402)"
                  d="m0 0 3 2v10l-4 1-1-8 1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,745)"
                  d="m0 0 3 1v10l-4 1-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,630)"
                  d="m0 0 3 1v10l-1 2-3-1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,497)"
                  d="m0 0 3 2v9l-3 2-2-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,288)"
                  d="m0 0 3 1v11h-4l-1-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,711)"
                  d="m0 0 4 1v9l-4 1-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,707)"
                  d="m0 0h4v11l-4 1-1-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,487)"
                  d="m0 0 4 1v9l-4 1-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,441)"
                  d="m0 0 4 1v10l-4 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,745)"
                  d="m0 0 4 1v9l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,643)"
                  d="m0 0 4 1v9l-4 1-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,592)"
                  d="m0 0h3l1 2v9l-3 2-2-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,574)"
                  d="m0 0 4 2v8l-4 2-1-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,555)"
                  d="m0 0 4 1v10l-4 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,745)"
                  d="m0 0 4 2v8l-4 1-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,726)"
                  d="m0 0 3 2v10h-4l-1-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(88,694)"
                  d="m0 0 4 1v9l-4 1-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,574)"
                  d="m0 0 4 1v9l-4 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,555)"
                  d="m0 0 4 1v10l-4 1-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,508)"
                  d="m0 0h4v10h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,487)"
                  d="m0 0 4 1v9h-4l-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,466)"
                  d="m0 0 3 1v10l-5-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,694)"
                  d="m0 0h4v10l-5-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,694)"
                  d="m0 0 4 2v7l-1 2-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,652)"
                  d="m0 0h3l1 2v7l-1 2-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,611)"
                  d="m0 0h4v10h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,549)"
                  d="m0 0 4 1v9h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,536)"
                  d="m0 0 3 1v10l-4 1-1-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,528)"
                  d="m0 0 4 1v8l-1 2-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,528)"
                  d="m0 0 3 1v9l-4 1-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,487)"
                  d="m0 0 4 1v8l-4 2-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,384)"
                  d="m0 0 4 1v10h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,365)"
                  d="m0 0 4 1v10h-4l-1-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,745)"
                  d="m0 0 3 2v9l-4 1-1-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(89,677)"
                  d="m0 0 3 2v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,668)"
                  d="m0 0 4 2v9l-3 2-2-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,652)"
                  d="m0 0h3l1 2v7l-1 2h-3l-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,652)"
                  d="m0 0 3 1v9h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(125,643)"
                  d="m0 0h4l1 7-1 4-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,591)"
                  d="m0 0h4v9l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,523)"
                  d="m0 0 4 1 1 7-4 2-2-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,440)"
                  d="m0 0 3 2v9l-1 2-3-1-1-4 1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,346)"
                  d="m0 0 4 1v8l-1 3-3-1-1-5v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,728)"
                  d="m0 0 3 1 1 5-1 5-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,713)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1354,673)"
                  d="m0 0h4l1 9-4 2-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,611)"
                  d="m0 0h3l1 2v6l-2 3-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,591)"
                  d="m0 0 3 1 1 8-2 3-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,575)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,575)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,549)"
                  d="m0 0 4 2v7l-4 2-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,549)"
                  d="m0 0 4 2v7l-1 2-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,523)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(979,517)"
                  d="m0 0 3 1v10h-4l-1-3v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,506)"
                  d="m0 0h3l1 6-1 3-3 1-2-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,506)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,446)"
                  d="m0 0 4 1v8l-4 2-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,446)"
                  d="m0 0 3 1v9l-3 1-2-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,385)"
                  d="m0 0h4l1 5-2 5-4-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(936,288)"
                  d="m0 0 3 1v11l-3 1-1-2v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1226,611)"
                  d="m0 0 3 1v9h-4l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,608)"
                  d="m0 0 3 2 1 6-2 4-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,574)"
                  d="m0 0 4 1v9l-1 2-3-1-1-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,558)"
                  d="m0 0 4 1v8l-3 1-2-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,523)"
                  d="m0 0h3l1 2v7l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,471)"
                  d="m0 0 3 1 1 5-2 4-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1311,466)"
                  d="m0 0 3 3v7l-3 2-2-3v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,466)"
                  d="m0 0 3 1 1 7-2 4-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,422)"
                  d="m0 0h3l1 7-1 5h-3l-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,694)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,694)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,678)"
                  d="m0 0 3 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,673)"
                  d="m0 0h4v9l-4 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,652)"
                  d="m0 0h3l1 4-1 7h-4v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,644)"
                  d="m0 0 3 1v8l-4 1-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,558)"
                  d="m0 0 4 1v8h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1311,528)"
                  d="m0 0 3 2v7l-1 2h-3l-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,517)"
                  d="m0 0 3 2v8l-1 2h-3l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,506)"
                  d="m0 0 4 1v8h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,489)"
                  d="m0 0h4l1 4-1 5-5-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,488)"
                  d="m0 0h2l1 2v7l-1 2-4-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,471)"
                  d="m0 0 3 1v8l-4 1-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,454)"
                  d="m0 0 3 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,454)"
                  d="m0 0h2l1 2v7l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,425)"
                  d="m0 0 3 1v9h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(978,422)"
                  d="m0 0 4 1v9l-1 2-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,385)"
                  d="m0 0 4 1v7l-4 2-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,385)"
                  d="m0 0 4 1v8h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,384)"
                  d="m0 0 3 2v7l-4 2-1-5 1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,730)"
                  d="m0 0 3 1 1 2v6l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1343,714)"
                  d="m0 0h4v11l-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,711)"
                  d="m0 0h3v11h-4v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,696)"
                  d="m0 0 4 1v7l-4 2-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,678)"
                  d="m0 0 3 1v8l-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(125,678)"
                  d="m0 0h4l1 8-1 2-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,673)"
                  d="m0 0h3l1 9-3 2-2-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,661)"
                  d="m0 0 3 2v7l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,608)"
                  d="m0 0 3 1v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,592)"
                  d="m0 0 4 1v8l-3 1-2-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,558)"
                  d="m0 0 4 1 1 5-2 4-3-1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,549)"
                  d="m0 0h3l1 3-1 8-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,506)"
                  d="m0 0 4 1v6l-2 3-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,488)"
                  d="m0 0 4 2v7l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(316,488)"
                  d="m0 0 3 2v7l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,471)"
                  d="m0 0 3 1v8l-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,425)"
                  d="m0 0 3 1 1 8-4 2-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(922,269)"
                  d="m0 0 3 1v11l-4-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,735)"
                  d="m0 0h3l1 9-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,728)"
                  d="m0 0 3 1v10h-4v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,728)"
                  d="m0 0 3 1v10h-4v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,714)"
                  d="m0 0h3l1 8-2 3-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,711)"
                  d="m0 0h3v11l-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,696)"
                  d="m0 0 4 1v7l-3 2-2-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1343,673)"
                  d="m0 0h4v10h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,661)"
                  d="m0 0 3 1v8l-4 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,660)"
                  d="m0 0h3v11l-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,660)"
                  d="m0 0h3v11l-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,643)"
                  d="m0 0h3v10l-4 1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1354,632)"
                  d="m0 0 5 1v8l-4 1-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,632)"
                  d="m0 0 4 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,627)"
                  d="m0 0 4 1v7l-5 1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,627)"
                  d="m0 0 4 1v7l-1 2-4-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,610)"
                  d="m0 0 4 1v7l-5 1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,592)"
                  d="m0 0h3l1 2v7h-4l-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,575)"
                  d="m0 0 4 1v8h-4l-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,570)"
                  d="m0 0 4 1v7l-3 3-2-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,523)"
                  d="m0 0 3 1v8l-4 1-1-1 1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,508)"
                  d="m0 0h3l1 4-2 7-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,508)"
                  d="m0 0h3l1 7-2 4-3-3v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(337,472)"
                  d="m0 0 5 1v7l-4 1-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1356,446)"
                  d="m0 0 3 3-1 7h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,446)"
                  d="m0 0h3l1 3-1 7h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,425)"
                  d="m0 0h3v11l-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1356,384)"
                  d="m0 0 3 1v8l-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,693)"
                  d="m0 0 3 1v10l-4-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(337,679)"
                  d="m0 0h4l1 2v6l-4 1-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,677)"
                  d="m0 0h3v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(337,662)"
                  d="m0 0 5 1v6l-1 2-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,660)"
                  d="m0 0h3v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(339,644)"
                  d="m0 0 3 2v6l-4 2-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,644)"
                  d="m0 0 3 1v9l-4-1-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,644)"
                  d="m0 0h2l1 2v6l-1 2h-3l-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,611)"
                  d="m0 0h3l1 4-1 7h-3l-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,609)"
                  d="m0 0 3 2v7l-4 1-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1354,591)"
                  d="m0 0h4l1 9-3 1-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1311,590)"
                  d="m0 0 3 2v8h-4l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,590)"
                  d="m0 0 4 2-1 8h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1354,570)"
                  d="m0 0h4l1 8-1 2-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1345,569)"
                  d="m0 0 2 1v10h-3l-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,541)"
                  d="m0 0 4 1v7l-4 1-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,487)"
                  d="m0 0 4 2-1 8h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,404)"
                  d="m0 0 3 1v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,403)"
                  d="m0 0h4v8l-4 1-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,402)"
                  d="m0 0h2l1 2v7l-4 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,384)"
                  d="m0 0 4 1-1 9-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(992,365)"
                  d="m0 0 4 1v9l-3 2-2-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(993,326)"
                  d="m0 0 3 2v8l-1 2h-3v-11z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,745)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,696)"
                  d="m0 0 3 1v8l-3 1-2-3v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,694)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,694)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,652)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1226,652)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,652)"
                  d="m0 0h2l1 2v8l-4 1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,627)"
                  d="m0 0h3l1 8-4 2-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,627)"
                  d="m0 0 4 1v8l-5-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1334,610)"
                  d="m0 0 2 1v10h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,611)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,611)"
                  d="m0 0h3l1 8-1 2h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,558)"
                  d="m0 0 4 1v6l-1 2-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,558)"
                  d="m0 0h3l1 6-2 4-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,549)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,549)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,541)"
                  d="m0 0h4l1 4-2 5-4-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(293,540)"
                  d="m0 0h2l1 8-3 3-2-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,455)"
                  d="m0 0h4l1 6-2 3h-3l-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,437)"
                  d="m0 0h3l1 2v6l-4 1-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(315,420)"
                  d="m0 0 4 1v7l-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1355,405)"
                  d="m0 0h3l1 7-1 3-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1345,404)"
                  d="m0 0 2 1v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,403)"
                  d="m0 0 4 1v6l-1 2-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,748)"
                  d="m0 0 4 1v6l-1 2-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1171,714)"
                  d="m0 0h2v10h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,713)"
                  d="m0 0 3 1v8h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1214,673)"
                  d="m0 0 4 1v8l-1 2h-2l-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,652)"
                  d="m0 0 3 1v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,632)"
                  d="m0 0h4v9h-4l-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(328,592)"
                  d="m0 0 2 1v8h-4l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,592)"
                  d="m0 0h3v10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,590)"
                  d="m0 0h2l1 2v8h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1594,578)"
                  d="m0 0h4v10l-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1596,562)"
                  d="m0 0 2 1v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,523)"
                  d="m0 0 3 1 1 8-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,506)"
                  d="m0 0 4 2-1 8-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,487)"
                  d="m0 0 3 1v8l-1 2-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,471)"
                  d="m0 0 2 1 1 8-4 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,467)"
                  d="m0 0 4 1v8l-4 1-1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,455)"
                  d="m0 0 4 1-1 8-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1299,405)"
                  d="m0 0 4 1v8l-4 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1310,404)"
                  d="m0 0 4 2v7l-1 2h-3l-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(965,288)"
                  d="m0 0h2l1 3v7l-1 3-3-1v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(936,270)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,735)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1180,714)"
                  d="m0 0h3l1 2v7l-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,696)"
                  d="m0 0h3l1 2v6l-3 2-2-4v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,694)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,679)"
                  d="m0 0h4v9h-4l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,678)"
                  d="m0 0 2 1 1 7-1 2-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,673)"
                  d="m0 0 4 1v8l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,673)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,644)"
                  d="m0 0 3 1 1 6-1 3-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,627)"
                  d="m0 0h3l1 8-3 2-2-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(126,626)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1596,624)"
                  d="m0 0 2 1v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,591)"
                  d="m0 0h4v9h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1180,591)"
                  d="m0 0h4v9h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,575)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,570)"
                  d="m0 0 4 1v8l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,528)"
                  d="m0 0 3 2v7l-3 3-1-2v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1180,529)"
                  d="m0 0h4v9h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,508)"
                  d="m0 0 3 1v9l-3 1-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1226,508)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,488)"
                  d="m0 0 3 3-1 7h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1334,487)"
                  d="m0 0 2 1v9l-2 1-2-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1171,487)"
                  d="m0 0 3 3-1 7h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,403)"
                  d="m0 0h4v8h-4l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1344,384)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,384)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,694)"
                  d="m0 0 4 1v8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,673)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,662)"
                  d="m0 0h4v8l-4 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,632)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1321,632)"
                  d="m0 0 4 1v8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,632)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,632)"
                  d="m0 0h3v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,632)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,626)"
                  d="m0 0 3 1v9l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,611)"
                  d="m0 0h3v10l-3 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,592)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,575)"
                  d="m0 0 3 1 1 7-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(139,575)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,549)"
                  d="m0 0 3 1v9l-3 1-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,541)"
                  d="m0 0h3l1 7-4 2-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,529)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1214,488)"
                  d="m0 0h4v9l-2 1-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1334,466)"
                  d="m0 0 2 1v10l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,467)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,454)"
                  d="m0 0 2 1 1 6-1 3-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,420)"
                  d="m0 0h3l1 5-1 4-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,402)"
                  d="m0 0 2 1 1 6-1 3-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,385)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,384)"
                  d="m0 0 2 1v9l-3 1-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1300,384)"
                  d="m0 0 3 1v8l-4 1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1180,735)"
                  d="m0 0 4 1v8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,731)"
                  d="m0 0 4 1 1 6-4 2-2-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,713)"
                  d="m0 0 3 1v8h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,694)"
                  d="m0 0 3 1v8h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,694)"
                  d="m0 0h3v10h-3l-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,661)"
                  d="m0 0 2 1v9l-4-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(101,626)"
                  d="m0 0 3 1v9l-3 1-1-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(303,610)"
                  d="m0 0 5 1-1 8-4-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1595,609)"
                  d="m0 0 3 1v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1595,594)"
                  d="m0 0h3v9l-2 1-2-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,590)"
                  d="m0 0h2l1 10h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,570)"
                  d="m0 0h3v9l-2 2-2-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1214,570)"
                  d="m0 0 4 1v8l-3 1-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1181,570)"
                  d="m0 0 3 1v8h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,508)"
                  d="m0 0 3 1v9h-4v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1215,508)"
                  d="m0 0 3 1v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1225,488)"
                  d="m0 0h4v9h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1180,488)"
                  d="m0 0h4v9h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,437)"
                  d="m0 0 4 1v7l-3 2-2-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,748)"
                  d="m0 0 4 1v7h-4l-1-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,696)"
                  d="m0 0h3v9h-3l-1-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1591,674)"
                  d="m0 0h3l1 7-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,661)"
                  d="m0 0 3 1v9h-3l-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,644)"
                  d="m0 0 3 2v7l-4 1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,610)"
                  d="m0 0 4 1v8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,593)"
                  d="m0 0 4 1v6l-3 2-2-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,591)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1321,570)"
                  d="m0 0h3l1 7-2 4-2-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,549)"
                  d="m0 0h2l1 8-3 3-1-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(305,540)"
                  d="m0 0 2 1v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,529)"
                  d="m0 0h3v9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1171,508)"
                  d="m0 0 2 1v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,446)"
                  d="m0 0h2l1 6-1 5-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(339,437)"
                  d="m0 0 3 2v6l-4 1-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(326,420)"
                  d="m0 0 4 1v8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(113,711)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,696)"
                  d="m0 0 3 1v7l-3 2-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,679)"
                  d="m0 0 4 1v7l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,678)"
                  d="m0 0h2l1 9h-4v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1574,674)"
                  d="m0 0h3v8l-4-1-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1321,673)"
                  d="m0 0 4 1v7l-1 3-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,661)"
                  d="m0 0h2l1 2v6l-1 2-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,644)"
                  d="m0 0 3 1v8l-3 1-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,627)"
                  d="m0 0h3l1 2v7h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,627)"
                  d="m0 0h3v9l-3 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1321,611)"
                  d="m0 0h3l1 8-1 3-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(338,610)"
                  d="m0 0h3v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,592)"
                  d="m0 0 3 1v8l-3 1-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,575)"
                  d="m0 0h2l1 2v6l-1 2-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1170,550)"
                  d="m0 0h3v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,506)"
                  d="m0 0 3 1v8l-3 1-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,471)"
                  d="m0 0 2 1v8h-4v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,454)"
                  d="m0 0 2 1v8h-4v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(327,437)"
                  d="m0 0h2l1 2v6l-4 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,425)"
                  d="m0 0h2l1 7-1 4-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,420)"
                  d="m0 0h3v9l-4-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(292,420)"
                  d="m0 0 4 1v7l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(950,289)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(113,728)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(151,711)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,678)"
                  d="m0 0 2 1v8h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1617,674)"
                  d="m0 0 4 1-1 6h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1599,674)"
                  d="m0 0h4l1 5-2 3-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,673)"
                  d="m0 0h3v10h-3l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(113,660)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(113,643)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,632)"
                  d="m0 0h3v9l-3 1-1-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,609)"
                  d="m0 0 2 1v9h-3l-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,575)"
                  d="m0 0 3 1v8l-3 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,558)"
                  d="m0 0 3 1v8h-3l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,558)"
                  d="m0 0 3 1v6l-3 3-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,523)"
                  d="m0 0 3 1v8l-3 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,488)"
                  d="m0 0 2 1v8h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(304,437)"
                  d="m0 0h3v9l-4-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,436)"
                  d="m0 0 2 1v8l-2 2-2-2 1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,402)"
                  d="m0 0 2 1v9h-3l-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,385)"
                  d="m0 0h3l1 2v6l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(950,270)"
                  d="m0 0h3v11h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,748)"
                  d="m0 0 3 1v7h-4v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,731)"
                  d="m0 0h3l1 2v6h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,714)"
                  d="m0 0 3 1v9l-3 1-1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1608,701)"
                  d="m0 0 4 1v6h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1582,674)"
                  d="m0 0 4 1v6h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,662)"
                  d="m0 0 4 1v6l-1 2-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,652)"
                  d="m0 0 3 1v9l-3 1-1-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,644)"
                  d="m0 0h2l1 7-1 3-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1203,611)"
                  d="m0 0h3v11l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(114,591)"
                  d="m0 0 2 1v10h-3v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,590)"
                  d="m0 0 3 1v9l-3 1-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1171,570)"
                  d="m0 0 2 1v8l-3 1-1-5 1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(282,540)"
                  d="m0 0 2 1v8l-3 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,523)"
                  d="m0 0 3 2v6l-3 2-1-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,489)"
                  d="m0 0h3l1 2v6h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,467)"
                  d="m0 0h3v10h-3l-1-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,455)"
                  d="m0 0 4 1-1 8h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1322,404)"
                  d="m0 0 3 3-1 8h-3v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,403)"
                  d="m0 0 4 1-1 8h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1617,741)"
                  d="m0 0 3 1 1 5-4 2-1-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,728)"
                  d="m0 0h2v11l-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1203,714)"
                  d="m0 0h3v10h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,696)"
                  d="m0 0 3 1v7h-4v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(114,694)"
                  d="m0 0 2 1v10h-3v-10z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1608,688)"
                  d="m0 0 4 1v5l-4 1-1-1v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1203,673)"
                  d="m0 0h3v10h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,652)"
                  d="m0 0h2v11l-3-1v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(113,626)"
                  d="m0 0h3v10h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,592)"
                  d="m0 0h2l1 8-1 2h-2l-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(151,592)"
                  d="m0 0h3v10h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,558)"
                  d="m0 0 3 2v6l-4 1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,523)"
                  d="m0 0h2l1 8-1 2-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,472)"
                  d="m0 0 4 1v6l-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,437)"
                  d="m0 0h3l1 8h-4z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,696)"
                  d="m0 0h2l1 7-1 3h-2l-1-2v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1333,694)"
                  d="m0 0 3 1v8l-3 1-1-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1600,688)"
                  d="m0 0h3l1 5-1 2h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,660)"
                  d="m0 0h2v10h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,643)"
                  d="m0 0h2v11h-2l-1-2v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(257,627)"
                  d="m0 0h3l1 8-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,626)"
                  d="m0 0h2v10h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,570)"
                  d="m0 0 3 1v8l-3 1-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,506)"
                  d="m0 0 3 2-1 7h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,403)"
                  d="m0 0 3 1-1 8-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,385)"
                  d="m0 0h2l1 2v6h-4v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(114,745)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1617,701)"
                  d="m0 0 3 1 1 4-3 3-2-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,694)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1592,688)"
                  d="m0 0 3 1v6h-4l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(114,677)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,661)"
                  d="m0 0 3 1v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,644)"
                  d="m0 0h2v10h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,610)"
                  d="m0 0 3 3-1 6h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(152,609)"
                  d="m0 0h2v10h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,592)"
                  d="m0 0 3 3v5l-4 1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,592)"
                  d="m0 0h3v10l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,575)"
                  d="m0 0h3v9l-3 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(151,575)"
                  d="m0 0h3v10l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,558)"
                  d="m0 0h3v10l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,541)"
                  d="m0 0h2l1 7-1 2h-2l-1-2v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1203,529)"
                  d="m0 0h3v10l-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,488)"
                  d="m0 0h3v9h-3l-1-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,471)"
                  d="m0 0h2l1 3-1 7-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,420)"
                  d="m0 0h2l1 6-1 3h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(281,420)"
                  d="m0 0 3 1v8h-3l-1-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,735)"
                  d="m0 0 3 1v8l-3 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1617,728)"
                  d="m0 0h3l1 5-1 2-4-1v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,678)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,632)"
                  d="m0 0h2v10l-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,627)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(257,610)"
                  d="m0 0 4 1-1 8h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(350,575)"
                  d="m0 0 3 3-1 6h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,549)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(349,541)"
                  d="m0 0h3l1 7-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1192,529)"
                  d="m0 0 3 1v8l-3 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,488)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,489)"
                  d="m0 0h2l1 6-1 3-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,487)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,471)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,454)"
                  d="m0 0 2 1v9h-3v-9z"
                  fill="#00000080"
                />
                <path
                  transform="translate(257,455)"
                  d="m0 0h3l1 6-1 3-3-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,437)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,437)"
                  d="m0 0h2l1 6-1 3-3-1v-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,385)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(151,746)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1625,741)"
                  d="m0 0 4 1v5l-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,696)"
                  d="m0 0h2v9h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,610)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,570)"
                  d="m0 0h2v9h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,540)"
                  d="m0 0 2 1v9l-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,523)"
                  d="m0 0h2v9h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1204,508)"
                  d="m0 0 2 1v9l-3-1v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(257,507)"
                  d="m0 0 4 1-1 8h-2l-1-2z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,420)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(269,403)"
                  d="m0 0h3v9h-3z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1625,728)"
                  d="m0 0 4 1v5l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1617,715)"
                  d="m0 0h3v7l-4-1v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1625,701)"
                  d="m0 0h3l1 6-3 2-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1625,688)"
                  d="m0 0 4 1v5l-4 1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1574,688)"
                  d="m0 0h3v7l-4-1v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(270,506)"
                  d="m0 0 2 1v8h-3v-8z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1625,674)"
                  d="m0 0h3l1 5-3 3-1-1z"
                  fill="#00000080"
                />
                <path
                  transform="translate(258,420)"
                  d="m0 0h2v9l-3-1v-7z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1566,701)"
                  d="m0 0h2l1 5-1 2h-2l-1-6z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1566,688)"
                  d="m0 0h2l1 4-1 3-3-1v-5z"
                  fill="#00000080"
                />
                <path
                  transform="translate(1566,675)"
                  d="m0 0 3 1-1 6-3-2z"
                  fill="#00000080"
                />
              </svg>
            </div>
            <div className="aboutbox2">
              <div className="aboutbox3">
                <h4 ref={(el) => (numberRefs.current[0] = el)}>0+</h4>
                <p ref={(el) => (textRefs.current[0] = el)}>
                  Completed Projects
                </p>
              </div>
              <div className="aboutbox3">
                <h4 ref={(el) => (numberRefs.current[1] = el)}>0+</h4>
                <p ref={(el) => (textRefs.current[1] = el)}>Employees</p>
              </div>
              <div className="aboutbox3">
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
