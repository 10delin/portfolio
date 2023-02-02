import { useTranslation } from "react-i18next";

import { iconSocial } from "../../utils/model";
import { iconContact } from "../../utils/model";

import UnderFooter from "../UnderFooter/UnderFooter";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__main">
            <p className="footer__main__title">{t("footer.title")}</p>
            <p>{t("footer.subtitle")}</p>
            <p className="footer__main__link">
              <a
                href="https://github.com/10delin/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                {t("footer.link")}
              </a>
            </p>
          </div>
        </div>

        <div className="footer__content">
          <p>{t("footer.contact")}</p>
          <div className="footer__contact">
            {iconContact.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={icon.icon} title={icon.title} alt={icon.alt} />
                  {icon.title}
                </a>
              );
            })}
          </div>
        </div>

        <div className="footer__content">
          <p>{t("footer.follow")}</p>
          <div className="footer__social">
            {iconSocial.map((icon, index) => {
              return (
                <a
                  key={index}
                  href={icon.link}
                  target="_blank"
                  rel="noreferrer"
                >
                  <img src={icon.icon} title={icon.title} alt={icon.alt} />
                  {icon.title}
                </a>
              );
            })}
          </div>
        </div>
      </footer>
      <UnderFooter />
    </>
  );
};

export default Footer;
