import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import "../Styles/Homehero.css";
import "../Styles/Navbar.css";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";
import { useGSAP } from "@gsap/react";

function Homehero2({ Herottesxt }) {
  const navigate = useNavigate();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { paragraph, mainheading, btntext } = Herottesxt;
  const location = useLocation();
  const linksRef = useRef([]);
  const counters = useRef([]);
  const logoRef = useRef(null);
  const heroTextRefs = useRef([]);
  const bottomTextRef = useRef([]);
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useGSAP(() => {
    // Create a GSAP timeline
    const tl = gsap.timeline();

    // First, set initial state for all SVG paths
    gsap.set("#link-lines path", {
      strokeDasharray: function (index, element) {
        return element.getTotalLength();
      },
      strokeDashoffset: function (index, element) {
        return element.getTotalLength();
      },
      fill: "none",
      stroke: function (index, element) {
        return element.getAttribute("fill");
      },
      strokeWidth: 2,
    });

    // Animate each path
    tl.to("#link-lines path", {
      strokeDashoffset: 0,
      duration: 1.5,
      stagger: 0.2,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    })
      .to(
        "#link-lines path",
        {
          fill: function (index, element) {
            return element.getAttribute("fill");
          },
          duration: 0.5,
          stagger: 0.2,
        },
        "-=1"
      )
      .fromTo(
        logoRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=1.5"
      )
      .fromTo(
        linksRef.current,
        { y: 50, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" },
        "-=0.5"
      )
      .fromTo(
        heroTextRefs.current,
        { y: 100, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.3, ease: "power2.out" },
        "-=1.2" // Overlap with previous animation
      )
      .fromTo(
        bottomTextRef.current,
        { x: 150, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "ease" },
        "-=1" // Overlap with previous animation
      );

    gsap.set("#link-lines2 path", {
      strokeDasharray: function (index, element) {
        return element.getTotalLength();
      },
      strokeDashoffset: function (index, element) {
        return element.getTotalLength();
      },
      fill: "none",
      stroke: function (index, element) {
        return element.getAttribute("fill");
      },
      strokeWidth: 2,
    });

    tl.to("#link-lines2 path", {
      strokeDashoffset: 1,
      duration: 1.5,
      stagger: 0.2,
      opacity: 1,
      ease: "power2.inOut",
      yoyo: true,
      repeat: -1,
    });
    tl.to(
      "#link-lines2 path",
      {
        fill: function (index, element) {
          return element.getAttribute("fill");
        },
        duration: 0.5,
        stagger: 0.2,
      },
      "-=1"
    );

    // Add counter animation
    const targetNumbers = [150, 500, 23]; // Projects, Workforce, Years

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

    // Start counter animations
    targetNumbers.forEach((target, index) => {
      animateCounter(index, target);
    });

    const homeHero = document.querySelector(".homehero");
    const mouseFollower = document.querySelector(".herocircle");
    const letsTalk = document.querySelector(".lets-talk");
    const logo = document.querySelector(".logo img");
    // console.log(logo)
    // Update the selector to target the actual anchor tags
    const navLinks = document.querySelectorAll(".links a");
    let mouseX = 0;
    let mouseY = 0;
    let currentX = 0;
    let currentY = 0;

    // Add hover handlers for let's talk and nav links
    letsTalk.addEventListener("mouseenter", () => {
      mouseFollower.classList.add("small-circle");
    });
    logo.addEventListener("mouseenter", () => {
      mouseFollower.classList.add("small-circle");
    });

    logo.addEventListener("mouseleave", () => {
      mouseFollower.classList.remove("small-circle");
    });

    letsTalk.addEventListener("mouseleave", () => {
      mouseFollower.classList.remove("small-circle");
    });

    // Add hover handlers for nav links
    navLinks.forEach((link) => {
      link.addEventListener("mouseenter", () => {
        mouseFollower.classList.add("small-circle");
      });
      link.addEventListener("mouseleave", () => {
        mouseFollower.classList.remove("small-circle");
      });
    });

    // Smooth mouse following
    const handleMouseMove = (e) => {
      const rect = homeHero.getBoundingClientRect();

      // Check if mouse is within container bounds
      if (
        e.clientX >= rect.left &&
        e.clientX <= rect.right &&
        e.clientY >= rect.top &&
        e.clientY <= rect.bottom
      ) {
        mouseX = e.clientX;
        mouseY = e.clientY;
        mouseFollower.style.opacity = "1";
        mouseFollower.style.transform = `translate(-50%, -50%) scale(1)`;
      } else {
        mouseFollower.style.opacity = "0";
        mouseFollower.style.transform = `translate(-50%, -50%) scale(0)`;
      }
    };

    const smoothMouseFollow = () => {
      currentX += (mouseX - currentX) * 0.25;
      currentY += (mouseY - currentY) * 0.25;

      mouseFollower.style.left = `${currentX}px`;
      mouseFollower.style.top = `${currentY}px`;

      requestAnimationFrame(smoothMouseFollow);
    };

    const handleMouseEnter = () => {
      mouseFollower.style.opacity = "1";
      mouseFollower.style.transform = "scale(1)";
    };

    const handleMouseLeave = () => {
      mouseFollower.style.opacity = "0";
      mouseFollower.style.transform = "scale(0)";
    };

    homeHero.addEventListener("mousemove", handleMouseMove);
    homeHero.addEventListener("mouseenter", handleMouseEnter);
    homeHero.addEventListener("mouseleave", handleMouseLeave);

    smoothMouseFollow();

    // Cleanup
    return () => {
      homeHero.removeEventListener("mousemove", handleMouseMove);
      homeHero.removeEventListener("mouseenter", handleMouseEnter);
      homeHero.removeEventListener("mouseleave", handleMouseLeave);

      letsTalk.removeEventListener("mouseenter", () => {
        mouseFollower.classList.add("small-circle");
      });
      letsTalk.removeEventListener("mouseleave", () => {
        mouseFollower.classList.remove("small-circle");
      });

      // Clean up nav link listeners
      navLinks.forEach((link) => {
        link.removeEventListener("mouseenter", () => {
          mouseFollower.classList.add("small-circle");
        });
        link.removeEventListener("mouseleave", () => {
          mouseFollower.classList.remove("small-circle");
        });
      });
    };
  }, []);

  // Function to render services SVG based on window width
  // Function to render services SVG based on window width
  const renderServicesSVG = () => {
    if (windowWidth > 1150) {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="299"
          height="581"
          viewBox="0 0 299 581"
          fill="none"
          id="link-lines2"
        >
          <path
            d="M118.5 30C118.5 13.7076 131.708 0.5 148 0.5H670.5V458.5H148C131.708 458.5 118.5 445.292 118.5 429V30Z"
            stroke="url(#paint0_linear_84_40)"
          />
          <path
            d="M59.5 91C59.5 74.7076 72.7076 61.5 89 61.5H611.5V519.5H89C72.7076 519.5 59.5 506.292 59.5 490V91Z"
            stroke="url(#paint1_linear_84_40)"
          />
          <path
            d="M0.5 152C0.5 135.708 13.7076 122.5 30 122.5H552.5V580.5H30C13.7076 580.5 0.5 567.292 0.5 551V152Z"
            stroke="url(#paint2_linear_84_40)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_84_40"
              x1="394.5"
              y1="0"
              x2="394.5"
              y2="459"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_84_40"
              x1="335.5"
              y1="61"
              x2="335.5"
              y2="520"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#273A8C" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_84_40"
              x1="276.5"
              y1="122"
              x2="276.5"
              y2="581"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#273A8C" />
            </linearGradient>
          </defs>
        </svg>
      );
    } else {
      return (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 529 435"
          fill="none"
          id="link-lines"
        >
          <path
            d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
            stroke="url(#paint0_linear_10_243)"
          />
          <path
            d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
            stroke="url(#paint1_linear_10_243)"
          />
          <path
            d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
            stroke="url(#paint2_linear_10_243)"
          />
          <defs>
            <linearGradient
              id="paint0_linear_10_243"
              x1="394.5"
              y1="-146"
              x2="394.5"
              y2="313"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
            </linearGradient>
            <linearGradient
              id="paint1_linear_10_243"
              x1="335.5"
              y1="-85"
              x2="335.5"
              y2="374"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
            </linearGradient>
            <linearGradient
              id="paint2_linear_10_243"
              x1="276.5"
              y1="-24"
              x2="276.5"
              y2="435"
              gradientUnits="userSpaceOnUse"
            >
              <stop stopColor="white" />
              <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
            </linearGradient>
          </defs>
        </svg>
      );
    }
  };

  return (
    <>
      <div className="homehero">
        {/* Svg starts */}
        {location.pathname === "/services" ? (
          // Services page SVG with window width check
          renderServicesSVG()
        ) : location.pathname === "/" ? (
          // Home page SVG
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 529 435"
            fill="none"
            id="link-lines"
          >
            <path
              d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
              stroke="url(#paint0_linear_10_243)"
            />
            <path
              d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
              stroke="url(#paint1_linear_10_243)"
            />
            <path
              d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
              stroke="url(#paint2_linear_10_243)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_10_243"
                x1="394.5"
                y1="-146"
                x2="394.5"
                y2="313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_10_243"
                x1="335.5"
                y1="-85"
                x2="335.5"
                y2="374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_10_243"
                x1="276.5"
                y1="-24"
                x2="276.5"
                y2="435"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
              </linearGradient>
            </defs>
          </svg>
        ) : (
          // Default SVG for other pages
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="529"
            height="435"
            viewBox="0 0 529 435"
            fill="none"
            id="link-lines"
          >
            <path
              d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
              stroke="url(#paint0_linear_250_22)"
            />
            <path
              d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
              stroke="url(#paint1_linear_250_22)"
            />
            <path
              d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
              stroke="url(#paint2_linear_250_22)"
            />
            <defs>
              <linearGradient
                id="paint0_linear_250_22"
                x1="394.5"
                y1="-146"
                x2="394.5"
                y2="313"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint1_linear_250_22"
                x1="335.5"
                y1="-85"
                x2="335.5"
                y2="374"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
              <linearGradient
                id="paint2_linear_250_22"
                x1="276.5"
                y1="-24"
                x2="276.5"
                y2="435"
                gradientUnits="userSpaceOnUse"
              >
                <stop stopColor="white" />
                <stop offset="1" stopColor="#273A8C" />
              </linearGradient>
            </defs>
          </svg>
        )}
        {location.pathname === "/" ? (
          <video
            poster="/Assets/Screenshot (44).png"
            autoPlay
            muted
            loop
            src="/Assets/Dubai_Music.mp4"
            id="heroimg"
          ></video>
        ) : (
          //   <video
          //   poster="/video_frame.avif"
          //   playsInline
          //   preload="metadata"
          //   autoPlay
          //   muted
          //   loop
          // ></video>
          <img src="/Assets/Rectangle 1.png" alt="" id="heroimg" />
        )}

        {/* Svg ends */}
        <div className="herocircle">
          <p>Scroll down</p>
        </div>
        <div className="Navbar">
          <div className="logo">
            <img
              src="Assets/logo.png"
              alt=""
              ref={logoRef}
              onClick={() => navigate("/")}
            />
          </div>

          {/* Second instance of SVG - also needs the windowWidth check */}
          {location.pathname === "/services" ? (
            // Services page SVG with window width check
            renderServicesSVG()
          ) : location.pathname === "/" ? (
            // Home page SVG
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="529"
              height="435"
              viewBox="0 0 529 435"
              fill="none"
              id="link-lines"
            >
              <path
                d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
                stroke="url(#paint0_linear_10_243)"
              />
              <path
                d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
                stroke="url(#paint1_linear_10_243)"
              />
              <path
                d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
                stroke="url(#paint2_linear_10_243)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_10_243"
                  x1="394.5"
                  y1="-146"
                  x2="394.5"
                  y2="313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_10_243"
                  x1="335.5"
                  y1="-85"
                  x2="335.5"
                  y2="374"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_10_243"
                  x1="276.5"
                  y1="-24"
                  x2="276.5"
                  y2="435"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#888888" stopOpacity="0.76" />
                </linearGradient>
              </defs>
            </svg>
          ) : (
            // Default SVG for other pages
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="529"
              height="435"
              viewBox="0 0 529 435"
              fill="none"
              id="link-lines"
            >
              <path
                d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
                stroke="url(#paint0_linear_250_22)"
              />
              <path
                d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
                stroke="url(#paint1_linear_250_22)"
              />
              <path
                d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
                stroke="url(#paint2_linear_250_22)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_250_22"
                  x1="394.5"
                  y1="-146"
                  x2="394.5"
                  y2="313"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#273A8C" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_250_22"
                  x1="335.5"
                  y1="-85"
                  x2="335.5"
                  y2="374"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#273A8C" />
                </linearGradient>
                <linearGradient
                  id="paint2_linear_250_22"
                  x1="276.5"
                  y1="-24"
                  x2="276.5"
                  y2="435"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="white" />
                  <stop offset="1" stopColor="#273A8C" />
                </linearGradient>
              </defs>
            </svg>
          )}

          <div className="links">
            {/* Navbar */}
            <NavLink ref={(el) => (linksRef.current[0] = el)} id="home" to="/">
              home
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[1] = el)} to="/about">
              about
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[2] = el)} to="/projects">
              projects
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[3] = el)} to="/group">
              the group
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[4] = el)} to="/services">
              services
            </NavLink>
            <NavLink
              ref={(el) => (linksRef.current[5] = el)}
              id="border"
              to="/contact"
            >
              let's connect
            </NavLink>
            <MobileNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
            {/* Navbar */}
          </div>
        </div>

        <div className="herosection">
          <div className="heroleft">
            <h4
              ref={(el) => (heroTextRefs.current[0] = el)}
              dangerouslySetInnerHTML={{ __html: paragraph }}
            ></h4>

            <h1
              ref={(el) => (heroTextRefs.current[1] = el)}
              dangerouslySetInnerHTML={{ __html: mainheading }}
            ></h1>
            <h3
              className="lets-talk"
              ref={(el) => (heroTextRefs.current[2] = el)}
              onClick={() => navigate("/contact")}
              style={{ cursor: "pointer" }}
            >
              {btntext}
              <span id="arrow">
                <img src="Assets/Vector.svg" alt="" />
              </span>
            </h3>
          </div>
          <div className="heroright"></div>
          <div className="bottomhomerow">
            <div className="bleft">
              <div className="bbox">
                <h6 ref={(el) => (counters.current[0] = el)}>0+</h6>
                <p>
                  Projects <br />
                  Delivered
                </p>
              </div>
              <div className="bbox">
                <h6 ref={(el) => (counters.current[1] = el)}>0</h6>
                <p>
                  Skilled <br />
                  Workforce
                </p>
              </div>
              <div className="bbox">
                <h6 ref={(el) => (counters.current[2] = el)}>0</h6>
                <p>
                  Years of <br />
                  Excellence
                </p>
              </div>
            </div>
            <div className="bright">
              <img src="/Assets/Rectangle 15.png" alt="" />
              <h6 ref={bottomTextRef}>
                Since our inception in 2000, Jeikor has earned
                <br /> its place as a premier contracting company in <br />
                the UAE.
              </h6>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Homehero2;
