// src/features/movies/MovieList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMovies, setCurrentPage } from '../../Redux/Slices/MoviesSlice';
import { imgBaseURL } from '../Carsoul/Carsoul';
import MovieCard from '../Card/MovieCard';
import { useNavigate } from 'react-router-dom';

const MovieList = () => {
    const navigate=useNavigate()
  const dispatch = useDispatch();
  const { movies, status, error, currentPage, totalPages } = useSelector(
    (state) => state.mov
  );
      const [isHovered, setIsHovered] = useState(false);

  // Fetch movies when the component mounts or the page changes
  useEffect(() => {
    dispatch(fetchMovies(currentPage));
  }, [currentPage, dispatch]);

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      const nextPage = currentPage + 1;
      dispatch(setCurrentPage(nextPage));
    }
  };

  const handlePreviousPage = () => {
    if (currentPage > 1) {
      const prevPage = currentPage - 1;
      dispatch(setCurrentPage(prevPage));
    }
  };

  return (
    <div>
     

      {status === 'loading' && <span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>}
      {status === 'failed' && <p className='text-center text-2xl font-bold'> {error}</p>}
      {status === 'succeeded' && (
        <>
        <div className='w-[99%] h-auto m-auto p-2 flex justify-evenly flex-wrap items-center '>
          {movies&&movies.map((movie,index) => (
               <div
               className={`w-[20%] h-auto bg-gray-900  rounded-xl m-1 mb-5 overflow-hidden shadow-lg transition-all duration-300 ${
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
            // <MovieCard topData={movie}/>
            // <div key={index} className='w-[30%] bg-amber-900'>
            //   <h2 className=''>{movie.title}</h2>
            //   <p>{movie.overview}</p>
            //   {movie.poster_path && (
            //     <img
            //       src={`${imgBaseURL}${movie.poster_path}`}
            //       alt={movie.title}
            //       style={{ width: '200px' }}
            //     />
            //   )}
            //   <hr />
            // </div>
          ))}
        
        </div>
          <div className=' text-center my-9'>
          <button
          className='bg-sky-500 p-2 rounded-2xl font-bold'
            onClick={handlePreviousPage}
            disabled={currentPage === 1}
          >
            Prev
          </button>
          <span className='font-semibold text-[18px] m-5'>
            Page {currentPage} of {totalPages}
          </span>
          <button
                    className='bg-sky-500 p-2 rounded-2xl font-bold'

            onClick={handleNextPage}
            disabled={currentPage === totalPages}
          >
            Next
          </button>
        </div>
        </>
      )}
      </div>
 
  );
};

export default MovieList;