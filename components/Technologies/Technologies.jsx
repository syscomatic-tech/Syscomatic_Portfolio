import React from "react";
import style from "./Technologies.module.css";
const Technologies = () => {
  const techs = [
    "Images/Technologies/python.png",
    "Images/Technologies/django.png",
    "Images/Technologies/restapi.png",
    "Images/Technologies/docker.png",
    "Images/Technologies/mysql.png",
    "Images/Technologies/mongodb.png",
    "Images/Technologies/dart.png",
    "Images/Technologies/flutter.png",
    "Images/Technologies/redis.png",
    "Images/Technologies/javascript.png",
    "Images/Technologies/aws.png",
    "Images/Technologies/digitalocean.png",
    "Images/Technologies/nodejs.png",
    "Images/Technologies/firebase.png",
    "Images/Technologies/postgresql.png",
    "Images/Technologies/react.png",
    "Images/Technologies/nextjs.png",
    "Images/Technologies/tailwindcss.png",
  ];
  return (
    <div className={style.container}>
      <div className={style.heading} data-aos="fade-down" data-aos-delay="200">
        <h4>Our preferred</h4>
        <h3>Technologies</h3>
      </div>
      <ul>
        {techs.map((item, index) => (
          <li key={index} data-aos="fade-up" data-aos-delay={50 + index * 100}>
            <img src={item} width="195" height="195" alt="" />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Technologies;
