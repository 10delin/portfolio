import { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import SpainIcon from "../../assets/images/spain.webp";
import UkIcon from "../../assets/images/united-kingdom.webp";

const ChangeLanguage = () => {
  const { i18n } = useTranslation();
  const [language, setLanguage] = useState(i18n.language);

  useEffect(() => {
    i18n.changeLanguage(language);
  }, [language, i18n]);

  const classLanguageSpanish =
    language === "es"
      ? "change-language__button--active"
      : "change-language__button";

  const classLanguageEngish =
    language === "en"
      ? "change-language__button--active"
      : "change-language__button";

  return (
    <div className="change-language">
      <div className={classLanguageSpanish} onClick={() => setLanguage("es")}>
        <img src={SpainIcon} alt="Spanish" />
      </div>
      <div className={classLanguageEngish} onClick={() => setLanguage("en")}>
        <img src={UkIcon} alt="English" />
      </div>
    </div>
  );
};

export default ChangeLanguage;
