import Carousel from "nuka-carousel/lib/carousel";
import React, { useEffect, useRef, useState } from "react";
const Brands = () => {
  const brandImages = [
    "Images/Brands/onnow.png",
    "Images/Brands/buet.png",
    "Images/Brands/du.png",
    "Images/Brands/tunibibi.png",
    "Images/Brands/poc.png",
    "Images/Brands/fuel.png",
    "Images/Brands/onnow.png",
    "Images/Brands/buet.png",
    "Images/Brands/du.png",
    "Images/Brands/tunibibi.png",
    "Images/Brands/poc.png",
    "Images/Brands/fuel.png",
  ];

  const [screenWidth, setScreenWidth] = useState(null);
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCounter((counter) => counter + 1);
    }, 1000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  useEffect(() => {
    if (typeof window !== "undefined") {
      setScreenWidth(window.innerWidth);
    }
    const handleResize = () => {
      setScreenWidth(window.innerWidth);
    };
    window.addEventListener("resize", handleResize);
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [screenWidth, counter]);
  return (
    <section class="mb-12 md:mb-24 xl:mb-36" id="services">
      <div class="container mx-auto ">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            {/* <div class="flex flex-wrap items-center justify-between"> */}
            <Carousel
              // animation="fade"
              autoplay
              pauseOnHover
              autoplayInterval={3000}
              speed={500}
              slidesToShow={screenWidth > 1024 ? 6 : screenWidth > 720 ? 4 : 2}
              wrapAround={true}
              renderBottomCenterControls={false}
              renderCenterLeftControls={
                brandImages.length > 6
                  ? ({ previousSlide }) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-gray-100"
                        onClick={previousSlide}
                        data-aos-delay={4000}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15.75 19.5L8.25 12l7.5-7.5"
                        />
                      </svg>
                    )
                  : false
              }
              renderCenterRightControls={
                brandImages.length > 6
                  ? ({ nextSlide }) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 text-gray-500 font-bold cursor-pointer hover:text-gray-100"
                        onClick={nextSlide}
                        data-aos-delay={4000}
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M8.25 4.5l7.5 7.5-7.5 7.5"
                        />
                      </svg>
                    )
                  : false
              }
            >
              {brandImages.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  class="mx-4 flex w-[150px] items-center mx-auto h-full justify-center py-5 2xl:w-[180px]"
                  data-aos-delay={50 + index * 100}
                  data-aos="fade-up"
                >
                  <img src={item} alt="image" className="" />
                </a>
              ))}
            </Carousel>
            {/* </div> */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
