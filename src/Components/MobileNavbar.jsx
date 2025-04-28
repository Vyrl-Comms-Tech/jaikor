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
    timelineRef.current = gsap.timeline({ paused: true });

    // Opening animation sequence
    timelineRef.current
      // First animate the menu background
      .to(".mobile-menu", {
        duration: 0.6,
        opacity: 1,
        height: "100vh",
        visibility: "visible",
        ease: "power3.inOut",
      })
      // Then animate the logo
      .fromTo(
        ".mobile-logo-menu",
        { y: -20, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.4, ease: "power2.out" },
        "-=0.2"
      )
      // Then animate all text elements
      .fromTo(
        [
          ".mobile-menu-links .mobile-menu-link",
          ".mobile-contact-info-f",
          ".contact-text"
        ],
        { y: 50, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          stagger: 0.1,
          duration: 0.5,
          ease: "power2.out",
        },
        "-=0.2"
      );
    
    // Create reverse timeline for closing
    const reverseTimeline = gsap.timeline({ paused: true });
    reverseTimeline
      // First animate out all text
      .to(
        [
          ".mobile-menu-links .mobile-menu-link",
          ".mobile-contact-info-f",
          ".contact-text"
        ],
        {
          y: 50,
          opacity: 0,
          stagger: 0.1,
          duration: 0.4,
          ease: "power2.in",
        }
      )
      // Then animate out the logo
      .to(".mobile-logo-menu", {
        y: -20,
        opacity: 0,
        duration: 0.3,
        ease: "power2.in",
      })
      // Finally close the menu
      .to(".mobile-menu", {
        duration: 0.5,
        opacity: 0,
        height: "0",
        visibility: "hidden",
        ease: "power3.inOut",
      });
    
    // Store reverse timeline
    timelineRef.current.reverseTimeline = reverseTimeline;
  }, []);

  // Update the toggleMenu function
  const toggleMenu = () => {
    if (!isOpen) {
      // Opening
      setIsOpen(true);
      timelineRef.current.progress(0); // Reset timeline progress
      timelineRef.current.play();
      document.body.style.overflow = 'hidden';
    } else {
      // Closing
      timelineRef.current.reverseTimeline.progress(0); // Reset reverse timeline progress
      timelineRef.current.reverseTimeline.play();
      document.body.style.overflow = '';
      setTimeout(() => {
        setIsOpen(false);
      }, 800);
    }
  };

  // Update the closeMenu function
  const closeMenu = () => {
    if (isOpen) {
      timelineRef.current.reverseTimeline.progress(0); // Reset reverse timeline progress
      timelineRef.current.reverseTimeline.play();
      document.body.style.overflow = '';
      setTimeout(() => {
        setIsOpen(false);
      }, 800);
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
          <NavLink 
            to="/" 
            className="mobile-menu-link" 
            onClick={closeMenu} 
            style={{opacity: 1, display: 'block', color: 'inherit', visibility: 'visible'}}
          >
            Home
          </NavLink>
          <NavLink 
            to="/about" 
            className="mobile-menu-link" 
            onClick={closeMenu} 
            style={{opacity: 1, display: 'block', color: 'inherit', visibility: 'visible'}}
          >
            About
          </NavLink>
          <NavLink
            to="/projects"
            className="mobile-menu-link"
            onClick={closeMenu}
            style={{opacity: 1, display: 'block', color: 'inherit', visibility: 'visible'}}
          >
            Projects
          </NavLink>
          <NavLink
            to="/services"
            className="mobile-menu-link"
            onClick={closeMenu}
            style={{opacity: 1, display: 'block', color: 'inherit', visibility: 'visible'}}
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
        <div className="mobile-contact-info-f" style={{opacity: 1, visibility: 'visible'}}>
          <div className="contact-item" style={{opacity: 1, visibility: 'visible'}}>
            <a href="tel:+97143262777" style={{opacity: 1, visibility: 'visible'}}>+971 4 326 2777</a>
          </div>
          <div className="contact-item" style={{opacity: 1, visibility: 'visible'}}>
            <a href="mailto:info@jeikor.com" style={{opacity: 1, visibility: 'visible'}}>info@jeikor.com</a>
          </div>
          <div className="contact-item" style={{opacity: 1, visibility: 'visible'}}>
            <a
              href="https://twitter.com/jeikorgroup"
              target="_blank"
              rel="noopener noreferrer"
              style={{opacity: 1, visibility: 'visible'}}
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
