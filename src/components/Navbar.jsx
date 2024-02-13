
import { Link } from "react-router-dom"

export default function Navbar(){
    return(
        <div id="navbar">
             <Link to="/blue">
                <h1>Blue</h1>
            </Link>
            <Link to="/red">
                <h1>Red</h1>
            </Link>
            <Link to="/">
                <h1>Home</h1>
            </Link>

        </div>
    )
}