import React from "react";
import style from "./About.module.css";
const About = () => {
  return (
    <div className={style.container}>
      <div>
        <h1>About Us</h1>
        <p>
          Syscomatic is software development as a service (SDass) Platform with
          a business-first approach. We offer a variety of value-adding
          solutions and best-of-breed services to internet companies worldwide.
        </p>
        <img src="Images/About/about.png" alt="" />
        <div className={style.storyHead}>
          <div>Discover</div>
          <div>Innovation</div>
          <div>Disruption</div>
        </div>
        <div className={style.story}>
          <h3>Our Story</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh tortor
            a risus elementum eget vivamus tellus amet, pellentesque. In tortor,
            cursus arcu massa sem a. Mauris tincidunt et eget faucibus
            habitasse. Adipiscing vitae sit non justo, massa, sit sem. Quis
            scelerisque amet, massa convallis faucibus morbi. Tempor enim id vel
            sed mi, interdum accumsan vivamus in. Semper eget scelerisque
            suspendisse habitant neque ante felis elementum tempor. Ac amet nunc
            elit vestibulum nisi a. Amet in mus sagittis tincidunt. Tincidunt
            tortor placerat lobortis iaculis euismod. Quisque habitant integer
            turpis tellus elementum luctus nunc.
          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
