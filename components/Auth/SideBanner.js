import Image from "next/image";
import React from "react";
import dashboard from "/public/images/Auth/illustration.gif";
const SideBanner = () => {
  return (
    <div className="relative overflow-hidden md:flex w-1/2 i justify-around items-center hidden">
      <div>
        {/* <h1 className="text-white font-bold text-5xl text-center mb-8 font-sans">
          GoDanny
        </h1> */}

        <Image
          src={dashboard}
          alt="Image"
          className="w-full h-full mx-auto rounded-xl cursor-pointer transition-all hover:mb-5"
        ></Image>
      </div>
      {/* <div className="absolute -bottom-32 -left-40 xl:w-64 w-40 h-40 xl:h-64 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -bottom-40 -left-20 xl:w-64 w-40 h-40 xl:h-64 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -top-40 -right-0 xl:w-64 w-40 h-40 xl:h-64 border-4 rounded-full border-opacity-30 border-t-8" />
      <div className="absolute -top-20 -right-20 xl:w-64 w-40 h-40 xl:h-64 border-4 rounded-full border-opacity-30 border-t-8" /> */}
    </div>
  );
};

export default SideBanner;
