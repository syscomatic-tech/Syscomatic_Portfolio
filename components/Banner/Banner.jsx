import React from "react";
import style from "./Banner.module.css";

const Banner = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.slogan}>
          <h1 data-aos="fade-right" data-aos-delay="100">
            Build Your <br /> Digital Existence
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="1200"
            className="text-gray-200 mt-4"
          >
            We are your technology partner for innovative and impactful digital
            solutions.
          </p>
        </div>
        <div
          className={style.contact}
          data-aos="fade-left"
          data-aos-delay="600"
        >
          <label htmlFor="">Full Name*</label>
          <input type="text" name="name" id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="">Your Message</label>
          <input type="text" name="message" id="" />
          <button
            className={`btn normal-case button`}
            data-aos="zoom-in"
            data-aos-delay="1800"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
