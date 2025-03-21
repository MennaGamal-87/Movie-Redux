import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../Redux/Slices/AllMoviesSlice";
import { getAllSeries } from "../../Redux/Slices/AllSeiesSlice";
import Carsoul from "../../components/Carsoul/Carsoul";
import { getTopRatedSeries } from "../../Redux/Slices/TopSerieslice";
import { getTopRatedMovies } from "../../Redux/Slices/TopMoviesSlice";
import { useNavigate } from "react-router-dom";
import MovieCard from "../../components/Card/MovieCard";


const Home=() => {
  const navigate=useNavigate();
  var loading=useSelector((state)=>state.Movies.loading)
 
    const AllMovies =useSelector((state)=>state.Movies.Movies.results)
    
    const AllSeries=useSelector((state)=>state.Series.Series.results)
   
    const TopSeries =useSelector((state)=>state.TopSeries.TopRatedSeries.results)
  
    const TopMovies =useSelector((state)=>state.TopMovies.TopRatedMovies.results)
    console.log(loading)
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getAllMovies())
      dispatch(getAllSeries())
      dispatch(getTopRatedSeries())
      dispatch(getTopRatedMovies())
      
    },[])
    return(
        <>
        {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8 text-center">HOME</h1>
        <div className="w-[90%] m-auto flex justify-evenly items-center">
          <div onClick={()=>{navigate('/englishMovies')}} className={`bg-blue-700 rounded-[50%] w-[8%] h-[8vh] p-3 hover:cursor-pointer hover:bg-amber-50 hover:text-blue-500  transition duration-1500 hover:scale-150`}>
            <h1 className="text-white text-center hover:text-blue-600   text-2xl ">English</h1>
          </div>
          <div onClick={()=>{navigate('/arabicMovies')}} className="bg-blue-600 rounded-[50%] w-[8%] h-[8vh] p-2 hover:cursor-pointer hover:bg-amber-50 hover:text-blue-500  transition duration-1500 hover:scale-150">
            <h1 className="text-white text-center hover:text-blue-600   text-2xl">Arabic</h1>
          </div>
          <div onClick={()=>{navigate('/asianMovies')}} className="bg-blue-600 rounded-[50%] w-[8%] h-[8vh] p-2 hover:cursor-pointer hover:bg-amber-50 hover:text-blue-500  transition duration-1500 hover:scale-150">
            <h1 className="text-white text-center hover:text-blue-600   text-2xl">Asian</h1>
          </div>
        </div>
        <div className="w-[90%] m-auto mb-10">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">MOVIES</h1>
        <Carsoul data={AllMovies} type={'movie'}></Carsoul>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">SERIES</h1>
        <Carsoul data={AllSeries} type={'series'}></Carsoul>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">TOP MOVIES</h1>
        <MovieCard topData={TopMovies}/>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">TOP SERIES</h1>
        <MovieCard topData={TopSeries}></MovieCard>
        </div>
       
        
        </>
    )

};

export default Home;