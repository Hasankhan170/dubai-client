import { Link } from "react-router-dom";
import { FaRegClock, FaStar, FaStarHalfAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";

const Card = ({ id, title, image, duration, price , city}) => {
  const renderStars = () => (
    <div className="flex gap-1 text-yellow-500 mt-1 text-lg px-2">
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStar />
      <FaStarHalfAlt />
    </div>
  );

  return (
    <div className=" rounded py-4 shadow-md w-[350px] mb-4 cards- ">
      <img src={image} alt={title} className="w-full h-50 object-fill rounded img-c" />
      
      <h2 className="text-lg text-teal-800 font-semibold mt-2 px-2">{title}</h2>
      
      {/* Show stars instead of rating number */}
      {renderStars()}

      <div className="city flex items-center gap-[14px] px-2">
        <h2 className="text-md   mt-2 flex items-center gap-[10px]"> <span className="text-teal-800"><FaRegClock /></span>{duration}</h2>
        <h2 className="text-md   mt-2 flex items-center gap-[10px]"> <span className="text-teal-800 " ><FaLocationDot /></span>{city}</h2>

      </div>

      {/* You had duplicated duration twice, keeping only one here */}

      <div className="city flex items-center gap-[14px] justify-between px-2">

     <div className="price">
        <h2 className="   mt-2 flex items-center gap-[10px] text-teal-800 ">AED : {price}</h2>
      </div>

       <Link to={`/details/${id}`}>
      <button className="mt-3 bg-teal-800 text-white px-2 font-medium py-1.5 rounded text-sm">
        View Details
       </button>
      </Link>


     

      </div>


    </div>
  );
};

export default Card;
