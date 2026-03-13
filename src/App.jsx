import { useState } from "react"
import { Route, Routes } from "react-router-dom"

import movies from "./data/movies.json"

import MovieList from "./pages/MovieList"
import MovieDetails from "./pages/MovieDetails"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Header from "./components/Header"
import Footer from "./components/Footer"



function App() {

  const [moviesToDisplay, setMoviesToDisplay] = useState(movies)

  const [title, setTitle] = useState("")
  const [rating, setRating] = useState("")
  const [imageUrl, setImageUrl] = useState("")



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


  const handleSubmit = (e) => {
    e.preventDefault()


    // find the id of the new movie
    const movieIds = moviesToDisplay.map((movieObj) => {
      return movieObj.id;
    });
    const maxId = Math.max(...movieIds);
    const nextId = maxId + 1

    const newMovie = {
      id: nextId,
      title: title,
      rating: rating,
      imgURL: imageUrl
    }

    // prepare an array with the new list of movies
    const newList = [newMovie, ...moviesToDisplay]

    // update the list of movies
    setMoviesToDisplay(newList)

    //clear form
    setTitle("")
    setRating("")
    setImageUrl("")
  }


  return (
    <>

      <Header numberOfMovies={moviesToDisplay.length} />

      <section className="card">
        <h2>Create your own movie</h2>

        <form onSubmit={handleSubmit}>

          <label>
            Title:
            <input
              type="text"
              name="title"
              placeholder="The Godfather"
              value={title}
              onChange={(e) => { setTitle(e.target.value) }}
            />
          </label>

          <label>
            Rating:
            <input
              type="number"
              name="rating"
              min={1}
              max={10}
              placeholder="10"
              value={rating}
              onChange={(e) => { setRating(e.target.value) }}
            />
          </label>

          <label>
            Image URL:
            <input
              type="url"
              name="imageUrl"
              placeholder="https://domain.com/image.jpg"
              value={imageUrl}
              onChange={(e) => { setImageUrl(e.target.value) }}
            />
          </label>


          <button type="submit">Create new movie</button>
        </form>
      </section>

      <Routes>
        <Route path="/" element={<MovieList moviesArr={moviesToDisplay} onDelete={deleteMovie} />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/movies/:movieId" element={<MovieDetails moviesArr={moviesToDisplay} />} />
        <Route path="*" element={<h1>Page not found</h1>} />
      </Routes>

      <Footer />

    </>
  )
}

export default App
