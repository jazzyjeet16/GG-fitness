// import React, { useState, useEffect } from "react";
// import { useBanner } from '../../context/BannerContext';
// import './Blog1.css';
// import CategorySidebar from "../../component/CategorySidebar";
// import Pagination from "../../component/Pagination";
// import CourseCard from "../../component/CourseCard";
// import SearchBar from "../../component/SearchBar";
// import PopularPosts from "../../component/PopularPosts";

// function Blog1() {
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle('Training');
//     setBreadcrumb('Training');
//     setBannerImage('/other-banner.png');
//   }, []);

//   const [currentPage, setCurrentPage] = useState(1);
//   const totalPages = 5;

//   const cards = Array.from({ length: 9 }, (_, i) => ({
//     id: i + 1,
//     title: "Mastering React Basics",
//     description: "Learn components, state, props, and hooks with practical projects.",
//     date: "12 March 2023",
//     category: "Web Development",
//     discountPrice: 49,
//     originalPrice: 99,
//     image: "train-1.png",
//     rating: 4.5,
//     type: "live",
//     schedule: "flexible",
//   }));

//   const handleAddToCart = (item) => {
//     console.log("Add to cart:", item);
//   };

//   const handleAddToWishlist = (item) => {
//     console.log("Add to wishlist:", item);
//   };

//   return (
//     <div className="courses-page">
//       <aside className="sidebar">
//         <SearchBar />
//         <CategorySidebar />
//         <PopularPosts />
//       </aside>

//       <main className="main1-content">
//         <div className="cards-grid">
//           {cards.map((data) => (
//             <CourseCard
//               key={data.id}
//               data={data}
//               onAddToCart={handleAddToCart}
//               onAddToWishlist={handleAddToWishlist}
//             />
//           ))}
//         </div>
//         <Pagination
//           currentPage={currentPage}
//           totalPages={totalPages}
//           onPageChange={(page) => setCurrentPage(page)}
//         />
//       </main>
//     </div>
//   );
// }

// export default Blog1;
// import React, { useState, useEffect } from "react";
// import { useBanner } from '../../context/BannerContext';
// import './Blog1.css';
// import CategorySidebar from "../../component/CategorySidebar";
// import Pagination from "../../component/Pagination";
// import CourseCard from "../../component/CourseCard";
// import SearchBar from "../../component/SearchBar";
// import PopularPosts from "../../component/PopularPosts";

// function Blog1() {
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle('Blog');
//     setBreadcrumb('Blog');
//     setBannerImage('/other-banner.png');
//   }, []);

//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 9; // 3x3 grid

//   // Dummy card data
//   const cards = Array.from({ length: 15 }, (_, i) => ({
//     id: i + 1,
//     title: `Blog Post #${i + 1}`,
//     description: "Insights into React & Web Development.",
//     date: "12 March 2023",
//     category: "Web Development",
//     discountPrice: 49,
//     originalPrice: 99,
//     image: "train-1.png",
//     rating: 4.5,
//     type: "live",
//     schedule: "flexible",
//   }));

//   const totalPages = Math.ceil(cards.length / itemsPerPage);

//   // Calculate slice start and end index
//   const startIndex = (currentPage - 1) * itemsPerPage;
//   const endIndex = startIndex + itemsPerPage;

//   const currentItems = cards.slice(startIndex, endIndex);

//   const handleAddToCart = (item) => {
//     console.log("Add to cart:", item);
//   };

//   const handleAddToWishlist = (item) => {
//     console.log("Add to wishlist:", item);
//   };

//   return (
//     <div className="courses-page">
//       <aside className="sidebar">
//         <SearchBar />
//         <CategorySidebar />
//         <PopularPosts />
//       </aside>

//       <main className="main1-content">
//         <div className="cards-grid">
//           {currentItems.map((data) => (
//             <CourseCard
//               key={data.id}
//               data={data}
//               onAddToCart={handleAddToCart}
//               onAddToWishlist={handleAddToWishlist}
//             />
//           ))}
//         </div>

//         {/* Show pagination only if more than one page */}
//         {totalPages > 1 && (
//           <Pagination
//             currentPage={currentPage}
//             totalPages={totalPages}
//             onPageChange={(page) => setCurrentPage(page)}
//           />
//         )}
//       </main>
//     </div>
//   );
// }

// export default Blog1;
import React, { useState, useEffect } from "react";
import { useBanner } from '../../context/BannerContext';
import './Blog1.css';
import CategorySidebar from "../../component/CategorySidebar";
import Pagination from "../../component/Pagination";
import CourseCard from "../../component/CourseCard";
import SearchBar from "../../component/SearchBar";
import PopularPosts from "../../component/PopularPosts";

function Blog1() {
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

  useEffect(() => {
    setBannerTitle('Blog');
    setBreadcrumb('Blog');
    setBannerImage('/other-banner.png');
  }, []);

  const cardsPerPage = 9;
  const [currentPage, setCurrentPage] = useState(1);


  const cards = Array.from({ length: 50 }, (_, i) => ({
    id: i + 1,
    title: `Blog Post`,
    description: "Insights into React & Web Development.",
    date: "12 March 2023",
    category: "Web Development",
    discountPrice: 49,
    originalPrice: 99,
    image: "train-1.png",
    rating: 4.5,
    type: "live",
    schedule: "flexible",
  }));

  const totalPages = Math.ceil(cards.length / cardsPerPage);
  const startIndex = (currentPage - 1) * cardsPerPage;
  const endIndex = startIndex + cardsPerPage;
  const currentItems = cards.slice(startIndex, endIndex);

  const handleAddToCart = (item) => {
    console.log("Add to cart:", item);
  };

  const handleAddToWishlist = (item) => {
    console.log("Add to wishlist:", item);
  };

  return (
    <div className="courses-page">
      <aside className="sidebar">
        <SearchBar />
        <CategorySidebar />
        <PopularPosts />
      </aside>

      <main className="main1-content">
        <div className="cards-grid">
          {currentItems.map((data) => (
            <CourseCard
              key={data.id}
              data={data}
              onAddToCart={handleAddToCart}
              onAddToWishlist={handleAddToWishlist}
            />
          ))}
        </div>

        {totalPages > 1 && (
          <Pagination
            currentPage={currentPage}
            totalPages={totalPages}
            onPageChange={(page) => setCurrentPage(page)}
          />
        )}
      </main>
    </div>
  );
}

export default Blog1;
