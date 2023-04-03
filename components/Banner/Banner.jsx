import axios from "axios";
import React from "react";
import { toast } from "react-toastify";
import style from "./Banner.module.css";

const Banner = () => {
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
      <div className={`${style.main}`}>
        <div className={style.slogan}>
          <h1 data-aos="fade-right" data-aos-delay="100">
            Build Your <br /> Digital Existence
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="900"
            className="text-gray-200 mt-4"
          >
            We are your technology partner for innovative and impactful digital
            solutions.
          </p>
        </div>
        <form
          className={style.contact}
          data-aos="fade-left"
          data-aos-delay="600"
          onSubmit={sendMessage}
        >
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
            // data-aos="fade-up"
            // data-aos-delay="1400"
            type="submit"
          >
            Get a quote
          </button>
        </form>
      </div>
    </div>
  );
};

export default Banner;
