import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import movies from "./data/movies.json"

import MovieList from "./pages/MovieList"
import MovieDetails from "./pages/MovieDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
import AddMovie from "./pages/AddMovie"
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)



  const createMovie = (newMovieDetails) => {

    // find the id of the new movie
    const movieIds = moviesToDisplay.map((movieObj) => {
      return movieObj.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1

    const newMovie = {
      ...newMovieDetails,
      id: nextId,
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)
  }



  const deleteMovie = (movieId) => {
    // get the new list of movies...
    const newList = moviesToDisplay.filter((movieDetails, i, arr) => {
      if (movieDetails.id !== movieId) {
        return true
      } else {
        return false
      }
    })

    // update state...
    // moviesToDisplay = newList // NEVER, NEVER update state directly
    setMoviesToDisplay(newList)
  }




  return (
    <>
      <Header numberOfMovies={moviesToDisplay.length} />

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/create" element={<AddMovie onCreate={createMovie} />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />
    </>
  )
}

export default App
