import axios from "axios";
import React from "react";
import BlogCards from "../components/Blogs/BlogCards";
import BlogsHeader from "../components/Blogs/BlogsHeader";
const Blogs = (props) => {
  return (
    <div>
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
