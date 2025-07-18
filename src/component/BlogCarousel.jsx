import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/TopCourses.css"; // For section + pagination styling
import "../css/CourseCard.css"; // For card styling
import '../css/BlogCarousel.css'
export default function BlogCarousel() {
  const blogPosts = [
    {
      id: 1,
      title: "Train Or Bus Journey? Which one suits?",
      description: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      date: "12 March 2023",
      category: "Development",
      image: "/train-1.png"
    },
    {
      id: 2,
      title: "Train Or Bus Journey? Which one suits?",
      description: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      date: "12 March 2023",
      category: "Development",
      image: "/train-2.png"
    },
    {
      id: 3,
      title: "Train Or Bus Journey? Which one suits?",
      description: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      date: "12 March 2023",
      category: "Development",
      image: "/train-3.png"
    },
    {
      id: 4,
      title: "Train Or Bus Journey? Which one suits?",
      description: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      date: "12 March 2023",
      category: "Development",
      image: "/train-4.png"
    },
    {
      id: 5,
      title: "Train Or Bus Journey? Which one suits?",
      description: "The choice between a train or bus journey depends on various factors such as the distance of the journey, the time available, the cost, and person",
      date: "12 March 2023",
      category: "Development",
      image: "/train-5.png"
    },
  ];

  return (
    <div className="top-courses-section">
      <div className="new-courses-header">
        <h2>Blogs</h2>
      </div>

      <Swiper
        slidesPerView={3}
        spaceBetween={30}
        loop={true}
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="top-courses-swiper"
      >
        {blogPosts.map((post) => (
          <SwiperSlide key={post.id}>
            <div className="course-card">
              <div className="card-image">
                <img src={post.image} alt={post.title} />
              </div>

              <div className="card-meta">
                <span className="card-category">{post.category}</span>
                <span className="card-date">{post.date}</span>
              </div>

              <h2 className="card-title">{post.title}</h2>
              <p className="card-desc">{post.description}</p>
              <a href="/blog" className="read-more">Read More...</a>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
