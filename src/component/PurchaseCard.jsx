import React from "react";
import { useNavigate } from "react-router-dom";
import "./PurchaseCard.css";


export const Purchase = [
  {
    id: "3492",
    status: "Completed",
    date: "Apr 5, 2022, 10:07 AM",
    price: 54,
    items: [
      {
        name: "Cisco Catalyst 1300 Series switches",
        content: "Resources only ",
        time: "",
        price: 54,
        image: "/course.png",
      },
      {
        name: "Cisco Catalyst 1300 Series switches",
        content: "Live Session ",
        time: "Flexible",
        price: 54,
        image: "/course.png",
      },
    ],
  },
  {
    id: "3493",
    status: "Processing",
    date: "Apr 6, 2022, 09:15 AM",
    price: 108,
    items: [
      {
        name: "Cisco Business 250 Smart Switch",
        content: "Resources only ",
        time: "",
        price: 27,
        image: "/course.png",
      },
      {
        name: "Cisco Business 250 Smart Switch",
        content: "Live Session ",
        time: "Fixed",
        price: 27,
        image: "/course.png",
      },
    ],
  },
]
const PurchaseCard = ({ purchaseData }) => {
  const { id, status, date, price, items } = purchaseData;
  const navigate = useNavigate();

  const getStatusClass = (status) => {
    const s = status?.trim().toLowerCase();
    if (s === "completed") return "status-completed";
    if (s === "processing") return "status-processing";
    return "";
  };

  const getContentTagClass = (content) => {
    const c = content?.trim().toLowerCase();
    if (c === "resources only") return "purchase-card-tag bg-resource";
    if (c === "live session") return "purchase-card-tag bg-live";
    return "purchase-card-tag";
  };

  const getTimeTagClass = (time) => {
    const t = time?.trim().toLowerCase();
    if (t === "fixed") return "purchase-card-tag bg-fixed";
    if (t === "flexible") return "purchase-card-tag bg-flexible";
    return "purchase-card-tag";
  };

  return (
    <div className="purchase-card">
      <div className="purchase-card-header">
        <div>
          <p className="purchase-card-id">
            #{id} <span className={`status ${getStatusClass(status)}`}>{status}</span>
          </p>
          <p className="purchase-card-date">{date}</p>
        </div>

        <div className="purchase-card-price-view">
          <div className="purchase-card-price">
            <img src="/camera.png" alt="camera" />
            <p className="font-medium">{price ? `$${price}` : "-"}</p>
          </div>

          <button
            onClick={() => navigate(`/MyAccount/orders/${id}`)}
            className="purchase-card-view-button"
          >
            View Order Details
            <img src="/export.png" alt="arrow" />
          </button>
        </div>
      </div>

      <div className="purchase-card-items">
        {items.map((item, index) => (
          <div key={index} className="purchase-card-item">
            <div className="purchase-card-item-left">
              <img src={item.image} alt={item.name} />
              <div className="purchase-card-item-name-tags">
                <p className="purchase-card-item-name">{item.name}</p>

                {item.content && (
                  <span className={getContentTagClass(item.content)}>
                    {item.content.trim().toLowerCase() === "live session"
                      ? "Live Sessions"
                      : "Resource Only"}
                  </span>
                )}

                {item.time && (
                  <span className={getTimeTagClass(item.time)}>
                    {item.time.charAt(0).toUpperCase() + item.time.slice(1)}
                  </span>
                )}
              </div>
            </div>

            <div className="item-price">${item.price}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PurchaseCard;
