// import img from "next/img";
import React from "react";
import style from "./Services.module.css";
const Services = () => {
  return (
    <div className={style.container}>
      <ul>
        <li data-aos-delay="100" data-aos="fade-right">
          <h1 className={style.OurServices}>Our services</h1>
          <p>
            All the tech support you <br /> need is here!
          </p>
        </li>
        <li data-aos-delay="200" data-aos="fade-up">
          <img src="Images/Services/Ux.png" alt="" width="103" height="103" />
          <h2 className={style.service}>Product design (UI/UX)</h2>
        </li>
        <li data-aos-delay="300" data-aos="fade-left">
          <img src="Images/Services/Web.png" alt="" width="103" height="103" />
          <h2 className={style.service}>Web application development</h2>
        </li>
        <li data-aos-delay="350" data-aos="fade-right">
          <img src="Images/Services/App.png" alt="" width="103" height="103" />
          <h2 className={style.service}>Mobile app development</h2>
        </li>
        <li data-aos-delay="400" data-aos="fade-down">
          <img src="Images/Services/SQA.png" alt="" width="103" height="103" />
          <h2 className={style.service}>Software testing and quality assurance</h2>
        </li>
        <li data-aos-delay="450" data-aos="fade-left">
          <img
            src="Images/Services/DevOps.png"
            alt=""
            width="103"
            height="103"
          />
          <h2 className={style.service}>DevOps</h2>
        </li>
        <li data-aos-delay="500" data-aos="fade-right">
          <img src="Images/Services/IoT.png" alt="" width="103" height="103" />

          <h2 className={style.service}>IoT development</h2>
        </li>
        <li data-aos-delay="550" data-aos="fade-down">
          <img
            src="Images/Services/Audit.png"
            alt=""
            width="103"
            height="103"
          />

          <h2 className={style.service}>Software audit</h2>
        </li>
        <li data-aos-delay="600" data-aos="fade-left">
          <img src="Images/Services/ERP.png" alt="" width="103" height="103" />

          <h2 className={style.service}>ERP solutions</h2>
        </li>
      </ul>
    </div>
  );
};

export default Services;
