import React, { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { imgBaseURL } from "../Carsoul/Carsoul";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const Scroller = ({cast,movieId}) => {
  const scrollContainerRef = useRef(null);
  const [showButton, setShowButton] = useState(true);

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
    <div className="relative w-full mx-auto px-1 pt-8 py-2">
      <div
        className="relative overflow-hidden"
        onWheel={handleWheel}
      >
        <div
          ref={scrollContainerRef}
          className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth h-full"
          onScroll={handleScroll}
        >
          {cast&&cast.map((actor) => (
            <div
              key={actor.id}
              className="flex-none w-[15%] h-[45vh] bg-gray-600 rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105"
              role="article"
              onClick={()=>navigate(`/movieDetails/${movieId}/actor/${actor.id}`)}
            >
              <div className="relative h-48 w-full">
                <img
                  src={`${imgBaseURL}${actor.profile_path}`}
                  alt={actor.title}
                  className="w-full h-full object-cover"
                  loading="lazy"
                  onError={(e) => {
                    e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa";
                  }}
                />
              </div>
              <div className="p-4">
                <h3 className="text-[20px] font-semibold mb-2">{actor.name}</h3>
              
              </div>
            </div>
          ))}
           <div
              className="flex-none w-[15%] h-[45vh] p-2 pt-30  rounded-xl shadow-lg overflow-hidden transition-transform hover:scale-105 hover:cursor-pointer"
              role="article"
            >
                <button onClick={()=>navigate(`/movieDetails/${movieId}/cast`)} ><FaArrowRight className="text-center" />
                Show more</button>
            </div>
        </div> 

        {showButton && (
          <button
            onClick={scrollRight}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/90 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 z-10 focus:outline-none focus:ring-2 focus:ring-indigo-500"
            aria-label="Show more items"
          >
            <FaChevronRight className="text-indigo-600 text-xl" />
          </button>
        )}
      </div>
    </div>
  );
};

export default Scroller;
