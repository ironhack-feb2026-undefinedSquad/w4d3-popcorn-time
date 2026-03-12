import { useState } from "react"

import movies from "./data/movies.json"

import Footer from "./components/Footer"
import Header from "./components/Header"
import MovieList from "./components/MovieList"

function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)


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
      <MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />
      <Footer />
    </>
  )
}

export default App
