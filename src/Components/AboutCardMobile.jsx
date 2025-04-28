import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";
import "../Styles/about-card-mobile.css";

// import required modules
import { EffectCards } from "swiper/modules";

export default function AboutCardMobile() {
  const swiperRef = useRef(null);

  const handlePrev = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slidePrev();
    }
  };

  const handleNext = () => {
    if (swiperRef.current && swiperRef.current.swiper) {
      swiperRef.current.swiper.slideNext();
    }
  };

  // Card content data
  const cardContents = [
    {
      number: "01",
      text: `"Since 2000, I laid the foundation of what would later become Jeikor Group — not with luxury or certainty, but with deep conviction and relentless effort.`,
    },
    {
      number: "02",
      text: `I Was Not Born In Comfort. It Was Born From Honest Hands And A Belief That Purpose And Persistence Could Shape More Than Stones — They Could Shape A Future.`,
    },
    {
      number: "03",
      text: `Over Time, Jeikor Evolved. What Began As A Modest Construction Venture Became A Diverse Group Of Companies, Operating Across Regions And Industries.`,
    },
    {
      number: "04",
      text: `Today, Jeikor Group Is More Than A Business. It's A Journey Shared By Those Who Believed, Contributed, And Grew With Us.`,
    },
    {
      number: "05",
      text: `Our commitment to excellence drives every project we undertake, ensuring quality that stands the test of time.`,
    },
    {
      number: "06",
      text: `Innovation is at the heart of our approach, allowing us to deliver solutions that exceed expectations.`,
    },
    {
      number: "07",
      text: `We value partnerships built on trust and mutual respect, working collaboratively to achieve shared goals.`,
    },
    {
      number: "08",
      text: `Sustainability guides our practices, as we strive to create a positive impact on communities and the environment.`,
    },
    {
      number: "09",
      text: `Looking ahead, we remain dedicated to growth and expansion while staying true to the values that define Jeikor Group.`,
    },
  ];

  return (
    <>
      <div className="about-card-mobile">
        <div className="about-card-mobile-content">
          <Swiper
            effect={"cards"}
            grabCursor={true}
            modules={[EffectCards]}
            className="mySwiper"
            ref={swiperRef}
          >
            {cardContents.map((content, index) => (
              <SwiperSlide key={index}>
                <div
                  className={`about-card ${index % 2 === 0 ? 'card-color-dark' : 'card-color-light'}`}
                  data-index={index + 1}
                >
                  <h2 className="card-mobile-number">{content.number}</h2>
                  <div className="card-mobile-content">
                    <p>{content.text}</p>
                  </div>
                  <div className="card-arrow">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="31"
                      height="35"
                      viewBox="0 0 31 35"
                      fill="none"
                      className={index % 2 === 0 ? 'svg-light' : 'svg-dark'}
                    >
                      <path d="M3.62871 0.8051L24.484 29.4957L27.9592 8.17653L30.8561 8.43328L26.5536 34.8284L0.118801 30.7764L0.768474 27.9416L22.1196 31.2144L1.2643 2.5238L3.62871 0.8051Z" />
                    </svg>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>

          <div className="custom-swiper-nav">
            <div className="custom-arrow" onClick={handlePrev}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M15 18l-6-6 6-6" />
              </svg>
            </div>
            <div className="custom-arrow" onClick={handleNext}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
