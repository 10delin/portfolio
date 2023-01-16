import Home from "../../pages/Home/Home";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";

const Main = () => {
  return (
    <div className="App">
      <Header />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
};

export default Main;
