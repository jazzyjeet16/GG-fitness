import React, { useState, useEffect } from "react";
import { useCart } from "../../context/CartContext";
import { useBanner } from "../../context/BannerContext";
import "./Checkout.css";

export default function Checkout() {
  const { cartItems, removeFromCart } = useCart();
  const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();

  const [payment, setPayment] = useState("bank"); // "bank" | "card"
  const [showCoupon, setShowCoupon] = useState(false);
  const [coupon, setCoupon] = useState("");

  // ──────────────────────────────────────  banner
  useEffect(() => {
    setBannerTitle("Checkout");
    setBreadcrumb("Checkout");
    setBannerImage("/other-banner.png");
  }, []);

  // ──────────────────────────────────────  helpers
  const deliveryFee = 4.78;
  const itemsTotal = cartItems.reduce((sum, i) => sum + i.price, 0);
  const grandTotal = (itemsTotal + deliveryFee).toFixed(2);

  const getTags = (arr = []) =>
    arr.map((t) => {
      if (t === "Resource Only") return { txt: t, cls: "tag-resource" };
      if (t === "Live Sessions") return { txt: t, cls: "tag-live" };
      if (t === "Flexible") return { txt: t, cls: "tag-schedule" };
      if (t === "Fixed") return { txt: t, cls: "tag-fixed" };
      return { txt: t, cls: "tag-default" };
    });

  const stars = (r) =>
    Array.from({ length: 5 }).map((_, i) => (
      <span key={i} style={{ color: i < r ? "#FFD700" : "#ccc" }}>
        ★
      </span>
    ));

  // ──────────────────────────────────────  render
  return (
    <div className="checkout">
      {/* ─────────────── LEFT ─────────────── */}
      <div className="checkout-left">
        <h2>Checkout</h2>

        {/* Basic Details */}
        <section className="card">
          <h4>Basic Details</h4>
          <div className="grid-2">
            <label>
              First Name*
              <input placeholder="First name" />
            </label>
            <label>
              Last Name* <input placeholder="Last name" />
            </label>
            <label>
              Email* <input type="email" placeholder="example@mail.com" />
            </label>
            <label>
              Phone* <input placeholder="+91 1234567890" />
            </label>
          </div>
        </section>

        {/* Payment Method */}
        <section className="card">
          <h4>Payment Method</h4>

          {/* Bank Transfer */}
          <div
            className="pay-option"
            style={{ border: "none" }}
            onClick={() => setPayment("bank")}
          >
            <input type="radio" checked={payment === "bank"} readOnly />
            <span>Bank Transfer</span>
          </div>
          {payment === "bank" && (
            <div className="pay-box">
              <label>
                Account Holder* <input placeholder="e.g. Bidisha Bhowmick" />
              </label>
              <label>
                Account No.* <input placeholder="1234 5678 9101" />
              </label>
              <label>
                IFSC Code* <input placeholder="SBIN0001234" />
              </label>
            </div>
          )}

          {/* Card */}
          <div className="pay-option" onClick={() => setPayment("card")}>
            <input type="radio" checked={payment === "card"} readOnly />
            <span>Credit Card / Debit Card</span>
          </div>
          {payment === "card" && (
            <div className="pay-box">
              <label>
                Card Holder Name* <input placeholder="Bidisha Bhowmick" />
              </label>
              <label>
                Card Number* <input placeholder="1234 4567 7897 7897" />
              </label>
              <label>
                Expire Date* <input placeholder="06/2027" />
              </label>
              <label>
                CVC* <input placeholder="***" />
              </label>
            </div>
          )}
        </section>

        {/* Coupon */}
        <div className="coupon-row">
          <span>Coupon</span>
          <button onClick={() => setShowCoupon(!showCoupon)}>
            {showCoupon ? "Hide" : "+ Add Coupon"}
          </button>
        </div>
        {showCoupon && (
          <input
            className="coupon-input"
            placeholder="Enter coupon code"
            value={coupon}
            onChange={(e) => setCoupon(e.target.value)}
          />
        )}
      </div>

      {/* ─────────────── RIGHT ─────────────── */}
      <div className="checkout-right">
        <h3>Review Order</h3>
        <span className="item-count">{cartItems.length} items</span>

        {/* Cart items */}
        {cartItems.map((it) => (
          <div key={it.id} className="review-item">
            <img src={it.image} alt={it.title} />
            <div className="details">
              <div className="tag-wrap">
                {getTags(it.tag).map(({ txt, cls }) => (
                  <span key={txt} className={`label ${cls}`}>
                    {txt}
                  </span>
                ))}
              </div>
              <div className="check-rating">
                {stars(it.rating)}
                <span className="check-review">({it.reviews}+ Reviews)</span>
              </div>
              <h4>{it.title}</h4>
              <div className="check-price">
                <span className="old">${it.originalPrice}</span>
                <span className="new">${it.price}</span>
              </div>
            </div>
            {/* <div className="actions">
              <button title="Edit"><img src="/pen.svg" alt="" srcset="" /></button>
              <button title="Remove" onClick={() => removeFromCart(it.id)}><img src="/dustbin.svg" alt="" srcset="" /></button>
            </div> */}
            <div className="actions">
              <button title="Edit">
                <img
                  src="/pen.svg"
                  alt=""
                  style={{ width: "18px", height: "18px" }}
                />
              </button>
              <button title="Remove" onClick={() => removeFromCart(it.id)}>
                <img
                  src="/dustbin.svg"
                  alt=""
                  style={{ width: "18px", height: "18px" }}
                />
              </button>
            </div>
          </div>
        ))}

        {/* Order Summary */}
        <div className="summary">
          <h4>Order Summary</h4>
          <div className="row">
            <span>Delivery fee</span>
            <span>${deliveryFee.toFixed(2)}</span>
          </div>
          <div className="row">
            <span>Items total</span>
            <span>${itemsTotal.toFixed(2)}</span>
          </div>
          <hr />
          <div className="row total">
            <span>Total</span>
            <span>${grandTotal}</span>
          </div>
        </div>

        <p className="terms">
          By placing this order, you are agreeing to Terms and Conditions.
        </p>
        <button className="proceed">Proceed</button>
      </div>
    </div>
  );
}
