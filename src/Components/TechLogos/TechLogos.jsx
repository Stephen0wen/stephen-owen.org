import logos from "../../assets/techLogos.json";
import TechLogo from "../TechLogo/TechLogo";
import "./TechLogos.css";

const TechLogos = () => {
    const spacing = 360 / logos.length;
    return (
        <div id="tech-logo-wheel">
            {logos.map((logo, index) => {
                return (
                    <TechLogo
                        key={logo.id}
                        logo={logo}
                        offset={index * spacing}
                    />
                );
            })}
        </div>
    );
};

export default TechLogos;
