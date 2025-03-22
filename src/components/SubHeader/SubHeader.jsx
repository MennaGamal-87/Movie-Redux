import { useEffect } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useNavigate, useParams } from "react-router-dom"
import { getMovieDetails } from "../../Redux/Slices/MovieDetailsSlice"
import { imgBaseURL } from "../Carsoul/Carsoul"
import { FaArrowLeft } from "react-icons/fa"

const SubHeader=()=>{
    const {MovieId}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const movieDetails =useSelector((state)=>state.MovieDetails.MovieDetail)
    useEffect(()=>{
            dispatch(getMovieDetails(MovieId))
            
        },[])
    return(
          <div className="w-[100%] h-[30vh] bg-gray-600 flex items-center mb-10">
                           <div className="w-[40%] h-[20vh] ml-30 flex justify-evenly items-center">
                               <img className="w-[25%] h-[25vh] rounded-2xl" 
                               src={`${imgBaseURL}${movieDetails.poster_path}`} 
                               alt="" />
                               <div>
                               <h1 className="font-semibold text-white text-[27px] m-3 mb-0 mt-4  opacity-90">
                                {movieDetails.title} ({movieDetails.release_date})
                                </h1>
                               <div onClick={()=>navigate(`/movieDetails/${MovieId}`)} className=" flex justify-between items-center w-[30%] m-3 hover:cursor-pointer">
                               <FaArrowLeft className="text-[16px]" />
                               <p className="mt-0">Back to main</p>
                               </div>
                               </div>
                           </div>
                       </div>
    )
}
export default SubHeader;