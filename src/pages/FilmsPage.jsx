import { Link } from "react-router-dom";

function FilmsPage() {
    return <>
        <h1> Catalogo Films Page</h1>
        <p> Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>



        <div className="cards-container">
            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>
            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>

            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>

            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>

            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>

            <div className="card">
                <h2>Titolo</h2>
                <h3>Director: John Doe</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquid, commodi.</p>
                <Link to="/films/1">Vai alla scheda del film</Link>
            </div>




        </div>
    </>
}

export default FilmsPage;