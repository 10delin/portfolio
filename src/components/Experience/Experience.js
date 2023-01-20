import React from "react";
import { EXPERIENCES } from "../../utils/model";
import TitleArea from "../TitleArea/TitleArea";

const Experience = () => {
  return (
    <div id="experience" className="experience">
      <TitleArea title="Experiencia" />
      <div className="experience__container">
        <div className="experience__wrapper">
          <ul className="experience__item">
            {EXPERIENCES.map((experience, index) => (
              <React.Fragment key={index}>
                {index === 0 && <div className="experience__ringring"></div>}
                <li key={experience.id}>
                  <div className="experience__job">{experience.position}</div>
                  <p className="experience__company">{experience.company}</p>
                  <p>{experience.date}</p>
                  <p>{experience.description} </p>
                </li>
              </React.Fragment>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Experience;
