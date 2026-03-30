
import FilmCard from "../components/FilmCard";
import axios from "axios";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";





function FilmsPage() {


    const [films, setFilms] = useState([]);
    const [searchParams] = useSearchParams();
    const searchQuery = searchParams.get("search") || "";

    useEffect(() => {
        axios.get("http://localhost:3000/api/movies").then(response => {
            console.log(response.data);
            setFilms(response.data);
        }).catch(error => {
            console.error("Errore nella richiesta:", error);
        });
    }, []);

    const filteredFilms = films.filter(film =>
        film.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        film.director.toLowerCase().includes(searchQuery.toLowerCase())
    );



    return <>
        <h1> Catalogo Films Page</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>

        {searchQuery && <p>Risultati per: "{searchQuery}"</p>}

        <div className="cards-container">

            {filteredFilms.map(film => <FilmCard key={film.id} film={film} />)}
        </div>
    </>
}

export default FilmsPage;