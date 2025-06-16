

import { useParams } from "react-router-dom";
import { tours } from "../utils/tour";
import Card from "../component/TourCard";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const CategoryPage = () => {
  const { name } = useParams(); // <-- change from categoryName to name
  const decodedName = decodeURIComponent(name || '');

  const filteredTours = tours.filter(
    (tour) => tour.name  === decodedName
  );

  return (
   <>
    <Header/>
    <Navbar/>

    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4 text-teal-800">
        {decodedName}
      </h1>

      {filteredTours.length === 0 ? (
        <p>No tours found with this name.</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTours.map((tour, index) => (
            <Card
              key={index}
              id={index}
              title={tour.title}
              image={tour.image}
              duration={tour.duration}
              rating={tour.rating}
              price={tour.price}
            />
          ))}
        </div>
      )}
    </div>

    <Footer/>
   
   </>
  );
};

export default CategoryPage;
