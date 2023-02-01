import { useTranslation } from "react-i18next";
import ChangeLanguage from "../ChangeLanguage/ChangeLanguage";
import useWindowSize from "../../hooks/useWindowSize";

const Header = () => {
  const { t } = useTranslation("translation");
  const size = useWindowSize();
  return (
    <header className="header">
      <div className="header__content">
        {size.width > 600 && <ChangeLanguage />}

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
        </div>
      </div>
    </header>
  );
};

export default Header;
