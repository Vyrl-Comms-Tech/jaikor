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

    // Define data array (UPDATED with correct data from main component)
    const data = [
      // Commercial Projects
      {
        id: "jeikor-contracting-uae",
        sno: "01",
        projectname: "Eiffel Accomodations 2",
        projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
        projectdetails2: `AL QUOZ THIRD,DUBAI`,
        img: "/Assets/Commercial/c1.jpg",
        category: "Commercial"
      },
      {
        id: "jeikor-mep-division",
        sno: "02",
        projectname: "B+G+P+9 COMMERCIAL BUILDING",
        projectdetails: `Model Engineering Consultants Architects`,
        projectdetails2: `Dubai Hills, DUBAI, UAE`,
        img: "/Assets/Commercial/Projects/160.jpeg",
        category: "Commercial"
      },
      {
        id: "jeikor-mep-division-2",
        sno: "03",
        projectname: "B+G+3+Roof floor Commercial Building",
        projectdetails: `X ARCHITECTS ENGINEERING CONSULTANTS`,
        projectdetails2: `DWarsan 4th ,DUBAI`,
        img: "/Assets/Commercial/Projects/143.png",
        category: "Commercial"
      },

      // Residential Projects
      {
        id: "jeikor-joinery",
        sno: "01",
        projectname: "B+G+5+R RESIDENTIAL BUILDING",
        projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
        projectdetails2: `INTERNATIONAL CITY PH. 3,DUBAI`,
        img: "/Assets/Resedential/r1.JPG",
        category: "Residential"
      },
      {
        id: "jeikor-international",
        sno: "02",
        projectname: "B+G+5+R Residential Building",
        projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
        projectdetails2: `INTERNATIONAL CITY PH. 3,DUBAI`,
        img: "/Assets/Resedential/Projects/131.JPG",
        category: "Residential"
      },
      {
        id: "jeikor-international-2",
        sno: "03",
        projectname: "B+G+4+R Residential Building",
        projectdetails: `ZAABEEL CONSULTANTS`,
        projectdetails2: `INTERNATIONAL CITY PH. 3,DUBAI`,
        img: "/Assets/Resedential/Projects/136.jpeg",
        category: "Residential"
      },
      {
        id: "jeikor-international-3",
        sno: "04",
        projectname: "2B+G+3+Roof floor Residential Building",
        projectdetails: `NA ARCHITECTS ENGINEERING CONSULTANTS`,
        projectdetails2: `MIRDIF,DUBAI`,
        img: "/Assets/Resedential/Projects/143.jpeg",
        category: "Residential"
      },
      {
        id: "jeikor-international-4",
        sno: "05",
        projectname: "B+G+3+Roof floor Residential Building",
        projectdetails: `X ARCHITECTS ENGINEERING CONSULTANTS`,
        projectdetails2: `Warsan 4th ,DUBAI`,
        img: "/Assets/Resedential/Projects/146.png",
        category: "Residential"
      },
      {
        id: "jeikor-international-5",
        sno: "06",
        projectname: "B+G+P+9 Residential Building",
        projectdetails: `Model Engineering Consultants Architects`,
        projectdetails2: `Dubai Hills, DUBAI, UAE`,
        img: "/Assets/Resedential/Projects/160.jpeg",
        category: "Residential"
      },

      // Hotel Projects
      {
        id: "eiffel-accommodation",
        sno: "01",
        projectname: "Hotel BLDG",
        projectdetails: `AL BARAHA, DUBAI`,
        projectdetails2: `Designs are guided by innovation, sustainability, and the user <br/>experience at every touchpoint.`,
        img: "/Assets/Hotels/h2.JPG",
        category: "Hotel"
      },

      // Villas
      {
        id: "urban-revival-project-1",
        sno: "01",
        projectname: "Amlak Villas",
        projectdetails: `MIRDIF,DUBAI`,
        projectdetails2: `Smart zoning and infrastructure solutions guide these <br/>sustainable, people-focused developments.`,
        img: "/Assets/Villas/138.JPG",
        category: "Villas"
      },
      {
        id: "eco-conscious-construction-1",
        sno: "02",
        projectname: "G+1+KВ",
        projectdetails: `FAKHREY ENGINEERING`,
        projectdetails2: `Um Saqim`,
        img: "/Assets/Villas/Projects/v1.JPG",
        category: "Villas"
      },
      {
        id: "green-building-initiative",
        sno: "03",
        projectname: "VILLA G+1",
        projectdetails: `M.E. ENGINEERING CONSULTANTS`,
        projectdetails2: `Dubai`,
        img: "/Assets/Villas/Projects/89.jpg",
        category: "Villas"
      },

      // Additional Projects for structural-excellence category
      {
        id: "structural-engineering-1",
        sno: "01",
        projectname: "Engineering Marvels",
        projectdetails: `Precision-driven engineering underpins our landmark structures, <br/>ensuring strength, safety, and long-term performance.`,
        projectdetails2: `Every project adheres to the highest standards through innovation, <br/>testing, and rigorous quality assurance.`,
        img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
        category: "structural-excellence"
      },
      {
        id: "smart-infrastructure-1",
        sno: "02",
        projectname: "Smart Infrastructure",
        projectdetails: `Integrating IoT and automation, our infrastructure projects redefine <br/>how cities operate efficiently and sustainably.`,
        projectdetails2: `Real-time monitoring and AI-driven management systems lead <br/>to smarter, more responsive urban environments.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9cW4weZsldFFMt9BzoQ4PeN3xxKxLRKT_NNpmbtKvpA0tk6UXNw42ArOhSFAUnEiAOE&usqp=CAU",
        category: "structural-excellence"
      },
      {
        id: "hospitality-design-1",
        sno: "03",
        projectname: "Hospitality Design Solutions",
        projectdetails: `Creating luxurious, welcoming environments for hotels and resorts <br/>with a focus on comfort, elegance, and functionality.`,
        projectdetails2: `Our interiors reflect brand identity and cultural narratives <br/>to deliver exceptional guest experiences.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzpztEZ2ykCnjQGcdYsKIMaj4Skvv_w9PPQ&s",
        category: "hospitality"
      },
      {
        id: "modular-construction-1",
        sno: "04",
        projectname: "Modular Construction",
        projectdetails: `Our modular systems reduce build times and costs, while maintaining <br/>the highest construction standards and aesthetics.`,
        projectdetails2: `Flexible, scalable, and sustainable solutions tailored for modern needs.`,
        img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqmVQoYWHr4IojTkgp2F8X6YchVHiHJRA1w&s",
        category: "hospitality"
      },
      {
        id: "educational-facilities-1",
        sno: "05",
        projectname: "Educational Infrastructure",
        projectdetails: `Designing learning environments that foster creativity and growth, <br/>from schools to university campuses.`,
        projectdetails2: `Functionality, safety, and inspiration are at the core of our designs.`,
        img: "https://i.pinimg.com/736x/94/f9/9f/94f99f532a6a73fb087e42487c7bde6a.jpg",
        category: "hospitality"
      },
      {
        id: "healthcare-projects-1",
        sno: "06",
        projectname: "Healthcare Facilities",
        projectdetails: `We develop advanced healthcare spaces that prioritize <br/>hygiene, patient comfort, and operational efficiency.`,
        projectdetails2: `Every design aligns with medical regulations and best practices <br/>for optimum healing environments.`,
        img: "https://mldvwwasb8tu.i.optimole.com/cb:esbD~6200b/w:1100/h:733/q:90/f:best/ig:avif/http://travelaway.me/wp-content/uploads/2018/07/contemporary-architecture-vienna.jpg",
        category: "hospitality"
      }
    ];

    // Updated Project ID to category mapping
    const projectIdToCategoryMapping = {
        "Commercial": "Commercial",
        "Residential": "Residential", 
        "Hotel": "Hotel",
        "Villas": "Villas",
        "structural-excellence": "structural-excellence",
        "hospitality": "hospitality"
    };

    useEffect(() => {
        if (projectId) {
            // Check if projectId is a category
            if (projectIdToCategoryMapping[projectId]) {
                // Filter projects by category
                const categoryProjects = data.filter(item => item.category === projectId);
                
                if (categoryProjects.length > 0) {
                    // Set the first project of the category as selected item
                    setSelectedItem(categoryProjects[0]);
                    
                    // Create slides from all projects in this category
                    const newSlides = categoryProjects.map(item => ({
                        id: item.id,
                        image: item.img,
                        title: item.projectname,
                        description: item.projectdetails,
                        description2: item.projectdetails2
                    }));
                    
                    setSlides(newSlides);
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
            } else {
                // If projectId is a specific project ID, find it and show related projects
                const selected = data.find(item => item.id === projectId);
                
                if (selected) {
                    setSelectedItem(selected);
                    
                    // Show other projects from the same category
                    const relatedProjects = data.filter(item => 
                        item.category === selected.category && item.id !== selected.id
                    );
                    
                    // Create slides including the selected project first, then related ones
                    const newSlides = [selected, ...relatedProjects].map(item => ({
                        id: item.id,
                        image: item.img,
                        title: item.projectname,
                        description: item.projectdetails,
                        description2: item.projectdetails2
                    }));
                    
                    setSlides(newSlides);
                    setCurrentSlide(0);
                    
                    setTimeout(() => {
                        if (slidesRef.current) {
                            gsap.set(".op-slide", {
                                xPercent: (i) => i * 100,
                            });
                        }
                    }, 100);
                }
            }
        } else {
            // Default: show first few projects
            const defaultSlides = data.slice(0, 6).map(item => ({
                id: item.id,
                image: item.img,
                title: item.projectname,
                description: item.projectdetails,
                description2: item.projectdetails2
            }));
            
            setSlides(defaultSlides);
            setCurrentSlide(0);
            
            setTimeout(() => {
                if (slidesRef.current) {
                    gsap.set(".op-slide", {
                        xPercent: (i) => i * 100,
                    });
                }
            }, 100);
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
        if (lineRef.current) {
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
        }
      });
  
      return () => ctx.revert();
    }, [slides]); // Added slides dependency

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
                  <h6>{slides.length > 0 ? `0${currentSlide + 1}` : '01'}</h6>
                </span>
              </div>
    
              <div className="op-navigation">
                <button
                  className="op-nav-button prev"
                  onClick={() => goToSlide("prev")}
                  disabled={slides.length <= 1}
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
                  disabled={slides.length <= 1}
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
                    <div key={`${slide.id}-${index}`} className="op-slide">
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
                  disabled={slides.length <= 1}
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
                  disabled={slides.length <= 1}
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