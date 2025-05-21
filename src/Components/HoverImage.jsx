import { useRef } from "react";
import gsap from "gsap";
import "../Styles/hover-image.css";
import { useGSAP } from "@gsap/react";
import { useNavigate } from "react-router-dom";

export default function HoverImage() {
  const hoverImageRef = useRef(null);
  const navigate = useNavigate();

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
      const handleMouseEnter = () => {
        // First, ensure all texts are hidden
        items.forEach((otherItem) => {
          const otherText = otherItem.querySelector(".hover-image-text");
          gsap.to(otherText, {
            opacity: 0,
            y: 20,
            duration: 0.2,
            ease: "power2.in",
            overwrite: true
          });
        });

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
          delay: 0.2,
          ease: "power3.out",
          overwrite: true
        });
      };

      // Create mouseout animation
      const handleMouseLeave = () => {
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
          overwrite: true
        });
      };

      item.addEventListener("mouseenter", handleMouseEnter);
      item.addEventListener("mouseleave", handleMouseLeave);

      // Cleanup event listeners on component unmount
      return () => {
        item.removeEventListener("mouseenter", handleMouseEnter);
        item.removeEventListener("mouseleave", handleMouseLeave);
      };
    });
}, []);

  // Project data with matching IDs from DynamicSection
  const projectData = [
    {
      id: "innovative-design",
      title: "Innovative Design",
      description: "Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions",
      image: "/Assets/hm1.jpg"
    },
    {
      id: "urban-development", 
      title: "Urban Development",
      description: "Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions",
      image: "/Assets/hm2.jpg"
    },
    {
      id: "sustainable-projects",
      title: "Sustainable Projects", 
      description: "Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions",
      image: "/Assets/hm3.jpg"
    },
    {
      id: "structural-excellence",
      title: "Structural Excellence",
      description: "Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions", 
      image: "/Assets/carousel-img.png"
    }
  ];

  return (
    <>
      <div className="hover-image-main-container">
        <div className="hover-image-container" ref={hoverImageRef}>
          {projectData.map((project, index) => (
            <div 
              key={index} 
              className="hover-image-item"
              onClick={() => navigate(`/dynamic/${project.id}`)}
              style={{cursor: 'pointer'}}
            >
              <img
                src={project.image}
                alt={project.title}
              />
              <div className="hover-image-text">
                <h2>{project.title}</h2>
                <p>{project.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
