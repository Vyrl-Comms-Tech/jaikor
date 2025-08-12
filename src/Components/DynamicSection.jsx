import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import "../Styles/dynamic.css";
import "../Styles/Groupdetails.css";
import React, { useEffect, useState, useRef } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Splitting from "splitting";
import "splitting/dist/splitting.css";

gsap.registerPlugin(ScrollTrigger);

const DynamicSection = () => {
  const navigate = useNavigate();
  const { projectId } = useParams(); // This will get the category from URL like "CommercialProjects"
  const [selectedItem, setSelectedItem] = useState(null);
  const [relatedItems, setRelatedItems] = useState([]);
  const [currentCategory, setCurrentCategory] = useState(null);

  const groupImgRef = useRef(null);
  const detailsCenterRef = useRef(null);
  const h1Ref = useRef(null);

  // Define data with categories added
  const data = [
    // Commercial Projects
    {
      id: "jeikor-contracting-uae",
      sno: "01",
      projectname: "Eiffel Accomodations 2",
      projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
      projectdetails2: `AL QUOZ THIRD,DUBAI`,
      img: "/Assets/Commercial/c1.jpg",
      category: "CommercialProjects"
    },
    {
      id: "jeikor-mep-division",
      sno: "02",
      projectname: "B+G+P+9 COMMERCIAL BUILDING",
      projectdetails: `Model Engineering Consultants Architects`,
      projectdetails2: `Dubai Hills, DUBAI, UAE`,
      img: "/Assets/Commercial/Projects/160.jpeg",
      category: "CommercialProjects"
    },
    {
      id: "jeikor-mep-division",
      sno: "03",
      projectname: "B+G+3+Roof floor Commercial Building",
      projectdetails: `X ARCHITECTS ENGINEERING CONSULTANTS`,
      projectdetails2: `DWarsan 4th ,DUBAI`,
      img: "/Assets/Commercial/Projects/143.png",
      category: "CommercialProjects"
    },

    // Resedential Projects
    {
      id: "jeikor-joinery",
      sno: "01",
      projectname: "B+G+5+R RESIDENTIAL BUILDING",
      projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
      img: "/Assets/Resedential/r1.JPG",
      category: "ResedentialProjects"
    },
    {
      id: "jeikor-international",
      sno: "02",
      projectname: "B+G+5+R Residential Building",
      projectdetails: `MIMAR EMIRATES ENG. CONSULTANTS`,
      projectdetails2: `INTERNATIONAL CITY PH. 3,DUBAI`,
      img: "/Assets/Resedential/Projects/131.JPG",
      category: "ResedentialProjects"
    },
    {
      id: "jeikor-international",
      sno: "03",
      projectname: "B+G+4+R Residential Building",
      projectdetails: `ZAABEEL CONSULTANTS `,
      projectdetails2: `INTERNATIONAL CITY PH. 3,DUBAI`,
      img: "/Assets/Resedential/Projects/136.jpeg",
      category: "ResedentialProjects"
    },
    {
      id: "jeikor-international",
      sno: "04",
      projectname: "2B+G+3+Roof floor Residential Building",
      projectdetails: `NA ARCHITECTS ENGINEERING CONSULTANTS`,
      projectdetails2: `MIRDIF,DUBAI`,
      img: "/Assets/Resedential/Projects/143.jpeg",
      category: "ResedentialProjects"
    },
    {
      id: "jeikor-international",
      sno: "05",
      projectname: "B+G+3+Roof floor Residential Building",
      projectdetails: `X ARCHITECTS ENGINEERING CONSULTANTS`,
      projectdetails2: `Warsan 4th ,DUBAI`,
      img: "/Assets/Resedential/Projects/146.png",
      category: "ResedentialProjects"
    },
    {
      id: "jeikor-international",
      sno: "04",
      projectname: "B+G+P+9 Residential Building",
      projectdetails: `Model Engineering Consultants Architects`,
      projectdetails2: `Dubai Hills, DUBAI, UAE`,
      img: "/Assets/Resedential/Projects/160.jpeg",
      category: "ResedentialProjects"
    },
    {
      id: "eiffel-accommodation",
      sno: "05",
      projectname: "Eiffel Accomodation 2",
      projectdetails: `Merging form and function, our architectural concepts push boundaries <br/>to reimagine the future of space and aesthetics.`,
      projectdetails2: `Designs are guided by innovation, sustainability, and the user <br/>experience at every touchpoint.`,
      img: "/Assets/Commercial/c1.jpg",
      category: "urban-development"
    },
    {
      id: "urban-revival-project-1",
      sno: "06",
      projectname: "Urban Revival Projects",
      projectdetails: `We lead urban transformation with integrated planning that revives <br/>communities and enhances liveability in city spaces.`,
      projectdetails2: `Smart zoning and infrastructure solutions guide these <br/>sustainable, people-focused developments.`,
      img: "/Assets/hm2.jpg",
      category: "urban-development"
    },
    {
      id: "eco-conscious-construction-1",
      sno: "07",
      projectname: "Eco-Conscious Constructions",
      projectdetails: `Embedding environmental values into every brick, our sustainable <br/>builds champion energy efficiency and low-impact design.`,
      projectdetails2: `We use solar integration, water recycling systems, and green <br/>materials to meet today's environmental demands.`,
      img: "/Assets/hm3.jpg",
      category: "sustainable-projects"
    },
    {
      id: "green-building-initiative",
      sno: "08",
      projectname: "Green Building Initiative",
      projectdetails: `Revolutionary sustainable architecture combining renewable energy <br/>systems with cutting-edge green building technologies.`,
      projectdetails2: `LEED Platinum certified designs with net-zero energy consumption <br/>and carbon-neutral footprint.`,
      img: "/Assets/carousel-img.png",
      category: "sustainable-projects"
    },
    {
      id: "structural-engineering-1",
      sno: "09",
      projectname: "Engineering Marvels",
      projectdetails: `Precision-driven engineering underpins our landmark structures, <br/>ensuring strength, safety, and long-term performance.`,
      projectdetails2: `Every project adheres to the highest standards through innovation, <br/>testing, and rigorous quality assurance.`,
      img: "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e6/Dubai_Marina_Skyline.jpg/1200px-Dubai_Marina_Skyline.jpg",
      category: "structural-excellence"
    },
    {
      id: "smart-infrastructure-1",
      sno: "10",
      projectname: "Smart Infrastructure",
      projectdetails: `Integrating IoT and automation, our infrastructure projects redefine <br/>how cities operate efficiently and sustainably.`,
      projectdetails2: `Real-time monitoring and AI-driven management systems lead <br/>to smarter, more responsive urban environments.`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRW9cW4weZsldFFMt9BzoQ4PeN3xxKxLRKT_NNpmbtKvpA0tk6UXNw42ArOhSFAUnEiAOE&usqp=CAU",
      category: "structural-excellence"
    },
    {
      id: "hospitality-design-1",
      sno: "11",
      projectname: "Hospitality Design Solutions",
      projectdetails: `Creating luxurious, welcoming environments for hotels and resorts <br/>with a focus on comfort, elegance, and functionality.`,
      projectdetails2: `Our interiors reflect brand identity and cultural narratives <br/>to deliver exceptional guest experiences.`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTyzpztEZ2ykCnjQGcdYsKIMaj4Skvv_w9PPQ&s",
      category: "hospitality"
    },
    {
      id: "modular-construction-1",
      sno: "12",
      projectname: "Modular Construction",
      projectdetails: `Our modular systems reduce build times and costs, while maintaining <br/>the highest construction standards and aesthetics.`,
      projectdetails2: `Flexible, scalable, and sustainable solutions tailored for modern needs.`,
      img: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSqmVQoYWHr4IojTkgp2F8X6YchVHiHJRA1w&s",
      category: "hospitality"
    },
    {
      id: "educational-facilities-1",
      sno: "13",
      projectname: "Educational Infrastructure",
      projectdetails: `Designing learning environments that foster creativity and growth, <br/>from schools to university campuses.`,
      projectdetails2: `Functionality, safety, and inspiration are at the core of our designs.`,
      img: "https://i.pinimg.com/736x/94/f9/9f/94f99f532a6a73fb087e42487c7bde6a.jpg",
      category: "hospitality"
    },
    {
      id: "healthcare-projects-1",
      sno: "14",
      projectname: "Healthcare Facilities",
      projectdetails: `We develop advanced healthcare spaces that prioritize <br/>hygiene, patient comfort, and operational efficiency.`,
      projectdetails2: `Every design aligns with medical regulations and best practices <br/>for optimum healing environments.`,
      img: "https://mldvwwasb8tu.i.optimole.com/cb:esbD~6200b/w:1100/h:733/q:90/f:best/ig:avif/http://travelaway.me/wp-content/uploads/2018/07/contemporary-architecture-vienna.jpg",
      category: "hospitality"
    }
  ];

  // Category mapping for display names
  const categoryDisplayNames = {
    "CommercialProjects": "Commercial Projects",
    "urban-development": "Urban Development",
    "sustainable-projects": "Sustainable Projects", 
    "structural-excellence": "Structural Excellence",
    "hospitality": "Hospitality"
  };

  // Effect for filtering projects based on URL
  useEffect(() => {
    if (projectId) {
      setCurrentCategory(projectId);
      
      // Filter projects by category
      const categoryProjects = data.filter(item => item.category === projectId);
      
      if (categoryProjects.length > 0) {
        // Set the first project of the category as selected item
        const firstProject = categoryProjects[0];
        setSelectedItem(firstProject);
        
        // Show remaining projects from this category as related items (excluding the first one)
        const remainingProjects = categoryProjects.filter(item => item.id !== firstProject.id);
        setRelatedItems(remainingProjects);
      } else {
        // If no projects found for this category, show default
        setSelectedItem(null);
        setRelatedItems(data.slice(0, 4));
      }
    } else {
      // Default state when no category is selected
      setCurrentCategory(null);
      setSelectedItem(null);
      setRelatedItems(data.slice(0, 4));
    }
  }, [projectId]);

  // GSAP Animations
  useGSAP(() => {
    if (selectedItem) {
      // Create animations similar to Groupdetails
      const tl2 = gsap.timeline({
        scrollTrigger: {
          trigger: ".selected-project",
          start: "top 80%",
        },
      });

      tl2.fromTo(
        ".belowtoprow img",
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.25,
          ease: "power3.inout",
        }
      );

      // Set initial state for all SVG paths if they exist
      if (document.querySelector("#groupimg path")) {
        gsap.set("#groupimg path", {
          strokeDasharray: function (index, element) {
            return element.getTotalLength();
          },
          strokeDashoffset: function (index, element) {
            return element.getTotalLength();
          },
          fill: "none",
          stroke: function (index, element) {
            return element.getAttribute("fill");
          },
          strokeWidth: 2,
        });

        // Animate each path
        tl2.to("#groupimg path", {
          strokeDashoffset: 0,
          duration: 1.5,
          stagger: 0.2,
          ease: "power2.inOut",
          delay: -0.5,
        });
      }

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: ".detailsbottom",
          start: "top 80%",
          end: "top 50%",
        },
      });

      if (groupImgRef.current) {
        tl.fromTo(
          groupImgRef.current,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.25,
            ease: "power3.inout",
          }
        );
      }

      if (detailsCenterRef.current) {
        tl.fromTo(
          detailsCenterRef.current,
          { opacity: 0, right: "38%" },
          {
            opacity: 1,
            right: "45%",
            duration: 0.6,
            delay: -0.4,
            ease: "power3.inout",
          }
        );
      }

      // Split text animation if h1Ref exists
      if (h1Ref.current) {
        const results = Splitting({ target: h1Ref.current, by: "chars" });

        gsap.fromTo(
          h1Ref.current.querySelectorAll(".char"),
          { opacity: 1, y: 5, color: "#999" },
          {
            opacity: 1,
            y: 0,
            color: "#273A8C",
            duration: 2,
            stagger: 0.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: h1Ref.current,
              start: "top 80%",
              end: "top 50%",
              scrub: true,
            },
          }
        );
      }
    }

    // Related items animations
    const cards = gsap.utils.toArray(".gsapholder");

    cards.forEach((card) => {
      const belowTopRow = card.querySelector(".belowtoprow");
      const cardRightImg = card.querySelector(".cardright img");
      const cardtext = card.querySelector(".cardleft");

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: card,
          start: "top 80%",
          end: "top 50%",
          scrub: false,
          markers: false,
        },
      });

      tl.fromTo(
        belowTopRow,
        { clipPath: "inset(0 100% 0 0)" },
        {
          clipPath: "inset(0 0% 0 0)",
          duration: 1.25,
          ease: "power3.inout",
        }
      )
        .fromTo(
          cardRightImg,
          { clipPath: "inset(0 100% 0 0)" },
          {
            clipPath: "inset(0 0% 0 0)",
            duration: 1.25,
            ease: "power3.inout",
          },
          "<"
        )
        .fromTo(
          cardtext,
          { opacity: 0, x: "-10%" },
          {
            opacity: 1,
            x: "0%",
            duration: 0.7,
            delay: 0.2,
            ease: "power3.inout",
          },
          "<"
        );
    });
  }, [selectedItem, relatedItems]);

  // Handle click on related items to navigate to specific project
  const handleRelatedItemClick = (itemId) => {
    navigate(`/Projects/${currentCategory}/${itemId}`);
  };

  return (
    <>
      <div className="groupdetails dynamic-header">
        {/* Display the selected item at the top if available */}
        {selectedItem && (
          <>
            <div className="belowtoprow">
              <img src="/Assets/Line 1.png" alt="" />
              <span>
                <p>{selectedItem.sno}</p>
                <h6>Project</h6>
              </span>
            </div>
            <div className="detailscenter dynamic-detail-center">
              <h1 ref={h1Ref}>{selectedItem.projectname}</h1>
              <h5
                ref={detailsCenterRef}
                dangerouslySetInnerHTML={{
                  __html: selectedItem.projectdetails,
                }}
              ></h5>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 529 435"
                fill="none"
                id="groupimg"
              >
                <path
                  d="M118.5 -145.5H670.5V312.5H148C131.708 312.5 118.5 299.292 118.5 283V-145.5Z"
                  stroke="url(#paint0_linear_62_32)"
                />
                <path
                  d="M59.5 -84.5H611.5V373.5H89C72.7076 373.5 59.5 360.292 59.5 344V-84.5Z"
                  stroke="url(#paint1_linear_62_32)"
                />
                <path
                  d="M0.5 -23.5H552.5V434.5H30C13.7076 434.5 0.5 421.292 0.5 405V-23.5Z"
                  stroke="url(#paint2_linear_62_32)"
                />
                <defs>
                  <linearGradient
                    id="paint0_linear_62_32"
                    x1="394.5"
                    y1="-146"
                    x2="394.5"
                    y2="313"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#273A8C" />
                  </linearGradient>
                  <linearGradient
                    id="paint1_linear_62_32"
                    x1="335.5"
                    y1="-85"
                    x2="335.5"
                    y2="374"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#273A8C" />
                  </linearGradient>
                  <linearGradient
                    id="paint2_linear_62_32"
                    x1="276.5"
                    y1="-24"
                    x2="276.5"
                    y2="435"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="white" />
                    <stop offset="1" stopColor="#273A8C" />
                  </linearGradient>
                </defs>
              </svg>
            </div>
            <div className="detailsbottom dynamic-detail-bottom">
              <img
                src={selectedItem.img}
                id="lapimg"
                ref={groupImgRef}
                alt=""
               
              />
            </div>
          </>
        )}
      </div>

      {/* Display related items section */}
      {relatedItems.length > 0 && (
        <div className="companyholder">
          <h1>
            <div >Similar</div>
            <div id="blue">{currentCategory ? categoryDisplayNames[currentCategory] || currentCategory : "Related"} <br /> </div>
          </h1>

          {relatedItems.map((item, index) => (
            <React.Fragment key={item.id}>
              <div
                className="gsapholder"
                onClick={() => handleRelatedItemClick(item.id)}
                style={{cursor: 'pointer'}}
              >
                <div className="belowtoprow">
                  <img src="/Assets/Line 10.png" alt="" />
                  <span>
                    <p className="aboutp">{item.sno}</p>
                  </span>
                </div>
                <div className="companycard">
                  <div className="cardleft">
                    <h1>{item.projectname}</h1>
                    <div className="flex">
                      <h4>Consultant</h4>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item.projectdetails,
                        }}
                      ></h4>
                    </div>
                    <div className="flex">
                      <h4>Location</h4>
                      <h4
                        dangerouslySetInnerHTML={{
                          __html: item.projectdetails2,
                        }}
                      ></h4>
                    </div>
                  </div>
                  <div className="cardright">
                    <img src={item.img} alt="" />
                  </div>
                </div>
              </div>
            </React.Fragment>
          ))}
        </div>
      )}
    </>
  );
};

export default DynamicSection;