import React, { useEffect } from "react";
import "../Styles/Servicetrust.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function Servicetrust() {
  useGSAP(() => {
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: ".Servicetrust",
        start: "top top",
        // markers: true,
        stagger: 0.2,
        scrub: 4,
        pin: true,
      },
    });
    tl.fromTo(
      "#scard1",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: 0,
        opacity: 1,
        ease: "power3.inOut",
        duration: 3,
      }
    );

    tl.fromTo(
      "#scard2",
      {
        y: "100%",
        opacity: 0,
      },
      {
        y: "0%",
        opacity: 1,
        ease: "power3.inOut",
        duration: 3,
      }
    );

    tl.to("#scard1", {
      x: "200%",
      duration: 6,
      ease: "power3.inOut",
    });

    tl.fromTo(
      "#scard2",
      {
        y: "0",
      },
      {
        y: "-100%",
        opacity: 1,
        ease: "power3.inOut",
        duration: 3,
      }
    );

    tl.to("#scard2", {
      x: "200%",
      duration: 6,
      ease: "power3.inOut",
    });
  }, []);
  return (
    <div className="Servicetrust">
      <img src="/Assets/Rectangle 291.png" id="main-img" alt="" />
      <img id="right-corner" src="/Assets/Rectangle 35.png" alt="" />
      <img id="left-corner" src="/Assets/Rectangle 31.png" alt="" />
      <h1>More Than Services — A Promise Delivered</h1>
      <div className="servicecards">
        <div className="scard " id="scard1">
          <span id="white-circle"></span>
          <h5>
            With over 23 years of industry experience, 200+ completed <br />
            projects, and a dedicated workforce of 570+, Jeikor is more than a
            contractor — we’re a trusted partner.
          </h5>
        </div>
        <div className="scard" id="scard2">
          <span id="white-circle"></span>
          <h5>
            With over 23 years of industry experience, 200+ completed <br />
            projects, and a dedicated workforce of 570+, Jeikor is more than a
            contractor — we’re a trusted partner.
          </h5>
        </div>
      </div>
    </div>
  );
}

export default Servicetrust;
