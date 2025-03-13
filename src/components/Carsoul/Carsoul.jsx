import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { useNavigate } from 'react-router-dom';
export const imgBaseURL = 'https://image.tmdb.org/t/p/w500';
const Carousel = ({ data }) => {
    const navigate=useNavigate();
  
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
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
          <div key={movie.id} className="movie-slide px-8 hover:cursor-pointer" onClick={()=>{navigate(`/movieDetails/${movie.id}`)}}>
           <img  src={`${imgBaseURL}${movie.poster_path}`} alt="" />

          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Carousel;