import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "../css/TopCourses.css";

import Card from "./Card"; // your card component

// Dummy course data for testing
const courses = [
  {
    id: 1,
    title: "Weight Training Pro",
    description: "Train like a pro with intense sessions",
    image: "/train-1.png",
    rating: 4.5,
    originalPrice: 1500,
    discountPrice: 1000,
    type: "live", // or "res ource"
    schedule: "flexible", // or "fixed"
  },
  {
    id: 2,
    title: "Strength Builder",
    description: "Build core strength and endurance",
    image: "/train-2.png",
    rating: 5,
    originalPrice: 1200,
    discountPrice: 900,
    type: "live", // or "resource"
    schedule: "fixed", // or "fixed"
  },
  {
    id: 3,
    title: "Beginner Fitness Plan",
    description: "Start your journey with expert guidance",
    image: "train-3.png",
    rating: 3,
    originalPrice: 1000,
    discountPrice: 800,
    type: "resource", // or "resource"
    schedule: "",
  },{
    id: 4,
    title: "Beginner Fitness Plan",
    description: "Start your journey with expert guidance",
     image: "train-4.png",
    rating: 3,
    originalPrice: 1000,
    discountPrice: 800,
    type: "resource", // or "resource"
    schedule: "",
  },{
    id: 5,
    title: "Beginner Fitness Plan",
    description: "Start your journey with expert guidance",
     image: "train-5.png",
    rating: 3,
    originalPrice: 1000,
    discountPrice: 800,
    type: "resource", // or "resource"
    schedule: "",
  },
];

export default function TopCourses() {
  return (
    <div className="top-courses-section">
      {/* Header */}
      <div className="top-courses-header">
        <h2>
          Top Courses
        </h2>
        <Link to="/training" className="top-courses-view-all">
          View All
        </Link>
      </div>

      {/* Swiper Slider */}
      <Swiper
        slidesPerView={4}
        spaceBetween={30}
        loop
        autoplay={{ delay: 3000 }}
        pagination={{ clickable: true }}
        modules={[Autoplay, Pagination]}
        className="top-courses-swiper"
      >
        {courses.map((item) => (
          <SwiperSlide key={item.id}>
            <Card data={item} />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
