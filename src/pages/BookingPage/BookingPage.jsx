import React, { useState, useMemo ,useEffect} from "react";
// import Calendar from "../components/Calendar";
// import TimeSlots from "../components/TimeSlots";
// import ServiceSelect from "../components/ServiceSelect";
// import BasicDetailsForm from "../components/BasicDetailsForm";
// import Coupon from "../components/Coupon";
// import BookingSummary from "../components/BookingSummary";
import "./booking.css";
import Calendar from "../../component/Calendar";
import TimeSlots from "../../component/TimeSlots";
import ServiceSelect from "../../component/ServiceSelect";
import BasicDetailsForm from "../../component/BasicDetailsForm";
import Coupon from "../../component/Coupon";
import BookingSummary from "../../component/BookingSummary";
import { useBanner } from "../../context/BannerContext";

const SERVICES = {
  1: { price: 20, label: "Service 1" },
  2: { price: 35, label: "Service 2" },
};

export default function BookingPage() {
    const { setBannerTitle, setBreadcrumb, setBannerImage } = useBanner();
   useEffect(() => {
      setBannerTitle("Booking");
      setBreadcrumb("Booking");
      setBannerImage("/other-banner.png");
    }, []);
  // master state
  const [date, setDate] = useState(new Date());
  const [time, setTime] = useState("");
  const [serviceId, setServiceId] = useState("");
  const [customer, setCustomer] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
  });
  const [coupon, setCoupon] = useState("");

  // price calc
  const basePrice = serviceId ? SERVICES[serviceId].price : 0;
  const discount = coupon === "SAVE10" ? 10 : 0;
  const total = useMemo(() => Math.max(basePrice - discount, 0), [basePrice, discount]);

  const formValid =
    serviceId &&
    time &&
    customer.firstName &&
    customer.lastName &&
    customer.email &&
    customer.phone;

  const handleConfirm = () => {
    alert(
      `Booked on ${date.toDateString()} at ${time}\nService: ${
        SERVICES[serviceId].label
      }\nTotal: $${total}`
    );
  };

  return (
    <main className="booking-wrapper">
      {/* top: calendar + times */}
      <div className="booking-top">
        <Calendar selected={date} onSelect={setDate} />
        <TimeSlots selected={time} onSelect={setTime} />
      </div>

      <ServiceSelect value={serviceId} onChange={setServiceId} />

      <BasicDetailsForm data={customer} onChange={setCustomer} />
<div className="total-container">
      <span className="total-label">Total</span>
      <span className="total-amount">${total}</span>
    </div>
      <Coupon applied={coupon} onApply={setCoupon} />

      <BookingSummary
        price={total}
        onCancel={() => window.location.reload()}
        onConfirm={handleConfirm}
        disabled={!formValid}
      />
    </main>
  );
}
