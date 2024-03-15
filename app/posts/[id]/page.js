import getBlog from "@/app/lib/getBlog";
import Image from "next/image";
import React from "react";

const Page = async ({ params }) => {
  try {
    const { id } = params;
    const post = await getBlog(id);
    // console.log(post)
    
    if (!post) {
      throw new Error("Post not found");
    }

    return (
      <div>
        <h1>Post id is: {id}</h1>
        <h1>{post.title}</h1>
        <Image src={post.thumbnailUrl} alt="image" width={200} height={200} />
      </div>
    );
  } catch (error) {
    console.error("Error fetching post:", error);
    return <div>Error fetching post. Please try again later.</div>;
  }
};

export default Page;
