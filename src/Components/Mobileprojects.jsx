import React, { useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";
import "../Styles/Mobileproject.css";

gsap.registerPlugin(ScrollTrigger);

function Mobileprojects() {
  const lineRef = useRef(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const slidesRef = useRef(null);
  const textRef = useRef(null);

  const slides = [
    {
      id: 1,
      image: "/Assets/carousel-img.png",
      title:
        "Jeikor Contracting – UAE",
      description:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
      description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
    {
      id: 2,
      image: "/Assets/img22.jpg",
      title: "Sed Do Eiusmod Tempor",
      description:
        "Specializing In Large-Scale Infrastructure Projects With A Focus On Quality, Safety, And Innovation",
        description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
    {
      id: 3,
      image: "/Assets/img23.jpg",
      title: "Duis Aute Irure Dolor",
      description:
        "Building The Future With Excellence And Integrity Since 1985, Committed To Sustainable Development",
        description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
    {
      id: 4,
      image: "/Assets/carousel-img.png",
      title:
        "Lorem Ipsum Dolor Sit Amet,",
      description:
        "Welcome To Isikor GP, A Leading Heavy Civil Construction Company Dedicated To Delivering Exceptional Infrastructure Solutions",
        description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
    {
      id: 5,
      image: "/Assets/img22.jpg",
      title: "Sed Do Eiusmod Tempor",
      description:
        "Specializing In Large-Scale Infrastructure Projects With A Focus On Quality, Safety, And Innovation",
        description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
    {
      id: 6,
      image: "/Assets/img23.jpg",
      title: "Duis Aute Irure Dolor",
      description:
        "Building The Future With Excellence And Integrity Since 1985, Committed To Sustainable Development",
        description2:
        "As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across the residential, commercial, industrial, and hospitality sectors.",
    },
  ];

  useGSAP(() => {
    // Initialize GSAP context
    const ctx = gsap.context(() => {
      // Initial positioning of slides
      gsap.set(".op-slide", {
        xPercent: (i) => i * 100,
      });

      // Line drawing animation
      gsap.set(lineRef.current, {
        strokeDasharray: lineRef.current.getTotalLength(),
        strokeDashoffset: lineRef.current.getTotalLength(),
      });

      gsap.to(lineRef.current, {
        strokeDashoffset: 0,
        duration: 1.25,
        ease: "power2.inOut",
        scrollTrigger: {
          trigger: ".our-projects",
          start: "top center",
          toggleActions: "play none none reverse",
        },
      });
    });

    return () => ctx.revert();
  }, []);

  const goToSlide = (direction) => {
    if (!slidesRef.current || !textRef.current) return;

    const totalSlides = slides.length;
    const newIndex =
      direction === "next"
        ? (currentSlide + 1) % totalSlides
        : (currentSlide - 1 + totalSlides) % totalSlides;

    const textDirection = direction === "next" ? -1 : 1;

    // Timeline for coordinated animations
    const tl = gsap.timeline();

    // First animate current text out
    tl.to(".op-slide-text-content", {
      yPercent: textDirection * 100,
      opacity: 0,
      duration: 0.4,
      ease: "power2.in",
    })
      // Update the slide index
      .call(() => setCurrentSlide(newIndex))
      // Then bring new text in
      .fromTo(
        ".op-slide-text-content",
        {
          yPercent: textDirection * -100,
          opacity: 0,
        },
        {
          yPercent: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        }
      )
      // Finally animate the slides horizontally
      .to(
        ".op-slide",
        {
          xPercent: (i) => (i - newIndex) * 100,
          duration: 0.6,
          ease: "power2.out",
        },
        "-=0.8"
      ); // Slight overlap with text animation
  };
  return (
    <>
      <div className="Mobileprojects">
      <div className="our-projects">
      <div className="op-carousel-content">
        <div className="op-top">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1816"
            height="34"
            viewBox="0 0 1816 34"
            fill="none"
          >
            <path
              ref={lineRef}
              d="M0 1L110.603 1L150.631 33L1816 33"
              stroke="#111E57"
              strokeWidth="0.4"
            />
          </svg>
          <span>
            {/* <div className="op-top-ball"></div> */}
            <h6>01</h6>
          </span>
        </div>

        <div className="op-navigation">
          <button
            className="op-nav-button prev"
            onClick={() => goToSlide("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="13"
              // height="23"
              viewBox="0 0 13 23"
              fill="none"
            >
              <path
                d="M12.5 20.702L10.7153 22.5L0.994453 12.7009C0.837758 12.5439 0.713403 12.3572 0.628545 12.1515C0.543686 11.9459 0.5 11.7253 0.5 11.5025C0.5 11.2798 0.543686 11.0592 0.628545 10.8536C0.713403 10.6479 0.837758 10.4612 0.994453 10.3042L10.7153 0.5L12.4983 2.298L3.37462 11.5L12.5 20.702Z"
                // fill="#"
              />
            </svg>
          </button>
          <button
            className="op-nav-button next"
            onClick={() => goToSlide("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="13"
              // height="23"
              viewBox="0 0 13 23"
              fill="none"
            >
              <path
                d="M0.5 2.29799L2.28471 0.5L12.0055 10.2991C12.1622 10.4561 12.2866 10.6428 12.3715 10.8485C12.4563 11.0541 12.5 11.2747 12.5 11.4975C12.5 11.7202 12.4563 11.9408 12.3715 12.1464C12.2866 12.3521 12.1622 12.5388 12.0055 12.6958L2.28471 22.5L0.501681 20.702L9.62538 11.5L0.5 2.29799Z"
                // fill="white"
              />
            </svg>
          </button>
        </div>

        <div className="op-carousel-main-container">
          <div className="op-text-section" ref={textRef}>
            <div className="op-slide-text-content">
              <h2>{slides[currentSlide].title}</h2>
              <p>{slides[currentSlide].description}</p>
              <p>{slides[currentSlide].description2}</p>
            </div>
          </div>

          <div className="op-slides-container" ref={slidesRef}>
            {slides.map((slide, index) => (
              <div key={slide.id} className="op-slide">
                <img
                  src={slide.image || "/placeholder.svg"}
                  alt={`Slide ${slide.id}`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="op-pagination">

      <div className="op-navigation-btm">
          <button
            className="op-nav-button prev"
            onClick={() => goToSlide("prev")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="13"
              // height="23"
              viewBox="0 0 13 23"
              fill="none"
            >
              <path
                d="M12.5 20.702L10.7153 22.5L0.994453 12.7009C0.837758 12.5439 0.713403 12.3572 0.628545 12.1515C0.543686 11.9459 0.5 11.7253 0.5 11.5025C0.5 11.2798 0.543686 11.0592 0.628545 10.8536C0.713403 10.6479 0.837758 10.4612 0.994453 10.3042L10.7153 0.5L12.4983 2.298L3.37462 11.5L12.5 20.702Z"
                // fill="#"
              />
            </svg>
          </button>
          <button
            className="op-nav-button next"
            onClick={() => goToSlide("next")}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              // width="13"
              // height="23"
              viewBox="0 0 13 23"
              fill="none"
            >
              <path
                d="M0.5 2.29799L2.28471 0.5L12.0055 10.2991C12.1622 10.4561 12.2866 10.6428 12.3715 10.8485C12.4563 11.0541 12.5 11.2747 12.5 11.4975C12.5 11.7202 12.4563 11.9408 12.3715 12.1464C12.2866 12.3521 12.1622 12.5388 12.0055 12.6958L2.28471 22.5L0.501681 20.702L9.62538 11.5L0.5 2.29799Z"
                // fill="white"
              />
            </svg>
          </button>
        </div>
        {currentSlide + 1}/{slides.length}
      </div>



    </div>
      </div>
    </>
  );
}

export default Mobileprojects;
