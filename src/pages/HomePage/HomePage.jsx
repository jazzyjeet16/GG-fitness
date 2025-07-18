// // import React from "react";
// // import Card from "../../component/Card";
// // import CategorySidebar from "../../component/CategorySidebar";
// // import SortBar from "../../component/SortBar";
// // import Pagination from "../../component/Pagination";
// // import "./HomePage.css";
// // function HomePage() {
// //   const trainings = [
// //     {
// //       id: 1,
// //       title: "Weight Training Pro",
// //       description: "Train like a pro with intense sessions",
// //       image: "/train-1.png",
// //       rating: 1,
// //       originalPrice: 1500,
// //       discountPrice: 1000,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 4,
// //       title: "Cardio Burn",
// //       description: "Improve stamina with high-intensity cardio",
// //       image: "/images/trainer4.jpg",
// //       rating: 4,
// //       originalPrice: 1400,
// //       discountPrice: 950,
// //     },
// //     {
// //       id: 5,
// //       title: "HIIT Expert",
// //       description: "High-Intensity Interval Training for results",
// //       image: "/images/trainer5.jpg",
// //       rating: 5,
// //       originalPrice: 1600,
// //       discountPrice: 1100,
// //     },
// //     {
// //       id: 6,
// //       title: "Flexibility Master",
// //       description: "Enhance your flexibility with guided training",
// //       image: "/images/trainer6.jpg",
// //       rating: 4,
// //       originalPrice: 1300,
// //       discountPrice: 950,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //     {
// //       id: 2,
// //       title: "Strength Builder",
// //       description: "Build core strength and endurance",
// //       image: "/images/trainer2.jpg",
// //       rating: 5,
// //       originalPrice: 1200,
// //       discountPrice: 900,
// //     },
// //     {
// //       id: 3,
// //       title: "Beginner Fitness Plan",
// //       description: "Start your journey with expert guidance",
// //       image: "/images/trainer3.jpg",
// //       rating: 3,
// //       originalPrice: 1000,
// //       discountPrice: 800,
// //     },
// //   ];

// //   const [currentPage, setCurrentPage] = useState(1);
// //   const itemsPerPage = 9;

// //   const indexOfLast = currentPage * itemsPerPage;
// //   const indexOfFirst = indexOfLast - itemsPerPage;
// //   const currentItems = trainings.slice(indexOfFirst, indexOfLast);
// //   const totalPages = Math.ceil(trainings.length / itemsPerPage);

// //   return (
// //     <div>
// //       <div className="training-list-wrapper">
// //         <div className="sidebar">
// //           <CategorySidebar />
// //         </div>

// //         <div className="content">
// //           <SortBar total={trainings.length} />
// //           <div className="card-grid">
// //             {currentItems.map((item) => (
// //               <Card key={item.id} data={item} />
// //             ))}
// //           </div>
// //           {/* <Pagination /> */}
// //           <Pagination
// //             currentPage={currentPage}
// //             totalPages={totalPages}
// //             onPageChange={(page) => setCurrentPage(page)}
// //           />
// //         </div>
// //       </div>
// //       hi
// //     </div>
// //   );
// // }

// // export default HomePage;

// import React, { useState } from "react";
// import "./HomePage.css";
// import CategorySidebar from "../../component/CategorySidebar";
// import SortBar from "../../component/SortBar";
// import Card from "../../component/Card";
// import Pagination from "../../component/Pagination";

// export default function HomePage() {
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//       id: 3,
//       title: "Beginner Fitness Plan",
//       description: "Start your journey with expert guidance",
//       image: "/images/trainer3.jpg",
//       rating: 3,
//       originalPrice: 1000,
//       discountPrice: 800,
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
//     <div className="training-list-wrapper">
//       {/* <div className="sidebar">
//         <CategorySidebar />
//       </div>

//       <div className="content">
//         <SortBar total={trainings.length} />
//         <div className="card-grid">
//           {currentItems.map((item) => (
//             <Card key={item.id} data={item} />
//           ))}
//         </div>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       </div> */}

//       <div className="training-list-wrapper">
//         <div className="sidebar">
//           <CategorySidebar />
//         </div>

//         <div className="content">
//           <SortBar total={trainings.length} />

//           <div className="card-grid">
//             {currentItems.map((item, index) => (
//               <Card key={`${item.id}-${index}`} data={item} />
//             ))}
//           </div>
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={(page) => setCurrentPage(page)}
//           />
//         </div>
//       </div>
//     </div>
//   );
// }

import React from "react";
import { useEffect,useState } from "react";
import { useBanner } from "../../context/BannerContext";
import "./HomePage.css";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import TopCourses from "../../component/TopCourses";
import BlogCarousel from "../../component/BlogCarousel";
function HomePage() {
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
  useEffect(() => {
    setBannerTitle("Home");
    setBreadcrumb("");
    setBannerImage("/home-banner.jpg");
  }, []);
  const features = [
  {
    title: 'Expert Guidance',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero a nisi tincidunt sollicitudin non in risus.'
  },
  {
    title: 'Expert Guidance',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero a nisi tincidunt sollicitudin non in risus.'
  },
  {
    title: 'Expert Guidance',
    desc: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin ac libero a nisi tincidunt sollicitudin non in risus.'
  }
];
const faqData = [
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.`
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
  {
    question: "Lorem ipsum dolor sit amet, consectetur adipiscing elit?",
    answer: `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.`
  },
];
const [openIndex, setOpenIndex] = useState(0);

  const toggleAnswer = (index) => {
    setOpenIndex(prevIndex => (prevIndex === index ? null : index));
  };
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: '',
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // form submission logic here
    console.log(form);
  };
    // const [openIndex, setOpenIndex] = useState(0);
  return (
    <div className="homePage-main-container">
      <div className="about-container">
        <div className="image-section">
          <img
            src="/About-home.png"
            alt="George Griffith"
            className="trainer-image"
          />
          <div className="experience-badge">
            <h2>9+</h2>
            <p>Years of Experience</p>
          </div>
        </div>
        <div className="content-section">
          <h2>
            About <br />
            <span>George Griffith</span>
          </h2>
          <p className="about-text">
            Driven by a passion for fitness and a commitment to helping others
            achieve their best selves, our founder brings years of experience,
            discipline, and vision to this gym. What started as a personal
            journey toward health and strength has evolved into a mission to
            build a supportive, results-focused space for the entire community.
            With a deep understanding of training, motivation, and the
            challenges people face in staying consistent, the owner leads with
            empathy, dedication, and a relentless pursuit of excellence —
            setting the tone for everything this gym stands for. What started as
            a personal journey toward health and strength has evolved into a
            mission to build a supportive, results-focused space for the entire
            community. With a deep understanding.
          </p>
        </div>
      </div>
      <div
      className="mvv-section"
      // style={{
      //   backgroundImage: `url(${bgImage})`,
      // }}
    >
      <div className="mvv-overlay">
        <div className="mvv-box">
          <h1><span className="mvv-number">01</span> <span className="mvv-heading">Mission</span></h1>
          <p>
            To empower individuals to achieve their full potential through fitness, discipline, and support.
            <br />
            We provide a motivating environment, expert guidance, and high-quality facilities that inspire people to build stronger bodies and healthier lives — one workout at a time.
          </p>
        </div>
        <div className="mvv-box">
          <h1><span className="mvv-number">02</span> <span className="mvv-heading">Vision</span></h1>
          <p>
            To be the most trusted and results-driven fitness destination in the community.
            <br />
            We envision a world where fitness is accessible, sustainable, and transformational — creating confident, resilient individuals who prioritize well-being and personal growth.
          </p>
        </div>
        <div className="mvv-box">
          <h1><span className="mvv-number">03</span> <span className="mvv-heading">Values</span></h1>
          <ul>
            <li>Commitment to Results We focus on real, measurable progress.</li>
            <li>Community & Support We build an inclusive environment where everyone feels welcome.</li>
            <li>Excellence We maintain high standards in training, equipment, and customer service.</li>
            <li>Integrity We operate with honesty, transparency, and respect at every level.</li>
            <li>Growth Mindset We believe in constant improvement — for our members and ourselves.</li>
          </ul>
        </div>
      </div>
    </div>
     <div className="why-container">
      <h2 className="why-heading">Why Choose Us</h2>
      <div className="why-content">
        <div className="why-column">
          {features.map((item, index) => (
            <div className="why-box" key={index}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="why-image">
          <img src='/runner.png' alt="Runner" />
        </div>

        <div className="why-column">
          {features.map((item, index) => (
            <div className="why-box" key={index + 3}>
              <h4>{item.title}</h4>
              <p>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    <TopCourses/>
    <BlogCarousel/>
<div className="faq-container">
      <div className="faq-left">
        <h2 className="faq-heading">Faq</h2>
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div
              key={index}
              className={`faq-item ${openIndex === index ? 'open' : ''}`}
              onClick={() => toggleAnswer(index)}
            >
              <div className="faq-question">
                <strong>{item.question}</strong>
                <span>{openIndex === index ? <FaChevronUp /> : <FaChevronDown />}
</span>
              </div>
              {openIndex === index && <p className="faq-answer">{item.answer}</p>}
            </div>
          ))}
        </div>
      </div>

      <div className="faq-right">
        <img src='/faq-img.png' alt="FAQ Visual" />
      </div>
    </div>
 <div className="contact-container">
      <h2 className="contact-heading">
        Get in touch with us. We’re here to <br />Assist you
      </h2>

      <form onSubmit={handleSubmit} className="contact-form">
        <h4 className="form-subheading">Basic Details</h4>

        <div className="input-grid">
          <div className="form-group">
            <label>First Name<span></span></label>
            <input
              type="text"
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Last Name<span></span></label>
            <input
              type="text"
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Email<span></span></label>
            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group">
            <label>Phone<span></span></label>
            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        <div className="form-group full-width">
          <label>Message</label>
          <textarea
            name="message"
            rows="4"
            value={form.message}
            onChange={handleChange}
          ></textarea>
        </div>

        <button type="submit" className="submit-button">Contact Us</button>
      </form>
    </div>
    </div>
  );
}

export default HomePage;
