import Header from "../component/Header";
import Navbar from "../component/Navbar";
import CategoryCard from "../component/CategoryCard";
import TourCard from "../component/TourCard";
import SectionHeading from "../component/Sectionheading";
import Footer from "../component/Footer";
import categories from "../utils/categories";



import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "../App.css"
import "swiper/css/autoplay";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import 'swiper/css/navigation';
import 'swiper/css/pagination'

import Slider from "../component/Slider";
import { Faqs } from "../component/Faqs";
import Card from "../component/TourCard";
import {tours} from "../utils/tour.js";

export default function Home() {
  return (
    <div className="font-sans text-gray-800 ">
      <Header />
      <Navbar />

      <Slider/>

      {/* Tour Categories Section - Slider */}
      <div className="w-full py-10">
      <h2 className="text-center text-3xl font-bold text-teal-800 mb-6">Tour Category</h2>

      <div className="relative w-full bg-gray-100 py-8 ">
        <Swiper
          modules={[Autoplay, Pagination, Navigation]}
          spaceBetween={15} // gap between cards
          slidesPerView={2}
          loop={true}
          autoplay={{ delay: 2000, disableOnInteraction: false }}
          speed={800}
          
          navigation={true}
          breakpoints={{
            640: { slidesPerView: 3 },
            768: { slidesPerView: 4 },
            1024: { slidesPerView: 5 },
            1280: { slidesPerView: 6 },
          }}
          className="w-full px-6"
        >
          {categories.map((item, idx) => (
            <SwiperSlide key={idx} className="flex justify-center">
              <CategoryCard title={item.title} image={item.image} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* Swiper custom navigation button size fix */}
        <style>
  {`
    .swiper-button-next,
    .swiper-button-prev {
      width: 30px;
      height: 30px;
      background: #0f766e;
      color: white;
      border-radius: 50%;
      top: 40%;
      transform: translateY(-50%);
      transform: translateY(50%);
    }

    .swiper-button-next::after,
    .swiper-button-prev::after {
      font-size: 16px;
    }

    .swiper-button-prev {
      left: 0;
    }

    .swiper-button-next {
      right: 0;
    }
  `}
</style>

      </div>
    </div>

    <h2 style={{textAlign:"center"}} className="text-4xl font-bold  text-teal-800  mb-4">Popular Tours in Dubai</h2>

    <div className="show-card">
      {tours.map((tour) => (
        <Card key={tour.id} id={tour.id} title={tour.title} image={tour.image} duration={tour.duration} city={tour.city} price={tour.price} />
      ))}
    </div>

      {/* Popular Tours Section - Slider */}
      
    
    <Faqs/>

      <Footer />
    </div>
  );
}