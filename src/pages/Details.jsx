import { Form, useParams } from "react-router-dom";
import { tours } from "../utils/tour.js";
import Header from "../component/Header.jsx";
import Navbar from "../component/Navbar.jsx";
import Footer from "../component/Footer.jsx";
import BookingForm from "../component/Form.jsx";
import DubaiTourForm from "../component/Form.jsx";
import { useState } from "react";


const Details = () => {
  const { id } = useParams();
  const tour = tours.find((t) => t.id === parseInt(id));

  if (!tour) {
    return <div className="p-6">Tour not found.</div>;
  }

  return (
    <>
      <Header />
      <Navbar />

      {/* Basic Tour Info */}
      <div className="p-6">
        <img
          src={tour.image}
          alt={tour.title}
          className="w-full h-110 object-fill rounded mb-4"
        />
        <h1 className="text-3xl text-teal-800 font-semibold mb-2">{tour.title}</h1>
      </div>





      <div className="detail-box rounded   mb-4 p-4 ">

      <h2 className="text-lg  text-gray-600  font-medium w-full mb-4">{tour.highlights}</h2>

      <p className="text-2xl text-white bg-teal-800 font-bold w-full text-center py-2 mb-1">Tour Details</p>

      <div className="timing">

        <div className="duration bg-teal-100">
          <h2>Tour Duration</h2>
          <h3>{tour.duration}</h3>
        </div>

        <div className="ava">
        <h2>Tour Availability</h2>
          <h3>{tour.availability}</h3>
        </div>

        <div className="adult bg-teal-100">
        <h2>Adult Price</h2>
          <h3>AED {tour.price}</h3>
        </div>

        <div className="child">
      <h2>Child Price</h2>
          <h3>AED {tour.childPrice}</h3>
        </div>

        <div className="pick-drop bg-teal-100">
          <h2>Pickup and Drop</h2>
          <h3>{tour.pickupAndDrop}</h3>

        </div>

         <div className="pick-up">
          <h2>pickup Time</h2>
          <h3>{tour.pickupTime}</h3>

        </div>

      </div>


    <h2 className="text-lg    font-medium w-full mt-4 mb-4"><span className="bg-teal-800 p-1 rounded text-white">Selected Locations:</span> Tour Price is AED 100 if pick-up is from Dubai Downtown , Palm Jumeirah , Al Barsha and Marina </h2>
    
    
    <h2 className="text-lg    font-medium w-full mt-4 mb-4"><span className="bg-teal-800 p-1 rounded text-white">Includes:</span> {tour.includes} </h2>


      <DubaiTourForm/>




{tour?.faq && (
  <div className="mt-10 w-full px-4">
    <h2 className="text-3xl font-bold text-gray-800 mb-6">FAQs</h2>
    <div className="space-y-4">
      {tour.faq.map((faq, index) => {
        const [open, setOpen] = useState(false);
        return (
          <div
            key={index}
            className="border border-gray-300 rounded-md overflow-hidden shadow-sm w-full transition duration-300 ease-in-out"
          >
            <div
              onClick={() => setOpen(!open)}
              className="cursor-pointer bg-gray-100 px-4 py-3 flex justify-between items-center"
            >
              <h3 className="text-black font-semibold">
                Q: {faq.question}
              </h3>
              <span className="text-gray-500 text-xl">
                {open ? "−" : "+"}
              </span>
            </div>

            <div
              className={`px-4 overflow-hidden transition-all duration-300 ease-in-out ${
                open ? "max-h-40 py-3 opacity-100" : "max-h-0 opacity-0"
              } bg-white text-sm text-teal-600 border-t border-gray-200`}
            >
              A: {faq.answer}
            </div>
          </div>
        );
      })}
    </div>
  </div>
)}


    
      </div>





      {/* More Details */}
      <div className="p-6">
      

        {/* Sections */}
        






        {/* Gallery
        {tour.details?.gallery && tour.details.gallery.length > 1 && (
          <div className="mt-10">
            <h2 className="text-2xl font-semibold text-gray-800 mb-4">Gallery</h2>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {tour.details.gallery.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Tour image ${index + 1}`}
                  className="rounded-lg w-full h-48 object-cover"
                />
              ))}
            </div>
          </div>
        )} */}
      </div>

      <Footer />
    </>
  );
};

export default Details;




