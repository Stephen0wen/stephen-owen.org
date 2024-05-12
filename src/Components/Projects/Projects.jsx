import "./Projects.css";
import Project from "../Project/Project";
import projects from "../../assets/projects.json";
import { Link } from "react-router-dom";
import MouseOver from "../MouseOver/MouseOver";

const Projects = () => {
    return (
        <section id="projects">
            <div className="project-container">
                {projects.map((project) => {
                    if (project.isExternal) {
                        return (
                            <MouseOver highlightClasses="enlarge">
                                <a
                                    className="project-tile"
                                    href={project.link}
                                    target="_blank"
                                    key={project.id}
                                >
                                    <Project
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        img_link={project.img_link}
                                        img_alt={project.img_alt}
                                    />
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
                                    <Project
                                        key={project.id}
                                        id={project.id}
                                        title={project.title}
                                        img_link={project.img_link}
                                        img_alt={project.img_alt}
                                    />
                                </Link>
                            </MouseOver>
                        );
                    }
                })}
            </div>
        </section>
    );
};

export default Projects;
