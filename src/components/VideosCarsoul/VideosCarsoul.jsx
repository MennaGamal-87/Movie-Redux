import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
export const imgBaseURL = 'https://image.tmdb.org/t/p/w500';
const VideosCarousel = ({ data }) => {
    const navigate=useNavigate();
    // console.log(data);
    
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
    ],
  };

  return (
    <div className="movie-carousel w-[99%] m-auto mb-9">
      <Slider {...settings}>
        {data&&data.map((movie) => (
          <div key={movie.id} className="movie-slide  p-3 hover:cursor-pointer w-[80%] h-auto " onClick={()=>{navigate(`/movieDetails/${movie.id}`)}}>
           
            <iframe className='w-[100%] h-[40vh] rounded-2xl' src={`https://www.youtube.com/embed/${movie.key}`}></iframe>
            
           
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default VideosCarousel;
