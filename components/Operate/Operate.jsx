import React, { useEffect, useRef, useState } from "react";
import style from "./Operate.module.css";
import { Collapse } from "react-collapse";

let operateInfo = [
  {
    id: 1,
    heading: "Analysis",
    description:
      "The first step involves understanding the requirements and goals of the product. The team gathers information and analyzes the market to determine what the product should do and what the target audience needs.",
    img: "https://images.unsplash.com/photo-1588600878108-578307a3cc9d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1476&q=80",
  },
  {
    id: 2,
    heading: "Planning",
    description:
      "The next step is to create a plan for how to build the product. This includes defining the scope of the project, identifying the resources needed, and setting a timeline.",
    img: "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 3,
    heading: "Design",
    description:
      "In this step, the team creates a visual representation of the product, including wireframes and mockups. They also determine the user experience and the user interface.",
    img: "https://images.unsplash.com/photo-1620912189875-3fdb2380621b?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
  },
  {
    id: 4,
    heading: "Development",
    description:
      "The actual software development takes place in this step. The team writes code, integrates different components, and builds the product.",
    img: "https://images.unsplash.com/photo-1571171637578-41bc2dd41cd2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 5,
    heading: "Testing",
    description:
      "The product is thoroughly tested to ensure it works as intended and meets quality standards. This includes both manual testing by the team and automated testing using tools.",
    img: "https://images.unsplash.com/photo-1577760258779-e787a1733016?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 6,
    heading: "Deployment",
    description:
      "Once the product is deemed ready, it is deployed to a live environment where it is available to users.",
    img: "https://images.unsplash.com/photo-1508921340878-ba53e1f016ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
  {
    id: 7,
    heading: "Maintenance",
    description:
      "The final step is to provide ongoing support and maintenance for the product. This includes fixing bugs, adding new features, and keeping the product up to date.",
    img: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
  },
];
const Operate = () => {
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
          {/* {operateInfo.map((item) => (
            <div className="w-full rounded" key={item.id}>
              <img src={item.img} alt="image" />
            </div>
          ))} */}
          <div className="w-full rounded row-span-2  border bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80')]">
            {/* <img
              src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80"
              alt="image"
            /> */}
          </div>
          <div className="w-full rounded ">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>

          <div className="w-full rounded relative">
            {" "}
            <p className="text-green-700 text-5xl z-10">Hi</p>
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
              className="absolute top-0 left-0 w-full h-full"
            />
          </div>
          <div className="w-full rounded ">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded ">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded ">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
          <div className="w-full rounded ">
            <img
              src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=989&q=80"
              alt="image"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operate;
