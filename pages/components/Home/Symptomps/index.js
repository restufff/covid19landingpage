import imgSymptomps from "@public/girlImg.png";
import styles from "./symptomps.module.css";

const Symptomps = () => {
  return (
    <div className={styles.symptompsWrapper}>
      <h2>Covid-19</h2>
      <h1>Symptomps</h1>
      <p>
        Corona Viruses Are Type Of Virus. There Are Many Different Kinds, And
        Some Cause Disease.
        <br />A Newly Identified Type Has Caused A Recent Outbreak Of
        Respiratory
      </p>
      <div className={styles.imageWrapper}>
        <img src={imgSymptomps} alt="" />
      </div>
    </div>
  );
};

export default Symptomps;
