import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnglishMovies } from "../../Redux/Slices/EnglishMoviesSlices";
import MovieCard from "../../components/Card/MovieCard";

const EnglishMovies=()=>{
    const dispatch=useDispatch()
    const englishMovie=useSelector((state)=>state.EnglishMovie.englishMov.results)
    console.log(englishMovie);
    useEffect(()=>{
        dispatch(getEnglishMovies())
    },[])
    return(
        <>
         <h1 className="font-bold text-sky-400 text-3xl m-3 mb-9 mt-8 text-center opacity-90" >English Movies</h1>
        <MovieCard topData={englishMovie}/>
        </>
    )
}
export default EnglishMovies;