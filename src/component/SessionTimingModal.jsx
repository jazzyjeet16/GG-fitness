// import React from "react";
// import "../css/SessionTimingModal.css";

// export default function SessionTimingModal({ isOpen, onClose }) {
//   if (!isOpen) return null;

//   const timings = [
//     "Senin 08.00-09.00", "Selasa 10.00-11.00", "Rabu 12.00-13.00",
//     "Kamis 14.00-15.00", "Jumat 16.00-17.00", "Sabtu 18.00-19.00",
//     "Minggu 20.00-21.00", "Senin 09.00-10.00", "Rabu 11.00-12.00"
//   ];

//   return (
//     <div className="session-modal-overlay">
//       <div className="session-modal">
//         <div className="session-modal-header">
//           <h3>Session Timings</h3>
//           <button onClick={onClose}>✕</button>
//         </div>
//         <div className="session-grid">
//           {timings.map((time, index) => (
//             <div key={index} className="session-tile">
//               📅 <br />
//               {time}
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// }
import React from "react";
import "../css/SessionTimingModal.css";

export default function SessionTimingModal({ isOpen, onClose }) {
  if (!isOpen) return null;

  const sessions = [
    { label: "Session 1", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 2", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 3", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 4", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 5", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 6", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 7", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 8", date: "26/06/2024", time: "9:00PM - 10:00PM" },
    { label: "Session 9", date: "26/06/2024", time: "9:00PM - 10:00PM" },
  ];

  return (
    <div className="session-modal-overlay">
      <div className="session-modal">
        <div className="session-modal-header">
          <h3 className="session-title">Session Timmings</h3>
          <button className="close-btn" onClick={onClose}>✕</button>
        </div>
        <div className="session-grid">
          {sessions.map((s, index) => (
            <div key={index} className="session-tile">
              <div className="calendar-icon">
                <img src="/Calendar.png" alt="calendar" />
              </div>
              <div className="session-info">
                <p className="session-label">{s.label}</p>
                <p className="session-date">{s.date}</p>
                <p className="session-time">{s.time}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
