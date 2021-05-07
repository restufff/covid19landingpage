import styles from "./help.module.css";
import coronaBg from "@public/coronaBg.png";

const Help = () => {
  return (
    <div className={styles.helpWrapper}>
      <div className={styles.relativeBg}>
        <div className={styles.absoluteBg}>
          <img src={coronaBg}/>
        </div>
      </div>
      <h1>
        Have Question in mind?
        <br />
        Let us help you
      </h1>
      <form className={styles.formWrapper}>
        <input
          className={styles.helpForm}
          type="text"
          name="email"
          placeholder="snmonydemo@gmail.com"
        ></input>
        <button type="submit" className={styles.btnHelp}>
          Send
        </button>
      </form>
    </div>
  );
};

export default Help;
