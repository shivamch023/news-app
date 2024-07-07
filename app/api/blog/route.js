import BlogModel from "@/lib/Models/blogModel";
import { ConnectDB } from "@/lib/config/db";
import fs from "fs/promises";
import { NextResponse } from "next/server";
import { writeFile } from "fs/promises";
import { Buffer } from "buffer";

const LoadDB = async () => {
  try {
    await ConnectDB();
    console.log("Database connected");
  } catch (error) {
    console.error("Database connection failed", error);
  }
};

LoadDB();

// API endpoint to get all blogs
export async function GET(request) {
  try {
    const blogId = request.nextUrl.searchParams.get("id");
    if (blogId) {
      const blog = await BlogModel.findById(blogId);
      if (!blog) {
        return NextResponse.json({ success: false, msg: "Blog not found" });
      }
      return NextResponse.json(blog);
    } else {
      const blogs = await BlogModel.find({});
      return NextResponse.json({ blogs });
    }
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ success: false, msg: "Failed to fetch blogs" });
  }
}

// API endpoint for uploading blog
export async function POST(request) {
  try {
    const formData = await request.formData();
    const timestamp = Date.now();

    const image = formData.get("image");
    if (!image) {
      return NextResponse.json({ success: false, msg: "Image is required" });
    }

    const imageByData = await image.arrayBuffer();
    const buffer = Buffer.from(imageByData);

    const path = `./public/${timestamp}_${image.name}`;
    try {
      await writeFile(path, buffer);
    } catch (writeError) {
      console.error("Error writing file:", writeError);
      return NextResponse.json({ success: false, msg: "Failed to save image" });
    }

    const imgUrl = `/${timestamp}_${image.name}`;

    const blogData = {
      title: formData.get("title"),
      description: formData.get("description"),
      category: formData.get("category"),
      author: formData.get("author"),
      image: imgUrl,
      authorImg: formData.get("authorImg"),
    };

    try {
      await BlogModel.create(blogData);
      console.log("Blog saved");
      return NextResponse.json({ success: true, msg: "Blog Added" });
    } catch (dbError) {
      console.error("Error saving blog to database:", dbError);
      return NextResponse.json({
        success: false,
        msg: "Failed to add blog to database",
      });
    }
  } catch (error) {
    console.error("Error in POST request:", error);
    return NextResponse.json({ success: false, msg: "Failed to add blog" });
  }
}

// API endpoint to delete blog
export async function DELETE(request) {
  try {
    const id = request.nextUrl.searchParams.get("id");
    const blog = await BlogModel.findById(id);
    if (!blog) {
      return NextResponse.json({ success: false, msg: "Blog not found" });
    }

    const filePath = `./public${blog.image}`;
    try {
      await fs.unlink(filePath);
    } catch (unlinkError) {
      console.error("Error deleting file:", unlinkError);
      // Even if file deletion fails, attempt to delete the blog entry
    }

    await BlogModel.findByIdAndDelete(id);
    return NextResponse.json({ success: true, msg: "Blog Deleted" });
  } catch (error) {
    console.error("Error in DELETE request:", error);
    return NextResponse.json({ success: false, msg: "Failed to delete blog" });
  }
}
