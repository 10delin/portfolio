import imageCertificate from "../../assets/images/react-certificate-Es.png";
import imageCertificate2 from "../../assets/images/react-certificate-Eng.png";

const Certificate = ({ t }) => {
  const changeImage =
    t("certificate") === "Certificado en :"
      ? imageCertificate
      : imageCertificate2;

  return (
    <div className="certificate">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.udemy.com/certificate/UC-2fba1328-83c6-470d-bffc-a787e8fedb2f/"
      >
        <div className="certificate__content">
          <p className="certificate__content__title">{t("certificate")}</p>
          <div className="certificate__content__image">
            <img src={changeImage} alt="Certificate" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Certificate;
