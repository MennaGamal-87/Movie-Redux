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
   
  export function TabsWithIcon({movieId}) {
    const dispatch=useDispatch()
    const Videos=useSelector((state)=>state.videos.Videos.results)
    console.log(Videos);
    useEffect(()=>{
        dispatch(getVideos(movieId))
    },[])
    const data = [
      {
        label: "VIDEOS",
        value: "html",
        desc: `It really matters and then like it really doesn't matter.
        What matters is the people who are sparked by it. And the people 
        who are like offended by it, it doesn't matter.`,
      },
      {
        label: "BACKDROPS",
        value: "react",
        desc: `Because it's about motivating the doers. Because I'm here
        to follow my dreams and inspire other people to follow their dreams, too.`,
      },
      {
        label: "POSTERS",
        value: "vue",
        desc: `We're not always in the position that we want to be at.
        We're constantly growing. We're constantly making mistakes. We're
        constantly trying to express ourselves and actualize our dreams.`,
      },
     
    ];
   
    return (
      <Tabs value="html">
        <TabsHeader>
          {data.map(({ label, value }) => (
            <Tab className="hover:border-sky-500 hover:border-2 text-center m-auto rounded-2xl transition-1s p-2" key={value} value={value}>
              {label}
            </Tab>
          ))}
        </TabsHeader>
        <TabsBody>
          {Videos&&Videos.map((video) => (
            <TabPanel className="bg-gray-900 rounded-3xl" >
                <video src={`https://www.youtube.com/embed/${video.id}`}></video>
              <iframe src={`https://www.youtube.com/embed/${video.key}`} frameborder="0"></iframe>
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>
    );
  }