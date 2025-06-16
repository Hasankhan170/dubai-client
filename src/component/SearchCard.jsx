import { useParams } from "react-router-dom";
import { tours } from "../utils/tour";
import Card from "../component/TourCard";
import Header from "../component/Header";
import Navbar from "../component/Navbar";
import Footer from "../component/Footer";

const SearchCard = () => {
  const { name } = useParams(); // URL se string le raha
  const decodedName = decodeURIComponent(name || "").toLowerCase().trim();

  // Match title OR category (both are lowercased and trimmed)
  const filteredTours = tours.filter((tour) => {
    const tourTitle = tour.title?.toLowerCase().trim() || "";
    const tourCategory = tour.category?.toLowerCase().trim() || "";
    return tourTitle === decodedName || tourCategory === decodedName;
  });

  return (
    <>
      <Header />
      <Navbar />

      <div className="p-4">
        <h1 className="text-2xl font-bold mb-4 text-teal-800 capitalize">
          {decodedName}
        </h1>

        {filteredTours.length === 0 ? (
          <p className="text-red-500">
            No tours found with this title or category.
          </p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {filteredTours.map((tour, index) => (
              <Card
                key={tour.id || index}
                id={tour.id}
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

      <Footer />
    </>
  );
};

export default SearchCard;
