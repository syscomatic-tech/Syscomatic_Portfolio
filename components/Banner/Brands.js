import Carousel from "nuka-carousel/lib/carousel";
import React from "react";
const Brands = () => {
  const brandImages = [
    "Images/Brands/onnow.png",
    "Images/Brands/buet.png",
    "Images/Brands/du.png",
    "Images/Brands/tunibibi.png",
    "Images/Brands/poc.png",
    "Images/Brands/fuel.png",
    "Images/Brands/fuel.png",
    "Images/Brands/poc.png",
    "Images/Brands/tunibibi.png",
    "Images/Brands/du.png",
    "Images/Brands/buet.png",
    "Images/Brands/onnow.png",
  ];
  return (
    <section class="mb-48" id="services">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            {/* <div class="flex flex-wrap items-center justify-between"> */}
            <Carousel
              animation="fade"
              autoplay
              pauseOnHover
              autoplayInterval={8000}
              speed={2500}
              slidesToShow={6}
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
                        className="w-7 h-7 font-bold cursor-pointer hover:opacity-60"
                        onClick={previousSlide}
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
              data-aos="fade-left"
              data-aos-delay="100"
              renderCenterRightControls={
                brandImages.length > 6
                  ? ({ nextSlide }) => (
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-7 h-7 font-bold cursor-pointer hover:opacity-60"
                        onClick={nextSlide}
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
                  class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                  data-aos-delay={200 + index * 100}
                  data-aos="fade-up"
                >
                  <img src={item} alt="image" class="" />
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
