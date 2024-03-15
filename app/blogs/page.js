import React from "react";
import BlogsData from "@/app/data/flag.json";
import Image from "next/image";
import Link from "next/link";
import AddToCart from "../components/common/AddToCart";

const Blogs = () => {
  // console.log(BlogsData)
  return (
    <div>
      <h1 className="text-center my-8 text-black text-2xl font-bold underline">
        All Flag
      </h1>
      <div className="grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 gap-10 mx-10">
        {BlogsData?.map((blog) => {
          return (
            <div
              key={blog.id}
              className="border pt-2 pb-4 px-5 rounded-lg shadow-xl text-center hover:scale-110 cursor-pointer ease-in-out duration-300"
            >
              <Image src={blog.flag} alt="flag" width={300} height={200} />
              <h1 className="text-xl font-bold mb-3">
                <Link href={`/blogs/${blog.id}`}>{blog.country}</Link>
              </h1>
              <AddToCart/>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Blogs;
