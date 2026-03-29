import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

import axios from "axios";

function FilmPage() {

    const [movie, setMovie] = useState([]);


    useEffect(() => {
        axios.get("http://localhost:3000/api/movies/1").then(response => {
            console.log(response.data);
            setMovie(response.data);
        }).catch(error => {
            console.error("Errore nella richiesta:", error);
        });
    }, []);

    return <>
        <Link to="/films">Torna alla lista dei film</Link>
        <h1>Film Page</h1>
        <p>Welcome to the Film Page!</p>

        {movie.title}

        <div className="cards-container">
            {movie.reviews?.map(review => <ReviewCard review={review} />)}

        </div>
    </>
}



export default FilmPage;