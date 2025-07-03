import React from 'react'
import "../Styles/about-note.css"

const AboutNote = () => {
  return (
    <>
      <section className="about-note">
        <div className="container">
          <div className="grid">
            <div className="text-content">
              <h2 className="main-heading">
                Founder's Note
              </h2>
              <p className="paragraph">
                Over Time, Jeikor Evolved. What Began As A Modest Construction Venture Became A Diverse Group Of Companies, Operating Across Regions And Industries. Yet Our Essence Remains The Same Spirit That Guided Our First Project.
              </p>
              {/* <p className="paragraph">
                Amsha, which means "to awaken" in Swahili, a name that
                reflects the essence of what I want to achieve through this
                consultancy: awakening potential and transforming
                organizations by focusing on their most valuable asset—their
                people. With deep roots in Tanzania, I wanted a name that
                captured the essence of growth, development, and empowerment.
                It's also a personal reflection of my heritage, symbolizing
                the resilience, unity, and progress that have shaped who I am
                today. 'Amsha' reminds me to always stay true to my purpose:
                to prioritize people and lead with a people-first approach in
                everything we do.
              </p> */}
              {/* <p className="paragraph">
                My goal is to shape the future of HR consulting by integrating
                innovative, people-centric solutions that empower
                organizations. I focus on building strong, lasting
                relationships with my clients to ensure their success. My
                vision is simple: help businesses invest in their greatest
                asset—their people—not just to meet today's demands but to
                shape a successful future. I aim to make Amsha Advisory a
                leading platform of all people-related solutions for
                businesses.
              </p> */}
              <p className="paragraph">
                Thank you for being part of this journey with me.
              </p>
              <p className="signature">Sincerely,</p>
              <p className="signature">Mohannad Alanni</p>
              <p className="signature-title">
                Founder & CEO, Jeikor
              </p>
            </div>

            <div className="image-container">
              <img
                src="/Assets/Rectangle 301.png"
                alt="Our expertise"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default AboutNote