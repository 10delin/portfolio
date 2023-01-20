import profileImage from "../../assets/images/profile.webp";
import { iconWorks } from "../../utils/model";
import { sendIcon } from "../../utils/model";

const MainDescription = () => {
  return (
    <div id="main" className="main-description">
      <div className="main-description__content-picture">
        <div className="main-description__content">
          <p className="main-description__subtitle">WEB FRONTEND DEVELOPER</p>
          <p className="main-description__name">
            Hola, soy Antonio Delage, contactame para crear
          </p>
          <p className="main-description__title">
            Tu aplicación web con las mejores tecnologías.
          </p>
          <button className="main-description__button">
            <div className="svg-wrapper-1">
              <div className="svg-wrapper">{sendIcon}</div>
            </div>
            <span>Mandar un mensaje</span>
          </button>
        </div>
        <div className="main-description__picture">
          <img src={profileImage} alt="picture2" />
        </div>
      </div>
      <div className="main-description__works">
        <p className="main-description__works__title">Aptitudes tecnicas: </p>
        <div className="main-description__works__content">
          <div className="main-description__works__content__item">
            {iconWorks.map((icon, index) => {
              return (
                <img
                  key={index}
                  src={icon.icon}
                  title={icon.title}
                  alt={icon.alt}
                />
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainDescription;
