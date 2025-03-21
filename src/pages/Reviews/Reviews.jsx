import { useDispatch, useSelector } from "react-redux";
import SubHeader from "../../components/SubHeader/SubHeader"
import { useEffect } from "react";
import { getReviews } from "../../Redux/Slices/ReviewsSlice";
import { useParams } from "react-router-dom";

const ReviewsPage=()=>{
    const{movieId}=useParams()
    const dispatch=useDispatch()
    const review=useSelector((state)=>state.Reviews.reviews.results)
    var loading=useSelector((state)=>state.Reviews.loading)

    console.log(review);
    
    useEffect(()=>{
      dispatch(getReviews(movieId))
    },[])
    return(
        <>
        <SubHeader/>
        {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}

        {review&&review.map((rev,index)=>{
          
            return(
                <>
                 <div key={index} className="w-[87%]  h-auto bg-gray-700 m-auto border-sky-500 border-2 rounded-2xl mb-7 p-6">

                    <h1 className="text-white mb-2 font-semibold text-3xl">A review by <span className="text-sky-500">{rev.author}</span> </h1>
                    <p className="text-white mb-5 font-semibold text-[16px]">Written by <span className="text-sky-500"> {rev.author}</span> on <span className="text-sky-500">{rev.created_at}</span></p>
                    <h1 className="text-blue-600 font-bold text-[20px] ">Content:-</h1>
                    <p className="text-white ">{rev.content}</p>
                    </div>
                </>
            )
        })}
       
        </>
    )
}
export default ReviewsPage;