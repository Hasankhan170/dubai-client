import React, { useState } from "react";
import { useParams } from "react-router-dom";
import { tours } from "../utils/tour";
import emailjs from "emailjs-com";

const BookingForm = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  const [userName, setUserName] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [adults, setAdults] = useState("");
  const [children, setChildren] = useState("");
  const [contact, setContact] = useState("");
  const [tourType, setTourType] = useState("Sharing");

  const adultPrice = tour?.price?.adult || tour?.price || 0;
  const childPrice = tour?.price?.child || tour?.price || 0;

  const totalPrice =
    (parseInt(adults) || 0) * adultPrice +
    (parseInt(children) || 0) * childPrice;

  const handleBooking = (e) => {
    e.preventDefault();

    if (!userName || !userEmail || !adults || !children || !contact || !tourType) {
      alert("Please fill all required fields.");
      return;
    }

    const templateParams = {
      user_name: userName,
      user_email: userEmail,
      tour_title: tour?.title,
      adults,
      children,
      tour_type: tourType,
      contact_number: contact,
      total_price: totalPrice,
    };

    emailjs
      .send(
        "service_hj15arn",      // ✅ Your EmailJS Service ID
        "template_on4q1xl",     // ✅ Your EmailJS Template ID
        templateParams,
        "2PoaRdDecwbYp4_w4"     // ✅ Your EmailJS Public Key
      )
      .then(
        () => {
          alert("Booking request sent successfully!");
          setUserName("");
          setUserEmail("");
          setAdults("");
          setChildren("");
          setContact("");
          setTourType("Sharing");
        },
        (error) => {
          console.error("FAILED...", error);
          alert("Failed to send booking. Try again later.");
        }
      );
  };

  return (
    <div className="booking-form mx-auto p-4 rounded shadow">
      <h2 className="text-2xl text-white bg-teal-800 font-light w-full px-3 py-2 mb-6">
        Book This Tour: {tour?.title || "Tour Not Found"}
      </h2>

      <form onSubmit={handleBooking} className="space-y-4">
        <div>
          <label className="block text-gray-700 mb-1">Your Name *</label>
          <input
            type="text"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder="Enter your name"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Your Email *</label>
          <input
            type="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">How many adults? *</label>
          <input
            type="number"
            min="1"
            value={adults}
            onChange={(e) => setAdults(e.target.value)}
            placeholder="Enter number of adults"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">How many children? *</label>
          <input
            type="number"
            min="0"
            value={children}
            onChange={(e) => setChildren(e.target.value)}
            placeholder="Enter number of children"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Contact Number *</label>
          <input
            type="tel"
            value={contact}
            onChange={(e) => setContact(e.target.value)}
            placeholder="Enter contact number"
            className="w-full border rounded px-3 py-2"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 mb-1">Tour Type *</label>
          <select
            value={tourType}
            onChange={(e) => setTourType(e.target.value)}
            className="w-full border rounded px-3 py-2"
            required
          >
            <option value="Sharing">Sharing</option>
            <option value="Private">Private</option>
          </select>
        </div>

        <div className="mt-4 text-lg font-semibold text-gray-800">
          Total Price: <span className="text-teal-700">AED {totalPrice}</span>
        </div>

        <button
          type="submit"
          className="w-full bg-teal-700 text-white py-2 rounded hover:bg-teal-800 transition"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
