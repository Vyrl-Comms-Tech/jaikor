import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import "../Styles/Homehero.css";
import "../Styles/Navbar.css";
import { NavLink } from "react-router-dom";
import { useGSAP } from "@gsap/react";

function Homehero() {
  const linksRef = useRef([]);
  const counters = useRef([]);
  const logoRef = useRef(null);
  // Add refs for hero text elements
  const heroTextRefs = useRef([]);
  const bottomTextRef = useRef([]);

  useGSAP(() => {
    // GSAP animation for nav links
    gsap.fromTo(
      linksRef.current,
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      }
    );

    // Add animation for hero text elements
    gsap.fromTo(
      heroTextRefs.current,
      {
        y: 110,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power3.out",
      }
    );
    // Add animation for bottom text
    gsap.fromTo(
      bottomTextRef.current,
      {
        x: 100,
        opacity: 0,
      },
      {
        x: 0,
        opacity: 1,
        duration: 1,
        delay: 0.5,
        ease: "power2.out",
      }
    );

    //! Modified animation for link-lines => not working
    gsap.fromTo(
      logoRef, // Changed selector to be more specific
      {
        y: 50,
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        duration: 0.8,
        ease: "power2.out",
      }
    );

    // Add counter animation
    const targetNumbers = [150, 500, 23]; // Projects, Workforce, Years

    const animateCounter = (index, target) => {
      let current = 0;
      const increment = target / 50;
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

  return (
    <>
      <div className="homehero">
        <div className="herocircle">
          <p>Scroll down</p>
        </div>
        <div className="Navbar">
          <div className="logo">
            <img src="Assets/logo.png" alt="" />
          </div>
          <div className="links">
            <img
              ref={logoRef}
              src="/Assets/Group 19.png"
              alt=""
              id="link-lines"
            />
            <NavLink ref={(el) => (linksRef.current[0] = el)} id="home" to="/">
              home
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[1] = el)} to="/about">
              about
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[2] = el)} to="/projects">
              projects
            </NavLink>
            <NavLink ref={(el) => (linksRef.current[3] = el)} to="/services">
              services
            </NavLink>
            <NavLink
              ref={(el) => (linksRef.current[4] = el)}
              id="border"
              to="/contact"
            >
              let's connect
            </NavLink>
          </div>
        </div>
        <img src="/Assets/Rectangle 1.png" id="heroimg" alt="" />
        <div className="herosection">
          <div className="heroleft">
            <h4 ref={(el) => (heroTextRefs.current[0] = el)}>
              Building lasting legacies since 2000 — from iconic high-rises and
              modern villas to complex industrial and <br />
              hospitality projects.
            </h4>
            <h1 ref={(el) => (heroTextRefs.current[1] = el)}>
              Leaders in Quality Construction <br /> & Infrastructure
            </h1>
            <h3
              className="lets-talk"
              ref={(el) => (heroTextRefs.current[2] = el)}
            >
              let's talk
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

export default Homehero;
