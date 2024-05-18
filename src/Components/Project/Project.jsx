import "./Project.css";
import { Link } from "react-router-dom";
import MouseOver from "../MouseOver/MouseOver";

const Project = ({ project }) => {
    const projectContent = (
        <>
            <img src={project.img_link} alt={project.img_alt} />
            <div className="project-text">
                <h2 className="project-title">{project.title}</h2>
                <p className="project-description">{project.description}</p>
                <p className="project-technologies">{project.technologies}</p>
            </div>
        </>
    );

    if (project.isExternal) {
        return (
            <MouseOver highlightClasses="enlarge">
                <a
                    className="project-tile"
                    href={project.link}
                    target="_blank"
                    key={project.id}
                >
                    {projectContent}
                </a>
            </MouseOver>
        );
    }
    if (!project.isExternal) {
        return (
            <MouseOver highlightClasses="enlarge">
                <Link
                    to={project.link}
                    className="project-tile"
                    key={project.id}
                >
                    {projectContent}
                </Link>
            </MouseOver>
        );
    }
};

export default Project;
