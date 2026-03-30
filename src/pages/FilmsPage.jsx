
import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useEffect, useState } from "react";





function FilmsPage() {


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
        <h1> Catalogo Films Page</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>



        <div className="cards-container">

            {films.map(film => <FilmCard key={film.id} film={film} />)}
        </div>
    </>
}

export default FilmsPage;