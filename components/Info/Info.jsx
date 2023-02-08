import Link from "next/link";
import React, { useEffect, useState } from "react";
import style from "./Info.module.css";
const Info = () => {
  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);
  const [fourth, setFourth] = useState(false);
  const [fifth, setFifth] = useState(false);
  const [sixth, setSixth] = useState(false);

  return (
    <div className={style.container}>
      <div className={style.static} data-aos="fade-right" data-aos-delay="200">
        <img src="logo2.png" alt="" />
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business-first approach. We offer a variety of value-adding
          solutions and best-of-breed services to internet companies worldwide.
        </p>
        <button className={`btn button normal-case ${style.info}`}>
          <Link href="/about">About us</Link>
        </button>
      </div>
      <div className={style.dropDown} data-aos="fade-left" data-aos-delay="400">
        <ul>
          <li>
            <div onClick={() => setFirst(!first)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Engineering with a passion</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>

            <p className={first && style.DropDownElement}>
              We&apos;re a network of innovators. We devise bold solutions to
              the most intricate client challenges. We can explore new
              technologies to design best-fit solutions that have 96% of our
              clients ready to recommend us.
            </p>
          </li>
          <li>
            <div onClick={() => setSecond(!second)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Performance with Focus</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>

            <p className={second && style.DropDownElement}>
              We&apos;ll assist. We won&apos;t finish a project until
              you&apos;re satisfied. We&apos;re a 97%-satisfied tech partner.
            </p>
          </li>
          <li>
            <div onClick={() => setThird(!third)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Dedication to Success</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>

            <p className={third && style.DropDownElement}>
              Our innovations help clients stay ahead. We consider your
              immediate and long-term needs. For our clients, their customers,
              and the communities they influence.
            </p>
          </li>
          <li>
            <div onClick={() => setFourth(!fourth)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Accelerate Time-to-Market</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>
            <p className={fourth && style.DropDownElement}>
              We can engineer your project with an agile framework that ensures
              faster results, scalability, and stability.
            </p>
          </li>
          <li>
            <div onClick={() => setFifth(!fifth)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Develop Future-Proof Application</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>

            <p className={fifth && style.DropDownElement}>
              Our team can design the optimal software for your contemporary and
              predictable needs using the cloud, microservices,
              containerization, etc.
            </p>
          </li>
          <li>
            <div onClick={() => setSixth(!sixth)}>
              <div>
                <img
                  src="Images/Info/check_small.png"
                  width="55"
                  height="55"
                  alt=""
                />
                <h3>Reduce OpEx</h3>
              </div>
              <img
                className={style.dropDownImg}
                src="Images/Info/dropDown.png"
                width="20"
                height="12"
                alt=""
              />
            </div>
            <p className={sixth && style.DropDownElement}>
              Our expertise can construct customised software end-to-end,
              including design, technology choices, architecture, and operations
              to scale capacity as needed.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
