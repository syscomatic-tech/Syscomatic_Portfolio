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
      <div className={style.static}>
        <img src="logo2.png" alt="" />
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business-first approach. We offer a variety of value-adding
          solutions and best-of-breed services to internet companies worldwide.
        </p>
        <button className={style.info}>
          <Link href="/about">About us</Link>
        </button>
      </div>
      <div className={style.dropDown}>
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
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
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolor,
              autem optio accusamus nostrum fugiat sint aliquid amet,
              perferendis atque quidem, pariatur architecto explicabo dolorem.
              Eveniet sed tempora quidem doloremque magnam.
            </p>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Info;
