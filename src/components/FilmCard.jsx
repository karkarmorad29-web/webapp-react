import { Link } from "react-router-dom"


function FilmCard({ film }) {

    const { id, title, director, description, image } = film;
    const imageUrl = `http://localhost:3000/static/movies/${image}`;


    return <div className="card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <h3>Director: {director}</h3>
        <p>{description}</p>

        <Link to={`/films/${id}`}>Vai alla scheda del film</Link>
    </div>
}

export default FilmCard;


