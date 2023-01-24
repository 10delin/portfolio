const EducationItem = ({ t, item }) => {
  return (
    <div className="education__content--item">
      <img src={item.image} alt="estudios" />
      <h4>{t(item.title)}</h4>
      <p>{t(item.center)}</p>
      <p>{t(item.date)}</p>
    </div>
  );
};

export default EducationItem;
