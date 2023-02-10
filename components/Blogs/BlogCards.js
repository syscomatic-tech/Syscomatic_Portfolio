import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
const BlogCards = ({ blogs }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 mt-4 py-8    ">
      {blogs.map((item) => (
        <div
          key={item?._id}
          className="card group  cursor-pointer  rounded-lg hover:shadow-lg  bg-[#0B002D] transition-all"
          onClick={() => router.push(`/Blog/${item?.slug}`)}
        >
          <figure>
            <Image
              src={item?.blogImg}
              alt="blogImg"
              width={500}
              height={400}
              objectFit="cover"
              className="group-hover:scale-[.99] transition-all"
            />
          </figure>
          <div className="card-body px-2 lg:px-4 ">
            <h2 className="text-xl font-bold  font-display max-w-sm  leading-tight">
              <span className="text-[#551FFF] font-semibold text-md mb-2">
                {item?.createdDate?.slice(0, 10)}
              </span>{" "}
              <br /> <br />
              <span className="link link-underline link-underline-black no-underline ">
                {item?.blogTitle}
              </span>
            </h2>
            <p
              className="text-gray-400 text-md mt-2"
              dangerouslySetInnerHTML={{
                __html: item?.blogDescription?.slice(0, 100) + "...",
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
    </div>
  );
};
export default BlogCards;
