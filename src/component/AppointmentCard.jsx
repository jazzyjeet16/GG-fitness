import React from "react";
import "./AppointmentCard.css";

const AppointmentCard = ({ date, time, status, canCancel, canReschedule }) => {
  // Parse 'Wed 28' into day/date for display
  const [day, dateNum] = date.split(' ');
  return (
    <div className="appointment-card">
      <div className={`appointment-date${status === 'completed' ? ' completed' : status === 'cancelled' ? ' cancelled' : ''}`}>
        <span>{day}</span>
        <span>{dateNum}</span>
      </div>
      <div className="appointment-details">
        <span className="clock-icon">🕒</span>
        <span className="appointment-time">{time}</span>
        {status === 'completed' && <span className="status-badge completed">Completed</span>}
        {status === 'cancelled' && <span className="status-text cancelled">Cancelled</span>}
      </div>
      <div className="appointment-actions">
        {canCancel && status !== 'cancelled' && (
          <button className="cancel-button">Cancel</button>
        )}
        <button
          className={`reschedule-button${!canReschedule || status === 'cancelled' ? ' muted' : ''}`}
          disabled={!canReschedule || status === 'cancelled'}
        >
          Reschedule
        </button>
      </div>
    </div>
  );
};

export default AppointmentCard;
