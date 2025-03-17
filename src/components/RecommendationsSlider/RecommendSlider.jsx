import React, { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { imgBaseURL } from "../Carsoul/Carsoul";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const RecommendSlider = ({recommendations,movieId}) => {
  const scrollContainerRef = useRef(null);
  const [showButton, setShowButton] = useState(true);
  console.log(recommendations);
  
  const navigate=useNavigate()
//   const items = [
//     {
//       id: 1,
//       title: "Mountain Trek",
//       image: "https://images.unsplash.com/photo-1454496522488-7a8e488e8606",
//       description: "Scenic mountain views and adventures",
//       price: "$299"
//     },
//     {
//       id: 2,
//       title: "Beach Resort",
//       image: "https://images.unsplash.com/photo-1520483601560-389dff434fdf",
//       description: "Relaxing beachfront getaway",
//       price: "$399"
//     },
//     {
//       id: 3,
//       title: "City Explorer",
//       image: "https://images.unsplash.com/photo-1449824913935-59a10b8d2000",
//       description: "Urban adventures and experiences",
//       price: "$199"
//     },
//     {
//       id: 4,
//       title: "Forest Retreat",
//       image: "https://images.unsplash.com/photo-1448375240586-882707db888b",
//       description: "Peaceful nature getaway",
//       price: "$249"
//     },
//     {
//       id: 5,
//       title: "Desert Safari",
//       image: "https://images.unsplash.com/photo-1509316785289-025f5b846b35",
//       description: "Experience desert adventures",
//       price: "$349"
//     },
//     {
//       id: 6,
//       title: "Island Paradise",
//       image: "https://images.unsplash.com/photo-1499793983690-e29da59ef1c2",
//       description: "Tropical island experience",
//       price: "$599"
//     }
//   ];

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const scrollAmount = container.offsetWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });

      // Check if we've reached the end
      setTimeout(() => {
        if (
          container.scrollLeft + container.offsetWidth >=
          container.scrollWidth - 20
        ) {
          setShowButton(false);
        }
      }, 400);
    }
  };

  const handleScroll = () => {
    if (scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      if (
        container.scrollLeft + container.offsetWidth >=
        container.scrollWidth - 20
      ) {
        setShowButton(false);
      } else {
        setShowButton(true);
      }
    }
  };

  const handleWheel = (e) => {
    if (scrollContainerRef.current) {
      e.preventDefault();
      scrollContainerRef.current.scrollLeft += e.deltaY;
      handleScroll();
    }
  };

  return (
    <div className="relative w-full mx-auto px-1 py-8">
      <div
        className="relative overflow-hidden"
        onWheel={handleWheel}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth h-full"
          onScroll={handleScroll}
        >
          {recommendations&&recommendations.map((  recomm) => (
            <div
              key={ recomm.id}
              className="flex-none w-[35%] h-[75vh] bg-gray-600  shadow-lg overflow-hidden transition-transform hover:scale-105 p-1"
              role="article"
              onClick={()=>navigate(`/movieDetails/${recomm.id}`)}
            >
              <div className="relative h-[65vh] w-full m-2 mr-2 m-auto">
                <img
                  src={`${imgBaseURL}${  recomm.poster_path}`}
                  alt={  recomm.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-[16px] font-semibold text-center ">{  recomm.original_title
                }</h3>
              
              </div>
            </div>
          ))}
          
        </div> 

        
      </div>
    </div>
  );
};

export default RecommendSlider;
