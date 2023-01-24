import TitleArea from "../TitleArea/TitleArea";

const About = ({ t }) => {
  return (
    <div id="about" className="about">
      <TitleArea title={t("about.title")} />
      <div className="about__content">
        <p>{t("about.item1")}</p>
        <p>{t("about.item2")}</p>
        <p>{t("about.item3")}</p>
      </div>
    </div>
  );
};

export default About;
