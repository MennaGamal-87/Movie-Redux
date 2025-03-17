

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
    </Routes>
   
    </>
  )
}
export default App;