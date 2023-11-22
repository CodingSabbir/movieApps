import { Route, Routes } from "react-router-dom"
import Home from "./Components/Home/Home"
import SignUp from "./Components/SignUp/SignUp"
import Login from "./Components/Login/Login"
import NotFound from "./Components/NotFound/NotFound"
import Navbar from "./Components/Navbar/Navbar"
import MovieData from "./MovieData/MovieData"
import Movie from "./Components/Movie/Movie"
import MoviesCategory from "./Pages/MoviesCategory/MoviesCategory"
import MovieDetails from "./Pages/MoviesCategory/MovieDetails/MovieDetails"
import CategoryCard from "./Components/CategoryCard/CategoryCard"





function App() {


  return (
    <>
     <Navbar/>
     <MovieData/>
      <Routes> 
      <Route path="/" element={<Home/>}/>
      <Route path="/home" element={<Home/>}/>
      <Route path="/movie" element={<Movie/>}/>
      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/:category" element={<MoviesCategory/>}/>
      <Route path="/movies/:id" element={<MovieDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
      </Routes>
     
    </>
  )
}

export default App
