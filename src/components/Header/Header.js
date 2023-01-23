const Header = () => {
  return (
    <header className="header">
      <div className="header__content">
        <div className="header__title">
          <p>Antonio Delage</p>
        </div>
        <div className="header__description">
          <p className="header__description__items">
            <a href="#experience">Experiencia</a>
          </p>
          <p className="header__description__items">
            <a href="#about">Sobre mí</a>
          </p>
          <p className="header__description__items">
            <a href="#projects">Proyectos</a>
          </p>
        </div>
      </div>
    </header>
  );
};

export default Header;
