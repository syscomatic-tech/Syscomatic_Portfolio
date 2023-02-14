import React from "react";
const Brands = () => {
  const brandImages = [
    "Images/Brands/onnow.png",
    "Images/Brands/buet.png",
    "Images/Brands/du.png",
    "Images/Brands/tunibibi.png",
    "Images/Brands/poc.png",
    "Images/Brands/fuel.png",
  ];
  return (
    <section class="mb-48" id="services">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="flex flex-wrap items-center justify-between">
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
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Brands;
