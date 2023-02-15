import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import { useRouter } from "next/router.js";
import React from "react";
import BlogCards from "../components/Blogs/BlogCards.js";
import BlogsHeader from "../components/Blogs/BlogsHeader.js";
import BlogsBanner from "./../public/Images/Blogs/blogs_banner.png";
import { useQuery } from "react-query";
const Blogs = ({ data }) => {
  const router = useRouter();
  console.log(router.query.category);
  return (
    <div className="px-6">
      <Head>
        <title>Blogs - Syscomatic </title>
      </Head>
      <div>
        <Image
          src={BlogsBanner}
          alt={"blog"}
          width={1440}
          height={200}
          className=" mt-40 mb-8"
          data-aos="fade-left"
        ></Image>
      </div>
      <div className="flex items-center justify-center space-x-4 mb-24 mt-12 bg-primary py-5 rounded-lg">
        <button
          className={
            !router.query.category
              ? "bg-[#6e42ff] py-2 px-5 rounded-[41px] text-white cursor-pointer "
              : " py-2 px-5 rounded-[41px] text-white cursor-pointer hover:bg-[#6e42ff2c] transition-all"
          }
          onClick={() => router.push(`/blogs`)}
        >
          All
        </button>
        {data.map((item, index) => (
          <button
            className={
              router.query.category === item._id
                ? "bg-[#6e42ff] py-2 px-5 rounded-[41px] text-white cursor-pointer"
                : " py-2 px-5 rounded-[41px] text-white cursor-pointer hover:bg-[#6e42ff2c] transition-all"
            }
            key={index}
            onClick={() => {
              router.query.category = item?._id;
              router.push(router, undefined, { shallow: true });
            }}
          >
            {item?.category}
          </button>
        ))}
      </div>

      {!router.query.category && <BlogsHeader blogs={data}></BlogsHeader>}
      <BlogCards blogs={data}></BlogCards>
    </div>
  );
};
export async function getServerSideProps({ query }) {
  // const router = useRouter();
  // Fetch data from external API

  const { data } = await axios.get(
    // `https://api.server.syscomatic.com/api/v1/AllBlogList`
    `https://api.server.syscomatic.com/api/v1/AllBlogList?category=${query.category}`
  );
  // Pass data to the page via props

  return { props: data };
}
export default Blogs;