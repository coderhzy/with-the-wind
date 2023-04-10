import BlogCard from "@/components/content/blog/BlogCard";
import React, { memo } from "react";

const Blog = memo(() => {
  return (
    <div>
      <BlogCard />
    </div>
  )
});

export default Blog;
Blog.displayName = "Blog";
