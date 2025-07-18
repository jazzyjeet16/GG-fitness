import React, { useState } from 'react';
import AppointmentCard from '../../../component/AppointmentCard';
import "./Appointments.css";
const appointmentsData = [
  {
    id: 1,
    date: 'Wed 28',
    time: '10:30 AM–11:00 AM',
    status: 'upcoming',
    canCancel: true,
    canReschedule: true,
  },
  {
    id: 2,
    date: 'Wed 28',
    time: '10:30 AM–11:00 AM',
    status: 'upcoming',
    canCancel: true,
    canReschedule: true,
  },
  {
    id: 3,
    date: 'Wed 28',
    time: '10:30 AM–11:00 AM',
    status: 'completed',
    canCancel: false,
    canReschedule: true,
  },
  {
    id: 4,
    date: 'Wed 28',
    time: '10:30 AM–11:00 AM',
    status: 'cancelled',
    canCancel: false,
    canReschedule: false,
  },
];

const statusTabs = [
  { label: 'All', value: 'all' },
  { label: 'Upcoming', value: 'upcoming' },
  { label: 'Completed', value: 'completed' },
  { label: 'Cancelled', value: 'cancelled' },
];

const Appointments = () => {
  const [selectedTab, setSelectedTab] = useState('all');

  const filteredAppointments =
    selectedTab === 'all'
      ? appointmentsData
      : appointmentsData.filter((appt) => appt.status === selectedTab);

  return (
    <div className="appointments-outer-container">
      <h2 className="appointments-title">Appointments</h2>
      {/* Status Tabs - outside the main card container */}
      <div className="appointments-status-tabs">
        {statusTabs.map((tab) => (
          <button
            key={tab.value}
            className={`tab-btn${selectedTab === tab.value ? ' active' : ''}`}
            onClick={() => setSelectedTab(tab.value)}
          >
            {tab.label}
          </button>
        ))}
      </div>
      {/* Main bordered container for appointment cards */}
      <div className="appointments-page">
        <div className="appointments-list">
          {filteredAppointments.map((appt) => (
            <AppointmentCard key={appt.id} {...appt} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Appointments;
