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
      projectname: "Jeikor Contracting – UAE",
      projectdetails: `As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across <br/>the residential, commercial, industrial, and hospitality sectors.`,
      projectdetails2: `With over two decades of experience, a skilled workforce, and a reputation for timely delivery, it <br/> remains one of the most trusted names in the UAE’s construction landscape.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `03`,
      projectname: "Jeikor Contracting – UAE",
      projectdetails: `As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across <br/>the residential, commercial, industrial, and hospitality sectors.`,
      projectdetails2: `With over two decades of experience, a skilled workforce, and a reputation for timely delivery, it <br/> remains one of the most trusted names in the UAE’s construction landscape.`,
      img: "/Assets/Rectangle 22.png",
    },
    {
      sno: `04`,
      projectname: "Jeikor Contracting – UAE",
      projectdetails: `As the flagship division of Jeikor Group, Jeikor Contracting UAE has completed 200+ projects across <br/>the residential, commercial, industrial, and hospitality sectors.`,
      projectdetails2: `With over two decades of experience, a skilled workforce, and a reputation for timely delivery, it <br/> remains one of the most trusted names in the UAE’s construction landscape.`,
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
                  <img src="Assets/Line 10.png" alt="" />
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
