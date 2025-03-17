import { configureStore } from '@reduxjs/toolkit'
import  {Movies}  from './Slices/AllMoviesSlice'
import { Series } from './Slices/AllSeiesSlice'
import { TopMovies } from './Slices/TopMoviesSlice'
import { TopSeries } from './Slices/TopSerieslice'
import { MovieDetails } from './Slices/MovieDetailsSlice'
import { MovieActors } from './Slices/MovieActorsSlice'
import {  Mkeywords } from './Slices/KeywordsSlice'
import { Recommendation } from './Slices/RecommendationSlice'
import { Reviews } from './Slices/ReviewsSlice'
import { ActorDetail } from './Slices/ActorSlice'
import { actorKnownFor } from './Slices/KnownForSlice'
import { videos } from './Slices/VideosSlice'
import { EnglishMovie } from './Slices/EnglishMoviesSlices'
import { ArabicMovie } from './Slices/ArabicMoviesSlice'
import { AsianMovie } from './Slices/AsianMoviesSlice'


export const store = configureStore({
  reducer: {
    Movies,Series ,TopMovies,TopSeries,MovieDetails,MovieActors,Mkeywords,Recommendation,Reviews,ActorDetail,actorKnownFor,videos,EnglishMovie,ArabicMovie,AsianMovie
  },
})