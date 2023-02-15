import ContactUs from "../components/ContactUs/ContactUs";
import Footer from "../components/Footer/Footer";
import Navbar from "../components/Navbar/Navbar";
import "../styles/globals.css";
import ProgressBar from "@badrap/bar-of-progress";
import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { Router } from "next/router";
import { QueryClientProvider, QueryClient } from "react-query";

function MyApp({ Component, pageProps }) {
  const queryClient = new QueryClient();
  const progress = new ProgressBar({
    size: 5,
    color: "#311589",
    className: "z-50",
    delay: "100",
  });
  useEffect(() => {
    AOS.init({
      duration: 800,
    });
    Router.events.on("routeChangeStart", progress.start);
    Router.events.on("routeChangeComplete", progress.finish);
    Router.events.on("routeChangeError", progress.finish);
  }, [progress.finish, progress.start]);
  useEffect(() => {
    if (typeof window !== "undefined") {
      const loader = document.getElementById("globalLoader");
      if (loader) loader.style.display = "none";
    }
  }, []);
  return (
    <div>
      <Navbar></Navbar>
      <div className="max-w-[1440px] mx-auto">
        <div className="mt-[80px]">
          <QueryClientProvider client={queryClient}>
            <Component {...pageProps} />
          </QueryClientProvider>
        </div>
        {/* <ContactUs></ContactUs> */}
      </div>
      <Footer></Footer>
    </div>
  );
}

export default MyApp;
