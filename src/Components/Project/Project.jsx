import "./Project.css";
import { Link } from "react-router-dom";
import MouseOver from "../MouseOver/MouseOver";

const Project = ({ project }) => {
    if (project.isExternal) {
        return (
            <MouseOver highlightClasses="enlarge">
                <a
                    className="project-tile"
                    href={project.link}
                    target="_blank"
                    key={project.id}
                >
                    <img src={project.img_link} alt={project.img_alt} />
                    <h2 className="project-title">{project.title}</h2>
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
                    <img src={project.img_link} alt={project.img_alt} />
                    <h2 className="project-title">{project.title}</h2>
                </Link>
            </MouseOver>
        );
    }
};

export default Project;
