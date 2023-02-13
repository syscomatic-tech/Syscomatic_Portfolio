import Link from "next/link";
import React from "react";
import style from "./Projects.module.css";
const Projects = () => {
  return (
    <div className={style.container} id="portfolio">
      <div className={style.heading} data-aos="fade-down" data-aos-delay="200">
        <h3>Portfolio</h3>
        <p>Take a look at some of our successful projects</p>
      </div>
      <ul>
        <li data-aos="fade-right" data-aos-delay="200">
          <div>
            <img src="Images/Projects/onnow.png" alt="" />
          </div>
          <h4>
            D2C food <br />
            ordering platform
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>

          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-delay="300">
          <div>
            <img src="Images/Projects/urgentfuel.png" alt="" />
          </div>
          <h4>
            On-demand fuel delivery <br /> logistic system
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>
          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
        <li data-aos="fade-left" data-aos-delay="400">
          <div>
            <img src="Images/Projects/pocacademy.png" alt="" />
          </div>
          <h4>
            Bangladeshi academic <br /> exam management system
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>
          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
        <li data-aos="fade-right" data-aos-delay="500">
          <div>
            <img src="Images/Projects/tunibibi.png" alt="" />
          </div>
          <h4>
            Cross border trading <br /> application
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>
          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
        <li data-aos="fade-up" data-aos-delay="600">
          <div>
            <img src="Images/Projects/buet.png" alt="" />
          </div>
          <h4>
            Academic Web <br /> Application for BUET
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>
          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
        <li data-aos="fade-left" data-aos-delay="700">
          <div>
            <img src="Images/Projects/du.png" alt="" />
          </div>
          <h4>
            Academic Web Application <br /> for Dhaka University{" "}
          </h4>
          <img
            className={style.laptop}
            src="Images/Projects/laptop.png"
            alt=""
          />
          <p>
            This web app is used for D2C food ordering systems, kitchen
            management systems, and digital payment integration.
          </p>
          <Link href="#">
            <button className={style.viewWork}>
              <span className={style.circle} aria-hidden="true">
                <span className={style.icon} />
              </span>
              <span className={style.buttonText}>View Work</span>
            </button>
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Projects;
