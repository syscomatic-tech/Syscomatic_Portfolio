import Head from "next/head";
import React from "react";
import Mission from "../components/Mission/Mission";
import style from "../styles/Mission.module.css";
const mission = () => {
  return (
    <div className={style.container}>
      <Head>
        <title>Missions - Syscomatic </title>
      </Head>
      <Mission></Mission>
    </div>
  );
};

export default mission;
