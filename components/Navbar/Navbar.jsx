import Link from "next/link";
import React, { useState } from "react";
import style from "./Navbar.module.css";
const Navbar = () => {
  const [mobileNavigation, setMobileNavigation] = useState(false);
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
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>

            <li>
              <Link href="/Mission">Mission</Link>
            </li>
            <li>
              <Link href="/Vision">Vision</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
          </ul>
        </div>
        <button className={style.quote}>Get a Quote</button>
        <div
          className={
            mobileNavigation
              ? style.MobileNavigation
              : style.hideMobileNavigation
          }
        >
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/#services">Services</Link>
            </li>

            <li>
              <Link href="/mission">Mission</Link>
            </li>
            <li>
              <Link href="/vision">Vision</Link>
            </li>
            <li>
              <Link href="/about">About Us</Link>
            </li>
         
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
    </nav>
  );
};

export default Navbar;
