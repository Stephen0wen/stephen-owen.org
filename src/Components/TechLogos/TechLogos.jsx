import "./TechLogos.css";
import logos from "../../assets/techLogos.json";

const TechLogos = () => {
    return (
        <section id="tech-logo-container">
            {logos.map((logo) => {
                return (
                    <img
                        src={logo.img}
                        className="tech-logo"
                        id={`logo-${logo.id}`}
                    />
                );
            })}
        </section>
    );
};

export default TechLogos;
