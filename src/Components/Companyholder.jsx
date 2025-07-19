import React, {  } from "react";
import "../Styles/Companyholder.css";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

function Companyholder() {
  const data = [
    {
      sno: `01`,
      projectname: "Jeikor Contracting – UAE",
      projectdetails: `As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across <br/>the residential, commercial, industrial, and hospitality sectors.`,
      projectdetails2: `With over two decades of experience, a skilled workforce, and a reputation for timely delivery, it <br/> remains one of the most trusted names in the UAE’s construction landscape.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `02`,
      projectname: "Jeikor Carpentry – UAE",
      projectdetails: `Jeikor Carpentry is the group’s specialized woodworks division, delivering high-end <br/>joinery solutions for luxury interiors and custom projects.`,
      projectdetails2: `With an in-house workshop and expert craftsmen, the division produces everything <br/> from doors and wardrobes to decorative panelling and bespoke furniture.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `03`,
      projectname: "Jeikor Aluminum Factory – UAE",
      projectdetails: `This division manufactures and installs aluminum and glass solutions for facades, <br/>windows, curtain walls, and cladding.`,
      projectdetails2: `Combining precision engineering with modern aesthetics, Jeikor Aluminum <br/>ensures safety, durability, and sleek architectural finishes across builds.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `04`,
      projectname: "Jeikor Contracting – Iraq",
      projectdetails: `Expanding Jeikor’s legacy into Iraq, this branch offers comprehensive construction <br/>solutions tailored to regional needs.`,
      projectdetails2: `Backed by Jeikor Group’s proven systems and experience, the Iraq team delivers <br/>reliable civil, industrial, and infrastructure projects with efficiency and quality.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `05`,
      projectname: "Five Stars International – Montenegro, Turkey",
      projectdetails: `Five Stars International handles Jeikor Group’s overseas commercial development, <br/>construction consultancy, and trade operations in Montenegro and Turkey.`,
      projectdetails2: `The company bridges regional expertise with international standards, enabling <br/>seamless cross-border project execution.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `06`,
      projectname: "Aeternum Solar Energy – UAE",
      projectdetails: `Aeternum represents the group’s commitment to sustainable innovation. <br/>Specialized in solar energy solutions, Aeternum offers consultation, installation.`,
      projectdetails2: `and integration of renewable systems — helping businesses and governments <br/>move toward a greener, energy-independent future.`,
      img: "/Assets/Rectangle 22.png",
    },
  ];

  useGSAP(() => {
    // Select all `.gsapholder` elements
    const cards = gsap.utils.toArray(".gsapholder");

    // Loop through each card and create a ScrollTrigger
    cards.forEach((card) => {
      const belowTopRow = card.querySelector(".belowtoprow");
      const cardRightImg = card.querySelector(".cardright img");
      const cardtext=card.querySelector('.cardleft')

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card, // Trigger animation when this card enters the viewport
          start: "top 50%", // Start animation when the top of the card is 80% down the viewport
          end: "top 50%", // End animation when the top of the card is 50% down the viewport
          scrub: false, // No smooth scrolling effect
          markers: false, // Set to true for debugging
        },
      });

      // Add animations to the timeline
      tl.fromTo(
        belowTopRow,
        { clipPath: "inset(0 100% 0 0)" }, // Start with the element hidden
        {
          clipPath: "inset(0 0% 0 0)", // Reveal the element
          duration: 1.25,
          ease: "power3.inout",
        }
      ).fromTo(
        cardRightImg,
        { clipPath: "inset(0 100% 0 0)" }, // Start with the image hidden
        {
          clipPath: "inset(0 0% 0 0)", // Reveal the image
          duration: 1.25,
          ease: "power3.inout",
        },
        "<" // Start this animation at the same time as the previous one
      ).fromTo(cardtext, { opacity: 0, x: "-10%" }, { opacity: 1, x: "0%", duration: 0.7, delay:0.2, ease: "power3.inout" }, "<"); // Start this animation at the same time as the previous one
    });
  }, []);

  return (
    <>
   
      <div className="companyholder">
        <h1>
          Our Group <br /> <span id="blue">Companies</span>
        </h1>

        {data.map((item, index) => {
          return (
            <React.Fragment key={index}>
              <div className="gsapholder">
                <div className="belowtoprow">
                  <img src="/Assets/Line 10.png" alt="" />
                  <span>
                    <p className="aboutp">{item.sno}</p>
                  </span>
                </div>
                <div className="companycard">
                  <div className="cardleft">
                    <h1>{item.projectname}</h1>
                    <h5
                      dangerouslySetInnerHTML={{ __html: item.projectdetails }}
                    ></h5>
                    <h5
                      dangerouslySetInnerHTML={{ __html: item.projectdetails2 }}
                    ></h5>
                  </div>
                  <div className="cardright">
                    <img src="/Assets/Rectangle 22.png" alt="" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          );
        })}
      </div>
    </>
  );
}

export default Companyholder;
