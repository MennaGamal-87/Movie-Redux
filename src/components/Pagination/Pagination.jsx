// import React from "react";
// import { Button, IconButton } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";

// export function Pagination() {
//   const [active, setActive] = React.useState(1);

//   const getItemProps = (index) => ({
//     variant: active === index ? "filled" : "text",
//     color: "blue",
//     onClick: () => setActive(index),
//     className: "rounded-full",
//   });

//   const next = () => {
//     if (active === 5) return;
//     setActive(active + 1);
//   };

//   const prev = () => {
//     if (active === 1) return;
//     setActive(active - 1);
//   };

//   return React.createElement(
//     "div",
//     { className: "flex items-center gap-6 absolute bottom-10 m-auto text-center" },
//     React.createElement(
//       Button,
//       {
//         variant: "text",
//         className: "flex items-center gap-2 rounded-full",
//         onClick: prev,
//         disabled: active === 1,
//       },
//       React.createElement(ArrowLeftIcon, { strokeWidth: 4, className: "h-4 w-4" }),
//       " Previous"
//     ),
//     React.createElement(
//       "div",
//       { className: "flex items-center gap-6  "},
      
//       React.createElement(IconButton, getItemProps(1), "1"),
//       React.createElement(IconButton, getItemProps(2), "2"),
//       React.createElement(IconButton, getItemProps(3), "3"),
//       React.createElement(IconButton, getItemProps(4), "4"),
//       React.createElement(IconButton, getItemProps(5), "5"
//     ),
//     React.createElement(
//       Button,
//       {
//         variant: "text",
//         className: "flex items-center gap-2 rounded-full",
//         onClick: next,
//         disabled: active === 5,
//       },
//       "Next",
//       React.createElement(ArrowRightIcon, { strokeWidth: 2, className: "h-4 w-4" })
//     )
// )
// ,)}



// import React from "react";
// import { IconButton, Typography } from "@material-tailwind/react";
// import { ArrowRightIcon, ArrowLeftIcon } from "@heroicons/react/24/outline";
// import { useNavigate } from "react-router-dom";
 
// export function Pagination() {
//     const navigate=useNavigate()
//   const [active, setActive] = React.useState(1);

//   const next = () => {
//     if (active === 10) return;
 
//     setActive(active + 1);
//   };
 
//   const prev = () => {
//     if (active === 1) return;
 
//     setActive(active - 1);
//   };
 
//   return (
//     <div className="flex items-center gap-8 absolute bottom-10 m-auto text-center">
//       <IconButton
//       className="text-sky-500 "
//         size="sm"
//         variant="outlined"
//         onClick={()=>{
//             prev()
//             navigate(`/movies/${active}`)
            
//         }}
//         disabled={active === 1}
//       >
//         <ArrowLeftIcon strokeWidth={2} className="h-4 w-4" />
//       </IconButton>
//       <Typography color="gray" className="font-normal">
//         Page <strong className="text-sky-500">{active}</strong> of{" "}
//         <strong className="text-sky-500">10</strong>
//       </Typography>
//       <IconButton
//        className="text-sky-500"
//         size="sm"
//         variant="outlined"
//         onClick={()=>{
//             next()
//             navigate(`/movies/${active}`)
//         }}
//         disabled={active === 10}
//       >
//         <ArrowRightIcon strokeWidth={2} className="h-4 w-4" />
//       </IconButton>
//     </div>
//   );
// }



import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";

const API_KEY = "24d38b4a145b9182f5e744b0a8a2c2c2";
const API_URL = "https://api.themoviedb.org/3/movie/popular";

const Pagination = () => {
    const navigate=useNavigate()
  const [movies, setMovies] = useState([]);
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(1);

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await fetch(`${API_URL}?api_key=${API_KEY}&page=${page}`);
        const data = await response.json();
        console.log(data.total_pages);
        
        setMovies(data.results);
        setTotalPages(data.total_pages);
      } catch (error) {
        console.error("Error fetching movies:", error);
      }
    };

    fetchMovies();
  }, [page]);

  return (
    <div className="p-4">
     
      
      {/* Movies Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {movies.map((movie) => (
          <div key={movie.id} className="p-2 border rounded-lg shadow m-2">
            <img
              src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              alt={movie.title}
              className="rounded-lg"
            />
            <h2 className="text-lg font-semibold mt-2">{movie.title}</h2>
          </div>
        ))}
      </div>

      {/* Pagination */}
      <div className="flex justify-center mt-6 space-x-2">
        {[...Array(Math.min(totalPages, 500)).keys()].map((num) => (
          <button
            key={num + 1}
            onClick={() =>{
                setPage(num + 1)
               
            }}
            className={`px-4 py-2 rounded-md ${
              page === num + 1 ? "bg-blue-500 text-white" : "bg-gray-300"
            }`}
          >
            {num + 1}
          </button>
        ))}
      </div>
    </div>
  );
};

export default Pagination;
