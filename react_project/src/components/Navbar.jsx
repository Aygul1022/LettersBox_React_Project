import {Link} from "react-router-dom"
import "../css/Navbar.css"

function NavBar() {
    return <nav className = "navbar"> 
    <div className ="navbar-brand">
        <Link to ="/">Lettersbox</Link>
    </div>
    <div className = "Navbar-links">
        <Link to ="/" className="nav-link"> Home</Link>
        <Link to ="/favorites" className="nav-link">The Ones You Like</Link>
    </div>
    </nav>
}
export default NavBar