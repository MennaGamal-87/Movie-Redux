import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getMovieDetails } from "../../Redux/Slices/MovieDetailsSlice";
import { imgBaseURL } from "../../components/Carsoul/Carsoul";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import Scroller from "../../components/Slider/Slider";
import { getMovieActors } from "../../Redux/Slices/MovieActorsSlice";
import Tab from "../../components/Tab/Tab";
import { getAKeywords } from "../../Redux/Slices/KeywordsSlice";
import { getRecommendations } from "../../Redux/Slices/RecommendationSlice";
import { getReviews } from "../../Redux/Slices/ReviewsSlice";

const MovieDetails=()=>{
    const {id}=useParams();
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const movieActors =useSelector((state)=>state.MovieActors.MovieActor.cast)
    const movieDetails =useSelector((state)=>state.MovieDetails.MovieDetail)
    const keywords=useSelector((state)=>state.Mkeywords.Keywords.keywords)
   const recommendations=useSelector((state)=>state.Recommendation.recommendations.results)
   const reviews=useSelector((state)=>state.Reviews.reviews.results)
    console.log(reviews);
    
    useEffect(()=>{
        dispatch(getMovieDetails(id))
        dispatch(getMovieActors(id))
        dispatch(getAKeywords(id))
        dispatch(getRecommendations(id))
        dispatch(getReviews(id))
    },[])
    return(<>
        <div className="relative w-[100%] h-[90vh]  overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={`${imgBaseURL}${movieDetails.backdrop_path}`} alt="" />
            <div className="w-[100%] h-[90vh] absolute top-0 bg-black opacity-60">
              
            </div>
            <div className="w-[100%] h-full opacity-100 absolute top-0">
                <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8 text-center opacity-90" >Movie - Details</h1>
                <div className="w-[90%] h-auto p-2 pl-0 flex justify-evenly items-center m-auto ">
                    <div className="w-[30%]  h-auto p-5 pl-0 ">
                        <img className="object-fill" src={`${imgBaseURL}${movieDetails.poster_path}`} alt="" />
                    </div>
                    <div className="w-[50%] h-auto">
                        <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">{movieDetails.title}</h1>
                        <p>{movieDetails.release_date}({movieDetails.original_language})  -{movieDetails.runtime}min</p>
                        <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8 text-center opacity-90">OverView : <span className="text-white text-[16px]">{movieDetails.overview}</span></h1>
                        <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8 text-center opacity-90">Casting</h1>
                        <div className="w-[90%] h-[30vh]] bg-amber-200">
                            <div className="w-50%">
                                <h1 className=""></h1>
                            </div>
                        </div>
                    </div>

                </div>

                </div>
          
        </div>
        <div className="w-[95%] m-auto h-auto p-2 pt-9 flex justify-evenly bg-black">
            <div className="w-[70%] h-auto  pt-1">
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Top Billed Cast</h1>
                <div className="w-[100%]  m-auto flex flex-nowrap scroll-auto justify-evenly mb-0">
                  <Scroller movieId={id} cast={movieActors}/>
                </div>
                <h1 onClick={()=>navigate(`/movieDetails/${movieDetails.id}/cast`)} className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-0  opacity-90 hover:cursor-pointer">Full Cast & Crew</h1>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Social</h1>
                <Tab/>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Media</h1>
                <Tab/>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Recommendations</h1>
                <Scroller/>
            </div>
            <div className="w-[25%] h-auto  pt-6">
                <div className="w-[80%] pl-2 text-sky-400 flex justify-between items-center text-3xl">
                <FaFacebook  />
                <FaTwitter />
                <FaInstagram />
                <FaHome />

                </div>
                <div className="w-[90%] mt-5 pt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Status</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0 opacity-90">{movieDetails.status}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Ariginal Language</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">{movieDetails.original_language}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Budget</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">{movieDetails.budget}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Revenue</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">${movieDetails.revenue}</h1>
                </div>
                <div>
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Keywords</h1>
                    <div className="flex justify-evenly flex-wrap w-[90%]  m-auto">
                    {keywords&&keywords.map((keyword)=>{
                        return(
                                <h1 className=" rounded-3xl bg-amber-50 text-black m-auto text-center p-2 my-2">{keyword.name}</h1>
                        )
                    })}
                    </div>
                </div>
            </div>
        </div>
        
    </>)
}
export default MovieDetails;