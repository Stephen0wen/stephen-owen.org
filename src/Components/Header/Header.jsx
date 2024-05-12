import Nav from "../Nav/Nav";
import "../../index.css";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div className="logo">
                <h2 className="wide">Stephen-Owen.org</h2>
                <h2 className="narrow">
                    <span className="line1">Stephen</span>
                    <span className="line2">-Owen</span>
                    <span className="line3">.org</span>
                </h2>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
