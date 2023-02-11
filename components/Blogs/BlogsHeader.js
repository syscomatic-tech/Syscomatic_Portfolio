import React from "react";
import Image from "next/image";
import { useRouter } from "next/router";

function BlogsHeader({ blogs }) {
  const router = useRouter();
  return (
    <div className=" mb-12 ">
      {blogs?.length > 0 && (
        <>
          {blogs.slice(-1).map((item) => (
            <div
              className="flex flex-col lg:flex-row  space-y-6 lg:space-y-0 rounded-lg  hover:shadow-lg transition-all group"
              key={item._id}
            >
              <div className="lg:w-1/2  w-full  cursor-pointer flex justify-center items-center ">
                <Image
                  src={item?.blogImg}
                  alt="Blog Image"
                  width={600}
                  height={300}
                  className="rounded-lg  group-hover:scale-[.99] transition-all"
                  objectFit="cover"
                  onClick={() => router.push(`/Blog/${item?.slug}`)}
                />
              </div>
              <div className="lg:w-1/2 w-full   flex  justify-center  flex-col ">
                <p className="text-[#6e42ff] mb-4 font-semibold text-md">
                  {item?.category} ・Recent
                </p>
                <h2 className="text-2xl font-bold  font-display  cursor-pointer leading-tight">
                  <span
                    className="link link-underline link-underline-black no-underline hover:text-[#6e42ff] transition-all"
                    onClick={() => router.push(`/Blog/${item?.slug}`)}
                  >
                    {item?.blogTitle}
                  </span>
                </h2>
                <p
                  className="text-gray-400 text-md mt-2"
                  dangerouslySetInnerHTML={{
                    __html: item?.blogDescription?.slice(0, 400) + " ...",
                  }}
                ></p>
                <div className="flex items-center mt-8 space-x-4">
                  <Image
                    src={item?.blogImg}
                    alt="Blog Image"
                    width={60}
                    height={60}
                    className="rounded-full cursor-pointer"
                    objectFit="cover"
                    onClick={() => router.push(`/Blog/${item?.slug}`)}
                  ></Image>
                  <div>
                    <h2 className="text-2xl font-bold  font-display  cursor-pointer leading-tight">
                      <span
                        className="link link-underline link-underline-black no-underline hover:text-[#551FFF] transition-all"
                        onClick={() => router.push(`/Blog/${item?.slug}`)}
                      >
                        Zahed Hasan
                      </span>
                    </h2>
                    <p className="text-gray-400 my-1 font-semibold text-md">
                      {item?.createdDate?.slice(0, 10)}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </>
      )}
    </div>
  );
}
export default BlogsHeader;
