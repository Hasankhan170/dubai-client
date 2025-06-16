// components/CategoryCard.jsx
export default function CategoryCard({ title, image }) {
    return (
     <> 
     <div className="text-center ">
        <div className="w-[140px] h-[140px] md:w-[160px] md:h-[160px] mx-auto rounded-full overflow-hidden border-2 border-white shadow-lg">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
        <p className="mt-2  text-teal-800 font-bold cate-gory-text">{title}</p>
      </div>

      

      </>
    );
  }
  

