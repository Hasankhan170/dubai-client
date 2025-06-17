


import { tours } from "../utils/tour";
import { useState } from "react";
import {
  FaPhoneAlt,
  FaEnvelope,
  FaSearch,
  FaShoppingCart,
  FaFacebookF,
  FaInstagram,
} from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

export default function Header() {
  const [searchText, setSearchText] = useState("");
  const [filteredTours, setFilteredTours] = useState([]);
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const value = e.target.value;
    setSearchText(value);

    const input = value.trim().toLowerCase();

    if (input === "") {
      setFilteredTours([]);
    } else {
      const matched = tours.filter((tour) =>
        tour.title.toLowerCase().includes(input)
      );
      setFilteredTours(matched);
    }
  };

 const handleSearch = () => {
  const input = searchText.trim().toLowerCase();

  const match = tours.find((tour) =>
    tour.title.toLowerCase().includes(input) ||
    tour.category.toLowerCase().includes(input)
  );

  if (match) {
    navigate(`/category/${encodeURIComponent(match.title)}`);
  } else {
    alert("No tours found with this title or category.");
  }
};


  return (
    <div className="w-full bg-teal-700 text-white px-4 py-3 flex flex-wrap items-center justify-between gap-3">
      {/* Left: Contact Info */}
      <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm sm:text-md">
        <div className="flex items-center gap-1">
          <FaPhoneAlt />
          <span>+971 52397 9183</span>
        </div>
        <span className="hidden sm:inline">|</span>
        <div className="flex items-center gap-1">
          <FaEnvelope />
          <span className="break-all">tym.paradise@gmail.com</span>
        </div>
      </div>

      {/* Center: Search Bar */}
      <div className="w-full sm:w-auto flex flex-col items-start sm:flex-row sm:items-center bg-gray-100 rounded overflow-hidden text-black relative">
        <div className="flex w-full sm:w-auto">
          <input
            type="text"
            placeholder="Search tour title or category..."
            className="px-3 py-1 outline-none w-full sm:w-64"
            value={searchText}
            onChange={handleInputChange}
            onKeyDown={(e) => e.key === "Enter" && handleSearch()}
          />
          <button
            onClick={handleSearch}
            className="bg-gray-700 px-3 py-2.5 text-white"
          >
            <FaSearch />
          </button>
        </div>

        {/* Live Suggestions */}
        {filteredTours.length > 0 && (
          <div className="absolute top-full mt-1 bg-white w-full sm:w-64 border border-gray-300 z-50 text-black max-h-60 overflow-y-auto shadow-lg">
            {filteredTours.map((tour) => (
              <div
                key={tour.id}
                className="px-3 py-2 hover:bg-gray-200 cursor-pointer text-sm"
                onClick={() =>
                  navigate(`/category/${encodeURIComponent(tour.title)}`)
                }
              >
                {tour.title}
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Right: Icons */}
      <div className="flex items-center gap-3 sm:gap-4 text-lg mt-2 sm:mt-0 mr-6">
       
        <FaFacebookF className="cursor-pointer" />
        <FaXTwitter className="bg-black p-1 rounded cursor-pointer" />
        <FaInstagram className="text-pink-500 bg-white p-1 rounded cursor-pointer" />
      </div>
    </div>
  );
}
