// src/components/PopularPosts.jsx
import React from 'react';
import '../css/PopularPosts.css';

export default function PopularPosts() {
  const posts = Array.from({ length: 25 }, (_, i) => ({
    title: "Popular course title",
    date: "12 March 2023",
    category: "Development",
    image: "/pp1.png",
  }));

  return (
    <div className="popular-posts">
  <h3>Popular Posts</h3>
  <div className="popular-posts-scroll">
    {posts.map((post, index) => (
      <div className="popular-post" key={index}>
        <img src={post.image} alt="Popular" />
        <div className="info">
          <span>{post.category}</span><br />
          <small>{post.date}</small>
          <p>{post.title}</p>
        </div>
      </div>
    ))}
  </div>
</div>

  );
}
