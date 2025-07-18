import {React,useState, useEffect} from 'react';
import PurchaseCard, {Purchase } from '../../../component/PurchaseCard';
import './Purchasehistory.css';
const statusOptions = ["All", "Processing", "Completed"];

const Purchasehistory = () => {
  const [selectedStatus, setSelectedStatus] = useState("All");

  const filteredpurchase =
    selectedStatus === "All"
      ? Purchase
      : Purchase.filter((pur) => pur.status === selectedStatus);

  return (
    <div className="purchase-history-container">
      <h2 className="purchase-history-title">Purchase History</h2>

      {/* Status Tabs */}
      <div className="status-tabs">
        {statusOptions.map((status) => (
          <button
            key={status}
            onClick={() => setSelectedStatus(status)}
            className={`status-button ${
              selectedStatus === status
                ? "status-button-active"
                : "status-button-inactive"
            }`}
          >
            {status}
          </button>
        ))}
      </div>

      {/* Order Cards */}
      {filteredpurchase.length ? (
        filteredpurchase.map((pur) => (
          <PurchaseCard key={pur.id} purchaseData={pur} />
        ))
      ) : (
        <p className="no-orders">No orders found.</p>
      )}
    </div>
  );
};

export default Purchasehistory;