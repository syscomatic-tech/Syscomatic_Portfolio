import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Brands from "../components/Banner/Brands";
import Client from "../components/Client/Client";
import Info from "../components/Info/Info";
import Operate from "../components/Operate/Operate";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Technologies from "../components/Technologies/Technologies";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        {/* <!-- Primary Meta Tags --> */}
        <title>Syscomatic - Reimagining the Digital Frontier</title>
        <meta
          name="title"
          content="Syscomatic - Reimagining the Digital Frontier"
        />
        <meta
          name="description"
          content="Syscomatic is a software development as a service (SDass) Platform with a business-first approach"
        />
        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.syscomatic.com/" />
        <meta
          property="og:title"
          content="Syscomatic - Reimagining the Digital Frontier"
        />
        <meta
          property="og:description"
          content="Syscomatic is a software development as a service (SDass) Platform with a business-first approach"
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/T2tNL5x/sysco-og-img.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.syscomatic.com/" />
        <meta
          property="twitter:title"
          content="Syscomatic - Reimagining the Digital Frontier"
        />
        <meta
          property="twitter:description"
          content=" Syscomatic is a software development as a service (SDass) Platform with a business-first approach"
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/T2tNL5x/sysco-og-img.png"
        />
      </Head>
      <Banner></Banner>
      <Brands></Brands>
      <Services></Services>
      <Info></Info>
      <Client></Client>
      <Technologies></Technologies>
      <Operate />
      <Projects></Projects>
      {/* <Testimonials></Testimonials> */}
    </div>
  );
}
