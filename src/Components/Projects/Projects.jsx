import "./Projects.css";
import Project from "../Project/Project";
import projects from "../../assets/projects.json";
import { Link } from "react-router-dom";

const Projects = () => {
    return (
        <section id="projects">
            <div className="project-container">
                {projects.map((project) => {
                    if (project.isExternal) {
                        return (
                            <a
                                className="project-tile"
                                href={project.link}
                                target="_blank"
                            >
                                <Project
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    img_link={project.img_link}
                                    img_alt={project.img_alt}
                                />
                            </a>
                        );
                    }
                    if (!project.isExternal) {
                        return (
                            <Link to={project.link} className="project-tile">
                                <Project
                                    key={project.id}
                                    id={project.id}
                                    title={project.title}
                                    img_link={project.img_link}
                                    img_alt={project.img_alt}
                                />
                            </Link>
                        );
                    }
                })}
            </div>
        </section>
    );
};

export default Projects;
