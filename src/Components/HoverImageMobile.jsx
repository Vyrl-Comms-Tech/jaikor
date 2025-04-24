import React from 'react'
import "../Styles/hover-image-mobile.css"

const HoverImageMobile = () => {
  return (
    <>
      <div className="hover-image-mobile-container">
        <div className="hover-image-mobile-item">
          <img
            src="/Assets/hm1.jpg"
            alt="Modern building with curved architecture"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>
        
        <div className="hover-image-mobile-item">
          <img 
            src="/Assets/hm2.jpg" 
            alt="Urban skyscraper at dusk" 
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>
        
        <div className="hover-image-mobile-item">
          <img
            src="/Assets/hm3.jpg"
            alt="Modern building with water reflection"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>
        
        <div className="hover-image-mobile-item">
          <img
            src="/Assets/carousel-img.png"
            alt="Skyscraper with geometric patterns"
          />
          <div className="hover-image-mobile-text">
            <h2>Lorem Ipsum Dolor Sit</h2>
            <p>Welcome To Jaikor GP, A Leading Name In Construction Company, Dedicated To Delivering Exceptional Infrastructure Solutions</p>
          </div>
        </div>
      </div>
    </>
  )
}

export default HoverImageMobile