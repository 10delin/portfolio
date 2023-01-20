import About from "../../components/About/About";
import Certificate from "../../components/Certificate/Certificate";
import Experience from "../../components/Experience/Experience";
import MainDescription from "../../components/MainDescription/MainDescription";

const Home = () => {
  return (
    <div className="home">
      <MainDescription />
      <Experience />
      <Certificate />
      <About />
    </div>
  );
};

export default Home;
