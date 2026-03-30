import { Link } from "react-router-dom"


function FilmCard({ film }) {

    const { id, title, director, description, image, trailer } = film;
    const imageUrl = `http://localhost:3000/static/movies/${image}`;
    const trailerUrl = trailer || `https://www.youtube.com/results?search_query=${encodeURIComponent(title + ' trailer')}`;

    return <div className="card">
        <img src={imageUrl} alt={title} />
        <h2>{title}</h2>
        <h3>Director: {director}</h3>
        <p>{description}</p>

        <Link to={`/films/${id}`}>Vai alla scheda del film</Link>
        <button
            onClick={() => window.open(trailerUrl, '_blank', 'noopener,noreferrer')}
            className="trailer-btn"
        >
            {trailer ? 'Guarda Trailer' : 'Cerca Trailer su YouTube'}
        </button>
    </div>
}

export default FilmCard;


