import "./Project.css";

const Project = ({ title, img_link, img_alt }) => {
    return (
        <>
            <img src={img_link} alt={img_alt} />
            <h2 className="project-title">{title}</h2>
        </>
    );
};

export default Project;
