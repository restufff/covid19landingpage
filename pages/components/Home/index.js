import styles from "./Home.module.css";
import Menu from "./Menu";
import Hero from "./Hero";
import About from "./About";

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
        </div>
      </div>
    </div>
  );
};

export default Home;
