import MouseOver from "../MouseOver/MouseOver";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="navbar">
            <MouseOver highlightClasses="highlight">
                <Link to="/">
                    <div className="text-align">Home</div>
                </Link>
            </MouseOver>
            <MouseOver highlightClasses="highlight">
                <Link to="/projects">
                    <div className="text-align">Projects</div>
                </Link>
            </MouseOver>
            <MouseOver highlightClasses="highlight">
                <Link to="/connect">
                    <div className="text-align">Connect</div>
                </Link>
            </MouseOver>
        </nav>
    );
};

export default Nav;
