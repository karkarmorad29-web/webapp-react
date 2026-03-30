import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

function HomePage() {
    const [films, setFilms] = useState([]);

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(response => {
            console.log(response.data);
            setFilms(response.data);
        }).catch(error => {
            console.error("Errore nella richiesta:", error);
        });
    }, []);

    return <>


        <section className="featured-films">
            <h3>Film in Evidenza</h3>
            <div className="cards-container">
                {films.slice(0, 3).map(film => <FilmCard key={film.id} film={film} />)}
            </div>
            <Link to="/films">Vedi tutti i film</Link>
        </section>

    </>
}

export default HomePage;