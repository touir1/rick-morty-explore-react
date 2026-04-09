import { NavLink } from "react-router";

function Navbab() {
    return (
        <nav>
            <NavLink to="/">Home</NavLink> &nbsp;
            <NavLink to="/about">About</NavLink> &nbsp;
            <NavLink to="/characters">Characters</NavLink>
        </nav>
    )
}

export default Navbab;