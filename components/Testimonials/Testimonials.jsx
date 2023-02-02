import React from "react";
import style from "./Testimonials.module.css";
const Testimonials = () => {
  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h3>Testimonials</h3>
        <p>Here is what our clients say about us!</p>
      </div>
      <div className={style.main}>
        <div className={style.youtube}>
          <iframe
            width="560"
            height="315"
            src="https://www.youtube.com/embed/r_BefLb_Ywk"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullscreen
          ></iframe>
        </div>
        <div className={style.testimonial}>
          <img src="Images/Testimonial/quote.png" alt="" />
          <p>
            Onnow has the best ever tech services. They are a great team and
            their service is top notch. I highly recommend them if you need any
            tech services!
          </p>
          <div>
            <h4>Syed Tahmid Zaman</h4>
            <h6>Chief Executive Officer, Onnow.io</h6>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
