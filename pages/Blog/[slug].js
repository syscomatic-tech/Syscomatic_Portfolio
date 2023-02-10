import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import Router, { useRouter } from "next/router";
import React from "react";

const blogdetails = ({ data: blog }) => {
  const { asPath } = Router();
  console.log(blog);
  return (
    <div>
      <Head>
        <title>Blog Details - Syscomatic</title>
      </Head>

      <div className="custom-container py-6">
        {/* <div className="grid place-items-center">
          <Image
            src={blog?.thumbnail}
            alt="Blog Image"
            width={1300}
            height={600}
            className="rounded "
            objectFit="cover"
          />
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row items-start my-6">
          <div className="lg:w-[95%] ">
            <div className=" px-2 lg:px-4 mb-6">
              <p className="text-secondary font-semibold text-md">
                {blog?.date?.slice(0, 10)} ・{" "}
                <span className="text-primary">
                  {blog?.categories?.map((u) => u?.CategoryName).join(" | ")}
                </span>
              </p>
              <h2 className="card-title text-2xl font-bold break-words">
                {blog?.title}
              </h2>
              <p
                className="text-secondary  text-lg"
                dangerouslySetInnerHTML={{ __html: blog?.content }}
              ></p>
            </div>
            <div className="flex gap-2">
              {blog?.tags?.map((tag, index) => (
                <button
                  className="btn btn-xs btn-primary text-white"
                  key={index}
                >
                  {tag}
                </button>
              ))}
            </div>
          </div>{" "}
        </div> */}
      </div>
    </div>
  );
};
export async function getServerSideProps({ params }) {
  // Fetch data from external API
  const { data } = await axios.get(
    `https://api.server.syscomatic.com/api/v1/searchBlogSlug/${params?.slug}`
  );
  // Pass data to the page via props
  return { props: data };
}
export default blogdetails;
