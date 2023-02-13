import Link from "next/link";
import React, { useEffect, useState } from "react";
import { Collapse } from "react-collapse";
import style from "./Info.module.css";
import logo from "../../public/logo2.png";
const Info = () => {
  const [open, setOpen] = useState(null);
  const toggle = (index) => {
    if (open === index) {
      return setOpen(null);
    } else {
      setOpen(index);
    }
  };
  const accordionItems = [
    {
      title: "Engineering with a passion",
      description:
        "We're a network of innovators. We devise bold solutions to the most intricate client challenges. We can explore new technologies to design best-fit solutions that have 96% of our clients ready to recommend us.",
    },
    {
      title: "Performance with Focus",
      description:
        "We'll assist. We won't finish a project until    you're satisfied. We're a 97%-satisfied tech partner.",
    },
    {
      title: "Dedication to Success",
      description:
        " Our innovations help clients stay ahead. We consider your    immediate and long-term needs. For our clients, their customers,    and the communities they influence.",
    },
    {
      title: "Accelerate Time-to-Market",
      description:
        " We can engineer your project with an agile framework that ensures    faster results, scalability, and stability.",
    },
    {
      title: "Develop Future-Proof Application",
      description:
        " Our team can design the optimal software for your contemporary and    predictable needs using the cloud, microservices,    containerization, etc.",
    },
    {
      title: "Reduce OpEx",
      description:
        " Our expertise can construct customised software end-to-end,    including design, technology choices, architecture, and operations    to scale capacity as needed.",
    },
  ];
  return (
    <div className={style.container}>
      <div className={style.static} data-aos="fade-right" data-aos-delay="200">
        <img src="logo2.png" alt="" />
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business-first approach. We offer a variety of value-adding
          solutions and best-of-breed services to internet companies worldwide.
        </p>
        <button className={`btn button normal-case !px-7 ${style.info}`}>
          <Link href="/about">Learn More</Link>
        </button>
      </div>
      <div className={style.dropDown} data-aos="fade-left" data-aos-delay="400">
        <ul>
          {accordionItems?.map((item, index) => (
            <li onMouseEnter={() => toggle(index)} key={index}>
              <div>
                <div>
                  <img
                    src="Images/Info/check_small.png"
                    width="55"
                    height="55"
                    alt=""
                  />
                  <h3>{item.title}</h3>
                </div>
                <img
                  className={style.dropDownImg}
                  src="Images/Info/dropDown.png"
                  width="20"
                  height="12"
                  alt=""
                />
              </div>
              <Collapse isOpened={open === index}>
                <span className="ml-9 lg:ml-20">{item.description}</span>
                {/* <p className={style.DropDownElement}></p> */}
              </Collapse>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Info;
