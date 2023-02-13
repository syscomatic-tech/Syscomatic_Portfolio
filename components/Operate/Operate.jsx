import React, { useEffect, useRef, useState } from "react";
import style from "./Operate.module.css";
import { Collapse } from "react-collapse";

let operateInfo = [
  {
    id: 1,
    heading: "Analysis",
    description: "Gather requirements, analyze market to determine goals.",
    img: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    id: 2,
    heading: "Planning",
    description: "Define project scope, timeline, identify resources.",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    heading: "Design",
    description: "Create visual representation, determine UX/UI.",
    img: "https://images.unsplash.com/photo-1620912189875-3fdb2380621b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 4,
    heading: "Development",
    description: "Write code, integrate components, build product.",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    heading: "Testing",
    description: "Ensure product works, meets quality standards.",
    img: "https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    heading: "Deployment",
    description: "Successfully deploy and make product accessible to users.",
    img: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    heading: "Maintenance",
    description: "Fix bugs, add features, keep product updated.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
const Operate = () => {
  const [hoverd, setHoverd] = useState(null);
  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-left" data-aos-delay="200">
        <h3>Our Approach</h3>
        <p>
          We abide by a unique way of approach to minimize the timeframe & to
          maximize productivity, and efficiency.
        </p>
      </div>
      <div className="mt-16">
        <div className="container  grid grid-cols-4 gap-4 mx-auto">
          {operateInfo.map((item) => (
            <div
              className={
                item.id === 1
                  ? "relative w-full row-span-2 h-[560px] bg-center bg-cover bg-no-repeat cursor-pointer"
                  : "relative   w-full h-[270px] bg-center bg-cover bg-no-repeat cursor-pointer"
              }
              onMouseEnter={() => setHoverd(item.id)}
              onMouseLeave={() => setHoverd(null)}
              style={{
                backgroundImage: `${
                  hoverd === item.id
                    ? `linear-gradient(180deg, rgba(7, 0, 29, 0.5) 0%, rgba(12, 0, 51, 0.8) 100%), url(${item.img})`
                    : `linear-gradient(rgba(12,0,51,0.5), rgba(12,0,51,0.5)), url(${item.img})`
                }`,
              }}
              data-aos="fade-up"
              data-aos-delay={100 + item.id * 200}
              key={item.id}
            >
              <div className="  absolute bottom-0 left-0 px-4 pb-4">
                <h4 className={`text-6xl  font-bold mb-4 ${style.strokedText}`}>
                  {item.id}
                </h4>
                <h4 className="text-4xl font-bold mb-4">{item.heading}</h4>
                <Collapse isOpened={hoverd === item.id}>
                  <span className="text-gray-200 ">{item.description}</span>
                </Collapse>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Operate;
