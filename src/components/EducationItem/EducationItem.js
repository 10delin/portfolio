const EducationItem = ({ t, item }) => {
  console.log("🚀 ~ file: EducationItem.js:2 ~ EducationItem ~ item", t(item));
  return (
    <div
      className={`education__content--item education__content--item--${item.type}`}
    >
      <img src={item.image} alt="estudios" />
      <h4>{t(item.title)}</h4>
      <p>{t(item.center)}</p>
      <p>{t(item.date)}</p>
    </div>
  );
};

export default EducationItem;
