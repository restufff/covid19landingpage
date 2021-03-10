import HeroImage from "@public/girl.png";
import virusImg from "@public/Virus.png";
import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <div className={styles.heroWrapper}>
      <div className={styles.descriptionWrapper}>
        <h2>COVID-19 Alert</h2>
        <h1>
          Stay At Home Quarantine
          <br />
          To Stop Corona Virus
        </h1>
        <p>
          There Is No Specific Medicine To Prevent Or Treat Coronavirus
          <br />
          Disease (COVID-19). People May Need Supportive Care To.
        </p>
        <div>
          <a className={styles.actionButton}>Let Us Help</a>
        </div>
      </div>
      <div className={styles.imageWrapper}>
        <img src={HeroImage} alt="" />
        <div className={styles.virusWrapper}>
          <img src={virusImg} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Hero;
