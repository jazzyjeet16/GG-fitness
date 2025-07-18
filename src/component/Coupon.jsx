// import React, { useState } from "react";

// export default function Coupon({ applied, onApply }) {
//   const [show, setShow] = useState(false);
//   const [code, setCode] = useState("");

//   const handleApply = () => {
//     onApply(code);
//     setShow(false);
//     setCode("");
//   };

//   return (
//     <div style={{ marginTop: "20px" }}>
//       {!show ? (
//         <button className="link" onClick={() => setShow(true)}>
//           + Add Coupon
//         </button>
//       ) : (
//         <div style={{ display: "flex", gap: "8px" }}>
//           <input
//             placeholder="Enter code"
//             value={code}
//             onChange={(e) => setCode(e.target.value)}
//           />
//           <button onClick={handleApply}>Apply</button>
//         </div>
//       )}
//       {applied && <span style={{ marginLeft: 12 }}>Applied: {applied}</span>}
//     </div>
//   );
// }
import React, { useState } from "react";
import { BiBorderTop } from "react-icons/bi";
import { FiPlus } from "react-icons/fi";

export default function Coupon({ applied, onApply }) {
  const [show, setShow] = useState(false);
  const [code, setCode] = useState("");

  const handleApply = () => {
    if (code.trim()) {
      onApply(code);
      setShow(false);
      setCode("");
    }
  };

  const styles = {
    container: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
      marginTop: "24px",
      position: "relative",
      flexWrap: "wrap",
       borderTop: "1px solid #F8F8F8",   // light gray top border
    borderBottom: "1px solid #F8F8F8",
    paddingTop: "20px",       // spacing from top border
    paddingBottom: "20px", 
    
    },
    label: {
      fontSize: "14px",
      fontWeight: 600,
      color: "#222",
      
    },
    addBtn: {
      display: "flex",
      alignItems: "center",
      gap: "6px",
      fontSize: "13px",
      color: "#6a0dad",
      background: "none",
      border: "none",
      cursor: "pointer",
      fontWeight: 600,
    },
    form: {
      display: "flex",
      gap: "8px",
      marginTop: "12px",
      width: "100%",
    },
    input: {
      flex: 1,
      padding: "15px 10px",
      fontSize: "14px",
      border: "none",
      borderRadius: "12px",
      outline: "none",
    },
    applyBtn: {
      backgroundColor: "#6a0dad",
      color: "white",
      border: "none",
      padding: "8px 14px",
      borderRadius: "6px",
      fontSize: "13px",
      fontWeight: 600,
      cursor: "pointer",
    },
    applyBtnHover: {
      backgroundColor: "#5a0099",
    },
    hideBtn: {
      background: "none",
      border: "none",
      color: "#6a0dad",
      fontSize: "13px",
      cursor: "pointer",
    },
    appliedText: {
      fontSize: "13px",
      color: "green",
      marginTop: "8px",
      width: "100%",
    },
  };

  return (
    <div style={styles.container}>
      <span style={styles.label}>Coupon</span>

      {!show ? (
        <button style={styles.addBtn} onClick={() => setShow(true)}>
          <FiPlus size={14} /> Add Coupon
        </button>
      ) : (
        <div style={styles.form}>
          <input
            type="text"
            placeholder="Enter code"
            value={code}
            onChange={(e) => setCode(e.target.value)}
            style={styles.input}
          />
          <button style={styles.applyBtn} onClick={handleApply}>
            Apply
          </button>
          <button style={styles.hideBtn} onClick={() => setShow(false)}>
            Hide
          </button>
        </div>
      )}

      {applied && (
        <div style={styles.appliedText}>Applied: {applied}</div>
      )}
    </div>
  );
}
