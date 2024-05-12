import "./Projects.css";
import Project from "../Project/Project";
import projects from "../../assets/projects.json";

const Projects = () => {
    return (
        <section id="projects">
            <div className="project-container">
                {projects.map((project) => {
                    return <Project key={project.id} project={project} />;
                })}
            </div>
        </section>
    );
};

export default Projects;
