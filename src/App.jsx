

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import EnglishMovies from "./pages/EnglishMovies/EnglishMovies";
import Cast from "./pages/Cast/Cast";
import ActorDetails from "./pages/actorDetails/ActorDetails";
import ArabicMovies from "./pages/ArabicMovies/ArabicMovies";
import AsianMovies from "./pages/AsianMovies/AsianMovies";
import AllMovies from "./pages/AllMovies/AllMovies";
import AllSeries from "./pages/AllSeries/AllSeries";
import ContactUs from "./pages/contactUs/ContactUs";
import Posters from "./pages/Posters/Posters";
import BackDrops from "./pages/BackDrops/BackDrops";
import Footer from "./components/Footer/Footer";
import ReviewsPage from "./pages/Reviews/Reviews";
import SeriesDetails from "./pages/SeiesDetails/SeriesDetails";

const App=()=>{
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/movieDetails/:id" element={<MovieDetails/>}></Route>
      <Route path="/movieDetails/:id/cast" element={<Cast/>}></Route>
      <Route path="/movieDetails/:id/actor/:actorId" element={<ActorDetails/>}></Route>
      <Route path="/arabicMovies" element={<ArabicMovies/>}></Route>
      <Route path="/englishMovies" element={<EnglishMovies/>}></Route>
      <Route path="/asianMovies" element={<AsianMovies/>}></Route>
      <Route path="/allMovies" element={<AllMovies/>}></Route>
      <Route path="/allSeries" element={<AllSeries/>}></Route>
      <Route path="/contactUs" element={<ContactUs></ContactUs>}></Route>
      <Route path="/movieDetails/:movieId/posters" element={<Posters/>}></Route>
      <Route path="/movieDetails/:movieId/reviews" element={<ReviewsPage/>}></Route>
      <Route path="/movieDetails/:movieId/backDrops" element={<BackDrops/>}></Route>
      <Route path="/seriesDetails/:movieId" element={<SeriesDetails/>}></Route>
    </Routes>
   <Footer/>
    </>
  )
}
export default App;