import { useDispatch, useSelector } from "react-redux"
import { getMovieDetails } from "../../Redux/Slices/MovieDetailsSlice"
import { useEffect, useState } from "react"
import { data, useNavigate, useParams } from "react-router-dom"
import { imgBaseURL } from "../../components/Carsoul/Carsoul"
import { FaArrowLeft } from "react-icons/fa"
import SubHeader from "../../components/SubHeader/SubHeader"
import { getPosters } from "../../Redux/Slices/PostersSlice"
import {
    Tabs,
    TabsHeader,
    TabsBody,
    Tab,
    TabPanel,
  } from "@material-tailwind/react";
 
const Posters=()=>{
    
    const {movieId}=useParams()
    const dispatch=useDispatch()
    const posters=useSelector((state)=>state.posters.Posters.posters)
    var loading=useSelector((state)=>state.posters.loading)

    console.log(posters);
    
    // const { groupedPosters, languages } = useSelector(selectGroupedPosters);
    useEffect(()=>{
        dispatch(getPosters(movieId))
        // dispatch(fetchPosters());
        // dispatch(fetchLanguages());
       
    },[])
const [languages,setLanguages]=useState([])
    const data = [
      {
        label: `no Language`,
        value: "no language",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1==null){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }
          

        })}
         </>,
      },

      {
        label: `Czech`,
        value: "czech",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='sk'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },

      
      {
        label: `Turkish`,
        value: "Turkish",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='tr'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },

      {
        label: `Frensh`,
        value: "Frensh",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='fr'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },
      {
        label: `Hebrew`,
        value: "Hebtew",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='he'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },
      {
        label: `Iran`,
        value: "iran",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='it'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },
      {
        label: `Russian`,
        value: "russian",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='ru'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },
      {
        label: `Sv`,
        value: "sv",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='sv'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },
      {
        label: `German`,
        value: "german",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='de'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }

        })}
         </>,
      },



      {
        label: `english`,
        value: "videos",
        desc: <>
        {posters&&posters.map((poster)=>{
          if(poster.iso_639_1=='en'){
            return(
              <>
                <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
}`} alt="" />
              </>
            )
          }
          
//           if(poster.iso_639_1=='en'){
//             console.log('found');
//             return(
//             <>
            
//             <img className="w-[50%] h-[20vh]" src={`${imgBaseURL}${poster.file_path
// }`} alt="" />
//             </>
//         )}
        })}
         </>,
      },
      // {
      //   label: `BACKDROPS(${backdrops&&backdrops.length})`,
      //   value: "backdrops",
      //   desc: <PostersSlider type={'backDrops'} movieId={movieId} data={backdrops}/>,
      // },
   
      // {
      //   label: `POSTERS (${posters&&posters.length})`,
      //   value: "posters",
      //   desc: <>
      //   <PostersSlider type={'posters'} movieId={movieId} data={posters}/>
      //   </>,
      // },
   
     
    ];
   




    // const renderContent = () => {
    //     posters&&posters.map((poster)=>{
    //     switch (poster.iso_639_1) {
    //       case 'en':
    //         return <h1>en</h1>;
    //       case 'fa':
    //         return <h1>fa</h1>;
    //       case 'ka':
    //         return <h1>ka</h1>;
    //       default:
    //         return <h1>no</h1>;
    //     }
    // })
    //   };
  
    // {posters&&posters.map((poster)=>{
    //     console.log(poster);
    //     const data = [
        
    //         {
    //           label: `${poster.iso_639_1}`,
    //           value: "videos",
    //           desc: <>
             
    //            </>,
    //         },
    //         {
    //           label: "BACKDROPS",
    //           value: "backdrops",
    //           desc: <></>,
    //         },
         
    //         {
    //           label: `POSTERS ( )`,
    //           value: "posters",
    //           desc: <>
            
    //           </>,
    //         },
         
           
    //       ];
    // })
  
    // }
    return(
        <>
        <SubHeader/>
        <h1>Social</h1>
        {loading&&(<span className="loader w-[100%] h-[40vh] m-auto absolute top-50 left-[47%]"></span>)}


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
            <TabPanel className="p-2 px-6 rounded-2xl w-[100%]  h-[70vh] flex justify-evenly" key={value} value={value}>
              {desc}
            </TabPanel>
          ))}
        </TabsBody>
      </Tabs>




        {/* {Object.keys(groupedPosters).map((languageKey) => (
          <div key={languageKey} className="tab">
            <h2>{languages[languageKey] || 'Unknown Language'}</h2>
            <div className="poster-grid">
              {groupedPosters[languageKey].map((poster) => (
                <div key={poster.id} className="poster">
                  <img
                    src={`https://image.tmdb.org/t/p/w500${poster.poster_path}`}
                    alt={poster.title}
                  />
                  <p>{poster.title}</p>
                </div>
              ))}
            </div>
          </div>
        ))} */}
        {/* <div className="w-[90%] h-[70vh] bg-amber-700 m-auto">
            {renderContent()} */}
        {/* <Tabs id="custom-animation" value="html">
        {posters&&posters.map((poster)=>{
            return(
            <>
        <TabsHeader className="mb-3 border-b-2 w-[85%]">
        
  
       
            <Tab className="hover:bg-sky-600 w-[20%] p-2  rounded-t-3xl" >
            {poster.iso_639_1}
            </Tab>
  
        </TabsHeader>
        <TabsBody
          animate={{
            initial: { y: 250 },
            mount: { y: 0 },
            unmount: { y: 250 },
          }}
        >
        
            <TabPanel className="p-2 px-6 rounded-2xl w-[85%]  h-[60vh]" >
              <img src={`${imgBaseURL}${poster.file_path}`} alt="" />
            </TabPanel>
       
        </TabsBody>
        </>)
          })}
      </Tabs> */}
        {/* </div> */}
        </>
    )
   
}
export default Posters;