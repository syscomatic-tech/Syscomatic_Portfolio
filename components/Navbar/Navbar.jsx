import Link from "next/link";
import { useRouter } from "next/router";
import React, { useState } from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [mobileNavigation, setMobileNavigation] = useState(false);
  const router = useRouter();
  return (
    <nav className={style.navbar}>
      <div className={style.container}>
        <div className={style.logo}>
          <Link href="/">
            <img src="logo.png" alt="" />
          </Link>
        </div>
        <div className={style.content}>
          <ul>
            <li
              className={
                router.asPath === "/"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600  hover:text-gray-300 transition-all"
              }
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={
                router.pathname === "/about"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/about">About Us</Link>
            </li>
            <li
              className={
                router.asPath === "/#services"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/#services">Services</Link>
            </li>
            <li
              className={
                router.asPath === "/#portfolio"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/#portfolio">Portfolio</Link>
            </li>
            <li
              className={
                router.pathname === "/blogs"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/blogs">Blogs</Link>
            </li>
            {/* <li
              className={
                router.pathname === "/Mission"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/Mission">Mission</Link>
            </li>
            <li
              className={
                router.pathname === "/Vision"
                  ? "border-b-2 !font-semibold border-gray-200 hover:text-gray-300 transition-all"
                  : "hover:border-b-2 border-gray-600 hover:text-gray-300 transition-all"
              }
            >
              <Link href="/Vision">Vision</Link>
            </li> */}
          </ul>
        </div>
        <label
          className={`btn button normal-case hidden lg:flex items-center justify-center ${style.quote}`}
          htmlFor="my-modal-4"
        >
          Get a Quote
        </label>
        <div
          className={
            mobileNavigation
              ? style.MobileNavigation
              : style.hideMobileNavigation
          }
        >
          <div className="crossBtn">
            <button onClick={() => setMobileNavigation(!mobileNavigation)}>
              <svg
                stroke="currentColor"
                fill="none"
                strokeWidth="0"
                viewBox="0 0 15 15"
                height="1em"
                width="1em"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M11.7816 4.03157C12.0062 3.80702 12.0062 3.44295 11.7816 3.2184C11.5571 2.99385 11.193 2.99385 10.9685 3.2184L7.50005 6.68682L4.03164 3.2184C3.80708 2.99385 3.44301 2.99385 3.21846 3.2184C2.99391 3.44295 2.99391 3.80702 3.21846 4.03157L6.68688 7.49999L3.21846 10.9684C2.99391 11.193 2.99391 11.557 3.21846 11.7816C3.44301 12.0061 3.80708 12.0061 4.03164 11.7816L7.50005 8.31316L10.9685 11.7816C11.193 12.0061 11.5571 12.0061 11.7816 11.7816C12.0062 11.557 12.0062 11.193 11.7816 10.9684L8.31322 7.49999L11.7816 4.03157Z"
                  fill="currentColor"
                ></path>
              </svg>
            </button>
          </div>
          <ul>
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/">Home</Link>
            </li>
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/about">About Us</Link>
            </li>
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/#services">Services</Link>
            </li>
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/#portfolio">Portfolio</Link>
            </li>

            {/* <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/Mission">Mission</Link>
            </li>
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/Vision">Vision</Link>
            </li> */}
            <li className="" onClick={() => setMobileNavigation(false)}>
              <Link href="/blogs">Blogs</Link>
            </li>

            <label
              className="btn bg-white rounded-full p-4 text-black"
              htmlFor="my-modal-4"
            >
              Get a Quote
            </label>
          </ul>
        </div>
      </div>
      <div
        className={style.hamburger}
        onClick={() => setMobileNavigation(!mobileNavigation)}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
          />
        </svg>
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
    </nav>
  );
};

export default Navbar;
