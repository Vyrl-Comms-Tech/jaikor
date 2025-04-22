import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import '../Styles/TeamSlider.css';
import "swiper/css/pagination";
import { useRef } from "react";
import { IoIosArrowBack } from "react-icons/io";


function TeamSlider() {
  const swiperRef1 = useRef(null);
//   const swiperRef2 = useRef(null);
//   const swiperRef3 = useRef(null);

  // Array of slide data
  const slides = [
    {
      id: 1,
      
      image: "/Assets/Rectangle 301.png",
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 2,
        image: "/Assets/Rectangle 301.png",
        
        title: "Ceo - founder",
        description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 3,
        image: "/Assets/Rectangle 301.png",
        
        title: "Ceo - founder",
        description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 4,
        image: "/Assets/Rectangle 301.png",
        
        title: "Ceo - founder",
        description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
    {
        id: 5,
        image: "/Assets/Rectangle 301.png",
      
      title: "Ceo - founder",
      description: "“lorem ipsum lorem ipsum”",
    },
  ];

  // Combined function to handle navigation
  const handleNext = (swiperRef) => {
    if (swiperRef.current) {
      swiperRef.current.slideNext();
    }
  };

  const handlePrev = (swiperRef) => {
    if (swiperRef.current) {
      swiperRef.current.slidePrev();
    }
  };



  return (
    <>
      <div className="TeamSlider">
        <div className="rak-plus-header">
          <div className="header-left">
            <h2 data-aos="fade-right">
            lorem ipsum
            </h2>
          </div>
          <div className="header-right">
            <p data-aos="fade-left">
            Lorem ipsum dolor sit amet, consectetur ullamco laboris nisi ut aliqu
            </p>
          </div>
        </div>
        <Swiper
          modules={[Pagination]}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          spaceBetween={10}
          slidesPerView={1}
          breakpoints={{
            500: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            650: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1040: {
              slidesPerView: 3.5,
              spaceBetween: 15,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 30,
            },
            1400: {
              slidesPerView:    5,
              spaceBetween: 30,
            },
            1900: {
              slidesPerView: 5.5,
              spaceBetween: 40,
            },
          }}
          onSwiper={(swiper) => {
            swiperRef1.current = swiper;
          }}
        >
          {slides.map((slide) => (
            <SwiperSlide key={slide.id}>
              <div className="slide-content" id="productslide">
                <div className="slide-image" id="productimg">
                  <img src={slide.image} alt={slide.title} />
                </div>
                <h3>{slide.title}</h3>
                <p>{slide.description}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
        <div className="swiper-navigation-container">
          <button
            className="custom-prev-arrow"
            aria-label="Previous slide"
            onClick={() => handleNext(swiperRef1)}
          >
            <IoIosArrowBack id="arrow1" />
            {/* <img src="/assets/r1.png" alt="Next" /> */}
          </button>

          <button
            className="custom-next-arrow"
            aria-label="Next slide"
            onClick={() => handlePrev(swiperRef1)}
          >
            <IoIosArrowBack id="arrow2" />
          </button>
        </div>
      </div>
    </>
  );
}

export default TeamSlider;
