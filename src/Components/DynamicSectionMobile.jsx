import React, { useEffect, useRef, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "../Styles/Mobileproject.css";

gsap.registerPlugin(ScrollTrigger);

const DynamicSectionMobile = () => {
    const navigate = useNavigate();
    const { projectId } = useParams();
    const [selectedItem, setSelectedItem] = useState(null);
    const [currentSlide, setCurrentSlide] = useState(0);
    const [slides, setSlides] = useState([]);
    const lineRef = useRef(null);
    const slidesRef = useRef(null);
    const textRef = useRef(null);

    // Define data array (same as DynamicSection)
    const data = [
      {
        id: "jeikor-contracting-uae",
        sno: "01",
        projectname: "Jeikor Contracting – UAE",
        projectdetails: `Leading the Jeikor Group portfolio, this division has delivered over 200 projects spanning <br/>residential, commercial, and industrial sectors across the UAE.`,
        projectdetails2: `Renowned for reliability and quality, Jeikor Contracting continues to shape the region's <br/>infrastructure with excellence and precision.`,
        img: "/Assets/Rectangle 22.png",
      },
      {
        id: "jeikor-mep-division",
        sno: "02",
        projectname: "Jeikor MEP Services",
        projectdetails: `Specialized in Mechanical, Electrical & Plumbing solutions, this division supports <br/>core infrastructure across commercial and industrial developments.`,
        projectdetails2: `Efficient, code-compliant systems ensure long-term functionality, energy savings, <br/>and environmental responsibility.`,
        img: "/Assets/Rectangle 22.png",
      },
      {
        id: "jeikor-joinery",
        sno: "03",
        projectname: "Jeikor Joinery & Interiors",
        projectdetails: `Craftsmanship meets innovation in our joinery division, offering <br/>custom-made furniture, cabinetry, and interior woodwork solutions.`,
        projectdetails2: `We blend tradition with modern design to create timeless, functional spaces <br/>tailored to each client's vision.`,
        img: "/Assets/Rectangle 22.png",
      },
      {
        id: "jeikor-international",
        sno: "04",
        projectname: "Jeikor International Ventures",
        projectdetails: `Expanding beyond borders, Jeikor International handles overseas <br/>projects, from residential compounds to large-scale mixed-use developments.`,
        projectdetails2: `Backed by global partnerships, we ensure seamless execution <br/>across different regulatory and cultural environments.`,
        img: "/Assets/Rectangle 22.png",
      },
      {
        id: "innovative-design",
        sno: "05",
        projectname: "Avant-Garde Architecture",
        projectdetails: `Merging form and function, our architectural concepts push boundaries <br/>to reimagine the future of space and aesthetics.`,
        projectdetails2: `Designs are guided by innovation, sustainability, and the user <br/>experience at every touchpoint.`,
        img: "/Assets/hm1.jpg",
      },
      {
        id: "urban-development",
        sno: "06",
        projectname: "Urban Revival Projects",
        projectdetails: `We lead urban transformation with integrated planning that revives <br/>communities and enhances liveability in city spaces.`,
        projectdetails2: `Smart zoning and infrastructure solutions guide these <br/>sustainable, people-focused developments.`,
        img: "/Assets/hm2.jpg",
      },
      {
        id: "sustainable-projects",
        sno: "07",
        projectname: "Eco-Conscious Constructions",
        projectdetails: `Embedding environmental values into every brick, our sustainable <br/>builds champion energy efficiency and low-impact design.`,
        projectdetails2: `We use solar integration, water recycling systems, and green <br/>materials to meet today's environmental demands.`,
        img: "/Assets/hm3.jpg",
      },
      {
        id: "structural-excellence",
        sno: "08",
        projectname: "Engineering Marvels",
        projectdetails: `Precision-driven engineering underpins our landmark structures, <br/>ensuring strength, safety, and long-term performance.`,
        projectdetails2: `Every project adheres to the highest standards through innovation, <br/>testing, and rigorous quality assurance.`,
        img: "/Assets/carousel-img.png",
      },
      {
        id: "smart-infrastructure",
        sno: "09",
        projectname: "Smart Infrastructure",
        projectdetails: `Integrating IoT and automation, our infrastructure projects redefine <br/>how cities operate efficiently and sustainably.`,
        projectdetails2: `Real-time monitoring and AI-driven management systems lead <br/>to smarter, more responsive urban environments.`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      },
      {
        id: "hospitality-design",
        sno: "10",
        projectname: "Hospitality Design Solutions",
        projectdetails: `Creating luxurious, welcoming environments for hotels and resorts <br/>with a focus on comfort, elegance, and functionality.`,
        projectdetails2: `Our interiors reflect brand identity and cultural narratives <br/>to deliver exceptional guest experiences.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9cW4weZsldFFMt9BzoQ4PeN3xxKxLRKT_NNpmbtKvpA0tk6UXNw42ArOhSFAUnEiAOE&usqp=CAU",
      },
      {
        id: "modular-construction",
        sno: "11",
        projectname: "Modular Construction",
        projectdetails: `Our modular systems reduce build times and costs, while maintaining <br/>the highest construction standards and aesthetics.`,
        projectdetails2: `Flexible, scalable, and sustainable solutions tailored for modern needs.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzpztEZ2ykCnjQGcdYsKIMaj4Skvv_w9PPQ&s",
      },
      {
        id: "educational-facilities",
        sno: "12",
        projectname: "Educational Infrastructure",
        projectdetails: `Designing learning environments that foster creativity and growth, <br/>from schools to university campuses.`,
        projectdetails2: `Functionality, safety, and inspiration are at the core of our designs.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqmVQoYWHr4IojTkgp2F8X6YchVHiHJRA1w&s",
      },
      {
        id: "healthcare-projects",
        sno: "13",
        projectname: "Healthcare Facilities",
        projectdetails: `We develop advanced healthcare spaces that prioritize <br/>hygiene, patient comfort, and operational efficiency.`,
        projectdetails2: `Every design aligns with medical regulations and best practices <br/>for optimum healing environments.`,
        img: "https://i.pinimg.com/736x/94/f9/9f/94f99f532a6a73fb087e42487c7bde6a.jpg",
      },
      {
        id: "transport-hubs",
        sno: "14",
        projectname: "Transport Infrastructure",
        projectdetails: `Developing next-gen transport hubs, from metro stations <br/>to intercity terminals, with user experience in focus.`,
        projectdetails2: `Designs streamline flow, accessibility, and multimodal connectivity.`,
        img: "https://mldvwwasb8tu.i.optimole.com/cb:esbD~6200b/w:1100/h:733/q:90/f:best/ig:avif/http://travelaway.me/wp-content/uploads/2018/07/contemporary-architecture-vienna.jpg",
      },
      {
        id: "public-spaces",
        sno: "15",
        projectname: "Community & Public Spaces",
        projectdetails: `Designing inclusive, vibrant public areas that serve as <br/>social, cultural, and recreational hubs.`,
        projectdetails2: `We enhance public life with urban parks, plazas, and civic centers.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRg6cVcSFeN5iG6Drg2LHbOxAwK2Lk5ub9RXA&s",
      },
      {
        id: "industrial-complexes",
        sno: "16",
        projectname: "Industrial Complex Development",
        projectdetails: `Robust facilities tailored for manufacturing, logistics, and processing, <br/>meeting the needs of modern industries.`,
        projectdetails2: `Optimized for performance, safety, and expansion flexibility.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyuH_02j4Xrnu_2fW5VYRzNBBbdnhynB11tw&s",
      }
    ];

    // Project ID to data range mapping
    const projectIdToDataRange = {
        "innovative-design": { start: 0, end: 4 },
        "urban-development": { start: 4, end: 8 },
        "sustainable-projects": { start: 8, end: 12 },
        "structural-excellence": { start: 12, end: 16 }
    };

    useEffect(() => {
        if (projectId) {
            const selected = data.find(item => item.id === projectId);
            setSelectedItem(selected || null);
            
            if (selected) {
                // Check if the project is from the HoverImage mapping
                const range = projectIdToDataRange[projectId];
                
                if (range) {
                    // If it's a HoverImage project, show the corresponding range of items
                    const relatedProjectRange = data.slice(range.start, range.end);
                    
                    // Create proper slides array instead of mutating the existing one
                    const newSlides = relatedProjectRange.map(item => ({
                        id: item.id,
                        image: item.img,
                        title: item.projectname,
                        description: item.projectdetails,
                        description2: item.projectdetails2
                    }));
                    
                    // Set slides first
                    setSlides(newSlides);
                    // Then set current slide to 0 (first slide)
                    setCurrentSlide(0);
                    
                    // Initialize slide positions after a short delay to ensure DOM is updated
                    setTimeout(() => {
                        if (slidesRef.current) {
                            gsap.set(".op-slide", {
                                xPercent: (i) => i * 100,
                            });
                        }
                    }, 100);
                }
            }
        }
    }, [projectId]);

    useGSAP(() => {
      // Initialize GSAP context
      const ctx = gsap.context(() => {
        // Initial positioning of slides
        gsap.set(".op-slide", {
          xPercent: (i) => i * 100,
        });
  
        // Line drawing animation
        gsap.set(lineRef.current, {
          strokeDasharray: lineRef.current.getTotalLength(),
          strokeDashoffset: lineRef.current.getTotalLength(),
        });
  
        gsap.to(lineRef.current, {
          strokeDashoffset: 0,
          duration: 1.25,
          ease: "power2.inOut",
          scrollTrigger: {
            trigger: ".our-projects",
            start: "top center",
            toggleActions: "play none none reverse",
          },
        });
      });
  
      return () => ctx.revert();
    }, []);

    const goToSlide = (direction) => {
      if (!slidesRef.current || !textRef.current) return;
  
      const totalSlides = slides.length;
      if (totalSlides === 0) return; // Guard against empty slides array
      
      const newIndex =
        direction === "next"
          ? (currentSlide + 1) % totalSlides
          : (currentSlide - 1 + totalSlides) % totalSlides;
  
      const textDirection = direction === "next" ? -1 : 1;
  
      // Timeline for coordinated animations
      const tl = gsap.timeline();
  
      // First animate current text out
      tl.to(".op-slide-text-content", {
        yPercent: textDirection * 100,
        opacity: 0,
        duration: 0.4,
        ease: "power2.in",
      })
        // Update the slide index
        .call(() => setCurrentSlide(newIndex))
        // Then bring new text in
        .fromTo(
          ".op-slide-text-content",
          {
            yPercent: textDirection * -100,
            opacity: 0,
          },
          {
            yPercent: 0,
            opacity: 1,
            duration: 0.4,
            ease: "power2.out",
          }
        )
        // Finally animate the slides horizontally
        .to(
          ".op-slide",
          {
            xPercent: (i) => (i - newIndex) * 100,
            duration: 0.6,
            ease: "power2.out",
          },
          "-=0.8"
        ); // Slight overlap with text animation
    };
    
    return (
      <>
        <div className="Mobileprojects">
          <div className="our-projects">
            <div className="op-carousel-content">
              <div className="op-top">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="1816"
                  height="34"
                  viewBox="0 0 1816 34"
                  fill="none"
                >
                  <path
                    ref={lineRef}
                    d="M0 1L110.603 1L150.631 33L1816 33"
                    stroke="#111E57"
                    strokeWidth="0.4"
                  />
                </svg>
                <span>
                  {/* <div className="op-top-ball"></div> */}
                  <h6>0{currentSlide+1}</h6>
                </span>
              </div>
    
              <div className="op-navigation">
                <button
                  className="op-nav-button prev"
                  onClick={() => goToSlide("prev")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 23"
                    fill="none"
                  >
                    <path
                      d="M12.5 20.702L10.7153 22.5L0.994453 12.7009C0.837758 12.5439 0.713403 12.3572 0.628545 12.1515C0.543686 11.9459 0.5 11.7253 0.5 11.5025C0.5 11.2798 0.543686 11.0592 0.628545 10.8536C0.713403 10.6479 0.837758 10.4612 0.994453 10.3042L10.7153 0.5L12.4983 2.298L3.37462 11.5L12.5 20.702Z"
                    />
                  </svg>
                </button>
                <button
                  className="op-nav-button next"
                  onClick={() => goToSlide("next")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 23"
                    fill="none"
                  >
                    <path
                      d="M0.5 2.29799L2.28471 0.5L12.0055 10.2991C12.1622 10.4561 12.2866 10.6428 12.3715 10.8485C12.4563 11.0541 12.5 11.2747 12.5 11.4975C12.5 11.7202 12.4563 11.9408 12.3715 12.1464C12.2866 12.3521 12.1622 12.5388 12.0055 12.6958L2.28471 22.5L0.501681 20.702L9.62538 11.5L0.5 2.29799Z"
                    />
                  </svg>
                </button>
              </div>
    
              <div className="op-carousel-main-container">
                <div className="op-text-section" ref={textRef}>
                  <div className="op-slide-text-content">
                    {slides.length > 0 && (
                      <>
                        <h2>{slides[currentSlide].title}</h2>
                        <p dangerouslySetInnerHTML={{ __html: slides[currentSlide].description }}></p>
                        <p dangerouslySetInnerHTML={{ __html: slides[currentSlide].description2 }}></p>
                      </>
                    )}
                  </div>
                </div>
    
                <div className="op-slides-container" ref={slidesRef}>
                  {slides.map((slide, index) => (
                    <div key={slide.id} className="op-slide">
                      <img
                        src={slide.image || "/placeholder.svg"}
                        alt={`Slide ${slide.id}`}
                      />
                    </div>
                  ))}
                </div>
              </div>
            </div>
    
            <div className="op-pagination">
              <div className="op-navigation-btm">
                <button
                  className="op-nav-button prev"
                  onClick={() => goToSlide("prev")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 23"
                    fill="none"
                  >
                    <path
                      d="M12.5 20.702L10.7153 22.5L0.994453 12.7009C0.837758 12.5439 0.713403 12.3572 0.628545 12.1515C0.543686 11.9459 0.5 11.7253 0.5 11.5025C0.5 11.2798 0.543686 11.0592 0.628545 10.8536C0.713403 10.6479 0.837758 10.4612 0.994453 10.3042L10.7153 0.5L12.4983 2.298L3.37462 11.5L12.5 20.702Z"
                    />
                  </svg>
                </button>
                <button
                  className="op-nav-button next"
                  onClick={() => goToSlide("next")}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    viewBox="0 0 13 23"
                    fill="none"
                  >
                    <path
                      d="M0.5 2.29799L2.28471 0.5L12.0055 10.2991C12.1622 10.4561 12.2866 10.6428 12.3715 10.8485C12.4563 11.0541 12.5 11.2747 12.5 11.4975C12.5 11.7202 12.4563 11.9408 12.3715 12.1464C12.2866 12.3521 12.1622 12.5388 12.0055 12.6958L2.28471 22.5L0.501681 20.702L9.62538 11.5L0.5 2.29799Z"
                    />
                  </svg>
                </button>
              </div>
              {slides.length > 0 && (
                <>{currentSlide + 1}/{slides.length}</>
              )}
            </div>
          </div>
        </div>
      </>
    );
};

export default DynamicSectionMobile;