import movies from "../data/movies.json"


function MovieList() {

    return (
        <>
            <h2>List of movies</h2>

            {movies.map((movieObj, i, arr) => {
                return (
                    <section key={movieObj.id} className="card">
                        <h3>{movieObj.title}</h3>
                        <img src={movieObj.imgURL} alt="Movie poster" />
                        <p>Year: {movieObj.year}</p>
                        <p>Rating: {movieObj.rating}</p>
                    </section>
                )
            })}
        </>
    )
}

export default MovieList