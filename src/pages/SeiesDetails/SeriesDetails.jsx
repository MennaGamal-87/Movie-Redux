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
import { getAKeywords } from "../../Redux/Slices/KeywordsSlice";
import { getRecommendations } from "../../Redux/Slices/RecommendationSlice";
import { getReviews } from "../../Redux/Slices/ReviewsSlice";
import RecommendSlider from "../../components/RecommendationsSlider/RecommendSlider";
import { TabsWithIcon } from "../../components/Tab/Tab";
import { ReviewTab } from "../../components/ReviewTab/ReviewTab";
import { MdAddToPhotos, MdOutlineSlowMotionVideo, MdOutlineStarRate } from "react-icons/md";
import { getSeriesDetails } from "../../Redux/Slices/SeriesDetailsSlice";


const SeriesDetails=()=>{
    const {id}=useParams();
    const navigate=useNavigate()
    const dispatch=useDispatch()
    var loading=useSelector((state)=>state.MovieDetails.loading)
    const movieActors =useSelector((state)=>state.MovieActors.MovieActor.cast)
    const crew =useSelector((state)=>state.MovieActors.MovieActor.crew)
    const SeriesDetails =useSelector((state)=>state.seriesDetails.SeriesDetail)
    console.log(SeriesDetails);
    
    const keywords=useSelector((state)=>state.Mkeywords.Keywords.keywords)
   const recommendations=useSelector((state)=>state.Recommendation.recommendations.results)
   const reviews=useSelector((state)=>state.Reviews.reviews.results)
   var count=0
    
    useEffect(()=>{
        dispatch(getSeriesDetails(id))
        dispatch(getMovieActors(id))
        dispatch(getAKeywords(id))
        dispatch(getRecommendations(id))
        dispatch(getReviews(id))
    },[])
    return(<>
            {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

        <div className="relative w-[100%] h-[90vh]  overflow-hidden shadow-lg">
            <img className="w-full h-full object-cover" src={`${imgBaseURL}${SeriesDetails.backdrop_path}`} alt="" />
            <div className="w-[100%] h-[90vh] absolute top-0 bg-black opacity-60">
              
            </div>
            <div className="w-[100%] h-full opacity-100 absolute top-0">
                <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8 text-center opacity-90" >Movie - Details</h1>
                <div className="w-[90%] h-auto p-2 pl-0 flex justify-evenly items-center m-auto ">
                    <div className="w-[30%]  h-auto p-5 pl-0 ">
                        <img className="object-fill" src={`${imgBaseURL}${SeriesDetails.poster_path}`} alt="" />
                    </div>
                    <div className="w-[60%] h-auto p-1 mb-10">
                        <h1 className="font-semibold text-white text-3xl m-0 mb-0 mt-0  opacity-90">{SeriesDetails.title}</h1>
                        <p className="mt-5">{SeriesDetails.release_date}({SeriesDetails.original_language})   -{SeriesDetails.runtime}min</p>
                        <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8  opacity-90">OverView : <span className="text-white text-[16px] font-semibold">{SeriesDetails.overview}</span></h1>
                        <h1 className="font-bold text-sky-400 text-3xl m-3 mb-2 mt-8  opacity-90">Casting</h1>
                        <div className="w-[90%] h-[35vh]  flex items-center justify-between flex-wrap">
                            <div className="w-[50%] ">
                                <h1 className="text-center text-[20px] font-semibold border-r-2">{movieActors&&movieActors[0].name}</h1>
                                <h1 className="text-center font-semibold text-amber-500">Acting</h1>
                            </div>
                            <div className="w-[49.5%] ">
                                <h1 className="text-center text-[20px] font-semibold border-l-2">{movieActors&&movieActors[1].name}</h1>
                                <h1 className="text-center font-semibold text-amber-500">Acting</h1>
                            </div>
                            <div className="w-[33%] border-r-2">
                                <h1>{crew&&crew.filter((person,index)=>{
                                     
                                    if(person.department=='Production'){
                                       
                                        count++;
                                       
                                    }
                                   
                                    // else if(count>1){
                                    //     console.log(person.department);
                                        
                                    //     return(
                                    //         <>
                                    //         <h1 key={index}>{person.department}</h1>
                                    //         </>
                                    //     )
                                    // }
                                })}</h1>
                                <h1 className="text-center font-semibold text-amber-500">Production</h1>
                            </div>
                            <div className="w-[33%] border-l-2 border-r-2">
                                <h1>{}</h1>
                                <h1 className="text-center font-semibold text-amber-500">Directing</h1>
                            </div>
                            <div className="w-[33%] border-l-2 ">
                                <h1>{}</h1>
                                <h1 className="text-center font-semibold text-amber-500">Production</h1>
                            </div>
                            <div className="w-[80%] h-auto m-auto flex justify-evenly">
                            <div className="w-[33%]  ">
                                <MdAddToPhotos  className="m-auto text-2xl mb-2 text-green-700"/>
                                <h1 className="text-center font-semibold ">AddTo WatchList</h1>
                            </div>
                            <div className="w-[33%] ">
                                <MdOutlineStarRate className="m-auto text-2xl mb-2 text-yellow-500"/>

                                <h1 className="text-center font-semibold ">Rate Movie</h1>
                            </div>
                            <div className="w-[33%]  ">
                                <MdOutlineSlowMotionVideo className="m-auto text-2xl mb-2 text-red-700"/>
                                <h1 className="text-center font-semibold ">Play Trailer</h1>
                            </div>
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
                <h1 onClick={()=>navigate(`/movieDetails/${SeriesDetails.id}/cast`)} className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90 hover:cursor-pointer">Full Cast & Crew</h1>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-5 mt-8  opacity-90">Social</h1>
                <ReviewTab movieId={id}/>
                <h1 onClick={()=>navigate(`/movieDetails/${SeriesDetails.id}/reviews`)} className="font-semibold  text-sky-400 text-[20px] m-3   opacity-90 hover:cursor-pointer">Read All Reviews</h1>

                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Media</h1>
                <TabsWithIcon movieId={id}/>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Recommendations</h1>
                <RecommendSlider movieId={id} recommendations={recommendations}/>
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
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0 opacity-90">{SeriesDetails.status}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Ariginal Language</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">{SeriesDetails.original_language}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Budget</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">{SeriesDetails.budget}</h1>
                </div>
                <div className="mt-2">
                    <h1 className="font-semibold text-white text-2xl m-3 mb-0 mt-8  opacity-90">Revenue</h1>
                    <h1 className="font-semibold text-sky-400 text-[20px] m-3 mb-2 mt-0  opacity-90">${SeriesDetails.revenue}</h1>
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
export default SeriesDetails;