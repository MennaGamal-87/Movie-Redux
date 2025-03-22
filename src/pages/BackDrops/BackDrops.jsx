import { useDispatch, useSelector } from "react-redux"
import MovieCard from "../../components/Card/MovieCard"
import SubHeader from "../../components/SubHeader/SubHeader"
import { useEffect } from "react"
import { useParams } from "react-router-dom"
import { imgBaseURL } from "../../components/Carsoul/Carsoul"
import { getPosters } from "../../Redux/Slices/PostersSlice"

const BackDrops=()=>{
    const {movieId}=useParams()
    const dispatch=useDispatch()
    var loading=useSelector((state)=>state.posters.loading)
    const backdrops=useSelector((state)=>state.posters.Posters.backdrops )

    useEffect(()=>{
        dispatch(getPosters(movieId))
    },[])

    return(
       <>
        <SubHeader/>
        {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}
        <h1 className="text-3xl font-semibold text-sky-600 m-4 text-center">Social</h1>
        <div className="w-[95%] h-auto p-3 flex justify-evenly flex-wrap  m-auto">
        {backdrops&&backdrops.map((backdrop)=>{
            return(
                <>
               <img className="w-[24%] h-[40vh] mb-5 rounded-2xl" src={`${imgBaseURL}${backdrop.file_path}`} alt="" />
                </>
            )
        })}
        </div>
       </>
    )
}
export default BackDrops