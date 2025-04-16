import "../Styles/Navbar.css";

import React from "react";

function Navbar() {
  return (
    <div className="Navbar">
      <div className="logo">
        <img src="Assets/logo.png"  alt="" />
      </div>
      <div className="links">
        <img src="/Assets/Group 19.png" alt="" id="link-lines" />
        <h4>home</h4>
        <h4>about</h4>
        <h4>projects</h4>
        <h4>services</h4>
        <h4 id="border">let's connect</h4>
      </div>
    </div>
  );
}

export default Navbar;
