// import React from 'react';
// import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
// import '../css/Card.css';

// export default function Card({ data }) {
//   return (
//     <div className="card">
//       <div className="card-img-wrapper">
//         <img src={data.image} alt={data.title} />
//         <div className="card-icons">
//           <FiHeart />
//           <FiShoppingCart />
//           <FiUser />
//         </div>
//       </div>

//       <div className="card-body">
//         <h4>{data.title}</h4>
//         <p>{data.description}</p>
//         <div className="card-rating">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i}>{i < data.rating ? '⭐' : '☆'}</span>
//           ))}
//         </div>
//         <div className="card-price">
//           <span className="original">${data.originalPrice}</span>
//           <span className="discounted">${data.discountPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }


// import React from 'react';
// import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
// import '../css/Card.css';
// import { useCart } from '../context/CartContext';

// export default function Card({ data }) {
//   const { addToCart } = useCart();

//   const handleAddToCart = () => {
//     const cartItem = {
//       id: data.id,
//       title: data.title,
//       price: data.discountPrice, // ✅ Send discounted price as cart price
//       originalPrice: data.originalPrice,
//       image: data.image,
//       badge: data.badge || "Top Pick", // ✅ Fallback if badge not present
//       rating: data.rating || 4, // ✅ Fallback for missing rating
//       reviews: data.reviews || Math.floor(Math.random() * 100) + 1 // ✅ Default/fake reviews
//     };

//     addToCart(cartItem); // ✅ Consistent structure
//     console.log("Added to cart:", cartItem);
//   };

//   return (
//     <div className="card">
//       <div className="card-img-wrapper">
//         <img src={data.image} alt={data.title} />
//         <div className="card-icons">
//           <FiHeart />
//           <FiShoppingCart onClick={handleAddToCart} style={{ cursor: 'pointer' }} />
//           <FiUser />
//         </div>
//       </div>

//       <div className="card-body">
//         <h4>{data.title}</h4>
//         <p>{data.description}</p>
//         <div className="card-rating">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i}>{i < data.rating ? '⭐' : '☆'}</span>
//           ))}
//         </div>
//         <div className="card-price">
//           <span className="original">${data.originalPrice}</span>
//           <span className="discounted">${data.discountPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }

// import React from 'react';
// import { FiHeart, FiShoppingCart, FiUser } from 'react-icons/fi';
// import '../css/Card.css';
// import { useCart } from '../context/CartContext';
// import { useWishlist } from '../context/WishlistContext'; // ✅ new import

// export default function Card({ data }) {
//   const { addToCart } = useCart();
//   const { addToWishlist } = useWishlist(); // ✅ new hook

//   const commonItem = {
//     id: data.id,
//     title: data.title,
//     price: data.discountPrice,
//     originalPrice: data.originalPrice,
//     image: data.image,
//     badge: data.badge || "Top Pick",
//     rating: data.rating || 4,
//     reviews: data.reviews || Math.floor(Math.random() * 100) + 1,
//   };

//   const handleAddToCart = () => {
//     addToCart(commonItem);
//     console.log("Added to cart:", commonItem);
//   };

//   const handleAddToWishlist = () => {
//     addToWishlist(commonItem);
//     console.log("Added to wishlist:", commonItem);
//   };

//   return (
//     <div className="card">
//       <div className="card-img-wrapper">
//         <img src={data.image} alt={data.title} />
//         <div className="card-icons">
//           <FiHeart onClick={handleAddToWishlist} style={{ cursor: 'pointer' }} /> {/* ✅ */}
//           <FiShoppingCart onClick={handleAddToCart} style={{ cursor: 'pointer' }} />
//           <FiUser />
//         </div>
//       </div>

//       <div className="card-body">
//         <h4>{data.title}</h4>
//         <p>{data.description}</p>
//         <div className="card-rating">
//           {Array.from({ length: 5 }, (_, i) => (
//             <span key={i}>{i < data.rating ? '⭐' : '☆'}</span>
//           ))}
//         </div>
//         <div className="card-price">
//           <span className="original">${data.originalPrice}</span>
//           <span className="discounted">${data.discountPrice}</span>
//         </div>
//       </div>
//     </div>
//   );
// }


import React from 'react';
import { FiHeart, FiShoppingCart } from 'react-icons/fi';
import '../css/card.css';
import { useCart } from '../context/CartContext';
import { useWishlist } from '../context/WishlistContext';

export default function Card({ data }) {
  const { addToCart } = useCart();
  const { addToWishlist } = useWishlist();

  const commonItem = {
    id: data.id,
    title: data.title,
    price: data.discountPrice,
    originalPrice: data.originalPrice,
    image: data.image,
    badge: data.badge || "Top Pick",
    rating: data.rating || 4,
    reviews: data.reviews || Math.floor(Math.random() * 100) + 1,
    // tag: data.tag || ["Resource Only"] // allow tag array from data
    tag:
  data.type === "resource"
    ? ["Resource Only"]
    : data.type === "live"
    ? [
        "Live Sessions",
        data.schedule === "flexible" ? "Flexible" : "Fixed"
      ]
    : [],

  };

  const handleAddToCart = () => {
    addToCart(commonItem);
  };

  const handleAddToWishlist = () => {
    addToWishlist(commonItem);
  };

  const tagColor = (tag) => {
    if (tag === 'Resource Only') {
      return { backgroundColor: '#4EBEDC', color: '#FFFFFF' };
    }
    if (tag === 'Live Sessions') {
      return { backgroundColor: '#5D5BDF', color: '#FFFFFF' };
    }
    if (tag === 'Flexible') {
      return { backgroundColor: '#FFF0BD', color: '#131313' };
    }
    if (tag === 'Fixed') {
      return { backgroundColor: '#C6C5FF', color: '#131313' };
    }
  };

  return (
    <div className="card1-conatiner">
      <div className="card1-image">
        <img src={data.image} alt={data.title} />
        <div className="card1-edit-icon" onClick={handleAddToWishlist}>
          <FiHeart size={16} />
        </div>
        <div className="card1-delete-icon" onClick={handleAddToCart}>
          <FiShoppingCart size={16} />
        </div>
      </div>

      <h2 className="card1-title">{data.title}</h2>
      <h3 className="card1-description">{data.description}</h3>
      <p className="card1-category">Category {data.id}</p>

      <div className="card1-rating">
        <StarRating rating={data.rating} reviews={commonItem.reviews} />
      </div>

      <div className="card1-price-container">
        <p className="card1-new-price">${data.discountPrice}</p>
        <p className="card1-old-price">${data.originalPrice}</p>
      </div>

      <div className="card1-tag-container">
        {commonItem.tag.map((t, i) => (
          <span key={i} className="card1-tag" style={tagColor(t)}>
            {t}
          </span>
        ))}
      </div>
    </div>
  );
}

function StarRating({ rating = 0, maxStars = 5, reviews }) {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(rating);
    const hasHalfStar = rating % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<span key={i} className="star full-star">★</span>);
    }

    if (hasHalfStar) {
      stars.push(
        <span key="half" className="star half-star">
          <span className="star-half">★</span>
          <span className="star-empty">☆</span>
        </span>
      );
    }

    const emptyStars = maxStars - fullStars - (hasHalfStar ? 1 : 0);
    for (let i = 0; i < emptyStars; i++) {
      stars.push(<span key={`empty-${i}`} className="star empty-star">☆</span>);
    }

    return stars;
  };

  return (
    <div className="star-rating">
      {renderStars()}
      <span className="rating-value">({reviews}+ Reviews)</span>
    </div>
  );
}
