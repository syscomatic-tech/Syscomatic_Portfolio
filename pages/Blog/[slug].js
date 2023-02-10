import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import BlogCards from "../../components/Blogs/BlogCards";

const blogdetails = ({ data: blogs }) => {
  const blog = blogs[0];
  return (
    <div>
      <Head>
        <title>{blog?.blogTitle} - Syscomatic</title>
      </Head>

      <div className="pb-6">
        <div className="grid place-items-center">
          <Image
            src={blog?.blogImg}
            alt="Blog Image"
            width={1440}
            height={400}
            className=""
            // objectFit="cover"
          />
        </div>
        <div className="flex justify-between flex-col-reverse lg:flex-row items-start my-16">
          <div className="lg:w-[80%] mx-auto ">
            <div className=" px-2 lg:px-4 mb-6">
              <h2 className="card-title text-5xl font-bold break-words mt-8">
                {blog?.blogTitle}
              </h2>
              <p className="font-medium text-gray-300 my-8">
                Written by <span className="underline">Shakib Al Hasan</span> ;
                published on {blog?.createdDate?.slice(0, 10)}
              </p>
              <p
                className="text-gray-300 mt-8  text-lg"
                dangerouslySetInnerHTML={{ __html: blog?.blogDescription }}
              ></p>
            </div>
            <div className="mt-20 border-t border-gray-200 py-12">
              <h2 className="text-4xl text-white font-semibold">Read More</h2>
            </div>
          </div>{" "}
        </div>
      </div>
      <div></div>
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
