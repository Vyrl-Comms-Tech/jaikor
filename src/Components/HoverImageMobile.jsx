import React, { useEffect, useRef } from 'react';
import "../Styles/hover-image-mobile.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';

const HoverImageMobile = () => {
  const containerRef = useRef(null);

  useGSAP(() => {
    const items = containerRef.current.querySelectorAll('.hover-image-mobile-item');

    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item, // Trigger animation for each individual card
          start: 'top 80%', // Start animation when the card enters the viewport
          end: 'top 50%', // End animation when the card is halfway in the viewport
          scrub: 1,
          // markers: true, // Enable markers for debugging
        },
      });

      tl.from(item, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    });
  });

  return (
    <>
      <div className="hover-image-mobile-container" ref={containerRef}>
        <div className="hover-image-mobile-item">
          <img
            src="/Assets/hm1.jpg"
            alt="Modern building with curved architecture"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>

        <div className="hover-image-mobile-item">
          <img
            src="/Assets/hm2.jpg"
            alt="Urban skyscraper at dusk"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>

        <div className="hover-image-mobile-item">
          <img
            src="/Assets/hm3.jpg"
            alt="Modern building with water reflection"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>

        <div className="hover-image-mobile-item">
          <img
            src="/Assets/carousel-img.png"
            alt="Skyscraper with geometric patterns"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverImageMobile;