"use client"; // Add this line to mark the file as a Client Component

import { blog_data } from "@/Assets/assets";
import React, { useEffect, useState } from "react";
import BlogItem from "./BlogItem";
import axios from "axios";

const BlogList = () => {
  const [menu, setMenu] = useState("All");

  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const response = await axios.get("/api/blog");
    setBlogs(response.data.blogs);
    console.log(response.data.blogs);
  };

  useEffect(() => {
    fetchBlogs();
  }, []);

  const filteredBlogs =
    menu === "All" ? blogs : blogs.filter((item) => item.category === menu);

  return (
    <div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("All")}
          className={
            menu === "All" ? "bg-black text-white py-2 px-4 rounded-sm" : ""
          }
        >
          All
        </button>
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Politics")}
          className={
            menu === "Politics"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Politics
        </button>
        <button
          onClick={() => setMenu("Sports")}
          className={
            menu === "Sports" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Sports
        </button>
        <button
          onClick={() => setMenu("Economics")}
          className={
            menu === "Economics"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Economics
        </button>
        <button
          onClick={() => setMenu("Entertainment")}
          className={
            menu === "Entertainment"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Entertainment
        </button>
      </div>
      <div className="flex flex-wrap justify-around gap-1 gap-y-10 mb-16 xl:mx-24">
        {filteredBlogs.map((item, index) => (
          <BlogItem
            key={index}
            id={item._id}
            image={item.image}
            title={item.title}
            description={item.description}
            category={item.category}
          />
        ))}
      </div>
      <div className="flex justify-center gap-6 my-10">
        <h1 className="mt-20 border py-2 text-2xl sm:text-5xl rounded font-medium px-10 bg-black text-white ">
          Categories{" "}
        </h1>
      </div>
      <div className="flex justify-center gap-6 my-10">
        <button
          onClick={() => setMenu("Technology")}
          className={
            menu === "Technology"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Technology
        </button>
        <button
          onClick={() => setMenu("Politics")}
          className={
            menu === "Politics"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Politics
        </button>
        <button
          onClick={() => setMenu("Sports")}
          className={
            menu === "Sports" ? "bg-black text-white py-1 px-4 rounded-sm" : ""
          }
        >
          Sports
        </button>
        <button
          onClick={() => setMenu("Economics")}
          className={
            menu === "Economics"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Economics
        </button>
        <button
          onClick={() => setMenu("Entertainment")}
          className={
            menu === "Entertainment"
              ? "bg-black text-white py-1 px-4 rounded-sm"
              : ""
          }
        >
          Entertainment
        </button>
      </div>
    </div>
  );
};

export default BlogList;
