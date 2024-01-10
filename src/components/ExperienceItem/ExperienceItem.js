const ExperienceItem = ({ t, experience }) => {
  return (
    <li key={experience.id}>
      {experience.actual && <div className="experience__ringring" />}
      <div className="experience__job">{t(experience.position)}</div>
      <p className="experience__company">{t(experience.company)}</p>
      <p>{t(experience.date)}</p>
      <p dangerouslySetInnerHTML={{ __html: t(experience.description1) }}></p>
      <p>{t(experience.description2)} </p>
      <p>{t(experience.description3)} </p>
      <p>{t(experience.description4)} </p>
      <p>{t(experience.description5)} </p>
    </li>
  );
};

export default ExperienceItem;
