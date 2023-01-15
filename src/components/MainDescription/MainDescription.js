import profileImage from "../../assets/images/profile.png";
import { iconWorks } from "../../utils/model";
import { sendIcon } from "../../utils/model";

const MainDescription = () => {
  return (
    <div className="main-description">
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
            <div class="svg-wrapper-1">
              <div class="svg-wrapper">{sendIcon}</div>
            </div>
            <span>Mandar un mensaje</span>
          </button>
        </div>
        <div className="main-description__picture">
          <img src={profileImage} alt="picture2" />
        </div>
      </div>
      <div className="main-description__works">
        <p className="main-description__works__title">Experiencia en:</p>
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
