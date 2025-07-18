// import { useEffect } from 'react';
// import { useBanner } from '../../context/BannerContext';
// // import trainingBanner from '../assets/training-bg.jpg';

// export default function Training() {
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle('Training');
//     setBreadcrumb('Training');
//     setBannerImage('/other-banner.png');
//   }, []);

//   return (
//     <div>
//       hi
//     </div>
//   );
// }

// import React from "react";
// import Card from "../../component/Card";
// import CategorySidebar from "../../component/CategorySidebar";
// import SortBar from "../../component/SortBar";
// import Pagination from "../../component/Pagination";
// import "./HomePage.css";
// function HomePage() {
//   const trainings = [
//     {
//       id: 1,
//       title: "Weight Training Pro",
//       description: "Train like a pro with intense sessions",
//       image: "/train-1.png",
//       rating: 1,
//       originalPrice: 1500,
//       discountPrice: 1000,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 4,
//       title: "Cardio Burn",
//       description: "Improve stamina with high-intensity cardio",
//       image: "/images/trainer4.jpg",
//       rating: 4,
//       originalPrice: 1400,
//       discountPrice: 950,
//     },
//     {
//       id: 5,
//       title: "HIIT Expert",
//       description: "High-Intensity Interval Training for results",
//       image: "/images/trainer5.jpg",
//       rating: 5,
//       originalPrice: 1600,
//       discountPrice: 1100,
//     },
//     {
//       id: 6,
//       title: "Flexibility Master",
//       description: "Enhance your flexibility with guided training",
//       image: "/images/trainer6.jpg",
//       rating: 4,
//       originalPrice: 1300,
//       discountPrice: 950,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//     {
//       id: 2,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/images/trainer2.jpg",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//     },
//     {
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//     },
//   ];

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9;

//   const indexOfLast = currentPage * itemsPerPage;
//   const indexOfFirst = indexOfLast - itemsPerPage;
//   const currentItems = trainings.slice(indexOfFirst, indexOfLast);
//   const totalPages = Math.ceil(trainings.length / itemsPerPage);

//   return (
//     <div>
//       <div className="training-list-wrapper">
//         <div className="sidebar">
//           <CategorySidebar />
//         </div>

//         <div className="content">
//           <SortBar total={trainings.length} />
//           <div className="card-grid">
//             {currentItems.map((item) => (
//               <Card key={item.id} data={item} />
//             ))}
//           </div>
//           {/* <Pagination /> */}
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={(page) => setCurrentPage(page)}
//           />
//         </div>
//       </div>
//       hi
//     </div>
//   );
// }

// export default HomePage;

import React, { useState,useEffect } from "react";
import "./Training.css";
import CategorySidebar from "../../component/CategorySidebar";
import SortBar from "../../component/SortBar";
import Card from "../../component/Card";
import Pagination from "../../component/Pagination";
import { useBanner } from '../../context/BannerContext';

export default function training() {
    const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
    useEffect(() => {
    setBannerTitle('Training');
    setBreadcrumb('Training');
    setBannerImage('/other-banner.png');
  }, []);
  const trainings = [
    {
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },
    {
      id: 2,
      title: "Strength Builder",
      description: "Build core strength and endurance",
      image: "/train-2.png",
      rating: 5,
      originalPrice: 1200,
      discountPrice: 900,
      type: "live",          // or "resource"
  schedule: "fixed",  // or "fixed"
    },
    {
      id: 3,
      title: "Beginner Fitness Plan",
      description: "Start your journey with expert guidance",
      image: "/train-3.png",
      rating: 3,
      originalPrice: 1000,
      discountPrice: 800,
       type: "resource",          // or "resource"
  schedule: "",  
      
    },
    {
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },{
      id: 1,
  title: "Weight Training Pro",
  description: "Train like a pro with intense sessions",
  image: "/train-1.png",
  rating: 4.5,
  originalPrice: 1500,
  discountPrice: 1000, 
 type: "live",          // or "res ource"
  schedule: "flexible",  // or "fixed"
    },
    
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 9;

  const indexOfLast = currentPage * itemsPerPage;
  const indexOfFirst = indexOfLast - itemsPerPage;
  const currentItems = trainings.slice(indexOfFirst, indexOfLast);
  const totalPages = Math.ceil(trainings.length / itemsPerPage);

  return (
    <div className="training-list-wrapper">
      {/* <div className="sidebar">
        <CategorySidebar />
      </div>

      <div className="content">
        <SortBar total={trainings.length} />
        <div className="card-grid">
          {currentItems.map((item) => (
            <Card key={item.id} data={item} />
          ))}
        </div>
        <Pagination
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={(page) => setCurrentPage(page)}
        />
      </div> */}

      <div className="training-list-wrapper">
        <div className="sidebar">
          <CategorySidebar />
        </div>

        <div className="content">
          <SortBar total={trainings.length} />

          <div className="card-grid">
            {currentItems.map((item, index) => (
              <Card key={`${item.id}-${index}`} data={item} />
            ))}
          </div>
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        </div>
      </div>
    </div>
  );
}



// import React, { useState } from "react";
// import "./Training.css";
// import Card from "../../component/Card";
// import CategorySidebar from "../../component/CategorySidebar";
// import SortBar from "../../component/SortBar";
// import Pagination from "../../component/Pagination";
// import { useNavigate } from "react-router-dom";

// export default function Training() {
//   const [selectedCategory, setSelectedCategory] = useState("All");
//   const [sortOrder, setSortOrder] = useState("default");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 6;
//   const navigate = useNavigate();

//   const trainingData = [
//     {
//       id: 101,
//       title: "Weight Training Pro",
//       description: "Train like a pro with intense sessions",
//       image: "/train-1.png",
//       rating: 4.5,
//       originalPrice: 1500,
//       discountPrice: 1000,
//       type: "live",
//       schedule: "flexible",
//     },
//     {
//       id: 102,
//       title: "Strength Builder",
//       description: "Build core strength and endurance",
//       image: "/train-2.png",
//       rating: 5,
//       originalPrice: 1200,
//       discountPrice: 900,
//       type: "live",
//       schedule: "fixed",
//     },
//     {
//       id: 103,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/train-3.png",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
//       type: "resource",
//       schedule: "",
//     },
//   ];

//   const filteredData =
//     selectedCategory === "All"
//       ? trainingData
//       : trainingData.filter((item) => item.category === selectedCategory);

//   const sortedData = [...filteredData].sort((a, b) => {
//     if (sortOrder === "asc") return a.discountPrice - b.discountPrice;
//     if (sortOrder === "desc") return b.discountPrice - a.discountPrice;
//     return 0;
//   });

//   const indexOfLastItem = currentPage * itemsPerPage;
//   const indexOfFirstItem = indexOfLastItem - itemsPerPage;
//   const currentItems = sortedData.slice(indexOfFirstItem, indexOfLastItem);

//   const paginate = (pageNumber) => setCurrentPage(pageNumber);

//   return (
//     <div className="training-page">
//       <CategorySidebar setCategory={setSelectedCategory} />
//       <div className="main-training-content">
//         <SortBar sortOrder={sortOrder} setSortOrder={setSortOrder} />

//         <div className="card-grid">
//           {currentItems.map((item) => (
//             <div
//               key={item.id}
//               onClick={() => navigate(`/product-detail/${item.id}`, { state: item })}
//             >
//               <Card data={item} />
//             </div>
//           ))}
//         </div>

//         <Pagination
//           itemsPerPage={itemsPerPage}
//           totalItems={sortedData.length}
//           currentPage={currentPage}
//           paginate={paginate}
//         />
//       </div>
//     </div>
//   );
// }
