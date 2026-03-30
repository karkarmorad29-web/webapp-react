import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import axios from "axios";

function FilmPage() {
    const { id } = useParams();

    const [movie, setMovie] = useState([]);


    useEffect(() => {
        console.log("ID del film:", id);
        axios.get(`http://localhost:3000/api/movies/${id}`).then(response => {
            console.log(response.data);
            setMovie(response.data);
        }).catch(error => {
            console.error("Errore nella richiesta:", error);
        });
    }, [id]);

    return <>
        <Link to="/films">Torna alla lista dei film</Link>
        <h1>{movie.title}</h1>
        <p>{movie.description}</p>
        <img src={movie.image} alt={movie.title} />




        <div className="cards-container">
            {movie.reviews?.map(review => <ReviewCard review={review} />)}

        </div>

    </>
}



export default FilmPage;