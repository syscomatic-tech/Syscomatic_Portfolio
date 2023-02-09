import Head from "next/head";
import React from "react";
import style from "./Vision.module.css";
const Vision = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Vissions - Syscomatic </title>
      </Head>
      <div>
        <h1>Our Vision</h1>
        <h2 className="my-5">
          To deliver best-in-class business solutions utilizing technology by
          the best people.
        </h2>
        <img src="Images/Mission/mission.png" alt="" />
        <p>
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
