import Nav from "../Nav/Nav";
import "./Header.css";

const Header = () => {
    return (
        <header>
            <div class="logo">
                <h2 class="wide">Stephen-Owen.org</h2>
                <h2 class="narrow">
                    <span class="line1">Stephen</span>
                    <span class="line2">-Owen</span>
                    <span class="line3">.org</span>
                </h2>
            </div>
            <Nav />
        </header>
    );
};

export default Header;
