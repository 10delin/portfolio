import About from "../../components/About/About";
import Certificate from "../../components/Certificate/Certificate";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import MainDescription from "../../components/MainDescription/MainDescription";
import Projects from "../../components/Projects/Projects";

import { useTranslation } from "react-i18next";

const Home = () => {
  const { t } = useTranslation();
  return (
    <div className="home">
      <MainDescription t={t} />
      <Experience t={t} />
      <Certificate t={t} />
      <About t={t} />
      <Education t={t} />
      <Projects t={t} />
    </div>
  );
};

export default Home;
