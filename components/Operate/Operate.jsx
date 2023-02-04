import React, { useEffect, useRef, useState } from "react";
import style from "./Operate.module.css";

let operateInfo = [
  {
    id: 1,
    heading: "Analysis",
    description:
      "The first step involves understanding the requirements and goals of the product. The team gathers information and analyzes the market to determine what the product should do and what the target audience needs.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 2,
    heading: "Plaining",
    description:
      "The next step is to create a plan for how to build the product. This includes defining the scope of the project, identifying the resources needed, and setting a timeline.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 3,
    heading: "Design",
    description:
      "In this step, the team creates a visual representation of the product, including wireframes and mockups. They also determine the user experience and the user interface.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 4,
    heading: "Development",
    description:
      "The actual software development takes place in this step. The team writes code, integrates different components, and builds the product.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 5,
    heading: "Testing",
    description:
      "The product is thoroughly tested to ensure it works as intended and meets quality standards. This includes both manual testing by the team and automated testing using tools.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 6,
    heading: "Deployment",
    description:
      "Once the product is deemed ready, it is deployed to a live environment where it is available to users.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 7,
    heading: "Maintenance",
    description:
      "The final step is to provide ongoing support and maintenance for the product. This includes fixing bugs, adding new features, and keeping the product up to date.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
];
const Operate = () => {
  let [operate, setOperate] = useState(operateInfo[0].id);

  return (
    <div className={style.container}>
      <div className={style.heading}>
        <h3>How we operate?</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero
          voluptate consequuntur beatae suscipit deserunt laboriosam dolore
        </p>
      </div>

      <div className={style.list}>
        <div className={style.listName}>
          {operateInfo.map((item, i) => {
            return (
              <React.Fragment key={item.id}>
                <div className={style.relative}>
                  <h4
                    onClick={() => {
                      setOperate(i + 1);
                    }}
                    style={{
                      color: `${
                        item.id !== operate ? "rgb(219,217,217)" : "#fff"
                      }`,
                      fontWeight: `${item.id !== operate ? 300 : 600}`,
                    }}
                  >
                    {item.heading}
                  </h4>
                  <div
                    className={style.dot}
                    style={{
                      transform: `${
                        item.id !== operate ? "scale(0)" : "scale(1)"
                      }`,
                    }}
                  ></div>
                </div>
              </React.Fragment>
            );
          })}
        </div>
        <div className={style.listDetails}>
          <div className={style.boxCover}>
            {operateInfo.map((item) => {
              return (
                <React.Fragment key={item.id}>
                  <div
                    className={style.box}
                    style={{
                      opacity: `${item.id === operate ? "1" : "0"}`,
                      transform: `${
                        item.id !== operate
                          ? "translateY(0px)"
                          : "translateY(-10px)"
                      }`,
                    }}
                  >
                    <div className={style.details}>
                      <h4 className={style.title}>{item.heading}</h4>
                      <p className={style.des}>{item.description}</p>
                    </div>
                  </div>
                  {item.id === operate && (
                    <>
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img src={item.img} alt="image background" />
                    </>
                  )}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Operate;
