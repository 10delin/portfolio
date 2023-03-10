import PopUp from "../PopUp/PopUp";

const ProjectItem = ({ t, project }) => {
  return (
    <a
      className="projects__content__project"
      href={t(project.link)}
      target="_blank"
      rel="noreferrer"
    >
      <img src={project.image} alt={project.image} />
      <div className="projects__content__project--title">
        <h2>{t(project.title)}</h2>
        <h3> {t(project.subtitle)}</h3>
        <p>{t(project.description)}</p>
      </div>
      <PopUp />
    </a>
  );
};

export default ProjectItem;
