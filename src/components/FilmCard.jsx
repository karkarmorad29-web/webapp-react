import { Link } from "react-router-dom"


function FilmCard({ film }) {

    const { id, title, director, description, image } = film;

    return <div className="card">
        <h2>{title}</h2>
        <h3>Director: {director}</h3>
        <p>{description}</p>
        {image && <img src={image} alt={title} />}
        <Link to={`/films/${id}`}>Vai alla scheda del film</Link>
    </div>
}

export default FilmCard;


