import React, { useRef } from "react";
import "../Styles/large-section-mobile.css";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(ScrollTrigger);

const LargeSectionMobile = () => {
  const pathRef = useRef(null);
  const containerRef = useRef(null);

  useGSAP(() => {
    const path = pathRef.current;
    const length = path.getTotalLength();

    // Set up the starting position for the path
    gsap.set(path, {
      strokeDasharray: length,
      strokeDashoffset: length,
    });

    // Create the animation
    gsap.to(path, {
      strokeDashoffset: 0,
      ease: "none",
      scrollTrigger: {
        trigger: containerRef.current,
        start: "top center",
        end: "bottom 80%",
        scrub: 0.5,
      },
    });
  }, []);
    
  return (
    <>
      <div className="large-mobile-section" ref={containerRef}>
        <div className="large-mobile-blur"></div>

        <div className="mobile-large-svg">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="22"
            height="1512"
            viewBox="0 0 22 1512"
            fill="none"
          >
            <circle cx="10" cy="1020" r="10" fill="#F5F5F5" />
            <circle cx="12" cy="508" r="10" fill="#F5F5F5" />
            <path
              ref={pathRef}
              d="M4.33336 1508.99C4.32653 1510.46 5.51489 1511.66 6.98763 1511.67C8.46037 1511.67 9.65981 1510.49 9.66664 1509.01C9.67347 1507.54 8.48511 1506.34 7.01237 1506.33C5.53963 1506.33 4.34019 1507.51 4.33336 1508.99ZM14 0L13.5 -0.00231939L11.4662 438.423L11.9662 438.426L12.4662 438.428L14.5 0.00231939L14 0ZM11.9662 438.426L11.4662 438.423L9.33784 897.241L9.83784 897.243L10.3378 897.246L12.4662 438.428L11.9662 438.426ZM9.83784 897.243L9.33784 897.241L6.95217 1411.52L7.45216 1411.53L7.95216 1411.53L10.3378 897.246L9.83784 897.243ZM7.45216 1411.53L6.95217 1411.52L6.50001 1509L7 1509L7.49999 1509L7.95216 1411.53L7.45216 1411.53Z"
              fill="#F5F5F5"
              stroke="#F5F5F5"
              strokeWidth="1"
            />
          </svg>
        </div>

        <div className="large-mobile-cc">
          <div className="large-mobile-con">
            <h1>2019</h1>
            <p>
               Launched new divisions and upgraded capabilities across joinery,
              MEP, and interior works.
            </p>
          </div>
          <div className="large-mobile-con">
            <h1>2019</h1>
            <p>
               Launched new divisions and upgraded capabilities across joinery,
              MEP, and interior works.
            </p>
          </div>
          <div className="large-mobile-con">
            <h1>2019</h1>
            <p>
               Launched new divisions and upgraded capabilities across joinery,
              MEP, and interior works.
            </p>
          </div>

          <div className="large-mobile-last-img">
           
          </div>
        </div>

        <div className="large-mobile-blur-last"></div>
      </div>
    </>
  );
};

export default LargeSectionMobile;
