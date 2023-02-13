import axios from "axios";
import Head from "next/head";
import Image from "next/image";
import React from "react";
import BlogCards from "../components/blogs/BlogCards";
import BlogsHeader from "../components/blogs/BlogsHeader";
import BlogsBanner from "../public/Images/blogs/blogs_banner.png";
const Blogs = ({ data }) => {
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
          className=" mt-40 mb-28"
          // unoptimized={true}
        ></Image>
      </div>
      <BlogsHeader blogs={data}></BlogsHeader>
      <BlogCards blogs={data}></BlogCards>
    </div>
  );
};
export async function getServerSideProps(context) {
  // Fetch data from external API
  const { data } = await axios.get(
    `https://api.server.syscomatic.com/api/v1/AllBlogList`
  );
  // Pass data to the page via props

  return { props: data };
}
export default Blogs;
