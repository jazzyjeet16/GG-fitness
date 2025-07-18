// import React, {useEffect} from "react";
// import './ProductDetail.css'

// import { useBanner } from "../../context/BannerContext";
// import { FiShoppingCart, FiHeart } from 'react-icons/fi';
// import FaqSection from "../../component/FaqSection";

// import ReviewSection from '../../component/ReviewSection';
// export default function ProductDetail() {
//     const faqs = [
//   { question: "Apakah kursus ini benar-benar gratis?", answer: "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan." },
//   { question: "Untuk siapa kursus ini?", answer: "Kursus ini cocok untuk pelajar, mahasiswa, dan profesional." },
//   { question: "Apakah mendapatkan sertifikat?", answer: "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan kursus." }
// ];
// const reviews = [
//   {
//     name: "Mark Doe",
//     stars: 5,
//     comment: "Video lectures were engaging and real-world examples helped solidify my understanding.",
//     date: "22nd March, 2024",
//     avatar: "https://i.pravatar.cc/150?img=1"
//   },
//   {
//     name: "Mark Doe",
//     stars: 4,
//     comment: "Great instructor and very well structured content.",
//     date: "22nd March, 2024",
//     avatar: "https://i.pravatar.cc/150?img=2"
//   }
// ];

//     const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
//        useEffect(() => {
//           setBannerTitle("Booking");
//           setBreadcrumb("Booking");
//           setBannerImage("/other-banner.png");
//         }, []);
//   return (
//     <div>
//     <div className="product-course-preview-container">
//       {/* Image Section */}
//       <div className="product-course-preview-image">
//         <img src="/product1.png" alt="Trainer" />
//       </div>

//       {/* Details Section */}
//       <div className="product-course-preview-details">
//         <div className="product-badge-container">
//         <span className="badge">Resouce Only</span>
//          <div className="rating-section">
//     {[1, 2, 3, 4, 5].map((star, index) => (
//       <span
//         key={index}
//         className={`p-star ${index < 4 ? 'filled' : ''}`}
//       >★</span>
//     ))}
//     <span className="review-count">(5k+ Reviews)</span>
//   </div>
//         </div>

//         <h2 className="product-course-title">Tentang Kursus</h2>
//         <p className="product-course-category">Category 1</p>
//         <p className="product-course-price">
//           <span className="product-old-price">$97</span> <span className="product-new-price">$67</span>
//         </p>
//         <p className="product-course-description">
//           Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website dan internet.
//           Mengapa begitu? Karena web programming adalah salah satu proses pembuatan website untuk keperluan internet...
//         </p>
//         <p className="product-course-description">
//           Dalam kursus ini kamu akan diajarkan cara membuat web dengan standar industri. Di sini kamu akan diajarkan tentang Html, Css dan Javascript...
//         </p>

//         {/* Buttons */}
//         <div className="product-course-preview-buttons">
//           <button className="product-wishlist-btn"><FiHeart /></button>
//           <button className="product-cart-btn">
//             Add to Cart <FiShoppingCart />
//           </button>
//         </div>
//       </div>

//     </div>
//     <div className="faq-reviews-container">
//       <div className="tabs">
//         <button className="active-tab">Faqs</button>
//         <button>Reviews</button>
//       </div>
//       <FaqSection faqs={faqs} />
//       <ReviewSection reviews={reviews} rating={4.5} />
//     </div>
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import "./ProductDetail.css";

// import { useBanner } from "../../context/BannerContext";
// import { FiShoppingCart, FiHeart } from "react-icons/fi";
// import FaqSection from "../../component/FaqSection";
// import ReviewSection from "../../component/ReviewSection";

// export default function ProductDetail() {
//   const [activeTab, setActiveTab] = useState("faqs"); // NEW state for tabs

//   const faqs = [
//     {
//       question: "Apakah kursus ini benar-benar gratis?",
//       answer:
//         "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
//     },
//     {
//       question: "Untuk siapa kursus ini?",
//       answer: "Kursus ini cocok untuk pelajar, mahasiswa, dan profesional.",
//     },
//     {
//       question: "Apakah mendapatkan sertifikat?",
//       answer: "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan kursus.",
//     },
//   ];

//   const reviews = [
//     {
//       name: "Mark Doe",
//       stars: 5,
//       comment: "Video lectures were engaging and real-world examples helped solidify my understanding.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=1",
//     },
//     {
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },{
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },{
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },
//   ];

//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle("Booking");
//     setBreadcrumb("Booking");
//     setBannerImage("/other-banner.png");
//   }, []);

//   return (
//     <div>
//       <div className="product-course-preview-container">
//         {/* Image Section */}
//         <div className="product-course-preview-image">
//           <img src="/product1.png" alt="Trainer" />
//         </div>

//         {/* Details Section */}
//         <div className="product-course-preview-details">
//           <div className="product-badge-container">
//             <span className="badge">Resouce Only</span>
//             <div className="rating-section">
//               {[1, 2, 3, 4, 5].map((star, index) => (
//                 <span key={index} className={`p-star ${index < 4 ? "filled" : ""}`}>
//                   ★
//                 </span>
//               ))}
//               <span className="review-count">(5k+ Reviews)</span>
//             </div>
//           </div>

//           <h2 className="product-course-title">Tentang Kursus</h2>
//           <p className="product-course-category">Category 1</p>
//           <p className="product-course-price">
//             <span className="product-old-price">$97</span>{" "}
//             <span className="product-new-price">$67</span>
//           </p>
//           <p className="product-course-description">
//             Pemrograman web atau web programming adalah istilah yang berkaitan erat dengan website
//             dan internet. Mengapa begitu? Karena web programming adalah salah satu proses pembuatan
//             website untuk keperluan internet...
//           </p>
//           <p className="product-course-description">
//             Dalam kursus ini kamu akan diajarkan cara membuat web dengan standar industri. Di sini
//             kamu akan diajarkan tentang Html, Css dan Javascript...
//           </p>

//           {/* Buttons */}
//           <div className="product-course-preview-buttons">
//             <button className="product-wishlist-btn">
//               <FiHeart />
//             </button>
//             <button className="product-cart-btn">
//               Add to Cart <FiShoppingCart />
//             </button>
//           </div>
//         </div>
//       </div>

//       {/* FAQ and Review Tabs */}
//       <div className="faq-reviews-container">
//         <div className="tabs">
//           <button
//             className={activeTab === "faqs" ? "active-tab" : ""}
//             onClick={() => setActiveTab("faqs")}
//           >
//             FAQs
//           </button>
//           <button
//             className={activeTab === "reviews" ? "active-tab" : ""}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === "faqs" && <FaqSection faqs={faqs} />}
//           {activeTab === "reviews" && <ReviewSection reviews={reviews} rating={4.5} />}
//         </div>
//       </div>
//     </div>
//   );
// }



1.
// import React, { useEffect, useState } from "react";
// import "./ProductDetail.css";
// import { useLocation, useParams } from "react-router-dom";
// import { useBanner } from "../../context/BannerContext";
// import { FiShoppingCart, FiHeart } from "react-icons/fi";
// import FaqSection from "../../component/FaqSection";
// import ReviewSection from "../../component/ReviewSection";
// import SessionTimingModal from "../../component/SessionTimingModal";

// export default function ProductDetail() {
//     const [modalOpen, setModalOpen] = useState(false);
//   const { id } = useParams();
//   const location = useLocation();
//   const product = location.state?.product;

//   const [activeTab, setActiveTab] = useState("faqs");

//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle("Product Detail");
//     setBreadcrumb("Product Detail");
//     setBannerImage("/other-banner.png");
//   }, []);

//   // Dummy fallback (if accessed via URL directly)
//   const fallbackProduct = {
//     title: "Tentang Kursus",
//     category: "Category 1",
//     oldPrice: "$97",
//     newPrice: "$67",
//     description1:
//       "Pemrograman web atau web programming adalah...",
//     description2: "Dalam kursus ini kamu akan diajarkan cara membuat web...",
//     image: "/product1.png",
//     badge: "Resource Only",
//     rating: 4,
//     reviews: "5k+ Reviews",
//   };

//   const selected = product || fallbackProduct;

//    const faqs = [
//     {
//       question: "Apakah kursus ini benar-benar gratis?",
//       answer:
//         "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
//     },
//     {
//       question: "Untuk siapa kursus ini?",
//       answer: "Kursus ini cocok untuk pelajar, mahasiswa, dan profesional.",
//     },
//     {
//       question: "Apakah mendapatkan sertifikat?",
//       answer: "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan kursus.",
//     },
//   ];

//   const reviews = [
//     {
//       name: "Mark Doe",
//       stars: 5,
//       comment: "Video lectures were engaging and real-world examples helped solidify my understanding.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=1",
//     },
//     {
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },{
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },{
//       name: "Mark Doe",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },
//   ];

//   return (
//     <div>
//       <div className="product-course-preview-container">
//         <div className="product-course-preview-image">
//           <img src={selected.image} alt="Trainer" />
//         </div>

//         <div className="product-course-preview-details">
//           <div className="product-badge-container">
//             <span className="badge">{selected.badge}</span>
//             <div className="rating-section">
//               {[1, 2, 3, 4, 5].map((star, index) => (
//                 <span
//                   key={index}
//                   className={`p-star ${
//                     index < selected.rating ? "filled" : ""
//                   }`}
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="review-count">({selected.reviews})</span>
//             </div>
//           </div>

//           <h2 className="product-course-title">{selected.title}</h2>
//           <p className="product-course-category">{selected.category}</p>
//           <p className="product-course-price">
//             <span className="product-old-price">{selected.oldPrice}</span>{" "}
//             <span className="product-new-price">{selected.newPrice}</span>
//           </p>
//           <p className="product-course-description">{selected.description1}</p>
//           <p className="product-course-description">{selected.description2}</p>

//           {/* <div className="product-course-preview-buttons">
//              <a href="#sessions" className="session-link-btn">
//     View Session Timings
//   </a>
//             <button className="product-wishlist-btn">
//               <FiHeart />
//             </button>
//             <button className="product-cart-btn">
//               Add to Cart <FiShoppingCart />
//             </button>
//           </div> */}
//           <div className="product-course-action-wrapper">
//   <a href="#" className="session-link-btn"  onClick={() => setModalOpen(true)}>View Session Timings</a>

//   <div className="product-course-preview-buttons">
//     <button className="product-wishlist-btn"><FiHeart /></button>
//     <button className="product-cart-btn">
//       <FiShoppingCart /> Add to Cart
//     </button>
//   </div>
// </div>

//         </div>
//       </div>

//       {/* FAQ and Reviews Section */}
//       <div className="faq-reviews-container">
//         <div className="tabs">
//           <button
//             className={activeTab === "faqs" ? "active-tab" : ""}
//             onClick={() => setActiveTab("faqs")}
//           >
//             FAQs
//           </button>
//           <button
//             className={activeTab === "reviews" ? "active-tab" : ""}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === "faqs" && <FaqSection faqs={faqs} />}
//           {activeTab === "reviews" && (
//             <ReviewSection reviews={reviews} rating={4.5} />
//           )}
//         </div>
//       </div>
//       <SessionTimingModal isOpen={modalOpen} onClose={() => setModalOpen(false)} />
//     </div>
//   );
// }
// import React, { useEffect, useState } from "react";
// import "./ProductDetail.css";
// import { useLocation, useParams } from "react-router-dom";
// import { useBanner } from "../../context/BannerContext";
// import { useCart } from "../../context/CartContext";
// import { useWishlist } from "../../context/WishlistContext";
// import FaqSection from "../../component/FaqSection";
// import ReviewSection from "../../component/ReviewSection";
// import SessionTimingModal from "../../component/SessionTimingModal";
// import { FiShoppingCart, FiHeart } from "react-icons/fi";

// export default function ProductDetail() {
//   const [modalOpen, setModalOpen] = useState(false);
//   const { id } = useParams();
//   const location = useLocation();
//   const product = location.state?.product;

//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist();

//   const [activeTab, setActiveTab] = useState("faqs");
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

//   useEffect(() => {
//     setBannerTitle("Product Detail");
//     setBreadcrumb("Product Detail");
//     setBannerImage("/other-banner.png");
//   }, []);

//   const fallbackProduct = {
//     id: "default",
//     title: "Tentang Kursus",
//     category: "Category 1",
//     discountPrice: "$97",
//     originalPrice: "$67",
//     description1: "Pemrograman web atau web programming adalah...",
//     description2: "Dalam kursus ini kamu akan diajarkan cara membuat web...",
//     image: "/product1.png",
//     badge: "Resource Only",
//     rating: 4,
//     reviews: "5k+ Reviews",
//   };

//   const selected = product || fallbackProduct;

//   const faqs = [
//     {
//       question: "Apakah kursus ini benar-benar gratis?",
//       answer:
//         "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
//     },
//     {
//       question: "Untuk siapa kursus ini?",
//       answer: "Kursus ini cocok untuk pelajar, mahasiswa, dan profesional.",
//     },
//     {
//       question: "Apakah mendapatkan sertifikat?",
//       answer: "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan kursus.",
//     },
//   ];

//   const reviews = [
//     {
//       name: "Mark Doe",
//       stars: 5,
//       comment: "Video lectures were engaging and real-world examples helped solidify my understanding.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=1",
//     },
//     {
//       name: "Jane Smith",
//       stars: 4,
//       comment: "Great instructor and very well structured content.",
//       date: "22nd March, 2024",
//       avatar: "https://i.pravatar.cc/150?img=2",
//     },
//   ];

//   return (
//     <div>
//       <div className="product-course-preview-container">
//         <div className="product-course-preview-image">
//           <img src={selected.image} alt="Trainer" />
//         </div>

//         <div className="product-course-preview-details">
//           <div className="product-badge-container">
//             <span className="badge">{selected.badge}</span>
//             <div className="rating-section">
//               {[1, 2, 3, 4, 5].map((star, index) => (
//                 <span
//                   key={index}
//                   className={`p-star ${index < selected.rating ? "filled" : ""}`}
//                 >
//                   ★
//                 </span>
//               ))}
//               <span className="review-count">({selected.reviews})</span>
//             </div>
//           </div>

//           <h2 className="product-course-title">{selected.title}</h2>
//           <p className="product-course-category">{selected.category}</p>
//           <p className="product-course-price">
//             <span className="product-old-price">{selected.discountPrice}</span>{" "}
//             <span className="product-new-price">{selected.originalPrice}</span>
//           </p>
//           <p className="product-course-description">{selected.description1}</p>
//           <p className="product-course-description">{selected.description2}</p>

//           <div className="product-course-action-wrapper">
//             <a
//               href="#"
//               className="session-link-btn"
//               onClick={() => setModalOpen(true)}
//             >
//               View Session Timings
//             </a>

//             <div className="product-course-preview-buttons">
//               <button
//                 className="product-wishlist-btn"
//                 onClick={() => addToWishlist(selected)}
//               >
//                 <FiHeart />
//               </button>
//               <button
//                 className="product-cart-btn"
//                 onClick={() => addToCart(selected)}
//               >
//                 <FiShoppingCart /> Add to Cart
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* FAQ and Reviews Section */}
//       <div className="faq-reviews-container">
//         <div className="tabs">
//           <button
//             className={activeTab === "faqs" ? "active-tab" : ""}
//             onClick={() => setActiveTab("faqs")}
//           >
//             FAQs
//           </button>
//           <button
//             className={activeTab === "reviews" ? "active-tab" : ""}
//             onClick={() => setActiveTab("reviews")}
//           >
//             Reviews
//           </button>
//         </div>

//         <div className="tab-content">
//           {activeTab === "faqs" && <FaqSection faqs={faqs} />}
//           {activeTab === "reviews" && (
//             <ReviewSection reviews={reviews} rating={4.5} />
//           )}
//         </div>
//       </div>

//       <SessionTimingModal
//         isOpen={modalOpen}
//         onClose={() => setModalOpen(false)}
//       />
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import "./ProductDetail.css";
import { useLocation, useParams } from "react-router-dom";
import { useBanner } from "../../context/BannerContext";
import { useCart } from "../../context/CartContext";
import { useWishlist } from "../../context/WishlistContext";
import FaqSection from "../../component/FaqSection";
import ReviewSection from "../../component/ReviewSection";
import SessionTimingModal from "../../component/SessionTimingModal";
import { FiShoppingCart, FiHeart } from "react-icons/fi";

export default function ProductDetail() {
  const [modalOpen, setModalOpen] = useState(false);
  const { id } = useParams();
  const location = useLocation();
  const product = location.state?.product;

  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();
  const [activeTab, setActiveTab] = useState("faqs");
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

  useEffect(() => {
    setBannerTitle("Product Detail");
    setBreadcrumb("Product Detail");
    setBannerImage("/other-banner.png");
  }, []);

  const fallbackProduct = {
    id: "default",
    title: "Tentang Kursus",
    category: "Category 1",
    discountPrice: "97",
    originalPrice: "67",
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    
    image: "/product1.png",
    badge: "Live seassion",
    rating: 4,
    reviews: "5k+ Reviews",
    tag: ["Fixed"]
  };

  const selected = product || fallbackProduct;

  const faqs = [
    {
      question: "Apakah kursus ini benar-benar gratis?",
      answer:
        "Kursus yang disediakan bisa diakses gratis untuk menunjang kebutuhan dalam bidang kependidikan.",
    },
    {
      question: "Untuk siapa kursus ini?",
      answer: "Kursus ini cocok untuk pelajar, mahasiswa, dan profesional.",
    },
    {
      question: "Apakah mendapatkan sertifikat?",
      answer: "Ya, Anda akan mendapatkan sertifikat digital setelah menyelesaikan kursus.",
    },
  ];

  const reviews = [
    {
      name: "Mark Doe",
      stars: 5,
      comment: "Video lectures were engaging and real-world examples helped solidify my understanding.",
      date: "22nd March, 2024",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      name: "Jane Smith",
      stars: 4,
      comment: "Great instructor and very well structured content.",
      date: "22nd March, 2024",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    {
      name: "Jane Smith",
      stars: 4,
      comment: "Great instructor and very well structured content.",
      date: "22nd March, 2024",
      avatar: "https://i.pravatar.cc/150?img=2",
    },
    
  ];

  return (
    <div>
      <div className="product-course-preview-container">
        <div className="product-course-preview-image">
          <img src={selected.image} alt={selected.title} />
        </div>

        <div className="product-course-preview-details">
          <div className="product-badge-container">
            <span className="badge">{selected.badge || "Top Pick"}</span>

            {/* Tags */}
            {selected.tag && Array.isArray(selected.tag) && (
              <div className="product-tag-container">
                {selected.tag.map((tag, i) => (
                  <span className="product-tag" key={i}>{tag}</span>
                ))}
              </div>
            )}

            {/* Rating */}
            <div className="rating-section">
              {[1, 2, 3, 4, 5].map((star, index) => (
                <span
                  key={index}
                  className={`p-star ${index < (selected.rating || 4) ? "filled" : ""}`}
                >
                  ★
                </span>
              ))}
              <span className="review-count">
                ({selected.reviews || "1k+ Reviews"})
              </span>
            </div>
          </div>

          <h2 className="product-course-title">{selected.title}</h2>
          <p className="product-course-category">{selected.category}</p>
          <p className="product-course-price">
            <span className="product-new-price">${selected.discountPrice}</span>{" "}
            <span className="product-old-price">${selected.originalPrice}</span>
          </p>
          <p className="product-course-description">{selected.description}</p>
          <p className="product-course-description">{selected.description2}</p>

          <div className="product-course-action-wrapper">
            <a
              href="#"
              className="session-link-btn"
              onClick={() => setModalOpen(true)}
            >
              View Session Timings
            </a>

            <div className="product-course-preview-buttons">
              <button
                className="product-wishlist-btn"
                onClick={() => addToWishlist(selected)}
              >
                <FiHeart />
              </button>
              <button
                className="product-cart-btn"
                onClick={() => addToCart(selected)}
              >
                <FiShoppingCart /> Add to Cart
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ and Reviews Section */}
      <div className="faq-reviews-container">
        <div className="tabs">
          <button
            className={activeTab === "faqs" ? "active-tab" : ""}
            onClick={() => setActiveTab("faqs")}
          >
            FAQs
          </button>
          <button
            className={activeTab === "reviews" ? "active-tab" : ""}
            onClick={() => setActiveTab("reviews")}
          >
            Reviews
          </button>
        </div>

        <div className="tab-content">
          {activeTab === "faqs" && <FaqSection faqs={faqs} />}
          {activeTab === "reviews" && (
            <ReviewSection reviews={reviews} rating={selected.rating || 4} />
          )}
        </div>
      </div>

      <SessionTimingModal
        isOpen={modalOpen}
        onClose={() => setModalOpen(false)}
      />
    </div>
  );
}
