import Head from "next/head";
import React from "react";
import style from "./Vision.module.css";
const Vision = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Visions - Syscomatic </title>
      </Head>
      <div>
        <h1 data-aos="fade-right" data-aos-delay="100">
          Our Vision
        </h1>
        <h2 className="my-5" data-aos="fade-right" data-aos-delay="600">
          To deliver best-in-class business solutions utilizing technology by
          the best people.
        </h2>
        <img
          src="Images/Mission/mission.png"
          alt=""
          data-aos="fade-down"
          data-aos-delay="1200"
        />
        <p data-aos="fade-up" data-aos-delay="100">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh tortor a
          risus elementum eget vivamus tellus amet, pellentesque. In tortor,
          cursus arcu massa sem a. Mauris tincidunt et eget faucibus habitasse.
          Adipiscing vitae sit non justo, massa, sit sem. Quis scelerisque amet,
          massa convallis faucibus morbi. Tempor enim id vel sed mi, interdum
          accumsan vivamus in. Semper eget scelerisque suspendisse habitant
          neque ante felis elementum tempor. Ac amet nunc elit vestibulum nisi
          a. Amet in mus sagittis tincidunt. Tincidunt tortor placerat lobortis
          iaculis euismod. Quisque habitant integer turpis tellus elementum
          luctus nunc.
        </p>
      </div>
    </div>
  );
};

export default Vision;
