import React from "react";
import style from "./Values.module.css";
const Values = () => {
  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-down" data-aos-delay="200">
        <h3>Our Core Values</h3>
        <p>
          Syscomatic is a software development as a service (SDass) Platform with
          a business
        </p>
      </div>
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
          <img
            src="Images/About/icons/Initiative.png"
            className="!w-16 h-16 mb-5"
          />

          <h4>Initiative</h4>
          <p>
            Our team believes in taking proactive actions and going the extra
            mile, and it shows in the quality of the work we do.
          </p>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <img
            src="Images/About/icons/Transparency.png"
            className="!w-16 h-16 mb-5"
          />
          <h4>Transparency</h4>
          <p>
            Our team is dedicated to ensuring accurate and timely information
            sharing and insight sharing for collaborative decision-making.
          </p>
        </li>
        <li data-aos="fade-left" data-aos-delay="400">
          <img
            src="Images/About/icons/Creativity.png"
            className="!w-16 h-16 mb-5"
          />
          <h4>Creativity</h4>
          <p>
            Internet is in our DNA, thus we&#39;re inventive. We&#39;ve created
            a niche with our innovative alternatives.
          </p>
        </li>
        <li data-aos="fade-right" data-aos-delay="500">
          <img
            src="Images/About/icons/Quality.png"
            className="!w-16 h-16 mb-5"
          />
          <h4>Quality</h4>
          <p>
            In line with the best practices in the industry, we take great pride
            in delivering and maintaining the highest standards of work.
          </p>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <img
            src="Images/About/icons/Collaboration.png"
            className="!w-16 h-16 mb-5"
          />
          <h4>Collaboration</h4>
          <p>
            Each of us may not have the complete solution, but we come together
            to deliver a complete solution.
          </p>
        </li>
        <li data-aos="fade-left" data-aos-delay="700">
          <img
            src="Images/About/icons/Reliability.png"
            className="!w-16 h-16 mb-5"
          />
          <h4>Reliability</h4>
          <p>
            Commitment evaluates our performance. We prioritize excellent
            service to please our clients.
          </p>
        </li>
      </ul>
    </div>
  );
};

export default Values;
