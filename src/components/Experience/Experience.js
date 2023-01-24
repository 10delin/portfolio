import { EXPERIENCES } from "../../utils/model";
import ExperienceItem from "../ExperienceItem/ExperienceItem";
import TitleArea from "../TitleArea/TitleArea";

const Experience = ({ t }) => {
  return (
    <div id="experience" className="experience">
      <TitleArea title={t("experience.title")} />
      <div className="experience__container">
        <div className="experience__wrapper">
          <ul className="experience__item">
            {EXPERIENCES.map((experience) => (
              <ExperienceItem
                key={experience.id}
                t={t}
                experience={experience}
              />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
