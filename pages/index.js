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
        {/* <meta property="og:title" content="GenRes" />
        <meta property="og:image:type" content="image/png" />
        <meta property="og:url" content="https://genres-agency.vercel.app/" />
        <meta data-n-head="ssr" data-hid="og:image" name="og:image" content="https://i.ibb.co/FWSpk8G/preview.png" />
        <meta data-n-head="ssr" data-hid="og:locale" name="og:locale" content="en_US" />
        <meta property="og:description" content="We quickly generate your crucial results" /> */}
        <meta
          name="google-site-verification"
          content="q7cGc9JJqhY_Cp7bWDQUfnvrlqP37q3yTjid9K_vSzw"
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Genres Agency: A Startup Life Saver</title>
        <meta name="title" content="Genres Agency: A Startup Life Saver" />
        <meta
          name="description"
          content="We are an agency with a focus on UI/UX design and website development.  We believe in working together with our clients to develop beautiful, useful, and affordable startup solutions. 
"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.genres-agency.com/" />
        <meta
          property="og:title"
          content="Genres Agency: A Startup Life Saver "
        />
        <meta
          property="og:description"
          content="We are an agency with a focus on UI/UX design and website development.  We believe in working together with our clients to develop beautiful, useful, and affordable startup solutions."
        />
        <meta
          property="og:image"
          content="https://i.ibb.co/FWSpk8G/preview.png"
        />

        {/* <!-- Twitter --> */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.genres-agency.com/" />
        <meta
          property="twitter:title"
          content="Genres Agency: A Startup Life Saver"
        />
        <meta
          property="twitter:description"
          content="We are an agency with a focus on UI/UX design and website development.  We believe in working together with our clients to develop beautiful, useful, and affordable startup solutions."
        />
        <meta
          property="twitter:image"
          content="https://i.ibb.co/FWSpk8G/preview.png"
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
