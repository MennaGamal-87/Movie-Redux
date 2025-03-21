import { useDispatch, useSelector } from "react-redux";
import { imgBaseURL } from "../../components/Carsoul/Carsoul";
import { useEffect } from "react";
import { getActorDetails } from "../../Redux/Slices/ActorSlice";
import { useNavigate, useParams } from "react-router-dom";
import { FaFacebook, FaHome, FaInstagram, FaTiktok, FaTwitter, FaYoutube } from "react-icons/fa";
import { getActorKnownFor } from "../../Redux/Slices/KnownForSlice";

const ActorDetails=()=>{
    const {actorId}=useParams()
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const actor=useSelector((state)=>state.ActorDetail.actorDetails)
    const knownFor=useSelector((state)=>state.actorKnownFor.knownFor.cast)
    var loading=useSelector((state)=>state.ActorDetail.loading)
    const firstThreeItems = knownFor&&knownFor.filter((item, index) => index < 3);
//     console.log(firstThreeItems);
    useEffect(()=>{
         dispatch(getActorDetails(actorId))
         dispatch(getActorKnownFor(actorId))
    },[])
    return(
        <>
                {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

        <div className="w-[100%] h-auto p-2 flex justify-evenly">
            <div className="w-[27%] h-auto ">
                <img className="mb-17" src={`${imgBaseURL}${actor.profile_path}`} alt="" />
                <div className="w-[75%] flex justify-between my-5">
                        <FaFacebook className="text-[26px] text-sky-500" />
                        <FaTwitter className="text-[26px] text-sky-500" />
                        <FaInstagram  className="text-[26px] text-sky-500"/>
                        <FaTiktok className="text-[26px] text-sky-500" />
                        <FaYoutube className="text-[26px] text-sky-500" />
                        <FaHome className="text-[26px] text-sky-500" />
                </div>
                <h1 className="font-semibold text-white text-2xl m-3 mb-2 mt-8  opacity-90">Personal Info</h1>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Known For</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0  opacity-90">{actor.known_for_department}</h1>
                </div>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Known Credits</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0  opacity-90"></h1>
                </div>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Gender</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0  opacity-90">{actor.gender}</h1>
                </div>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Birthday</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0  opacity-90">{actor.birthday}</h1>
                </div>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Place of Birth</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0 opacity-90">{actor.place_of_birth}</h1>
                </div>
                <div>
                     <h1 className="font-semibold text-white text-[20px] m-3 mb-0 mt-8  opacity-90">Also Known As</h1>
                     <h1 className="font-semibold text-sky-400 text-[16px] m-3 mb-2 mt-0 opacity-90">{actor.also_known_as}</h1>
                </div>
               

            </div>

            <div className="w-[60%] h-auto ">
                <h1 className="font-semibold text-white text-3xl m-3 mb-2 mt-8  opacity-90">{actor.name}</h1>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Biography</h1>
                <h1 className="m-4">{actor.biography}</h1>
                <h1 className="font-semibold text-sky-400 text-2xl m-3 mb-2 mt-8  opacity-90">Known For</h1>
                <div className="w-[85%]  h-auto p-2 flex justify-between m-2 mt-8">
                    {firstThreeItems&&firstThreeItems.map((item,index)=>{
                         return(
                              <div onClick={()=>navigate(`/movieDetails/${item.id}`)} key={index} className="w-[36%] h-auto m-2 rounded-2xl bg-gray-700">
                                   <img className="w-[100%] h-[40vh]" src={`${imgBaseURL}${item.poster_path}`} alt="" />
                                   <h1 className="m-2">{item.original_title}</h1>
                              </div>
                         )
                    })}
                </div>
            </div>
        </div>
        </>
    )
}
export default ActorDetails;