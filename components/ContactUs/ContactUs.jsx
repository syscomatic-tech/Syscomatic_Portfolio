import Link from "next/link";
import React from "react";
import style from "./ContactUs.module.css";
const ContactUs = () => {
  return (
    <div className={style.container} id="contact">
      <div className={style.heading}>
        <h1>Contact us</h1>
        <p>
          Syscomatic is software development as a service <br /> (SDass)
          Platform with a business
        </p>
      </div>
      <div className={style.main}>
        <div className={style.contactInfo}>
          <div className={style.directContact}>
            <div>
              <img src="Images/Contact/call.png" width="41" height="41" alt="" />
              <p>+88017 8911 8134</p>
            </div>
            <div>
              <img src="Images/Contact/mail.png" width="41" height="41" alt="" />
              <p>syscomatic@gmail.com</p>
            </div>
            <div>
              <img src="Images/Contact/location.png" width="41" height="41" alt="" />
              <p>Dhaka, Bangladesh</p>
            </div>
          </div>
          <div className={style.link}>
            <Link href="#">
              <img src="Images/Contact/linkedin.png" alt="" />
            </Link>
            <Link href="#">
              <img src="Images/Contact/facebook.png" alt="" />
            </Link>
            <Link href="#">
              <img src="Images/Contact/cb.png" alt="" />
            </Link>
          </div>
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

export default ContactUs;
