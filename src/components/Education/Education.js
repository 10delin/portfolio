import { EDUCATION } from "../../utils/model";

import EducationItem from "../EducationItem/EducationItem";

const Education = ({ t }) => {
  return (
    <div className="education">
      <div className="education__content">
        {EDUCATION.map((item) => (
          <EducationItem key={item.id} t={t} item={item} />
        ))}
      </div>
    </div>
  );
};

export default Education;
