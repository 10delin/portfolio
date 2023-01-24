const ExperienceItem = ({ t, index, experience }) => {
  return (
    <>
      {experience.actual && <div className="experience__ringring" />}
      <li key={experience.id}>
        <div className="experience__job">{t(experience.position)}</div>
        <p className="experience__company">{t(experience.company)}</p>
        <p>{t(experience.date)}</p>
        <p>{t(experience.description)} </p>
      </li>
    </>
  );
};

export default ExperienceItem;
