import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";

function Header() {
    const [searchQuery, setSearchQuery] = useState("");
    const navigate = useNavigate();

    const handleSearch = (e) => {
        e.preventDefault();
        if (searchQuery.trim()) {
            navigate(`/films?search=${encodeURIComponent(searchQuery)}`);
        }
    };

    return (
        <header className="header">
            <div className="logo">
                <Link to="/">FilmDB</Link>
            </div>
            <nav className="nav">
                <Link to="/">Home</Link>
                <Link to="/films">Films</Link>
            </nav>
            <form onSubmit={handleSearch} className="search-form">
                <input
                    type="text"
                    placeholder="Cerca film..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
                <button type="submit">Cerca</button>
            </form>
        </header>
    );
}

export default Header;