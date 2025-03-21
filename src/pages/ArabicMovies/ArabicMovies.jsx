import { useDispatch, useSelector } from "react-redux";
import { getArabicMovies } from "../../Redux/Slices/ArabicMoviesSlice";
import MovieCard from "../../components/Card/MovieCard";
import { useEffect } from "react";

const ArabicMovies=()=>{
    const dispatch=useDispatch()
    const arabicMovie=useSelector((state)=>state.ArabicMovie.arabichMov.results)
    var loading=useSelector((state)=>state.ArabicMovie.loading)

    // console.log(arabicMovie);
    useEffect(()=>{
        dispatch(getArabicMovies())
    },[])
    return(<>
     <h1 className="font-bold text-sky-400 text-3xl m-3 mb-9 mt-8 text-center opacity-90" >Arabic Movies</h1>
     {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

     <MovieCard topData={arabicMovie}></MovieCard>
    </>)
}
export default ArabicMovies;