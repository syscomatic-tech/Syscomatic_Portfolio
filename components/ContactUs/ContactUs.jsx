import Link from "next/link";
import React from "react";
import style from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className={style.container} id="contact">
      <div className={style.heading} data-aos="fade-left" data-aos-delay="200">
        <h1>Contact us</h1>
        <p>
          Syscomatic is a software development as a service <br /> (SDass)
          Platform with a business
        </p>
      </div>
      <div className={style.main}>
        <div
          className={style.contactInfo}
          data-aos="fade-left"
          data-aos-delay="300"
        >
          <div className={style.directContact}>
            <div>
              <img
                src="Images/Contact/call.png"
                width="41"
                height="41"
                alt=""
              />
              <p>+88017 8911 8134</p>
            </div>
            <div>
              <img
                src="Images/Contact/mail.png"
                width="41"
                height="41"
                alt=""
              />
              <p>syscomatic@gmail.com</p>
            </div>
            <div>
              <img
                src="Images/Contact/location.png"
                width="41"
                height="41"
                alt=""
              />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className={style.link}>
            <Link href="#">
              <img
                src="Images/Contact/linkedin.png"
                alt=""
                className="hover:rotate-6 transition-all"
              />
            </Link>
            <Link href="#">
              <img
                src="Images/Contact/facebook.png"
                alt=""
                className="hover:rotate-6 transition-all"
              />
            </Link>
            <Link href="#">
              <img
                src="Images/Contact/cb.png"
                alt=""
                className="hover:rotate-6 transition-all"
              />
            </Link>
          </div>
        </div>
        <div
          className={style.contact}
          data-aos="fade-right"
          data-aos-delay="400"
        >
          <label htmlFor="">Full Name*</label>
          <input type="text" name="name" id="" />
          <label htmlFor="">Email</label>
          <input type="email" name="email" id="" />
          <label htmlFor="">Your Message</label>
          <input type="text" name="message" id="" />
          <button className={`btn normal-case button`}>Get a quote</button>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
