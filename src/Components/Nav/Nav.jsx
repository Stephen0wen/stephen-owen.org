import MouseOver from "../MouseOver/MouseOver";
import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
    return (
        <nav id="navbar">
            <MouseOver>
                <Link to="/">
                    <div className="text-align">Home</div>
                </Link>
            </MouseOver>
            <MouseOver>
                <Link to="/projects">
                    <div className="text-align">Projects</div>
                </Link>
            </MouseOver>
            <MouseOver>
                <Link to="/connect">
                    <div className="text-align">Connect</div>
                </Link>
            </MouseOver>
        </nav>
    );
};

export default Nav;
