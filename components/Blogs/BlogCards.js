import Image from "next/image";
import { useRouter } from "next/router";
import React from "react";
const BlogCards = ({ blogs }) => {
  const router = useRouter();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-y-6 gap-x-2 mt-4 py-8  lg:px-12  ">
      {blogs.map((item) => (
        <div
          key={item?._id}
          className="card group  cursor-pointer border rounded-lg hover:shadow-lg p-2 transition-all"
          onClick={() => router.push(`/blog/${item?._id}`)}
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
          <div className="card-body px-0 lg:px-4 ">
            <p className="text-secondary font-semibold text-md">
              {item?.date?.slice(0, 10)}
            </p>
            <h2 className="text-xl font-bold  font-display max-w-sm  leading-tight">
              <span className="link link-underline link-underline-black no-underline ">
                {item?.blogTitle}
              </span>
            </h2>
          </div>
        </div>
      ))}
    </div>
  );
};
export default BlogCards;
