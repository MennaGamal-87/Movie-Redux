import { act, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getMovieDetails } from "../../Redux/Slices/MovieDetailsSlice";
import { imgBaseURL } from "../../components/Carsoul/Carsoul";
import { useNavigate, useParams } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
import { getMovieActors } from "../../Redux/Slices/MovieActorsSlice";
import SubHeader from "../../components/SubHeader/SubHeader";

const Cast=()=>{
    const {MovieId}=useParams()
    const dispatch=useDispatch()
    const navigate=useNavigate()
    const movieDetails =useSelector((state)=>state.MovieDetails.MovieDetail)
    const cast =useSelector((state)=>state.MovieActors.MovieActor.cast)
    const crew =useSelector((state)=>state.MovieActors.MovieActor.crew)
    var loading=useSelector((state)=>state.MovieActors.loading)

//   console.log(crew);
  
    useEffect(()=>{
        dispatch(getMovieDetails(MovieId))
        dispatch(getMovieActors(MovieId))
    },[])
    return(
        <>
        <SubHeader/>
        {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

        {/* <div className="w-[100%] h-[30vh] bg-gray-600 flex items-center mb-10">
            <div className="w-[40%] h-[20vh] flex justify-evenly items-center">
                <img className="w-[25%] h-[25vh] rounded-2xl" src={`${imgBaseURL}${movieDetails.poster_path}`} alt="" />
                <div>
                <h1 className="font-semibold text-white text-3xl m-3 mb-0 mt-8  opacity-90">{movieDetails.title} ({movieDetails.release_date})</h1>
                <div className="flex justify-between items-center w-[50%] m-3">
                <FaArrowLeft className="text-[16px]" />
                <p>Back to main</p>
                </div>
                </div>
            </div>
        </div> */}
        <div className="w-[85%] h-auto m-auto flex p-4">
            <div className="w-[50%] ">
                <h1 className="font-semibold text-white text-3xl m-3 mb-5 mt-8  opacity-90">Cast <span className="text-sky-500">{cast.length}</span> </h1>
                {cast&&cast.map((actor)=>{
                    return(
                        <div className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`} alt="" />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                    )
                })}
                
            </div>
            <div className="w-[50%] ">
                <h1 className="font-semibold text-white text-3xl m-3 mb-5 mt-8  opacity-90">Crew <span className="text-sky-500">{crew.length}</span></h1>
                <h1 className="font-semibold text-white text-3xl m-3 mb-5 mt-8  opacity-90">Production</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Production') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Crew</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Crew') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Sound</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Sound') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Editing</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Editing') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                    <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Lighting</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Lighting') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                    <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Visual Effects</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Visual Effects') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Art</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Art') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${movieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Costume & Make-Up</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Costume & Make-Up') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Camera</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Camera') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;   
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Writing</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Writing') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null;
                })}
                  <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">Directing</h1>
                {crew && crew.map((actor) => {
                    if (actor.department === 'Directing') {
                        return (
                        <div key={actor.id} className="w-[60%] h-[30vh] bg-gray-700 flex mb-10" onClick={()=>navigate(`/movieDetails/${MovieId}/actor/${actor.id}`)}>
                            <img src={`${imgBaseURL}${actor.profile_path}`}  />
                            <h1 className="font-semibold text-white text-2xl m-3 mb-5 mt-8  opacity-90">{actor.name}</h1>
                        </div>
                        );
                    }
                    return null; 
                })}





    
           
            </div>
            
        </div>
        </>
    )
}
export default Cast;