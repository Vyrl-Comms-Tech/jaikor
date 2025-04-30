import React, { useState } from "react";
import "../Styles/contact-us.css";
import { NavLink, useNavigate } from "react-router-dom";
import MobileNavbar from "./MobileNavbar";

const ContactUs = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div className="contact-us">
        {/* <div className="contact-us-main"> */}
        <div className="Navbar">
          <div className="logo">
            <img src="Assets/logo.png" onClick={()=>navigate('/')} alt="" />
          </div>
          <div className="links">
            {/* Navbar */}
            <NavLink id="home" to="/">
              home
            </NavLink>
            <NavLink to="/about">about</NavLink>
            <NavLink to="/projects">projects</NavLink>
            <NavLink to="/services">services</NavLink>
            <NavLink id="border" to="/contact">
              let's connect
            </NavLink>
            <MobileNavbar isOpen={isMenuOpen} setIsOpen={setIsMenuOpen} />
          </div>
        </div>
        {/* Navbar */}

        <div className="contact-us-main-container">
          <div className="contact-us-main-content">
            <div className="contact-us-icon">
              <img src="Assets/fb.svg" alt="fb logo" />
              <img src="Assets/x.svg" alt="fb logo" />
              <img src="Assets/insta.svg" alt="fb logo" />
            </div>
            <div className="contact-us-text">
              <h1>let’s Connect for more</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim
              </p>
              <div className="contact-us-input">
                <input type="text" placeholder="name" className="name-input" />
                <input type="text" placeholder="email" />
              </div>
              <input className="input" type="text" placeholder="phone" />
              <input className="input" type="text" placeholder="message" />
              <div id="send-btn">
                <img src="Assets/send.svg" alt="" />
                <h4>send</h4>
              </div>
            </div>
          </div>
        </div>
        {/* </div> */}
      </div>
    </>
  );
};

export default ContactUs;
