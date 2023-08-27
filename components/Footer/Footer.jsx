import Link from "next/link";
import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import style from "./Footer.module.css";
const Footer = () => {
  const sendMessage = (e) => {
    e.preventDefault();
    const { name, email, text } = e.target;

    axios
      .post("https://api.server.syscomatic.com/api/v1/sendMail", {
        subject: name.value,
        from: email.value,
        text: text.value,
      })
      .then(({ data }) => {
        if (data.status === 200) {
          toast.success("Message sent successfully!");
          e.target.reset();
        }
      })
      .catch(() => {
        toast.error("Oops! Something went wrong!");
        e.target.reset();
      });
  };
  return (
    <div className={style.container}>
      <div
        className={style.footerHeading}
        data-aos="fade-in-up"
        data-aos-delay="200"
      >
        <div className="flex flex-col gap-4 sm:flex-row">
          <h1 className="!text-2xl">Let’s start a project!</h1>
          <label htmlFor="my-modal-4" className={`btn normal-case button`}>
            Get a quote
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
                  className="hover:rotate-6 w-8 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="Images/Contact/facebook.png"
                  alt=""
                  className="hover:rotate-6 w-8 transition-all"
                />
              </Link>
              <Link href="#">
                <img
                  src="Images/Contact/cb.png"
                  alt=""
                  className="hover:rotate-6 w-8 transition-all"
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
                <Link href="/#services">Services</Link>
              </li>
              <li>
                <Link href="/#portfolio">Portfolio</Link>
              </li>
              <li>
                <Link href="/blogs">Blogs</Link>
              </li>
              <li>
                <Link href="/#contact">Contact Us</Link>
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
              <p>rakib@gmail.com</p>
            </div>
            <div>
              <img
                src="Images/Footer/footer-location.png"
                width="41"
                height="41"
                alt=""
              />
              <p>
                Ventura Iconia, Level 3, House 37, Road 11, Block H, Banani,
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
          <form className={style.contact} onSubmit={sendMessage}>
            <div className={`relative ${style.inputContainer} mb-12`}>
              <input
                type="text"
                id="name"
                name="name"
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
                name="email"
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
                name="text"
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
              data-aos-delay="100"
              type="submit"
            >
              Get a quote
            </button>
          </form>
        </label>
      </label>
    </div>
  );
};

export default Footer;
