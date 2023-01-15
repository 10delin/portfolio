import { iconSocial } from "../../utils/model";
import { iconContact } from "../../utils/model";
import UnderFooter from "../UnderFooter/UnderFooter";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer__content">
          <div className="footer__main">
            <p className="footer__main__title">Antonio Delage</p>
            <p>Página web de código abierto realizada con ReactJS.</p>
            <p className="footer__main__link">
              <a
                href="https://github.com/10delin/portfolio"
                target="_blank"
                rel="noreferrer"
              >
                Link al repositorio en GitHub
              </a>
            </p>
          </div>
        </div>

        <div className="footer__content">
          <p>Contáctame:</p>
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
          <p>Sigueme en:</p>
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
