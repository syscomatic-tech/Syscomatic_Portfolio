import Link from "next/link";
import React from "react";
import style from "./Footer.module.css";
const Footer = () => {
  return (
    <div className={style.container}>
      <div
        className={style.footerHeading}
        data-aos="fade-in-up"
        data-aos-delay="200"
      >
        <div>
          <h1>Let’s start a project!</h1>
          <label htmlFor="my-modal-4" className={`btn normal-case button`}>
            Get a Quote
          </label>
        </div>
      </div>
      <div className="max-w-[1440px] mx-auto ">
        <div className={style.footerMain}>
          <div className={style.logoSection}>
            <img src="logo3.png" width="303" alt="" />
            <p className="mt-6 text-gray-300">
              We strive to build something that really matters in the technology
              world and make some impacts!
            </p>
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
          <div className={style.navigation}>
            <ul>
              <li>
                <Link href="/">Home</Link>
              </li>
              <li>
                <Link href="/about">About Us</Link>
              </li>
              <li>
                <Link href="/mission">Mission</Link>
              </li>
              <li>
                <Link href="/vision">Vision</Link>
              </li>
              <li>
                <Link href="#contact">Contact Us</Link>
              </li>
            </ul>
          </div>
          <div className={style.footerContact}>
            <div>
              <img
                src="Images/Footer/footer-phone.png"
                width="41"
                height="41"
                alt=""
              />
              <p>+88017 8911 8134</p>
            </div>
            <div>
              <img
                src="Images/Footer/footer-email.png"
                width="41"
                height="41"
                alt=""
              />
              <p>syscomatic@gmail.com</p>
            </div>
            <div>
              <img
                src="Images/Footer/footer-location.png"
                width="41"
                height="41"
                alt=""
              />
              <p>
                Ventura Iconia, Level 3, House 37, Road 111, Block H, Banani,
                Dhaka-1213
              </p>
            </div>
          </div>
        </div>
        <hr />
        <div className={style.footerEnd}>
          <div>
            <p>
              All rights reserved to{" "}
              <Link href="#">Syscomatic™ Technologies</Link>
            </p>
          </div>
        </div>
      </div>

      {/* Code for modal  */}

      <input type="checkbox" id="my-modal-4" className="modal-toggle" />
      <label htmlFor="my-modal-4" className="modal ">
        <label
          className="modal-box relative modal-bottom sm:modal-middle bg-transparent"
          htmlFor=""
        >
          {" "}
          <label
            htmlFor="my-modal-4"
            className="btn btn-sm btn-outline btn-circle absolute right-8 top-8"
          >
            ✕
          </label>
          <div className={style.contact}>
            <div className={`relative ${style.inputContainer} mb-12`}>
              <input
                type="text"
                id="modalname"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modalname" className=" mb-1 left-1 cursor-text">
                Full Name
              </label>
            </div>
            <div className={`relative ${style.inputContainer} mb-12`}>
              <input
                type="email"
                id="modalemail"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modalemail" className=" mb-1 left-1 cursor-text">
                Email
              </label>
            </div>
            <div className={`relative ${style.inputContainer} mb-4`}>
              <input
                type="text"
                id="modaltext"
                className="w-full border-b-2  focus:outline-none focus:border-b-primary"
                required
              />
              <label htmlFor="modaltext" className=" mb-1 left-1 cursor-text">
                Your Message
              </label>
            </div>

            <button
              className={`btn normal-case button`}
              data-aos="fade-up"
              data-aos-delay="100"
            >
              Get a Quote
            </button>
          </div>
        </label>
      </label>
    </div>
  );
};

export default Footer;
