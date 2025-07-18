// // import React from "react";
// // import { useEffect } from "react";
// // import { useBanner } from "../../context/BannerContext";
// // function AddToCart() {
// //   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
// //   useEffect(() => {
// //     setBannerTitle("Add To Cart");
// //     setBreadcrumb("Add To Cart");
// //     setBannerImage("/other-banner.png");
// //   }, []);

// //   return (
// //     <div>AddToCart</div>
// //   )
// // }
// // export default AddToCart


// // import React, { useEffect, useState } from "react";
// // import { useBanner } from "../../context/BannerContext";
// // import "./AddToCart.css";

// // // Sample cart items (replace with your actual cart state or context)
// // const initialCartItems = [
// //   {
// //     id: 1,
// //     title: "Lorem ipsum dolor sit amet",
// //     price: 67,
// //     originalPrice: 97,
// //     image: "/images/product1.jpg",
// //     badge: "Best Seller",
// //     rating: 4,
// //     reviews: 120,
// //   },
// //   {
// //     id: 2,
// //     title: "Lorem ipsum dolor sit amet",
// //     price: 67,
// //     originalPrice: 97,
// //     image: "/images/product2.jpg",
// //     badge: "Premium Choice",
// //     rating: 4,
// //     reviews: 89,
// //   },
// // ];

// // function AddToCart() {
// //   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
// //   const [cartItems, setCartItems] = useState(initialCartItems);

// //   useEffect(() => {
// //     setBannerTitle("Add To Cart");
// //     setBreadcrumb("Add To Cart");
// //     setBannerImage("/other-banner.png");
// //   }, []);

// //   const removeFromCart = (id) => {
// //     setCartItems(cartItems.filter((item) => item.id !== id));
// //   };

// //   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
// //   const deliveryFee = 4.78;

// //   return (
// //     <div className="cart-container">
// //       <div className="cart-list">
// //         <div className="cart-header">
// //           <h2>Cart</h2>
// //           <span>{cartItems.length} items</span>
// //         </div>
// //         {cartItems.map((item) => (
// //           <div className="cart-item" key={item.id}>
// //             <img src={item.image} alt={item.title} />
// //             <div className="item-details">
// //               <span className="badge">{item.badge}</span>
// //               <h4>{item.title}</h4>
// //               <div className="rating">
// //                 {"★".repeat(item.rating)}
// //                 {"☆".repeat(5 - item.rating)}
// //                 <span className="review">({item.reviews} Reviews)</span>
// //               </div>
// //               <div className="price">
// //                 <span className="original">${item.originalPrice}</span>
// //                 <span className="discounted">${item.price}</span>
// //               </div>
// //             </div>
// //             <div className="item-actions">
// //               <button title="Edit">✎</button>
// //               <button title="Remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
// //             </div>
// //           </div>
// //         ))}
// //       </div>

// //       <div className="cart-summary">
// //         <h3>Cart Total</h3>
// //         <div className="coupon">
// //           <span>Coupon</span>
// //           <button className="add-coupon">+ Add Coupon</button>
// //         </div>
// //         <div className="summary">
// //           <p>Delivery Fee: <strong>${deliveryFee.toFixed(2)}</strong></p>
// //           <p>Items Total: <strong>${total.toFixed(2)}</strong></p>
// //           <p>Total: <strong>${(total + deliveryFee).toFixed(2)}</strong></p>
// //         </div>
// //         <button className="checkout-btn">Proceed to checkout</button>
// //       </div>
// //     </div>
// //   );
// // }

// // export default AddToCart;



// import React, { useEffect, useState } from "react";
// import { useBanner } from "../../context/BannerContext";
// import "./AddToCart.css";


// const initialCartItems = [
//   {
//     id: 1,
//     title: "Lorem ipsum dolor sit amet",
//     price: 67,
//     originalPrice: 97,
//     image: "/images/product1.jpg",
//     badge: "Best Seller",
//     rating: 4,
//     reviews: 120,
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     price: 67,
//     originalPrice: 97,
//     image: "/images/product2.jpg",
//     badge: "Premium Choice",
//     rating: 4,
//     reviews: 89,
//   },
//   {
//     id: 2,
//     title: "Lorem ipsum dolor sit amet",
//     price: 67,
//     originalPrice: 97,
//     image: "/images/product2.jpg",
//     badge: "Premium Choice",
//     rating: 4,
//     reviews: 89,
//   }
// ];

// function AddToCart() {
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
//   const [cartItems, setCartItems] = useState(initialCartItems);

//   useEffect(() => {
//     setBannerTitle("Add To Cart");
//     setBreadcrumb("Add To Cart");
//     setBannerImage("/other-banner.png");
//   }, []);

//   const removeFromCart = (id) => {
//     setCartItems(cartItems.filter((item) => item.id !== id));
//   };

//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
//   const deliveryFee = 4.78;
//   const [showCouponInput, setShowCouponInput] = useState(false);
// const [couponCode, setCouponCode] = useState("");


//   return (
//     <div className="cart-container">
//       {/* Left Side - Cart Items */}
//       <div className="cart-list">
//         <div className="cart-header">
//           <h2>Cart</h2>
//           <span>{cartItems.length} items</span>
//         </div>

//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <div className="item-details">
//               <span className="badge">{item.badge}</span>
//               <h4>{item.title}</h4>
//               <div className="rating">
//                 {"★".repeat(item.rating)}
//                 {"☆".repeat(5 - item.rating)}
//                 <span className="review">({item.reviews} Reviews)</span>
//               </div>
//               <div className="price">
//                 <span className="original">${item.originalPrice}</span>
//                 <span className="discounted">${item.price}</span>
//               </div>
//             </div>
//             <div className="item-actions">
//               <button title="Edit">✎</button>
//               <button title="Remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       {/* Right Side - Summary */}
//       <div className="cart-summary">
//         <div className="cart-summary-header">
//           <h3>Cart Total</h3>
//           <span>{cartItems.length} items</span>
//         </div>

//         {/* <div className="coupon">
//           <span>Coupon</span>
//           <button className="add-coupon">+ Add Coupon</button>
//         </div> */}
//         <div className="coupon">
//   <span>Coupon</span>
//   <button
//     className="add-coupon"
//     onClick={() => setShowCouponInput(!showCouponInput)}
//   >
//     {showCouponInput ? "Hide" : "+ Add Coupon"}
//   </button>
// </div>

// {showCouponInput && (
//   <div className="coupon-input-wrapper">
//     <input
//       type="text"
//       className="coupon-input"
//       placeholder="Enter coupon code"
//       value={couponCode}
//       onChange={(e) => setCouponCode(e.target.value)}
//     />
//   </div>
// )}


//         <div className="order-summary-heading">Order Summary</div>

//         <div className="summary">
//           <div className="summary-row">
//             <span>Delivery Fee:</span>
//             <span>${deliveryFee.toFixed(2)}</span>
//           </div>
//           <div className="summary-row">
//             <span>Items Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="summary-separator"></div>

//         <div className="total-row">
//           <span>Total:</span>
//           <span>${(total + deliveryFee).toFixed(2)}</span>
//         </div>
//         <p>By placing this order, you are agreeing to  Terms and Conditions.</p>

//         <button className="checkout-btn">Proceed to checkout</button>
//       </div>
//     </div>
//   );
// }

// export default AddToCart;
// import React, { useEffect, useState } from "react";
// import { useBanner } from "../../context/BannerContext";
// import { useCart } from "../../context/CartContext"; // ✅ import
// import "./AddToCart.css";

// function AddToCart() {
//   const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
//   const { cartItems, removeFromCart } = useCart(); // ✅ use global cart

//   const [showCouponInput, setShowCouponInput] = useState(false);
//   const [couponCode, setCouponCode] = useState("");

//   const total = cartItems.reduce((sum, item) => sum + item.price, 0);
//   const deliveryFee = 4.78;

//   useEffect(() => {
//     setBannerTitle("Add To Cart");
//     setBreadcrumb("Add To Cart");
//     setBannerImage("/other-banner.png");
//   }, []);
  

//   return (
//     <div className="cart-container">
//       <div className="cart-list">
//         <div className="cart-header">
//           <h2>Cart</h2>
//           <span>{cartItems.length} items</span>
//         </div>

//         {cartItems.map((item) => (
//           <div className="cart-item" key={item.id}>
//             <img src={item.image} alt={item.title} />
//             <div className="item-details">
//               <span className="badge">{item.badge}</span>
//               <h4>{item.title}</h4>
//               <div className="rating">
//                 {"★".repeat(item.rating)}
//                 {"☆".repeat(5 - item.rating)}
//                 <span className="review">({item.reviews} Reviews)</span>
//               </div>
//               <div className="price">
//                 <span className="original">${item.originalPrice}</span>
//                 <span className="discounted">${item.price}</span>
//               </div>
//             </div>
//             <div className="item-actions">
//               <button title="Edit">✎</button>
//               <button title="Remove" onClick={() => removeFromCart(item.id)}>🗑️</button>
//             </div>
//           </div>
//         ))}
//       </div>

//       <div className="cart-summary">
//         <div className="cart-summary-header">
//           <h3>Cart Total</h3>
//           <span>{cartItems.length} items</span>
//         </div>

//         <div className="coupon">
//           <span>Coupon</span>
//           <button
//             className="add-coupon"
//             onClick={() => setShowCouponInput(!showCouponInput)}
//           >
//             {showCouponInput ? "Hide" : "+ Add Coupon"}
//           </button>
//         </div>

//         {showCouponInput && (
//           <div className="coupon-input-wrapper">
//             <input
//               type="text"
//               className="coupon-input"
//               placeholder="Enter coupon code"
//               value={couponCode}
//               onChange={(e) => setCouponCode(e.target.value)}
//             />
//           </div>
//         )}

//         <div className="order-summary-heading">Order Summary</div>

//         <div className="summary">
//           <div className="summary-row">
//             <span>Delivery Fee:</span>
//             <span>${deliveryFee.toFixed(2)}</span>
//           </div>
//           <div className="summary-row">
//             <span>Items Total:</span>
//             <span>${total.toFixed(2)}</span>
//           </div>
//         </div>

//         <div className="summary-separator"></div>

//         <div className="total-row">
//           <span>Total:</span>
//           <span>${(total + deliveryFee).toFixed(2)}</span>
//         </div>

//         <p>By placing this order, you are agreeing to Terms and Conditions.</p>

//         <button className="checkout-btn">Proceed to checkout</button>
//       </div>
//     </div>
//   );
// }

// export default AddToCart;
import React, { useEffect, useState } from "react";
import { useBanner } from "../../context/BannerContext";
import { useCart } from "../../context/CartContext";
import { useNavigate } from "react-router-dom";
import "./AddToCart.css";

function AddToCart() {
  const navigate = useNavigate();
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
  const { cartItems, removeFromCart } = useCart();

  const [showCouponInput, setShowCouponInput] = useState(false);
  const [couponCode, setCouponCode] = useState("");

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);
  const deliveryFee = 4.78;

  useEffect(() => {
    setBannerTitle("Add To Cart");
    setBreadcrumb("Add To Cart");
    setBannerImage("/other-banner.png");
  }, []);

  const getTagsFromArray = (tagArray) => {
    return (tagArray || []).map((tag) => {
      if (tag === 'Resource Only') return { label: tag, className: 'tag-resource' };
      if (tag === 'Live Sessions') return { label: tag, className: 'tag-live' };
      if (tag === 'Flexible') return { label: tag, className: 'tag-schedule' };
      if (tag === 'Fixed') return { label: tag, className: 'tag-fixed' };
      return { label: tag, className: 'tag-default' };
    });
  };

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i} style={{ color: i < rating ? '#FFD700' : '#ccc' }}>★</span>);
    }
    return stars;
  };

  return (
    <div className="cart-container">
      <div className="cart-list">
        <div className="cart-header">
          <h2>Cart</h2>
          <span>{cartItems.length} items</span>
        </div>

        {cartItems.map((item) => {
          const tags = getTagsFromArray(item.tag);
          return (
            <div className="cart-item" key={item.id}>
              <img src={item.image} alt={item.title} />
              <div className="item-details">
                <div className="labels">
                  {tags.map((tag, index) => (
                    <span key={index} className={`label ${tag.className}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>
                <div className="rating" style={{marginTop:'15px'}}>
                  {renderStars(item.rating)}
                  <span className="review" style={{color:'#777',fontSize:'14px',marginTop:'5px'}}>({item.reviews}+ Reviews)</span>
                </div>
                <h4>{item.title}</h4>
                <div className="price">
                  <span className="old-price">${item.originalPrice}</span>
                  <span className="new-price">${item.price}</span>
                </div>
              </div>
              <div className="item-actions" >
                <button title="Edit"><img src="/pen.svg" alt="" /></button>
                <button title="Remove" onClick={() => removeFromCart(item.id)}><img src="/dustbin.svg" alt="" /></button>
              </div>
            </div>
          );
        })}
      </div>

      <div className="cart-summary">
        <div className="cart-summary-header">
          <h3>Cart Total</h3>
          <span>{cartItems.length} items</span>
        </div>

        <div className="coupon">
          <span>Coupon</span>
          <button
            className="add-coupon"
            onClick={() => setShowCouponInput(!showCouponInput)}
          >
            {showCouponInput ? "Hide" : "+ Add Coupon"}
          </button>
        </div>

        {showCouponInput && (
          <div className="coupon-input-wrapper">
            <input
              type="text"
              className="coupon-input"
              placeholder="Enter coupon code"
              value={couponCode}
              onChange={(e) => setCouponCode(e.target.value)}
            />
          </div>
        )}

        <div className="order-summary-heading">Order Summary</div>

        <div className="summary">
          <div className="summary-row">
            <span>Delivery Fee:</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="summary-row">
            <span>Items Total:</span>
            <span>${total.toFixed(2)}</span>
          </div>
        </div>

        <div className="summary-separator"></div>

        <div className="total-row">
          <span>Total:</span>
          <span>${(total + deliveryFee).toFixed(2)}</span>
        </div>

        <p>By placing this order, you are agreeing to Terms and Conditions.</p>

        <button className="checkout-btn" onClick={() => navigate("/checkout")}>Proceed to checkout</button>
      </div>
    </div>
  );
}

export default AddToCart;
