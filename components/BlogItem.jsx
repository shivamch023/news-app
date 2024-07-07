import { assets, blog_data } from "@/Assets/assets";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const BlogItem = ({ title, description, category, image, id }) => {
  return (
    <div className=" max-w-[370px] sm:max-w-[300px] bg-white border border-black hover:shadow-[-7px_7px_0px_#000000]">
      <Link href={`/blogs/${id}`}>
      <Image
        src={image}
        alt=""
        width={400}
        height={400}
        className="border border-black"
      />
      </Link>
      <p className="ml-5 mt-5 px-1 inline-block bg-black text-white text-sm">
        {category}
      </p>
      <div className="p-5">
        <h5 className="mb-2 text-lg font-medium tracking-tight text-gray">
          {title}
        </h5>
        <p className="mb-3 text-sm tracking-tight text-gray-700"
        
        dangerouslySetInnerHTML={{__html:description.slice(0,120)}}>
          
        </p>
        <Link href={`/blogs/${id}`} className="inline-flex items-center border border-black py-1 px-2 rounded hover:bg-red-200 hover:border-none hover:text-white font-semibold text-center">
          Read More
          <Image src={assets.arrow} alt="" className="ml-2" width={12} />
        </Link>
      </div>
    </div>
  );
};

export default BlogItem;