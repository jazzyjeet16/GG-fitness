import React from "react";
import "../css/form-elements.css";

const SERVICES = [
  { id: 1, label: "Service 1", price: 20 },
  { id: 2, label: "Service 2", price: 35 },
];

export default function ServiceSelect({ value, onChange }) {
  return (
    <div className="field-group">
      <label>Service Details</label>
      <select value={value} onChange={(e) => onChange(e.target.value)}>
        <option value="">Select Service</option>
        {SERVICES.map((s) => (
          <option key={s.id} value={s.id}>
            {s.label}
          </option>
        ))}
      </select>
    </div>
  );
}
