import Image from "next/image";
import { useRouter } from "next/router";
import React, { useState } from "react";
const BlogCards = ({ blogs }) => {
  const router = useRouter();
  const [more, setMore] = useState(6);
  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-y-6 gap-x-6 mt-4 py-8    ">
        {blogs.slice(0, more).map((item, index) => (
          <div
            key={index}
            className="card group  cursor-pointer  rounded-lg hover:shadow-lg  bg-[#0B002D] transition-all"
            onClick={() => router.push(`/blogs/${item?.slug}`)}
            data-aos="fade-up"
            data-aos-delay={200 + index * 100}
          >
            <figure>
              <Image
                src={item?.blogImg}
                alt="blogImg"
                width={500}
                height={400}
                objectFit="cover"
                className="group-hover:scale-[.99] transition-all"
                placeholder="blur"
                blurDataURL="/public/Images/blogs/blogs_banner.png"
              />
            </figure>
            <div className="card-body px-2 lg:px-4 ">
              <h2 className="text-xl font-bold  font-display max-w-sm  leading-tight">
                <span className="text-[#6e42ff] font-semibold text-md mb-2">
                  {item?.category}
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
                {item?.user ? (
                  <Image
                    src={item?.user?.photo}
                    alt="User"
                    width={60}
                    height={60}
                    className="rounded-full cursor-pointer"
                    objectFit="cover"
                    onClick={() => router.push(`/blogs/${item?.slug}`)}
                  ></Image>
                ) : (
                  <div className="w-[60px] h-[60px] rounded-full bg-[#6e42ff]"></div>
                )}
                <div>
                  <h2 className="text-2xl font-bold  font-display  cursor-pointer leading-tight">
                    <span
                      className="link link-underline link-underline-black no-underline hover:text-[#6e42ff] transition-all"
                      onClick={() => router.push(`/blogs/${item?.slug}`)}
                    >
                      {item?.user
                        ? item?.user?.firstName + " " + item?.user?.lastName
                        : "Anonymous "}
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
      <div className="flex items-center justify-center my-6">
        <button
          className={`btn button normal-case  `}
          onClick={() =>
            more >= blogs.length ? setMore(6) : setMore(more + 6)
          }
        >
          {more >= blogs.length ? "See Less" : "See More"}
        </button>
      </div>
    </div>
  );
};
export default BlogCards;
