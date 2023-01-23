import About from "../../components/About/About";
import Certificate from "../../components/Certificate/Certificate";
import Education from "../../components/Education/Education";
import Experience from "../../components/Experience/Experience";
import MainDescription from "../../components/MainDescription/MainDescription";
import Projects from "../../components/Projects/Projects";

const Home = () => {
  return (
    <div className="home">
      <MainDescription />
      <Experience />
      <Certificate />
      <About />
      <Education />
      <Projects />
    </div>
  );
};

export default Home;
