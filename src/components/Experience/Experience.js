import React from "react";
import { EXPERIENCES } from "../../utils/model";

const Experience = () => {
  return (
    <div className="experience">
      <div className="experience__title">
        <p>Experiencia</p>
        <div className="experience__title__line"></div>
      </div>
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
