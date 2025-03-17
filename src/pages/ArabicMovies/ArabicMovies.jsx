import { useDispatch, useSelector } from "react-redux";
import { getArabicMovies } from "../../Redux/Slices/ArabicMoviesSlice";
import MovieCard from "../../components/Card/MovieCard";
import { useEffect } from "react";

const ArabicMovies=()=>{
    const dispatch=useDispatch()
    const arabicMovie=useSelector((state)=>state.ArabicMovie.arabichMov.results)
    console.log(arabicMovie);
    useEffect(()=>{
        dispatch(getArabicMovies())
    },[])
    return(<>
     <h1 className="font-bold text-sky-400 text-3xl m-3 mb-9 mt-8 text-center opacity-90" >Arabic Movies</h1>
     <MovieCard topData={arabicMovie}></MovieCard>
    </>)
}
export default ArabicMovies;