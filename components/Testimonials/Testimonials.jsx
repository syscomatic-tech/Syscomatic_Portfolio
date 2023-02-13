import Carousel from "nuka-carousel/lib/carousel";
import React, { useRef, useState } from "react";
import style from "./Testimonials.module.css";
const Testimonials = () => {
  const testimonialsList = [
    {
      link: "https://www.youtube.com/embed/r_BefLb_Ywk",
      comment:
        "Syscomatic has the best ever tech services. They are a great team and their service is top notch. I highly recommend them if you need any tech services!",
      name: "Syed Tahmid Zaman",
      role: "Chief Executive Officer, Onnow.io",
    },
    {
      link: "https://www.youtube.com/embed/uoH-Zak-tR4",
      comment:
        "Syscomatic helped me to build YouTube! They are a great team and their service is top notch. I highly recommend them.",
      name: "Jawed Karim",
      role: "Co Founder, YouTube",
    },
    {
      link: "https://www.youtube.com/embed/jdMNoQE3mIQ",
      comment:
        "I survived a plane crash! Sysco helped me to do this 😍 They are a great team and their service is top notch. I highly recommend them.",
      name: "Mr Beast",
      role: "CEO, Mr. Beast",
    },
  ];

  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-left" data-aos-delay="200">
        <h3>Testimonials</h3>
        <p>Here is what our clients say about us!</p>
      </div>
      <div data-aos="fade-right" data-aos-delay="100">
        <Carousel
          animation="fade"
          autoplay
          pauseOnHover
          autoplayInterval={8000}
          speed={2500}
          cellSpacing={0}
          wrapAround={true}
          renderCenterLeftControls={({ previousSlide }) => (
            <button
              className="btn  btn-circle bg-white text-black border-0 hover:bg-primary hover:text-white  mt-4"
              onClick={previousSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7 font-bold"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M15.75 19.5L8.25 12l7.5-7.5"
                />
              </svg>
            </button>
          )}
          data-aos="fade-left"
          data-aos-delay="100"
          renderCenterRightControls={({ nextSlide }) => (
            <button
              className="btn  left-16 btn-circle hover:text-white bg-white text-black border-0 hover:bg-primary mt-4"
              onClick={nextSlide}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-7 h-7"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M8.25 4.5l7.5 7.5-7.5 7.5"
                />
              </svg>
            </button>
          )}
        >
          {testimonialsList.map((item, index) => (
            <div className={style.main} key={index}>
              <div className={style.youtube}>
                <iframe
                  width="560"
                  height="315"
                  src={item.link}
                  title="YouTube video player"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullscreen
                ></iframe>
              </div>
              <div className={style.testimonial}>
                <img src="Images/Testimonial/quote.png" alt="" />
                <p className="my-4">{item.comment}</p>
                <div>
                  <h4>{item.name}</h4>
                  <h6>{item.role}</h6>
                </div>
              </div>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default Testimonials;
