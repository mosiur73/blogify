"use client";
import { useState } from "react";

export default function WriteBlog() {
  const [form, setForm] = useState({
    category: "",
    tag: "",
    title: "",
    description: "",
    author: "",
    image: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const res = await fetch("/api/blogs", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    const data = await res.json();
    if (res.ok) setMessage("✅ Blog posted successfully!");
    else setMessage(`❌ ${data.error}`);
  };

  return (
    <div className="max-w-2xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">✍️ Write a New Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input type="text" name="category" placeholder="Category (e.g., Restaurant Reviews)" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="tag" placeholder="Tag (e.g., Entrepreneur)" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="title" placeholder="Blog Title" onChange={handleChange} className="w-full border p-2 rounded" required />
        <textarea name="content" placeholder="Blog Description" onChange={handleChange} className="w-full border p-2 rounded h-32" required />
        <input type="text" name="author" placeholder="Author Name" onChange={handleChange} className="w-full border p-2 rounded" required />
        <input type="text" name="image" placeholder="Image URL" onChange={handleChange} className="w-full border p-2 rounded" required />

        <button type="submit" className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700">Publish</button>
      </form>

      {message && <p className="mt-4 text-green-600">{message}</p>}
    </div>
  );
}
