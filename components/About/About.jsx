import { useRouter } from "next/router";
import React, { useState } from "react";
import { Collapse } from "react-collapse";
import style from "./About.module.css";
const About = () => {
  const [hoverd, setHoverd] = useState(null);
  const router = useRouter();
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
          Syscomatic is a software development as a service (SDass) Platform with
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
            className="bg-[#0C0033] lg:w-80 xl:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
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
            className="bg-[#0C0033] lg:w-80 xl:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
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
            className="bg-[#0C0033] lg:w-80 xl:w-96 w-full h-56 flex items-center justify-center flex-col my-2 lg:my-0 "
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
            className=" relative  w-full my-2 lg:my-0 lg:w-1/2 h-[300px] lg:h-[475px]  bg-center bg-cover bg-no-repeat px-8 pb-4 cursor-pointer"
            style={{
              backgroundImage: `${
                hoverd === 1
                  ? `linear-gradient(180deg, rgba(7, 0, 29, 0.5) 0%, rgba(12, 0, 51, 0.8) 100%), url(Images/About/mission.jpg)`
                  : `linear-gradient(rgba(12,0,51,0.5), rgba(12,0,51,0.5)), url(Images/About/mission.jpg)`
              }`,
            }}
            data-aos="fade-right"
            data-aos-delay="500"
            onMouseEnter={() => setHoverd(1)}
            onMouseLeave={() => setHoverd(null)}
            onClick={() => router.push("/mission")}
          >
            <div className="  absolute bottom-10 ">
              <h4 className="text-4xl font-bold mb-4">Mission</h4>
              <Collapse isOpened={hoverd === 1}>
                <span className="text-gray-200 ">
                  Empowering people with trusted digital leadership solutions.
                </span>
              </Collapse>
            </div>
          </div>

          <div
            className=" relative lg:ml-5 w-full my-2 lg:my-0 lg:w-1/2 h-[300px] lg:h-[475px]  bg-center bg-cover bg-no-repeat px-8 pb-4 cursor-pointer"
            style={{
              backgroundImage: `${
                hoverd === 2
                  ? `linear-gradient(180deg, rgba(7, 0, 29, 0.5) 0%, rgba(12, 0, 51, 0.8) 100%), url(Images/About/vission.jpg)`
                  : `linear-gradient(rgba(12,0,51,0.5), rgba(12,0,51,0.5)), url(Images/About/vission.jpg)`
              }`,
            }}
            data-aos="fade-left"
            data-aos-delay="800"
            onMouseEnter={() => setHoverd(2)}
            onMouseLeave={() => setHoverd(null)}
            onClick={() => router.push("/vision")}
          >
            <div className="  absolute bottom-10 ">
              <h4 className="text-4xl font-bold mb-4">Vission</h4>
              <Collapse isOpened={hoverd === 2}>
                <span className="text-gray-200 ">
                  {" "}
                  To deliver best-in-class business solutions utilizing
                  technology by the best people.
                </span>
              </Collapse>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
