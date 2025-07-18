// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
// import '../css/header.css'

// export default function Header() {
//   return (
//     <header className="custom-header">
//       <div className="header-overlay">
//         <div className="header-container">
//           {/* Logo */}
//           <div className="header-logo">
//             <img src="/gg-logo.png" alt="Logo" />
//           </div>

//           {/* Navigation */}
//           <nav className="header-nav">
//             <NavLink to="/" end>Home</NavLink>
//             <NavLink to="/training">Training</NavLink>
//             <NavLink to="/writing">Writing</NavLink>
//           </nav>

//           {/* Right Side */}
//           <div className="header-right">
//             <FiShoppingCart />
//             <FiHeart />
//             <FiUser />
//             <button className="header-btn">Book an Appointment</button>
//           </div>
//         </div>
//       </div>
//     </header>
//   );
// }

// import React from 'react';
// import { NavLink } from 'react-router-dom';
// import { FiShoppingCart, FiHeart, FiUser } from 'react-icons/fi';
// import '../css/header.css';

// export default function Header() {
//   return (
//     <header className="custom-header">
//       {/* Top Nav */}
//       <div className="header-overlay">
//         <div className="header-container">
//           <div className="header-logo">
//             <img src="/gg-logo.png" alt="Logo" />
//           </div>

//           <div className="header-right-section">
//             <nav className="header-nav">
//               <NavLink to="/home" end>Home</NavLink>
//               <NavLink to="/training">Training</NavLink>
//               <NavLink to="/writing">Writing</NavLink>
//             </nav>
//             <div className="header-icons">
//               <FiShoppingCart />
//               <FiHeart />
//               <FiUser />
//             </div>
//             <button className="header-btn">Book an Appointment</button>
//           </div>
//         </div>
//       </div>

//       {/* Center Title & Breadcrumb */}
//       <div className="hero-center-content">
//         <h1 className="hero-title">Training</h1>
//         <div className="breadcrumb">
//           <NavLink to="/home"> Home </NavLink> &gt; <span> Training</span>
//         </div>
//       </div>
//     </header>
//   );
// }

import React from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FiShoppingCart, FiHeart, FiUser } from "react-icons/fi";
import "../css/header.css";
import { useBanner } from "../context/BannerContext";
import { useNavigate } from "react-router-dom";
import { useCart } from "../context/CartContext";
import { useWishlist } from "../context/WishlistContext"; // ✅ new

export default function Header() {
  const { bannerTitle, breadcrumb, bannerImage } = useBanner();
  const location = useLocation();
  const { cartItems } = useCart(); // ✅ Get cart items for badge

  const { wishlistItems } = useWishlist(); // ✅ new

  const isHome = location.pathname === "/home";

  const navigate = useNavigate();
  const goToCart = () => {
    navigate("/cart"); // 👈 redirects to AddToCart page
  };
  const goToWishlist = () => {
    navigate("/wish-list");
  };

  return (
    <header
      className="custom-header"
      // style={{
      //   backgroundImage: `url(${bannerImage})`,
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      {/* Top Nav */}
      <div className="header-overlay">
        <div className="header-container">
          <div className="header-logo">
            <img src="/gg-logo.png" alt="Logo" />
          </div>

          <div className="header-right-section" style={{ color: "white" }}>
            <nav className="header-nav">
              <NavLink to="/home" end>
                Home
              </NavLink>
              <NavLink to="/training">Training</NavLink>
              <NavLink to="/blog1">Writing</NavLink>
            </nav>
            <div className="header-icons">
              <div className="cart-icon-wrapper" onClick={goToCart}>
                <FiShoppingCart
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  title="Go to Cart"
                />
                {cartItems.length > 0 && (
                  <span className="cart-badge">{cartItems.length}</span>
                )}
              </div>
              {/* <FiHeart /> */}
              <div className="wishlist-icon-wrapper" onClick={goToWishlist}>
                <FiHeart
                  style={{ cursor: "pointer", fontSize: "20px" }}
                  title="Go to Wishlist"
                />
                {wishlistItems.length > 0 && (
                  <span className="cart-badge">{wishlistItems.length}</span>
                )}
              </div>

             <NavLink to='/auth' style={{color:'white'}}><FiUser /></NavLink>
            </div>
            <NavLink to='/booking'>
            <button className="header-btn">Book an Appointment</button></NavLink>
          </div>
        </div>
      </div>

      {/* Hero section with conditional layout */}
      {isHome ? (
        <div
          className="home-hero"
          style={{
            //  style={{marginTop:'30vh'}}
            backgroundImage: `url('/home-banner.jpg')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            padding: "30px 20px 140px 20px",
            color: "#fff",
            textAlign: "center",
          }}
        >
          
          <div className="hero-text-box">
            <h1 className="hero-title">
              Train <span className="highlight-purple">Hard</span>. Live
              <br />
              <span className="highlight-pink">Strong</span>.Push
              <br />
              Beyond <span className="highlight-blue">Limits</span>.
            </h1>

            <p>
              Discover a space where motivation meets transformation – with
              expert guidance,
              premium equipment, and a community that keeps you going.
            </p>

            <button className="animated-button">Book Now</button>
          </div>
        </div>
      ) : (
        //      <div
        //   className="home-hero"
        //   style={{
        //     backgroundImage: `url('/Banner.jpg')`,
        //     backgroundSize: 'cover',
        //     backgroundPosition: 'center',
        //     padding: '100px 20px 250px 20px',
        //     color: '#fff',
        //     textAlign: 'center'
        //   }}
        // >
        //   <h1 className="hero-title">Empowering Your Business With</h1>
        //   <h1 className="hero-highlight">Innovative IT Solutions</h1>
        //   <p className="hero-description">
        //     We specialize in offering cutting-edge IT services and comprehensive business solutions.
        //   </p>
        //   <button className="animated-button">Book A Call</button>
        // </div>
        //     <div className="hero-center-content">
        //       <h1 className="hero-title">Empowering Your Business With</h1>
        //       <h1 className="hero-title highlight">Innovative IT Solutions</h1>
        //       <p className="hero-description">
        //         We specialize in offering cutting-edge IT services and comprehensive business solutions.
        //       </p>
        //       <button className="animated-button">Book A Call</button>
        //     </div>
        <div className="hero-center-content">
          <h1 className="hero-title">{bannerTitle}</h1>
          <div className="breadcrumb">
            <NavLink to="/home">Home</NavLink> &gt; <span>{breadcrumb}</span> 
          </div>
        </div>
      )}
    </header>
  );
}
