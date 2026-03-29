import { Link } from "react-router-dom";
import ReviewCard from "../components/ReviewCard";
import { useEffect, useState } from "react";

import axios from "axios";

function FilmPage() {

    const [film, setFilm] = useState([]);


    useEffect(() => {
        axios.get("/api/films/<FILM_ID>").then(response => {
            console.log(response.data);
            setFilm(response.data);
        }).catch(error => {
            console.error("Errore nella richiesta:", error);
        });
    }, []);

    return <>
        <Link to="/films">Torna alla lista dei film</Link>
        <h1>Film Page</h1>
        <p>Welcome to the Film Page!</p>



        <div className="cards-container">
            {reviews.map(review => <ReviewCard review={review} />)}

        </div>
    </>
}



export default FilmPage;