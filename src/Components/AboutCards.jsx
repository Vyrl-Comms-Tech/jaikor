import React, {  useRef } from "react";
import gsap from "gsap";
import "../Styles/about-cards.css";
import { useGSAP } from "@gsap/react";

const AboutCards = () => {
  const cardsRef = useRef(null);

  useGSAP(() => {
    if (!cardsRef.current) return;

    const cards = cardsRef.current.querySelectorAll(".about-card");

    cards.forEach((card, index) => {
      card.addEventListener("mouseenter", () => {
        const enterTl = gsap.timeline();
        const nextCard = cards[index + 1];

        // First move right and increase z-index
        enterTl
          .set(card, { zIndex: 100 }) // Immediately set high z-index
          .to(card, {
            x: "20%",
            duration: 0.3,
            ease: "power2.out",
          })
          .to(card, {
            x: "0%",
            boxShadow: "0 25px 35px rgba(0, 0, 0, 0.3)",
            duration: 0.4,
            ease: "power3.out",
          });

        // Handle next card animation
        if (nextCard) {
          gsap.timeline()
            .set(nextCard, { zIndex: 1 }) // Lower z-index for overlapped card
            .to(nextCard, {
              x: "-15%",
              duration: 0.3,
              ease: "power2.out",
            })
            .to(nextCard, {
              x: "0%",
              duration: 0.4,
              ease: "power3.out",
            });
        }
      });

      card.addEventListener("mouseleave", () => {
        const nextCard = cards[index + 1];
        
        // Reset current card
        gsap.timeline()
          .to(card, {
            x: "0%",
            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
            duration: 0.4,
            ease: "power3.inOut",
          })
          .set(card, { zIndex: 40 - (index * 10) }); // Reset to original z-index

        // Reset next card if exists
        if (nextCard) {
          gsap.timeline()
            .to(nextCard, {
              x: "0%",
              duration: 0.4,
              ease: "power3.inOut",
            })
            .set(nextCard, { zIndex: 40 - ((index + 1) * 10) }); // Reset to original z-index
        }
      });
    });
  }, []);

  const cardContents = [
    {
      number: "01",
      text: `“Since 2000, I laid the foundation of what would later become Jeikor Group — not with luxury or certainty, but with deep conviction and relentless effort. My journey began on the ground, among steel and dust, where every challenge was a lesson, and every step forward was earned. Dubai was rising, and I knew I wanted to rise with it — through work that mattered, and a vision that endured.`,
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
              d="M0 1L110.603 1L150.631 48L1816 48"
              stroke="#111E57"
              stroke-width="0.4"
            />
          </svg>
          <span>
            <div className="about-cards-top-ball"></div>
            <h6>
              why choos <br /> jeikor
            </h6>
          </span>
        </div>
        <div className="about-cards-main-container">
          <div className="about-cards-main" ref={cardsRef}>
            {/* <div className="cards-container"  */}
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
                    <path
                      d="M3.62871 0.8051L24.484 29.4957L27.9592 8.17653L30.8561 8.43328L26.5536 34.8284L0.118801 30.7764L0.768474 27.9416L22.1196 31.2144L1.2643 2.5238L3.62871 0.8051Z"
                      // fill="#F5F5F5"
                    />
                  </svg>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default AboutCards;
