import ContributeGithub from "../ContributeGithub/ContributeGithub";
import { useTranslation } from "react-i18next";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";

const Header = () => {
  const { t } = useTranslation("translation");
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__title">
          <p>{t("header.name")}</p>
        </div>
        <div className="header__description">
          <p className="header__description__items">
            <a href="#experience">{t("header.experience")}</a>
          </p>
          <p className="header__description__items">
            <a href="#about">{t("header.about")}</a>
          </p>
          <p className="header__description__items">
            <a href="#projects">{t("header.projects")}</a>
          </p>
          <ChangeLanguage />
        </div>
        <ContributeGithub t={t} />
      </div>
    </header>
  );
};

export default Header;
