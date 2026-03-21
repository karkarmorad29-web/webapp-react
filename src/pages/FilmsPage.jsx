
import FilmCard from "../components/FilmCard";

function FilmsPage() {

    const film = {
        id: 1,
        title: "Il Signore degli Anelli",
        director: "Peter Jackson",
        description: "Un giovane hobbit deve distruggere un anello per salvare il mondo della fantasia.",
        image: "https://m.media-amazon.com/images/M/MV5BN2EyZjM3NzUtNWUzMi00MTgxLWI0NTctMzY4M2VlOTdjZWRiXkEyXkFqcGdeQXVyNDUzOTQ5MjY@._V1_.jpg"

    };

    const films = [
        film,
        film
    ];


    return <>
        <h1> Catalogo Films Page</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>



        <div className="cards-container">

            {films.map(film => <FilmCard film={film} />)}









        </div>
    </>
}

export default FilmsPage;