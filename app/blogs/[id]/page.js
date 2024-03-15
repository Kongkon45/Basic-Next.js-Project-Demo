import React from "react";
import blogsData from "@/app/data/flag.json";
import Image from "next/image";

const page = ({ params }) => {
  const { id } = params;
  const parsId = parseInt(id); //conver string to int
  const filteredBlog = blogsData?.find((blog) => blog.id === parsId);
  // console.log(filteredBlog)
  return (
    <div>
      <h1 className="text-center my-2 text-3xl font-bold">Blog id is : {id}</h1>
      {filteredBlog && (
        <div className="flex justify-center items-center gap-10 mx-10">
          <div className="w-1/2 ">
            <Image className="hover:scale-110 ease-in-out duration-300 cursor-pointer"
              src={filteredBlog.flag}
              alt="flag"
              width={500}
              height={200}
            />
          </div>
          <div className="w-1/2">
            <h1 className="text-2xl font-bold ">{filteredBlog.country}</h1>
            <p className="uppercase text-2xl font-bold my-2">{filteredBlog.code}</p>
            <p className="text-justify">{filteredBlog.description}</p>
            
          </div>
        </div>
      )}
    </div>
  );
};

export default page;
