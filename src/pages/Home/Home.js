import Footer from "../../components/Footer/Footer";
import Header from "../../components/Header/Header";
import MainDescription from "../../components/MainDescription/MainDescription";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <div className="home">
        <MainDescription />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
