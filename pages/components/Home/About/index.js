import viruses from "@public/viruses.png";
import styles from "./about.module.css";
import Corona from "@public/corona.png";

const About = () => {
  return (
    <div className={styles.aboutWrapper}>
      <div className={styles.imageWrapper}>
        <img src={viruses} alt="" />
      </div>
      <div className={styles.descriptionAbout}>
        <h2>What Is Covid-19</h2>
        <h1>
          Coronavirus
        </h1>
        <p>
        Corona Viruses Are A Type Of Virus. There Are Many Different Kinds, And<br/>
        Some Cause Disease. A Newly Identified Type Has Caused A Recent<br/>
        Outbreak Of Respiratory Illness Now Called COVID-19.Lauren Sauer, M.S.,<br/>
        The Director Of Operations With The Johns Hopkins Office Of Critical Event<br/>
        Preparedness and Response
        </p>
        <div>
          <a className={styles.actionButton}>Learn More</a>
        </div>
        <div className={styles.coronaWrapper}>
        <img src={Corona} />
      </div>
      </div>
      
    </div>
  );
};

export default About;
