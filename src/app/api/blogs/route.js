import { NextResponse } from "next/server";
import { connectDB } from "@/lib/dbConnect";
import Blog from "@/models/Blog";

// CREATE Blog
export async function POST(req) {
  try {
    await connectDB();
    const body = await req.json();
    const { title, content, author } = body;

    if (!title || !content) {
      return NextResponse.json({ error: "Title & Content required" }, { status: 400 });
    }

    const newBlog = await Blog.create({ title, content, author });
    return NextResponse.json({ message: "Blog created successfully", blog: newBlog }, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// GET All Blogs
export async function GET() {
  try {
    await connectDB();
    const blogs = await Blog.find().sort({ createdAt: -1 }); // নতুন আগে
    return NextResponse.json(blogs, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
