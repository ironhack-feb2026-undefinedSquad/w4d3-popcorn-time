import { useState } from "react"
import { useNavigate } from "react-router-dom"


function AddMovie(props) {

    const [title, setTitle] = useState("")
    const [rating, setRating] = useState("")
    const [imageUrl, setImageUrl] = useState("")

    const navigate = useNavigate()


    const handleSubmit = (e) => {
        e.preventDefault()

        const newMovie = {
            title: title,
            rating: rating,
            imgURL: imageUrl
        }

        // invoke function in the parent component
        props.onCreate(newMovie)

        // redirect to the homepage
        navigate("/")
    }


    return (
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
    )
}


export default AddMovie