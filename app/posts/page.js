import React from "react";
import getAllBlog from "../lib/getAllBlog";
import Button from "../components/common/Button";
import Link from "next/link";

const Posts = async ({ params }) => {
  const { id } = params;
  const posts = await getAllBlog(id);
  return (
    <div>
        <h1 className="text-3xl font-bold text-center my-4">Post page</h1>
      <div className="grid grid-cols-3 gap-5 mx-5">
        {posts.map((post) => {
          return (
            <div className="bg-orange-300 text-white text-center p-5 rounded-lg " key={post.id}>
              <h1>{post.id}</h1>
              <h1 className="text-2xl font-bold my-1">{post.title}</h1>
              {/* <p className="text-md my-1">{post.body}</p> */}
              <Link href={`/posts/${post.id}`}><Button/></Link>
              
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Posts;
