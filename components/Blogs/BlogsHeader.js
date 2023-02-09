import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";
import Image from "next/image";
import { useRouter } from "next/router";

function BlogsHeader({ blogs }) {
  const router = useRouter();
  return (
    <div className="lg:px-12 py-8">
      <div className="-mx-4 flex flex-wrap justify-center">
        <div className="w-full px-4">
          <div className="mx-auto mb-[6px]  text-center lg:mb-12">
            <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px] font-siliguri">
              Recent Blogs
            </h2>
          </div>
        </div>
      </div>

      {blogs?.length > 0 ? (
        <Swiper
          pagination={{
            //   dynamicBullets: true,
            clickable: true,
          }}
          modules={[Pagination]}
          className="mySwiper"
        >
          {
            <div>
              {blogs
                .reverse()
                .slice(0, 3)
                .map((item) => (
                  <SwiperSlide key={item._id}>
                    <div
                      className="flex flex-col lg:flex-row cursor-pointer  rounded-lg  hover:shadow-lg transition-all "
                      onClick={() => router.push(`/blog/${item?._id}`)}
                    >
                      <div className="lg:w-1/2  w-full lg:mx-4 flex justify-center items-center ">
                        <Image
                          src={item?.blogImg}
                          alt="Blog Image"
                          width={600}
                          height={400}
                          className="rounded "
                          objectFit="cover"
                        />
                      </div>
                      <div className="lg:w-1/2 w-full  flex  justify-center flex-col ">
                        <p className="text-secondary font-semibold text-md">
                          {item?.createdDate?.slice(0, 10)} ・{" "}
                        </p>
                        <h2 className="text-2xl font-bold  font-display   leading-tight">
                          <span className="link link-underline link-underline-black no-underline ">
                            {item?.blogTitle}
                          </span>
                        </h2>
                        <p
                          className="text-secondary text-md mt-2"
                          dangerouslySetInnerHTML={{
                            __html:
                              item?.blogDescription?.slice(0, 400) + " ...",
                          }}
                        ></p>
                      </div>
                    </div>
                  </SwiperSlide>
                ))}
            </div>
          }
        </Swiper>
      ) : !loading ? (
        <p className="text-3xl text-primary font-semibold text-center my-6">
          Nothing to show here...
        </p>
      ) : (
        <p className="text-2xl text-white">Loading....</p>
      )}
    </div>
  );
}
export default BlogsHeader;
