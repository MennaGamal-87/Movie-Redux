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
   
  export function TabsWithIcon({movieId}) {
    const dispatch=useDispatch()
    const Videos=useSelector((state)=>state.videos.Videos.results)
    const posters=useSelector((state)=>state.posters.Posters.posters)
    const backdrops=useSelector((state)=>state.posters.Posters.backdrops )
    useEffect(()=>{
        dispatch(getVideos(movieId))
        dispatch(getPosters(movieId))
    },[])
    const data = [
      {
        label: `VIDEOS (${Videos&&Videos.length})`,
        value: "videos",
        desc: <>
        <VideosCarousel movieId={movieId} data={Videos}/>
         </>,
      },
      {
        label: `BACKDROPS(${backdrops&&backdrops.length})`,
        value: "backdrops",
        desc: <PostersSlider type={'backDrops'} movieId={movieId} data={backdrops}/>,
      },
   
      {
        label: `POSTERS (${posters&&posters.length})`,
        value: "posters",
        desc: <>
        <PostersSlider type={'posters'} movieId={movieId} data={posters}/>
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
          {data.map(({ value, desc }) => (
            <TabPanel className="p-2 px-6 rounded-2xl w-[100%]  h-[70vh]" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }