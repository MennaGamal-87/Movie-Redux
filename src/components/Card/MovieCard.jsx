import { useState } from "react";
import { imgBaseURL } from "../Carsoul/Carsoul";
import { FaStar } from "react-icons/fa";
import { Rating } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const MovieCard=({topData})=>{
  console.log(topData);
  
   const navigate=useNavigate()
      const [isHovered, setIsHovered] = useState(false);
    return(
        <>
        <div className="w-[95%] h-auto flex justify-evenly flex-wrap m-auto">
        {topData&&topData.map((movie)=>{
            return(
                <div
                className={`w-[25%] h-auto bg-gray-900  rounded-xl m-1 mb-5 overflow-hidden shadow-lg transition-all duration-300 ${
                  isHovered ? "transform -translate-y-2 shadow-xl" : ""
                } `}
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                role="article"
                aria-label="Product card"
              >
                <div className="relative overflow-hidden  aspect-w-4 aspect-h-3 h-[50vh]">
                  <img
                    src={`${imgBaseURL}${movie.poster_path}`}
                    alt=''
                    className="object-fill w-[100%] h-full transition-transform duration-300 transform hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610824352934-c10d87b700cc";
                      e.target.alt = "Fallback product image";
                    }}
                  />
                </div>
          
                <div className="px-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-white truncate" title='{title}'>
                 {movie.original_title}
                  </h3>
          
                <div className="flex justify-between ">
                 
                  <div className="flex justify-evenly items-center mb-4" aria-label={`Rating: out of 5 stars`}>
                  
                    <span className="ml-2 text-sky-600 text-[20px] font-semibold">RATE: {movie.vote_average
                    }</span>
                  </div> 
                  <button
                    onClick={()=>navigate(`/movieDetails/${movie.id}`)}
                    className="w-[50%] bg-black border-sky-500 border-2 text-white font-semibold py-2 px-4 rounded-lg
                      transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2
                      focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 m-2 ml-8 mr-0"
                    // aria-label={buttonText}
                  >
                    Details
                  </button>
                </div>
          
               
                </div>
              </div>
            )
        })}
       
        </div>
        
        </>
    )
}
export default MovieCard;