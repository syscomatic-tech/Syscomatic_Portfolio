import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <div>
        <h1 data-aos="fade-right" data-aos-delay="100">
          About Us
        </h1>
        <p
          className="text-gray-200 lg:w-2/3"
          data-aos="fade-right"
          data-aos-delay="600"
        >
          Syscomatic is software development as a service (SDass) Platform with
          a business-first approach. We offer a variety of value-adding
          solutions and best-of-breed services to internet companies worldwide.
        </p>
        <img
          src="Images/About/about.png"
          alt=""
          data-aos="fade-down"
          data-aos-delay="1200"
        />
        <div className="flex items-center justify-between my-6 flex-col lg:flex-row">
          <div
            className="bg-[#0C0033] lg:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
            data-aos="fade-right"
            data-aos-delay="200"
          >
            <img
              src="Images/About/icons/discover.png"
              className="!w-16 h-16 mt-6"
            />
            <span className="!text-3xl !font-bold mt-5">Discover</span>
          </div>
          <div
            className="bg-[#0C0033] lg:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <img
              src="Images/About/icons/innovation.png"
              className="!w-16 h-16 mt-6"
            />
            <span className="!text-3xl !font-bold mt-5">Innovation</span>
          </div>
          <div
            className="bg-[#0C0033] lg:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
            data-aos="fade-left"
            data-aos-delay="600"
          >
            <img
              src="Images/About/icons/disruption.png"
              className="!w-16 h-16 mt-6"
            />
            <span className="!text-3xl !font-bold mt-5">Disruption</span>
          </div>
        </div>
        <div className="flex items-center justify-between flex-col lg:flex-row">
          <div
            className=" relative  w-full my-2 lg:my-0 lg:w-1/2 h-[300px] lg:h-[475px]  bg-center bg-cover bg-no-repeat px-8 pb-4"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12,0,51,0.8), rgba(12,0,51,0.8)), url(Images/About/mission.jpg)",
            }}
            data-aos="fade-right"
            data-aos-delay="500"
          >
            <div className="  absolute bottom-10 ">
              <h4 className="text-4xl font-bold mb-4">Mission</h4>
              <span className="text-gray-200 ">
                {" "}
                Empowering people with trusted digital leadership solutions.
              </span>
            </div>
          </div>

          <div
            className=" relative lg:ml-5 w-full my-2 lg:my-0 lg:w-1/2 h-[300px] lg:h-[475px]  bg-center bg-cover bg-no-repeat px-8 pb-4"
            style={{
              backgroundImage:
                "linear-gradient(rgba(12,0,51,0.8), rgba(12,0,51,0.8)), url(Images/About/vission.jpg)",
            }}
            data-aos="fade-left"
            data-aos-delay="800"
          >
            <div className="  absolute bottom-10 ">
              <h4 className="text-4xl font-bold mb-4">Vission</h4>
              <span className="text-gray-200 ">
                {" "}
                To deliver best-in-class business solutions utilizing technology
                by the best people.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
