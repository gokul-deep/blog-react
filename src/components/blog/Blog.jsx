import React from "react";
import "./Blog.css";

function Blog({ posts }) {
  return (
    <div className="blog-body">
      <div className="content container">
        {/* <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </li>
          ))}
        </ul> */}
        <div className="row">
          <h1 className="title">Blog Posts</h1>
          {posts.map((post) => (
            <div className="col-md-4">
              <div className="section" key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Blog;
