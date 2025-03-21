import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getEnglishMovies } from "../../Redux/Slices/EnglishMoviesSlices";
import MovieCard from "../../components/Card/MovieCard";

const EnglishMovies=()=>{
    var loading=useSelector((state)=>state.EnglishMovie.loading)

    const dispatch=useDispatch()
    const englishMovie=useSelector((state)=>state.EnglishMovie.englishMov.results)
    // console.log(englishMovie);
    useEffect(()=>{
        dispatch(getEnglishMovies())
    },[])
    return(
        <>
         <h1 className="font-bold text-sky-400 text-3xl m-3 mb-9 mt-8 text-center opacity-90" >English Movies</h1>
         {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

        <MovieCard topData={englishMovie}/>
        </>
    )
}
export default EnglishMovies;