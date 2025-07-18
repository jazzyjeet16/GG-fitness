
// import React from 'react'
// import { useEffect } from 'react';
// import { useBanner } from '../../context/BannerContext';
// import { useWishlist } from '../../context/WishlistContext';
// import { useCart } from '../../context/CartContext';
// import './Wishlist.css';


// export default function Wishlist() {
//   const { wishlistItems, removeFromWishlist } = useWishlist();
//   const { addToCart } = useCart();
  
//     const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
//  useEffect(() => {
//     setBannerTitle("Wishlist");
//     setBreadcrumb("Wishlist");
//     setBannerImage('/other-Banner.png');
//   }, []);

//   return (
//     <div className="wishlist-container">
//       <div className="wishlist-header">
//         <h2>My wishlist</h2>
//         <span>{wishlistItems.length} items</span>
//       </div>

//       {wishlistItems.map((item) => (
//         <div key={item.id} className="wishlist-card">
//           <div className="wishlist-info">
//             <img src={item.image} alt={item.title} className="wishlist-img" />

//             <div className="wishlist-details">
//               {/* badges / rating / title exactly as in cart */}
//               <h4>{item.title}</h4>
//               <div className="price">
//                 <span className="original">${item.originalPrice}</span>
//                 <span className="discounted">${item.price}</span>
//               </div>
//             </div>
//           </div>

//           <div className="wishlist-actions">
//             <button
//               className="delete-btn"
//               onClick={() => removeFromWishlist(item.id)}
//               title="Remove from wishlist"
//             >
//               🗑
//             </button>
//             <button
//               className="add-to-cart"
//               onClick={() => addToCart(item)}
//             >
//               Add to cart
//             </button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }
import React, { useEffect } from 'react';
import { useBanner } from '../../context/BannerContext';
import { useWishlist } from '../../context/WishlistContext';
import { useCart } from '../../context/CartContext';
import './Wishlist.css';

export default function Wishlist() {
  const { wishlistItems, removeFromWishlist } = useWishlist();
  const { addToCart } = useCart();
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

  useEffect(() => {
    setBannerTitle("Wishlist");
    setBreadcrumb("Wishlist");
    setBannerImage('/other-Banner.png');
  }, []);

  const renderStars = (rating) => {
    const stars = [];
    for (let i = 0; i < 5; i++) {
      stars.push(<span key={i}>{i < rating ? '★' : '☆'}</span>);
    }
    return stars;
  };

  const getTagsFromArray = (tagArray) => {
    return (tagArray || []).map((tag) => {
      if (tag === 'Resource Only') return { label: tag, className: 'wishlist-tag-resource' };
      if (tag === 'Live Sessions') return { label: tag, className: 'wishlist-tag-live' };
      if (tag === 'Flexible') return { label: tag, className: 'wishlist-tag-schedule' };
      if (tag === 'Fixed') return { label: tag, className: 'wishlist-tag-fixed' };
      return { label: tag, className: 'wishlist-tag-default' };
    });
  };

  return (
    <div className="wishlist-wrapper">
      <div className="wishlist-topbar">
        <h2>My wishlist</h2>
        <span>{wishlistItems.length} items</span>
      </div>

      {wishlistItems.map((item) => {
        const tags = getTagsFromArray(item.tag);
        return (
          <div key={item.id} className="wishlist-item">
            <div className="wishlist-item-info">
              <img src={item.image} alt={item.title} className="wishlist-item-img" />

              <div className="wishlist-item-details">
                <div className="wishlist-labels">
                  {tags.map((tag, index) => (
                    <span key={index} className={`wishlist-label ${tag.className}`}>
                      {tag.label}
                    </span>
                  ))}
                </div>

                <div className="wishlist-rating">
                  {renderStars(item.rating || 0)}
                  <p>({item.reviews || '5k+'} Reviews)</p>
                </div>

                <h4 className="wishlist-title">{item.title}</h4>

                <div className="wishlist-price">
                  <span className="wishlist-price-old">${item.originalPrice}</span>
                  <span className="wishlist-price-new">${item.price}</span>
                </div>
              </div>
            </div>

            <div className="wishlist-buttons">
              <button
                className="wishlist-remove-btn"
                onClick={() => removeFromWishlist(item.id)}
                title="Remove from wishlist"
              >
                <img src="/dustbin.svg" alt="" />
              </button>
              <button className="wishlist-cart-btn" onClick={() => addToCart(item)}>
                Add to cart
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}
