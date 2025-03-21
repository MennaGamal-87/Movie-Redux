import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAsianMovies } from "../../Redux/Slices/AsianMoviesSlice";
import MovieCard from "../../components/Card/MovieCard";



    const AsianMovies=()=>{
        const dispatch=useDispatch()
        const asianMovie=useSelector((state)=>state.AsianMovie.asianMov.results)
        var loading=useSelector((state)=>state.AsianMovie.loading)

        // console.log(asianMovie);
        useEffect(()=>{
            dispatch(getAsianMovies())
        },[])
    return(
        <>
         <h1 className="font-bold text-sky-400 text-3xl m-3 mb-9 mt-8 text-center opacity-90" >Asian Movies</h1>
         {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

         <MovieCard topData={asianMovie}/>
        </>
    )
    }
export default AsianMovies;