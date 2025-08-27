import React from "react";
import "../Styles/about-note.css";

const AboutNote = () => {
  return (
    <>
      <section className="about-note">
        <div className="container">
          <div className="grid">
            <div className="text-content">
              <h2 className="main-heading">Founder's Message</h2>
              <p className="paragraph">
                {/* Over Time, Jeikor Evolved. What Began As A Modest Construction Venture Became A Diverse Group Of Companies, Operating Across Regions And Industries. Yet Our Essence Remains The Same Spirit That Guided Our First Project. */}
                In 2000, I laid the foundation of what would later become Jeikor
                Group — not with luxury or certainty, but with deep conviction
                and relentless effort. My journey began on the ground, among
                steel and dust, where every challenge was a lesson, and every
                step forward was earned. Dubai was rising, and I knew I wanted
                to rise with it — through work that mattered, and a vision that
                endured.
                <br />
                <br />
                {/* <span className="paragraph-spannn"></span> */}
                Jeikor was not born in comfort. It was forged through long days,
                honest labor, and a belief that purpose and perseverance could
                shape more than buildings — they could shape a future. We were a
                small team with big values: integrity, quality, and unity.
                <br />
                <br />
                With time, Jeikor evolved. What began as a modest construction
                venture became a diverse group of companies, expanding across
                regions and industries. Yet our essence remains unchanged — we
                build with intention, we grow with integrity, and we lead with
                the same spirit that guided our first project.
                <br />
                <br />
                Today, Jeikor Group is more than a name. It’s a journey shared
                by those who believed, contributed, and grew alongside us. And
                it continues — grounded in our past, committed to our people,
                and inspired by the city that first welcomed our dream.
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
              <p className="signature">Eng Ali Al Maliki</p>
              <p className="signature-title">
                Founder and CEO, Jeikor Group</p>



            </div>

            <div className="image-container">
              <img
                src="/Assets/ch.jpeg"
                alt="Our expertise"
                className="about-image"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AboutNote;
