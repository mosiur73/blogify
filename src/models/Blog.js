

import mongoose from "mongoose";

const BlogSchema = new mongoose.Schema({
  category: { type: String, required: true }, 
  date: { type: Date, default: Date.now },
  tag: { type: String, required: true }, 
  title: { type: String, required: true },
  description: { type: String, required: true },
  author: { type: String, required: true },
  image: { type: String, required: true }, 
});

export default mongoose.models.Blog || mongoose.model("Blog", BlogSchema);
