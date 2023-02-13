import React from "react";

const Brands = () => {
  const brandImages = [
    "/public/Images/Brands/onnow.png",
    "/public/Images/Brands/buet.png",
    "/public/Images/Brands/du.png",
    "/public/Images/Brands/tunibibi.png",
    "/public/Images/Brands/poc.png",
    "/public/Images/Brands/fuel.png",
  ];
  return (
    <section class="mb-48">
      <div class="container mx-auto">
        <div class="-mx-4 flex flex-wrap">
          <div class="w-full px-4">
            <div class="flex flex-wrap items-center justify-between">
              {brandImages.map((item, index) => (
                <a
                  key={index}
                  href="#"
                  class="mx-4 flex w-[150px] items-center justify-center py-5 2xl:w-[180px]"
                >
                  <img src="item" alt="image" class="h-10 w-full" />
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
