import { Link } from "react-router-dom"

function MovieSummary(props) {
    return (
        <section className="card">
            <h3>{props.movieDetails.title}</h3>

            {props.movieDetails.imgURL
                && <img src={props.movieDetails.imgURL} alt="Movie poster" />
            }

            <div>
                
                {/* invoke callback in the grandparent component */}
                <button onClick={() => { props.onDelete(props.movieDetails.id) }}>Delete</button>

                <Link to={`/movies/${props.movieDetails.id}`}>
                    <button>More Details</button>
                </Link>
            </div>

        </section>
    )
}

export default MovieSummary