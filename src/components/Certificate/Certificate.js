import imageCertificate from "../../assets/images/react-certificate-Es.png";

const Certificate = () => {
  return (
    <div className="certificate">
      <a
        target="_blank"
        rel="noreferrer"
        href="https://www.udemy.com/certificate/UC-2fba1328-83c6-470d-bffc-a787e8fedb2f/"
      >
        <div className="certificate__content">
          <p className="certificate__content__title">Certificado en:</p>
          <div className="certificate__content__image">
            <img src={imageCertificate} alt="Certificate" />
          </div>
        </div>
      </a>
    </div>
  );
};

export default Certificate;
