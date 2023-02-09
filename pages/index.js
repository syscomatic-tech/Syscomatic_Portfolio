import Head from "next/head";
import Banner from "../components/Banner/Banner";
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
        <title>Syscomatic : Build Your Digital Existence</title>
        <link rel="icon" href="/favicon.ico" />
        {/* <!-- Primary Meta Tags --> */}
        <meta name="title" content="Syscomatic" />
        <meta
          name="description"
          content="Build Your Digital Existence using the help of Syscomatic. 
"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.syscomatic.com/" />
        <meta property="og:title" content="Syscomatic " />
        <meta
          property="og:description"
          content="Build Your Digital Existence using the help of Syscomatic."
        />
        <meta property="og:image" content="../public/banner_Facebook.jpg" />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.syscomatic.com/" />
        <meta property="twitter:title" content="Syscomatic" />
        <meta
          property="twitter:description"
          content="Build Your Digital Existence using the help of Syscomatic."
        />
        <meta
          property="twitter:image"
          content="../public/banner_Facebook.jpg"
        />
      </Head>

      <Banner></Banner>
      <Services></Services>
      <Info></Info>
      <Client></Client>
      <Technologies></Technologies>
      <Operate />
      <Projects></Projects>
      <Testimonials></Testimonials>
    </div>
  );
}
