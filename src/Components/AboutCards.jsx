import React, { useRef } from "react";
import gsap from "gsap";
import "../Styles/about-cards.css";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";
gsap.registerPlugin(ScrollTrigger);

const AboutCards = () => {
  const lineRef = useRef(null);
  const cardsContainerRef = useRef(null);

  const cardContents = [
    {
      number: "01",
      text: `"Since 2000, I laid the foundation of what would later become Jeikor Group — not with luxury or certainty, but with deep conviction and relentless effort. My journey began on the ground, among steel and dust, where every challenge was a lesson, and every step forward was earned. Dubai was rising, and I knew I wanted to rise with it — through work that mattered, and a vision that endured.`,
    },
    {
      number: "02",
      text: `I Was Not Born In Comfort. It Was Born From Honest Hands And A Belief That Purpose And Persistence Could Shape More Than Stones — They Could Shape A Future. As A Small Team With Big Values: Quality, And Unity.`,
    },
    {
      number: "03",
      text: `Over Time, Jeikor Evolved. What Began As A Modest Construction Venture Became A Diverse Group Of Companies, Operating Across Regions And Industries. Yet Our Essence Remains The Same Spirit That Guided Our First Project.`,
    },
    {
      number: "04",
      text: `Today, Jeikor Group Is More Than A Business. It's A Journey Shared By Those Who Believed, Contributed, And Grew With Us. And The Values Embedded In Our Past Committed To Our Future, And Inspired By The City That Welcomed Our Dream." - Ali At Thurman, Jeikor Group`,
    },
  ];

  useGSAP(
    () => {
      // Original line animation (unchanged)
      gsap.set(lineRef.current, {
        strokeDasharray: lineRef.current.getTotalLength(),
        strokeDashoffset: lineRef.current.getTotalLength(),
      });

      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 1.25,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".cardsection",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
      // Get all cards
      const cards = document.querySelectorAll(".about-card");

      // Initialize card positions
      gsap.set(cards, {
        clearProps: "all",
      });

      // Set up hover animations for each card
      cards.forEach((card, index) => {
        // Create hover animation timeline (paused initially)
        const tl = gsap.timeline({ paused: true });

        // Animate the hovered card with a swipe motion
        tl.to(card, {
          x: 20, // First move slightly right
          duration: 0.2,
          ease: "power1.out",
        }).to(card, {
          x: -80, // Then swipe to the left (forward)
          zIndex: 100, // Bring to front
          scale: 1.05,
          duration: 0.45,
          ease: "power2.out",
        });

        // Find the card to the left (if it exists)
        if (index > 0) {
          const leftCard = cards[index - 1];
          // Add reverse swipe animation for the left card
          tl.to(
            leftCard,
            {
              x: "-20", // Swipe right (backward)
              // zIndex: 10,
              duration: 0.45,
              ease: "power2.out",
            },
            "-=0.4"
          ); // Same time as the second animation
        }

        // Set up event listeners
        card.addEventListener("mouseenter", () => tl.play());
        card.addEventListener("mouseleave", () => tl.reverse());
      });
    },
    { scope: cardsContainerRef }
  );

  return (
    <>
      <div className="about-cards">
        <div className="about-cards-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1816"
            height="49"
            viewBox="0 0 1816 49"
            fill="none"
          >
            <path
              ref={lineRef}
              d="M0 1L110.603 1L150.631 48L1816 48"
              stroke="#111E57"
              stroke-width="0.4"
            />
          </svg>
          <span>
            <div className="about-cards-top-ball"></div>
            <h6>
              why choose <br /> jeikor
            </h6>
          </span>
        </div>
        <div className="about-cards-main" ref={cardsContainerRef}>
          {cardContents.map((content, index) => (
            <div
              key={index}
              className={`about-card card-color-${index + 1}`}
              data-index={index + 1}
            >
              <div className="card-number">{content.number}</div>
              <div className="card-content">
                <p>{content.text}</p>
              </div>
              <div className="card-arrow">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="35"
                  viewBox="0 0 31 35"
                  fill="none"
                >
                  <path d="M3.62871 0.8051L24.484 29.4957L27.9592 8.17653L30.8561 8.43328L26.5536 34.8284L0.118801 30.7764L0.768474 27.9416L22.1196 31.2144L1.2643 2.5238L3.62871 0.8051Z" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default AboutCards;
