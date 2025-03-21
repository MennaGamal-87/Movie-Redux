

// import React, { useState, useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import MovieCard from "../Card/MovieCard";

// const API_KEY = "24d38b4a145b9182f5e744b0a8a2c2c2";
// const API_URL = "https://api.themoviedb.org/3/tv/popular";

// const SeriesPagination = () => {
//     const navigate=useNavigate()
//   const [Series, setSeries] = useState([]);
//   const [page, setPage] = useState(1);
//   const [totalPages, setTotalPages] = useState(1);

//   useEffect(() => {
//     const fetchSeries = async () => {
//       try {
//         const response = await fetch(`${API_URL}?api_key=${API_KEY}&page=${page}`);
//         const data = await response.json();
//         // console.log(data.total_pages);
        
//         setSeries(data.results);
//         setTotalPages(data.total_pages);
//       } catch (error) {
//         console.error("Error fetching Series:", error);
//       }
//     };

//     fetchSeries();
//   }, [page]);

//   return (
//     <div className="p-4">
     
//       <MovieCard topData={Series}/>
//       {/* Series Grid */}
//       {/* <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
//         {Series.map((movie) => (
//           <div  key={movie.id} className="p-2 border rounded-lg shadow m-2">
//             <img
//             // onClick={navigate(`/movieDetails/${movie.id}`)}
//               src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
//               alt={movie.title}
//               className="rounded-lg"
//             />
//             <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
//           </div>
//         ))}
//       </div> */}

//       {/* Pagination */}
//       <div className="flex justify-center mt-6 space-x-2 flex-wrap">
//         {[...Array(Math.min(totalPages, 500)).keys()].map((num) => (
//           <button
//             key={num + 1}
//             onClick={() =>{
//                 setPage(num + 1)
               
//             }}
//             className={`px-4 py-2 rounded-md ${
//               page === num + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
//             }`}
//           >
//             {num + 1}
//           </button>
//         ))}
//       </div>
//     </div>
//   );
// };

// export default SeriesPagination;



// src/features/movies/MovieList.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchSeries, setCurrentPage } from '../../Redux/Slices/SeriesSlice';
import { imgBaseURL } from '../Carsoul/Carsoul';
import { useNavigate } from 'react-router-dom';

const SeriesList = () => {
  
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { series, status, error, currentPage, totalPages } = useSelector(
    (state) => state.seri
  );

  // Fetch series when the component mounts or the page changes
  useEffect(() => {
    dispatch(fetchSeries(currentPage));
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
          <div className='w-[99%] h-auto m-auto p-2 flex justify-evenly flex-wrap items-center'>
            {series && series.map((movie, index) => (
              <div
                key={movie.id}
                className='w-[20%] h-auto bg-gray-900 rounded-xl m-1 mb-5 overflow-hidden shadow-lg transition-all duration-300 hover:transform hover:-translate-y-2 hover:shadow-xl'
                role="article"
                aria-label="Series card"
              >
                <div className="relative overflow-hidden aspect-w-4 aspect-h-3 h-[50vh]">
                  <img
                    src={`${imgBaseURL}${movie.poster_path}`}
                    alt={movie.name || movie.original_title}
                    className="object-fill w-[100%] h-full transition-transform duration-300 transform hover:scale-105"
                    onError={(e) => {
                      e.target.src = "https://images.unsplash.com/photo-1610824352934-c10d87b700cc";
                      e.target.alt = "Fallback series image";
                    }}
                  />
                </div>

                <div className="px-6 py-4">
                  <h3 className="font-bold text-xl mb-2 text-white truncate" title={movie.name || movie.original_title}>
                    {movie.name || movie.original_title}
                  </h3>

                  <div className="flex justify-between">
                    <div className="flex justify-evenly items-center mb-4" aria-label={`Rating: ${movie.vote_average} out of 10`}>
                      <span className="ml-2 text-sky-600 text-[20px] font-semibold">RATE: {movie.vote_average}</span>
                    </div>
                    <button
                      onClick={() => navigate(`/seriesDetails/${movie.id}`)}
                      className="w-[50%] bg-black border-sky-500 border-2 text-white font-semibold py-2 px-4 rounded-lg transition-all duration-300 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50 active:bg-blue-800 m-2 ml-8 mr-0"
                    >
                      Details
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className='text-center my-9'>
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

export default SeriesList;