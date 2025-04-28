import React, { useState, useRef } from "react";
import { NavLink } from "react-router-dom";
import gsap from "gsap";
import "../Styles/mobile-navbar.css";
import { useGSAP } from "@gsap/react";

const MobileNavbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const timelineRef = useRef(null);
  const logoRef = useRef(null);

  useGSAP(() => {
    // Initialize the timeline
    timelineRef.current = gsap.timeline({ paused: true });

    // Set up the animation
    timelineRef.current
      .to(".mobile-menu", {
        duration: 0.6,
        opacity: 1,
        height: "100vh",
        ease: "power3.inOut",
      })
      .fromTo(
        ".mobile-logo-menu",
        {
          y: -20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          duration: 0.4,
          ease: "power2.out",
        },
        "-=0.4"
      )
      .fromTo(
        ".mobile-menu-link",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          ease: "power2.out",
        },
        "-=0.3"
      )
      .fromTo(
        ".mobile-contact-info",
        {
          y: 20,
          opacity: 0,
        },
        {
          y: 0,
          opacity: 1,
          ease: "power2.out",
        },
        "-=0.2"
      );
  }, []);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    if (!isOpen) {
      timelineRef.current.play();
    } else {
      timelineRef.current.reverse();
    }
  };

  const closeMenu = () => {
    if (isOpen) {
      setIsOpen(false);
      timelineRef.current.reverse();
    }
  };

  return (
    <div className="mobile-navbar">
      <div className="mobile-navbar-container">
        <div className="mobile-logo">
          {/* <img src="/Assets/logo.png" alt="Jeikor Group" /> */}
        </div>
        <div className="mobile-hamburger" onClick={toggleMenu}>
          <div className={`hamburger-bar ${isOpen ? "open" : ""}`}>
            <span className="top"></span>
            <span className="middle"></span>
            <span className="bottom"></span>
          </div>
        </div>

        {/* <label class="bar" id="hamburger" for="check">
              <input type="checkbox" id="check" />

              <span class="top"></span>
              <span class="middle"></span>
              <span class="bottom"></span>
            </label> */}
      </div>

      <div className={`mobile-menu ${isOpen ? "active" : ""}`} ref={menuRef}>
        <div className="mobile-logo-menu" ref={logoRef}>
          <img src="/Assets/logo.png" alt="Jeikor Group" />
        </div>
        <div className="mobile-menu-links">
          <NavLink to="/" className="mobile-menu-link" onClick={closeMenu}>
            Home
          </NavLink>
          <NavLink to="/about" className="mobile-menu-link" onClick={closeMenu}>
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="mobile-menu-link"
            onClick={closeMenu}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className="mobile-menu-link"
            onClick={closeMenu}
          >
            Services
          </NavLink>
          <NavLink
            to="/contact"
            className="mobile-menu-link contact-link"
            onClick={closeMenu}
          >
            Let's Connect
          </NavLink>
        </div>
        <div className="mobile-contact-info-f">
          <div className="contact-item">
            <a href="tel:+97143262777">+971 4 326 2777</a>
          </div>
          <div className="contact-item">
            <a href="mailto:info@jeikor.com">info@jeikor.com</a>
          </div>
          <div className="contact-item">
            <a
              href="https://twitter.com/jeikorgroup"
              target="_blank"
              rel="noopener noreferrer"
            >
              Twitter
            </a>
          </div>
        </div>
        <div className="mobile-contact-info">
          <div className="contact-text">
            Headquartered In Dubai, We Continue To Deliver Excellence With A
            Focus On Safety, Sustainability, And Client Satisfaction.
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileNavbar;
