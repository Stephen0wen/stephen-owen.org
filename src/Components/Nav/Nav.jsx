import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="navbar">
            <Link to="/">
                <div class="text-align">Home</div>
            </Link>
            <Link to="/projects">
                <div class="text-align">Projects</div>
            </Link>
            <Link to="/connect">
                <div class="text-align">Connect</div>
            </Link>
        </nav>
    );
};

export default Nav;
