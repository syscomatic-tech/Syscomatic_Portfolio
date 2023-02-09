import axios from "axios";
import Image from "next/image";
import React from "react";
import BlogCards from "../components/Blogs/BlogCards";
import BlogsHeader from "../components/Blogs/BlogsHeader";
import BlogsBanner from "../public/Images/Blogs/blogs_banner.png";
const Blogs = (props) => {
  return (
    <div>
      <div className="mb-8 mt-16">
        <Image src={BlogsBanner} alt={"blog"} width={1440} height={200}></Image>
      </div>
      <BlogsHeader blogs={props.data}></BlogsHeader>
      <BlogCards blogs={props.data}></BlogCards>
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
