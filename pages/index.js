import Head from "next/head";
import Banner from "../components/Banner/Banner";
import Client from "../components/Client/Client";
import Info from "../components/Info/Info";
import Projects from "../components/Projects/Projects";
import Services from "../components/Services/Services";
import Technologies from "../components/Technologies/Technologies";
import Testimonials from "../components/Testimonials/Testimonials";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Syscomatic</title>
        <meta name="description" content="Developing Front-End by TOFAYEL101" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Banner></Banner>
      <Services></Services>
      <Info></Info>
      <Client></Client>
      <Technologies></Technologies>
      <Projects></Projects>
      <Testimonials></Testimonials>
    </div>
  );
}
