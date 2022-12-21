import React from "react";
import style from "./Banner.module.css";
const Banner = () => {
  return (
    <div className={style.container}>
      <div className={style.main}>
        <div className={style.slogan}>
          <h1>Build Your <br /> Digital Existence</h1>
          <p>
            We are your technology partner for innovative and impactful digital
            solutions.
          </p>
        </div>
        <div className={style.contact}>
          <label htmlFor="">Full Name*</label>
          <input type="text" name="name" id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="">Your Message</label>
          <input type="text" name="message" id="" />
          <button className={style.createBtn}>Let&#39;s Create!</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
