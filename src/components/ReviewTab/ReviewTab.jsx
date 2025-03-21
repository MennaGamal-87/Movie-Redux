import {
  Tabs,
  TabsHeader,
  TabsBody,
  Tab,
  TabPanel,
} from "@material-tailwind/react";
 
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getVideos } from "../../Redux/Slices/VideosSlice";
import Carousel, { imgBaseURL } from "../Carsoul/Carsoul";
import VideosCarousel from "../VideosCarsoul/VideosCarsoul";
import { getPosters } from "../../Redux/Slices/PostersSlice";
import PostersSlider from "../PostersSlider/PostersSlider";
import { getReviews } from "../../Redux/Slices/ReviewsSlice";
   
  export function ReviewTab({movieId}) {
    const dispatch=useDispatch()
    const review=useSelector((state)=>state.Reviews.reviews.results)
    console.log(review);
    
    useEffect(()=>{
      dispatch(getReviews(movieId))
    },[])
    const data = [
      {
        label: `REVIEWS (${review&&review.length})`,
        value: "reviews",
        desc: <>
        <div className="w-[10%] h-[10vh] p-2 bg-gray-500 rounded-full">
            <h1 className="text-3xl font-bold text-white text-center mt-2">R</h1>
        </div>
        {review&&review.map((rev,index)=>{
            if(index<1){
            return(
                <>
                 <div key={index} className="w-[87%] p-2 h-auto ">

                    <h1 className="text-white mb-2 font-semibold text-3xl">A review by <span className="text-sky-500">{rev.author}</span> </h1>
                    <p className="text-white mb-5 font-semibold text-[16px]">Written by <span className="text-sky-500"> {rev.author}</span> on <span className="text-sky-500">{rev.created_at}</span></p>
                    <h1 className="text-blue-600 font-bold text-[20px] ">Content:-</h1>
                    <p className="text-white ">{rev.content}</p>
                    </div>
                </>
            )
        }})}
       
         </>,
      },
   
     
    ];
   
    
             

   
    return (
      <Tabs id="custom-animation" value="html">
        <TabsHeader className="mb-3 border-b-2 w-[100%]">
          {data.map(({ label, value }) => (
            <Tab className="hover:bg-sky-600 w-[20%] p-2  rounded-t-3xl" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
          {data.map(({desc, value}) => (
            <TabPanel className="p-2 px-6 rounded-2xl w-[100%] bg-gray-700  h-auto flex justify-between" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }