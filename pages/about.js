import React from "react";
import About from "../components/About/About";
import Team from "../components/Team/Team";
import Values from "../components/Values/Values";
import Head from "next/head";

const about = () => {
  return (
    <>
      <Head>
        <title>About us - Syscomatic </title>
      </Head>
      <About></About>
      <Values></Values>
      <Team></Team>
    </>
  );
};

export default about;
