import React, { useRef, useState } from "react";
import { FaChevronRight } from "react-icons/fa";
import { imgBaseURL } from "../Carsoul/Carsoul";
import { FaArrowRight } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

const PostersSlider = ({data,movieId,type}) => {
  const scrollContainerRef = useRef(null);
  const [showButton, setShowButton] = useState(true);
//   console.log(data);
  
  const navigate=useNavigate()


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
          {data&&data.map((poster,index) => {
          if(index <7){
            return(
                <div
                key={poster.id}
                className="flex-none w-[35%] h-[62vh] bg-gray-600  shadow-lg overflow-hidden transition-transform hover:scale-105 p-1"
                role="article"
                onClick={()=>navigate(`/movieDetails/${poster.id}`)}
              >
                <div className="relative h-[55vh] w-full m-2 mr-2 m-auto">
                  <img
                    src={`${imgBaseURL}${poster.file_path}`}
                    alt={  poster.title}
                    className="w-full h-full object-cover"
                    loading="lazy"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1560518883-ce09059eeffa";
                    }}
                  />
                </div>
                <div className="p-4">
                  <h3 className="text-[16px] font-semibold text-center ">{poster.original_title
                  }</h3>
                
                </div>
              </div>
               )
          }})}
           <div
              
                className="flex-none w-[35%] h-[60vh] bg-gray-600  shadow-lg overflow-hidden transition-transform hover:scale-105 p-9 pt-35"
                role="article"
                onClick={()=>navigate(`/movieDetails/${movieId}/${type}`)}
              >
                  <button className="text-white" onClick={()=>navigate(`/movieDetails/${movieId}/${type}`)} ><FaArrowRight className="text-center text-white" />
                                Show more</button>
              </div>

          
        </div> 

        
      </div>
    </div>
  );
};

export default PostersSlider;
