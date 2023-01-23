import TitleArea from "../TitleArea/TitleArea";

import { PROJECTS } from "../../utils/model";

const Projects = () => {
  return (
    <div id="projects" className="projects">
      <TitleArea title="Proyectos" />
      <div className="projects__content">
        {PROJECTS.map((project) => {
          return (
            <a
              className="projects__content__project"
              href={project.link}
              target="_blank"
              rel="noreferrer"
            >
              <img src={project.image} alt={project.image} />
              <div className="projects__content__project--title">
                <h2>{project.title}</h2>
                <h5> HSBC UK</h5>
                <p>{project.description}</p>
              </div>
            </a>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;
