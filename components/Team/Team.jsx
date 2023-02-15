import React from "react";
import style from "./Team.module.css";
const Team = () => {
  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-down" data-aos-delay="200">
        <h3>Meet Our Team</h3>
        <p>
          Syscomatic™ owns a team of some enthusiastic, and passionate people in
          their respective fields.
        </p>
      </div>
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
          <div>
            <img src="Images/Team/rakib.png" alt="" className="my-3" />
            <h4>Rakib Ullah</h4>
            <h5>Founder & CEO</h5>
            <p>
              Rakib Ullah has been practicing in several business sectors
              including software industry. He also has experiences in product
              management.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <div>
            <img src="Images/Team/shahed.png" alt="" className="my-3" />
            <h4>Shahed Hossain</h4>
            <h5>Chief Research Officer</h5>
            <p>
              Shahed is working intensive research for the project along with
              his expertise in embedded systems and IoT.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-left" data-aos-delay="400">
          <div>
            <img src="Images/Team/asifur.png" alt="" className="my-3" />
            <h4>Asifur Rahman</h4>
            <h5>Project Manager</h5>
            <p>
              Overseeing the overall ongoing projects is done by Asifur Rahman.
              He is mainly focused on operations.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-right" data-aos-delay="500">
          <div>
            <img src="Images/Team/thauhid.png" alt="" className="my-3" />
            <h4>Thauhid Hussain</h4>
            <h5>Chief Product Officer</h5>
            <p>
              He is passionate about creating products that are human-centred
              and provide great customer experiences.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <div>
            <img src="Images/Team/zahed.png" alt="" className="my-3" />
            <h4>Zahed Hasan</h4>
            <h5>Chief Technology Officer</h5>
            <p>
              Zahed is currently leading software technology systems. He is a
              great problem solver and highly dedicated to fast learning.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-left" data-aos-delay="700">
          <div>
            <img src="Images/Team/shuvro.png" alt="" className="my-3" />
            <h4>Shuvro Baset</h4>
            <h5>Full Stack Engineer</h5>
            <p>
              Shuvro Baset is an experienced full-stack engineer. He is well
              known for problem solving & logical decisions.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-right" data-aos-delay="800">
          <div>
            <img src="Images/Team/jisan.png" alt="" className="my-3" />
            <h4>Jisan Mia</h4>
            <h5>Frontend Engineer</h5>
            <p>
              Jisan is a effective frontend engineer. He creates visually
              appealing and highly functional frontend.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
        <li data-aos="fade-up" data-aos-delay="900">
          <div>
            <img src="Images/Team/sabbir.png" alt="" className="my-3" />
            <h4>Md. Sabbir Hossain</h4>
            <h5>Backend Engineer</h5>
            <p>
              Syscomatic™ is having Sabbir on board to look after the back-end
              part. He is well known for his logical problem solving experience.
            </p>
          </div>
          <img
            src="Images/Team/linkedin.png"
            width="30"
            height="30"
            alt=""
            className="my-3"
          />
        </li>
      </ul>
    </div>
  );
};

export default Team;
