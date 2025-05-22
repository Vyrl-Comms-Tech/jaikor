import React, { useEffect, useRef } from 'react';
import "../Styles/hover-image-mobile.css";
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { useNavigate } from 'react-router-dom';

const HoverImageMobile = () => {
  const containerRef = useRef(null);
  const navigate = useNavigate();

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

  useGSAP(() => {
    const items = containerRef.current.querySelectorAll('.hover-image-mobile-item');

    items.forEach((item) => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: item, // Trigger animation for each individual card
          start: 'top 80%', // Start animation when the card enters the viewport
          end: 'top 50%', // End animation when the card is halfway in the viewport
          scrub: 1,
          // markers: true, // Enable markers for debugging
        },
      });

      tl.from(item, {
        y: 100,
        opacity: 0,
        duration: 0.8,
        ease: 'power3.inOut',
      });
    });
  });

  return (
    <>
      <div className="hover-image-mobile-container" ref={containerRef}>
        {projectData.map((project, index) => (
          <div 
            key={index} 
            className="hover-image-mobile-item"
            onClick={() => {
              setTimeout(() => {
                navigate(`/dynamic/${project.id}`);
              }, 600);
            }}
            style={{cursor: 'pointer'}}
          >
            <img
              src={project.image}
              alt={project.title}
            />
            <div className="hover-image-mobile-text">
              <h2>{project.title}</h2>
              <p>{project.description}</p>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default HoverImageMobile;