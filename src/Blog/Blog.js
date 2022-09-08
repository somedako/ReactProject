import React from "react";
import "./Blog.css";
import BlogItem from "../BlogItem/BlogItem";

function Blog(props) {
  return (
    <div className="blog">
      <div className="container">
        <h2 className="blog__title main-title">Company Blog</h2>
        <div className="blog__inner">
          {props.blogs.map((blog) => (
            <BlogItem key={blog.id} {...blog} />
          ))}
          <button className="btn btn--black">SHOW MORE</button>
        </div>
      </div>
    </div>
  );
}

export default Blog;
