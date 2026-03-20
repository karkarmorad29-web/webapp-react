import { Link } from "react-router-dom"



function Header() {
    return (
        <header>
            <Link to="/">HomePage</Link>
            <Link to="/films">Films</Link>
        </header>
    )
}

export default Header