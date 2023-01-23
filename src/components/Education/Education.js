import imageStudios from "../../assets/images/estudios.png";
import imageStudios2 from "../../assets/images/estudios2.png";

const Education = () => {
  return (
    <div className="education">
      <div className="education__content">
        <div className="education__content--item">
          <img src={imageStudios2} alt="estudios" />
          <h4>Grado Superior en Desarrollo de Aplicaciones Web</h4>
          <p>I.E.S Mar de Cadiz(Puerto de Santa Maria)</p>
          <p>2018 - 2021</p>
        </div>
        <div className="education__content--item">
          <img src={imageStudios} alt="estudios" />
          <h4>Estudios de eduación secundaria (Bachillerato)</h4>
          <p>Ntra Sña del Pilar (Jerez de la frontera)</p>
          <p>2012 - 2015</p>
        </div>
      </div>
    </div>
  );
};

export default Education;
