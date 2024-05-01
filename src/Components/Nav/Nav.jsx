import "./Nav.css";

const Nav = () => {
    return (
        <nav id="navbar">
            <a href="#welcome">
                <div class="text-align">Welcome</div>
            </a>
            <a href="#projects">
                <div class="text-align">Projects</div>
            </a>
            <a href="#connect">
                <div class="text-align">Connect</div>
            </a>
        </nav>
    );
};

export default Nav;
