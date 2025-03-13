import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllMovies } from "../../Redux/Slices/AllMoviesSlice";
import { getAllSeries } from "../../Redux/Slices/AllSeiesSlice";
import Carsoul from "../../components/Carsoul/Carsoul";
import { getTopRatedSeries } from "../../Redux/Slices/TopSerieslice";
import { getTopRatedMovies } from "../../Redux/Slices/TopMoviesSlice";
import { useNavigate } from "react-router-dom";


const Home=() => {
  const navigate=useNavigate();
  const loading=useSelector((state)=>state.loading)
    const AllMovies =useSelector((state)=>state.Movies.Movies.results)
    console.log(AllMovies)
    const AllSeries=useSelector((state)=>state.Series.Series.results)
    console.log(AllSeries)
    const TopSeries =useSelector((state)=>state.TopSeries.TopRatedSeries.results)
    console.log(TopSeries)
    const TopMovies =useSelector((state)=>state.TopMovies.TopRatedMovies.results)
    console.log(TopMovies)
    const dispatch=useDispatch();
    useEffect(()=>{
      dispatch(getAllMovies())
      dispatch(getAllSeries())
      dispatch(getTopRatedSeries())
      dispatch(getTopRatedMovies())
      
    },[])
    return(
        <>
        {loading&&(<span className="loader"></span>)}
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8 text-center">HOME</h1>
        <div className="w-[90%] m-auto flex justify-evenly items-center">
          <div onClick={()=>{navigate('/englishMovies')}} className={`bg-blue-700 rounded-[50%] w-[8%] h-[8vh] p-2 hover:cursor-pointer hover:bg-amber-50 hover:text-blue-600 transition 1s hover:transform-`}>
            <h1 className="text-white text-center   text-2xl">English</h1>
          </div>
          <div className="bg-blue-600 rounded-[50%] w-[8%] h-[8vh] p-2">
            <h1 className="text-white text-center  text-2xl">Arabic</h1>
          </div>
          <div className="bg-blue-600 rounded-[50%] w-[8%] h-[8vh] p-2">
            <h1 className="text-white text-center  text-2xl">Asian</h1>
          </div>
        </div>
        <div className="w-[90%] m-auto mb-10">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">MOVIES</h1>
        <Carsoul data={AllMovies}></Carsoul>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">SERIES</h1>
        <Carsoul data={AllSeries}></Carsoul>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">TOP MOVIES</h1>
        <Carsoul data={TopMovies}></Carsoul>
        </div>
        <div className="w-[90%] m-auto">
        <h1 className="font-bold text-blue-600 text-3xl m-3 mb-8">TOP SERIES</h1>
        <Carsoul data={TopSeries}></Carsoul>
        </div>
       
        
        </>
    )

};

export default Home;