import styles from "./Home.module.css";
import Menu from "./Menu";
import Hero from "./Hero";
import About from "./About";
import Contaigon from "./Contaigon";
import Symptomps from "./Symptomps";
import Prevention from "./Prevention";
import Map from "./Map";
import Help from "./Help";
import Footer from "./Footer";

const Home = () => {
  return (
    <div>
      <div className={styles.sectionMainContainer}>
        <div className="wrapper">
          <Menu />
          <Hero />
        </div>
      </div>
      <div className={styles.middleContainer}>
        <div className="wrapper">
          <About />
          <Contaigon />
          <Symptomps />
          <Prevention />
        </div>
      </div>
      <div className={styles.footerContainer}>
        <div className="wrapper">
        <Map />
        <Help />
        <Footer />
      </div>
      </div>
    </div>
  );
};

export default Home;
