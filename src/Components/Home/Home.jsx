import "../../index.css";
import TechLogos from "../TechLogos/TechLogos";
import "./Home.css";

const Home = () => {
    return (
        <section id="welcome" className="page">
            <div className="welcome-message">
                <h1>Welcome</h1>
                <h2>to my portfolio...</h2>
            </div>
            <div id="spotlight">
                <h2>Spotlight: EventLoop</h2>
                <iframe
                    src="https://www.youtube.com/embed/FzPumttsKbw?si=2YIA2qsa_x50wYfL"
                    title="YouTube video player"
                    frameborder="0"
                    controls="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerpolicy="strict-origin-when-cross-origin"
                    allowfullscreen
                ></iframe>
            </div>
            <TechLogos />
        </section>
    );
};

export default Home;
