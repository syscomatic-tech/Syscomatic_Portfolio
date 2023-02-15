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
          <div className={`relative ${style.inputContainer} mb-12`}>
            <input
              type="text"
              id="name"
              className="w-full border-b-2  focus:outline-none focus:border-b-primary"
              required
            />
            <label htmlFor="name" className=" mb-1 left-1 cursor-text">
              Full Name
            </label>
          </div>
          <div className={`relative ${style.inputContainer} mb-12`}>
            <input
              type="email"
              id="email"
              className="w-full border-b-2  focus:outline-none focus:border-b-primary"
              required
            />
            <label htmlFor="email" className=" mb-1 left-1 cursor-text">
              Email
            </label>
          </div>
          <div className={`relative ${style.inputContainer} mb-4`}>
            <input
              type="text"
              id="text"
              className="w-full border-b-2  focus:outline-none focus:border-b-primary"
              required
            />
            <label htmlFor="text" className=" mb-1 left-1 cursor-text">
              Your Message
            </label>
          </div>

          <button
            className={`btn normal-case button`}
            data-aos="fade-up"
            data-aos-delay="1400"
          >
            Get a Quote
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
