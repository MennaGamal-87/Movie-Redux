

import Header from "./components/Header/Header";
import Home from "./pages/Home/Home";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound/NotFound";
import MovieDetails from "./pages/MovieDetails/MovieDetails";
import EnglishMovies from "./pages/EnglishMovies/EnglishMovies";
import Cast from "./pages/Cast/Cast";

const App=()=>{
  return(
    <>
    <Header/>
    <Routes>
      <Route path="/" element={ <Home/>}></Route>
      <Route path="/movieDetails/:id" element={<MovieDetails/>}></Route>
      <Route path="/movieDetails/:id/cast" element={<Cast/>}></Route>
      <Route path="/englishMovies" element={<EnglishMovies/>}></Route>
      <Route path="*" element={ <NotFound/>}></Route>
    </Routes>
   
    </>
  )
}
export default App;