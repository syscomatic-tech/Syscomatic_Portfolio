// /* eslint-disable react-hooks/rules-of-hooks */
// import axios from "axios";
// import Head from "next/head";
// import Image from "next/image";
// import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

const blogdetails = ({ data: blogs }) => {
//   const router = useRouter();
//   const blog = blogs[0];
//   const [moreBlogs, setMoreBlogs] = useState([]);
//   useEffect(() => {
//     fetch("https://api.server.syscomatic.com/api/v1/AllBlogList")
//       .then((res) => res.json())
//       .then((data) => setMoreBlogs(data.data.reverse().slice(0, 4)));
//   }, []);
//   return (
//     <div>
//       <Head>
//         <title>{blog?.blogTitle} - Syscomatic</title>
//       </Head>

//       <div className="pb-6">
//         <div
//           className="grid place-items-center"
//           data-aos="fade-up"
//           data-aos-delay="100"
//         >
//           <Image
//             src={blog?.blogImg}
//             alt="Blog Image"
//             width={1440}
//             height={400}
//             className="h-[600px]"
//             objectFit="cover"
//           />
//         </div>
//         <div className="flex justify-between flex-col-reverse lg:flex-row items-start my-16">
//           <div className="lg:w-[80%] mx-auto ">
//             <div className=" px-2 lg:px-4 mb-6">
//               <h2
//                 className="card-title text-5xl font-bold break-words mt-8"
//                 data-aos="fade-up"
//                 data-aos-delay="200"
//               >
//                 {blog?.blogTitle}
//               </h2>
//               <p
//                 className="font-medium text-gray-300 my-8"
//                 data-aos="fade-up"
//                 data-aos-delay="300"
//               >
//                 Written by{" "}
//                 <span className="underline">
//                   {blog?.user
//                     ? blog?.user?.firstName + " " + blog?.user?.lastName
//                     : "Anonymous "}
//                 </span>{" "}
//                 ; published on {blog?.createdDate?.slice(0, 10)}
//               </p>
//               <p
//                 className="text-gray-300 mt-8  text-lg"
//                 dangerouslySetInnerHTML={{ __html: blog?.blogDescription }}
//                 data-aos="fade-up"
//                 data-aos-delay="400"
//               ></p>
//             </div>
//             <div
//               className="mt-20 border-t border-gray-200 py-12"
//               data-aos="fade-up"
//             >
//               <h2 className="text-4xl text-white font-semibold">Read More</h2>
//               <div className="grid grid-cols-1 md:grid-cols-2  gap-y-6 gap-x-6 mt-4 py-8    ">
//                 {moreBlogs.map((item, index) => (
//                   <div
//                     key={item?._id}
//                     className="card group  cursor-pointer  rounded-lg hover:shadow-lg  transition-all"
//                     onClick={() => router.push(`/blogs/${item?.slug}`)}
//                     data-aos="fade-up"
//                     data-aos-delay={100 + index * 100}
//                   >
//                     <figure>
//                       <Image
//                         src={item?.blogImg}
//                         alt="blogImg"
//                         width={500}
//                         height={500}
//                         objectFit="cover"
//                         className="group-hover:scale-[.99] transition-all"
//                       />
//                     </figure>
//                     <div className="card-body px-2 lg:px-4 ">
//                       <h2 className="text-xl font-bold  font-display max-w-sm  leading-tight">
//                         <span className="text-[#551FFF] font-semibold text-md mb-2">
//                           {item?.category}
//                         </span>{" "}
//                         <br /> <br />
//                         <span className="link link-underline link-underline-black no-underline ">
//                           {item?.blogTitle}
//                         </span>
//                       </h2>
//                       <p
//                         className="text-gray-400 text-md mt-2"
//                         dangerouslySetInnerHTML={{
//                           __html: item?.blogDescription?.slice(0, 100) + "...",
//                         }}
//                       ></p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>{" "}
//         </div>
//       </div>
//       <div></div>
//     </div>
//   );
};
// export async function getServerSideProps({ params }) {
//   // Fetch data from external API
//   const { data } = await axios.get(
//     `https://api.server.syscomatic.com/api/v1/searchBlogSlug/${params?.slug}`
//   );
//   // Pass data to the page via props
//   return { props: data };
// }
export default blogdetails;
