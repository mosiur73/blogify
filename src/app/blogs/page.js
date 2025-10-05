"use client";
import { useEffect, useState } from "react";

export default function Blogs() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    fetch("/api/blogs")
      .then((res) => res.json())
      .then((data) => setBlogs(data));
  }, []);

  return (
    <div className="max-w-5xl mx-auto p-6 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {blogs.map((blog) => (
        <div key={blog._id} className="rounded-2xl overflow-hidden shadow-md bg-white">
          <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
          <div className="p-5">
            <span className="inline-block bg-orange-100 text-orange-700 text-sm font-semibold px-3 py-1 rounded-full mb-3">{blog.category}</span>
            <div className="flex items-center text-sm text-gray-500 mb-2">
              <span>{new Date(blog.date).toDateString()}</span>
              <span className="mx-2">•</span>
              <span>{blog.tag}</span>
            </div>
            <h2 className="text-lg font-semibold mb-2">{blog.title}</h2>
            <p className="text-gray-600 mb-3">{blog.content.substring(0, 80)}...</p>
            <div className="flex justify-between items-center text-sm text-gray-500">
              <span>👤 {blog.author}</span>
              <span className="text-orange-500 cursor-pointer">→</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
