import {  useRef } from "react";
import gsap from "gsap";
import "../Styles/hover-image.css";
import { useGSAP } from "@gsap/react";

export default function HoverImage() {
  const hoverImageRef = useRef(null);

  useGSAP(() => {
    const hoverImage = hoverImageRef.current;
    if (!hoverImage) return;

    const items = hoverImage.querySelectorAll(".hover-image-item");

    items.forEach((item) => {
      const textElement = item.querySelector(".hover-image-text");

      // Set initial state
      gsap.set(textElement, {
        opacity: 0,
        y: 20,
      });

      // Create hover animation
      item.addEventListener("mouseenter", () => {
        // Expand the image
        gsap.to(item, {
          width: "40%",
          duration: 0.3,
          ease: "circ",
        });

        // Shrink other images
        items.forEach((otherItem) => {
          if (otherItem !== item) {
            gsap.to(otherItem, {
              width: "20%",
              duration: 0.3,
              ease: "circ",
            });
          }
        });

        // Reveal text
        gsap.to(textElement, {
          opacity: 1,
          y: 0,
          duration: 0.6,
          delay: 0.5,
          ease: "power3.out",
        });
      });

      // Create mouseout animation
      item.addEventListener("mouseleave", () => {
        // Reset all images to equal width
        items.forEach((item) => {
          gsap.to(item, {
            width: "25%",
            duration: 0.3,
            ease: "circ",
          });
        });

        // Hide text
        gsap.to(textElement, {
          opacity: 0,
          y: 20,
          duration: 0.4,
          ease: "power2.in",
        });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      items.forEach((item) => {
        item.removeEventListener("mouseenter", () => {});
        item.removeEventListener("mouseleave", () => {});
      });
    };
  }, []);

  return (
    <>
      <div className="hover-image-main-container">
        <div className="hover-image-container" ref={hoverImageRef}>
          <div className="hover-image-item">
            <img
              src="/Assets/hm1.jpg"
              alt="Modern building with curved architecture"
            />
            <div className="hover-image-text">
              <h2>Innovative Design</h2>
              <p>Pushing boundaries with cutting-edge architectural concepts</p>
            </div>
          </div>
          <div className="hover-image-item">
            <img src="/Assets/hm2.jpg" alt="Urban skyscraper at dusk" />
            <div className="hover-image-text">
              <h2>Urban Development</h2>
              <p>Creating skylines that define modern metropolitan areas</p>
            </div>
          </div>
          <div className="hover-image-item">
            <img
              src="/Assets/hm3.jpg"
              alt="Modern building with water reflection"
            />
            <div className="hover-image-text">
              <h2>Sustainable Projects</h2>
              <p>Harmonizing infrastructure with environmental consciousness</p>
            </div>
          </div>
          <div className="hover-image-item">
            <img
              src="/Assets/carousel-img.png"
              alt="Skyscraper with geometric patterns"
            />
            <div className="hover-image-text">
              <h2>Structural Excellence</h2>
              <p>Engineering precision that stands the test of time</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
