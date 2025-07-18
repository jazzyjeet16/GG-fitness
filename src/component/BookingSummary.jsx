import React from "react";

export default function BookingSummary({ onCancel, onConfirm, disabled }) {
  return (
    <div >
      <div style={{ marginTop: "15px", display: "flex", justifyContent: "flex-end", gap: "25px" }}>
        <button
          onClick={onCancel}
          style={{
            backgroundColor: "#e5e7eb",
            color: "#343434",
            padding: "16px 30px",
            border: "none",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: "pointer",
          }}
        >
          Cancel
        </button>
        <button
          onClick={onConfirm}
          disabled={disabled}
          style={{
            backgroundColor: "#7b61ff",
            color: "#ffffff",
            padding: "16px 30px",
            border: "none",
            borderRadius: "12px",
            fontSize: "14px",
            fontWeight: 600,
            cursor: disabled ? "not-allowed" : "pointer",
            opacity: disabled ? 0.4 : 1,
          }}
        >
          Book an Appointment
        </button>
      </div>
    </div>
  );
}
