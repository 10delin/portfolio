import TitleArea from "../TitleArea/TitleArea";

import { PROJECTS } from "../../utils/model";
import ProjectItem from "../ProjectItem/ProjectItem";

const Projects = ({ t }) => {
  return (
    <div id="projects" className="projects">
      <TitleArea title={t("projects.title")} />
      <div className="projects__content">
        {PROJECTS.map((project) => (
          <ProjectItem key={project.id} t={t} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
