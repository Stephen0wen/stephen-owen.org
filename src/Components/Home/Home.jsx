import "../../index.css";
import TechLogos from "../TechLogos/TechLogos";
import "./Home.css";

const Home = () => {
    return (
        <section id="welcome" className="page">
            <div className="welcome-message">
                <h1>Welcome</h1>
                <h2>to Stephen things...</h2>
            </div>
            <TechLogos />
        </section>
    );
};

export default Home;
