import React, { useEffect, useRef, useState } from "react";
import style from "./Operate.module.css";

let operateInfo = [
  {
    id: 1,
    heading: "Analysis",
    description: "Lorem ipsum dolor sit ",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 2,
    heading: "Plaining",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 3,
    heading: "Design",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate consequuntur beatae suscipit deserunt laboriosam dolore",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 4,
    heading: "Development",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate consequuntur beatae ",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 5,
    heading: "Testing",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Vero voluptate ",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 6,
    heading: "Deployment",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
    img: "https://images.unsplash.com/photo-1661961112951-f2bfd1f253ce?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=872&q=80",
  },
  {
    id: 7,
    heading: "Maintenance",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. ",
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
