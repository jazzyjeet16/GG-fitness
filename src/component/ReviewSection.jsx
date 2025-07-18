// import React from 'react';
// import '../css/FaqReviews.css';

// export default function ReviewSection({ rating, reviews }) {
//   const stars = [5, 4, 3, 2, 1];
//   const total = reviews.length;

//   return (
//     <div className="review-section">
//       <div className="review-summary">
//         <h3>Summary</h3>
//         <div className="average-rating">
//           <span className="avg-score">{rating}</span>
//           <span className="total-reviews">{total} Reviews</span>
//         </div>
//         {stars.map((star) => {
//           const count = reviews.filter(r => r.stars === star).length;
//           return (
//             <div key={star} className="rating-bar">
//               <span>{star}</span>
//               <div className="bar">
//                 <div style={{ width: `${(count / total) * 100}%` }}></div>
//               </div>
//               <span>{count}</span>
//             </div>
//           );
//         })}
//       </div>

//       <div className="review-list">
//         {reviews.map((review, i) => (
//           <div key={i} className="review-card">
//             <div className="review-header">
//               <img src={review.avatar} alt="user" />
//               <div>
//                 <h4>{review.name}</h4>
//                 <div className="stars">
//                   {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
//                 </div>
//                 <small>{review.date}</small>
//               </div>
//             </div>
//             <p>{review.comment}</p>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }
// import React from "react";
// import "../css/FaqReviews.css";

// export default function ReviewSection({ rating, reviews }) {
//   const stars = [5, 4, 3, 2, 1];
//   const total = reviews.length;

//   return (
//     <div className="review-section">
//   {/* Left Summary Section */}
//   <div className="review-summary">
//     <h4>Summary</h4>
//     <div className="rating-value">{rating}</div>
//     <div className="total-reviews">{total} Reviews</div>

//     {stars.map((star) => {
//       const count = reviews.filter(r => r.stars === star).length;
//       const percentage = (count / total) * 100;
//       return (
//         <div key={star} className="rating-bar-container">
//           <div className="star-label">{star}★</div>
//           <div className="rating-bar">
//             <div className="rating-bar-fill" style={{ width: `${percentage}%` }}></div>
//           </div>
//           <div className="star-count">{count}</div>
//         </div>
//       );
//     })}
//   </div>

//   {/* Right Review Grid Section */}
//   <div className="review-grid">
//     {reviews.map((review, i) => (
//       <div key={i} className="review-card">
//         <div className="review-header">
//   <img src={review.avatar} alt="user" />
//   <div className="review-info">
//     <h5>{review.name}</h5>
//     <div className="review-stars">
//       {'★'.repeat(review.stars)}{'☆'.repeat(5 - review.stars)}
//     </div>
//     <div className="review-date">Reviewed on {review.date}</div>
//   </div>
// </div>

//         <div className="review-comment">{review.comment}</div>
//       </div>
//     ))}
//   </div>
// </div>

//   );
// }
import React from "react";
import "../css/FaqReviews.css";

export default function ReviewSection({ rating, reviews }) {
  const stars = [5, 4, 3, 2, 1];
  const total = reviews.length;

  return (
    <div className="review-section">
      {/* Left Summary Section */}
      <div className="review-summary">
        <h4>Summary</h4>
        <div className="review-rating-value">{rating}{<span style={{color:'#F2E01B'}}>★</span>}</div>
        <div className="total-reviews">{total} Reviews</div>

        {stars.map((star) => {
          const count = reviews.filter((r) => r.stars === star).length;
          const percentage = (count / total) * 100;
          return (
            <div key={star} className="rating-bar-container">
              <div className="star-label">{star}</div>
              <div className="rating-bar">
                <div
                  className="rating-bar-fill"
                  style={{ width: `${percentage}%` }}
                ></div>
              </div>
              {/* <div className="star-count">{count}</div> */}
            </div>
          );
        })}
      </div>

      {/* Right Review Grid Section */}
      <div className="review-grid">
        {reviews.map((review, i) => (
          <div key={i} className="review-card">
            <div className="review-header">
              {/* Left: Image + Name */}
              <div className="review-avatar-name">
                <img src={review.avatar} alt="user" />
                <h5>{review.name}</h5>
              </div>

              {/* Right: Stars, date, comment */}
              <div className="review-meta-content">
                <div className="review-meta">
                  <div className="review-stars">
                    {'★'.repeat(review.stars)}
                    {'☆'.repeat(5 - review.stars)}
                  </div>
                  <div className="review-date">Reviewed on {review.date}</div>
                </div>
                <div className="review-comment">{review.comment}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
