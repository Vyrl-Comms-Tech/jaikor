import React, { useRef } from "react";
import "../Styles/Cardsection.css";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function Cardsection() {
  const lineRef = useRef(null);
  const belowtop = useRef([]);
  const card1PathRef1 = useRef(null);
  const card1PathRef2 = useRef(null);
  const card2PathRef = useRef(null);
  const card4PathRef = useRef(null);

  useGSAP(() => {
    const mediaQuery = window.matchMedia("(max-width: 1070px)");

    const handleMediaQueryChange = (e) => {
      if (e.matches) {
        const cards = [".card1", ".card2", ".card3", ".card4"];

        cards.forEach((card, index) => {
          gsap.from(card, {
            opacity: 0,
            y: 100,
            scrollTrigger: {
              trigger: card,
              start: "top bottom",
              end: "top center",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.set(lineRef.current, {
          strokeDasharray: lineRef.current.getTotalLength(),
          strokeDashoffset: lineRef.current.getTotalLength(),
        });

        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          scrollTrigger: {
            trigger: ".cardsection",
            start: "top bottom",
            end: "top center",
            scrub: 1,
            toggleActions: "play none none reverse",
          },
        });

        const cardPaths = [
          card1PathRef1.current,
          card1PathRef2.current,
          card2PathRef.current,
          card4PathRef.current,
        ];

        cardPaths.forEach((path) => {
          gsap.set(path, {
            strokeDasharray: path.getTotalLength(),
            strokeDashoffset: path.getTotalLength(),
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            scrollTrigger: {
              trigger: path,
              start: "top bottom",
              end: "top center",
              scrub: 1,
              toggleActions: "play none none reverse",
            },
          });
        });
      } else {
        const tl = gsap.timeline({
          scrollTrigger: {
            trigger: ".cardsection",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });

        gsap.set(lineRef.current, {
          strokeDasharray: lineRef.current.getTotalLength(),
          strokeDashoffset: lineRef.current.getTotalLength(),
        });

        tl.to(
          lineRef.current,
          {
            strokeDashoffset: 0,
            duration: 1.25,
            ease: "power2.inOut",
          },
          0
        ).fromTo(
          belowtop.current,
          { x: "-50", opacity: 0 },
          {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.25,
            ease: "power2.out",
          },
          0
        );

        const cardPaths = [
          card1PathRef1.current,
          card1PathRef2.current,
          card2PathRef.current,
          card4PathRef.current,
        ];

        cardPaths.forEach((path) => {
          gsap.set(path, {
            strokeDasharray: path.getTotalLength(),
            strokeDashoffset: path.getTotalLength(),
          });

          gsap.to(path, {
            strokeDashoffset: 0,
            duration: 1.25,
            ease: "power2.in",
            scrollTrigger: {
              trigger: ".cardsection",
              start: "top center",
              toggleActions: "play none none reverse",
            },
          });
        });

        gsap.from([".card1", ".card2", ".card3", ".card4"], {
          opacity: 0,
          y: 100,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".cardsection",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      }
    };

    handleMediaQueryChange(mediaQuery);
    mediaQuery.addListener(handleMediaQueryChange);

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange);
    };
  });

  return (
    <>
      <div className="cardsection">
        <div className="belowtoprow">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1787"
            height="30"
            viewBox="0 0 1787 30"
            fill="none"
          >
            <path
              ref={lineRef}
              d="M0 1.06592L108.837 1.06592L148.226 28.9065L1787 28.9065"
              stroke="#111E57"
              strokeWidth="0.4"
            />
          </svg>
          <span>
            <p ref={(el) => (belowtop.current[0] = el)}>02</p>
            <h6 ref={(el) => (belowtop.current[1] = el)}>Services</h6>
          </span>
        </div>
        <div className="cardholder">
          <div className="cardrow1">
            <div className="card card1">
              <div className="cardimage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="401"
                  height="362"
                  viewBox="0 0 401 362"
                  fill="none"
                >
                  <path
                    ref={card1PathRef1}
                    d="M399.5 151H219V269H88V361.5"
                    stroke="#3D3D3D"
                  />
                  <path
                    ref={card1PathRef2}
                    d="M400.5 1H220V119H89V211.5H0.5V360.5"
                    stroke="#3D3D3D"
                  />
                </svg>
              </div>
              <div className="cardcontent">
                <h2>
                  General <br /> Contracting
                </h2>
                <p>
                  Robust end-to-end project execution — from
                  <br className="rembr" /> excavation to finishing — led by
                  experienced project
                  <br className="rembr" /> managers and supported by modern
                  machinery.
                </p>
              </div>
            </div>
            <div className="card card4">
              <div className="card4row1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="402"
                  height="141"
                  viewBox="0 0 402 141"
                  fill="none"
                >
                  <path
                    ref={card4PathRef}
                    d="M1 0.5V140.5H168V41.5H401.5V0.5"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="card4row2">
                <h2>
                  General <br /> Contracting
                </h2>
                <p>
                  Robust end-to-end project execution — from
                  <br className="rembr" /> excavation to finishing — led by
                  experienced project
                  <br className="rembr" /> managers and supported by modern
                  machinery.
                </p>
              </div>
            </div>
            <div className="card card2">
              <div className="cardimage">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 312 212"
                  fill="none"
                >
                  <path
                    ref={card2PathRef}
                    d="M312 1H131.5V119H0.5V211.5"
                    stroke="#3D3D3D"
                  />
                </svg>
              </div>
              <div className="cardcontent">
                <h2>
                  Interior <br />
                  Works
                </h2>
                <p>
                  Design-driven interiors that reflect functional beauty —<br />
                  tailored for both residential and commercial spaces.
                </p>
              </div>
            </div>
            <div className="card card4">
              <div className="card4row1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="402"
                  height="141"
                  viewBox="0 0 402 141"
                  fill="none"
                >
                  <path
                    ref={card4PathRef}
                    d="M1 0.5V140.5H168V41.5H401.5V0.5"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="card4row2">
               <h2>
                  Interior <br />
                  Works
                </h2>
                 <p>
                  Design-driven interiors that reflect functional beauty —<br />
                  tailored for both residential and commercial spaces.
                </p>
              </div>
            </div>
          </div>
          <div className="cardrow2">
            <div className="card card3">
              <img src="/Assets/Rectangle 23.png" alt="" />
              <div className="cardcontent">
                <h2>Joinery Works</h2>
                <p>
                  Expert integration of mechanical, electrical, and <br />{" "}
                  plumbing systems to optimize performance, safety, <br /> and
                  sustainability.
                </p>
              </div>
            </div>
            <div className="card card4" id="row2card4">
              <div className="card4row1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="402"
                  height="141"
                  viewBox="0 0 402 141"
                  fill="none"
                >
                  <path
                    ref={card4PathRef}
                    d="M1 0.5V140.5H168V41.5H401.5V0.5"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="card4row2">
                <h2>Joinery Works</h2>
                <p>
                  Expert integration of mechanical, electrical, and <br />{" "}
                  plumbing systems to optimize performance, safety, <br /> and
                  sustainability.
                </p>
              </div>
            </div>
            <div className="card card4">
              <div className="card4row1">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="402"
                  height="141"
                  viewBox="0 0 402 141"
                  fill="none"
                >
                  <path
                    ref={card4PathRef}
                    d="M1 0.5V140.5H168V41.5H401.5V0.5"
                    stroke="black"
                  />
                </svg>
              </div>
              <div className="card4row2">
                <h2>
                  Engineering <br />
                  Services
                </h2>
                <p>
                  Technical expertise to manage structural
                  <br /> challenges,safety codes, and value
                  <br /> engineering for complex builds.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="card-last-text">
          <h2>
             A Legacy of Progress, Innovation & <br className="rembr" />
            Trust
          </h2>
        </div>
      </div>
    </>
  );
}

export default Cardsection;
