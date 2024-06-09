import "./TechLogo.css";

const TechLogo = ({ logo, offset }) => {
    return (
        <div
            id="tech-logo-diameter"
            style={{ transform: `rotate(${offset}deg)` }}
        >
            <div
                id="tech-logo-local-offset"
                style={{ transform: `rotate(-${offset}deg)` }}
            >
                <img src={logo.img} />
            </div>
        </div>
    );
};

export default TechLogo;
