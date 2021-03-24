import styles from "./prevention.module.css";
import icon1 from "@public/icon1.png";
import icon2 from "@public/icon2.png";
import avoidContact from "@public/avoidContacts.png";
import useTissue from "@public/Tissue.png";
import washHands from "@public/washHands.png";
import wearMask from "@public/wearMask.png";

const preventionSteps = [
  {
    number: "01",
    heading: "Wear Masks",
    paragraph:
      'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    imamge: wearMask,
  },
  {
    number: "02",
    heading: "Wash Your Hands",
    paragraph:
      'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    imamge: washHands,
  },
  {
    number: "03",
    heading: "Use Nose - Rag",
    paragraph:
      'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    imamge: useTissue,
  },
  {
    number: "04",
    heading: "Avoid Contacts",
    paragraph:
      'Continually seize impactful vortals rather than future-proof supply chains. Uniquely exploit emerging niches via fully tested meta-services. Competently pursue standards compliant leadership skills vis-a-vis pandemic "outside the box" thinking. Objectively',
    imamge: avoidContact,
  }
]

function Prevention() {
  return (
    <div className={styles.preventionWrapper}>
      <h2>Covid-19</h2>
      <h1>What Should We Do</h1>
      <p>
        Corona viruses are a type of virus. There are many different kinds, and
        some cause
        <br />
        disease. A newly identified type has caused
      </p>
      <div className={styles.relativeContainer}>
        <div className={styles.icon1}>
        <img src={icon1}/>
        </div>
      </div>
      <div className={styles.relativeContainer2}>
        <div className={styles.icon2}>
          <img src={icon2}/>
        </div>
      </div>

      {preventionSteps.map((obj, index) => (
        <div key={index} className={styles.preventionContainer}>
          <div className={styles.preventionContent}>
            <div className={styles.preventionNumber}>
              <h1>{obj.number}</h1>
            </div>
            <div className={styles.preventionDesc}>
              <h3>{obj.heading}</h3>
              <p>{obj.paragraph}</p>
            </div>
            <div className={styles.preventionImg}>
              <img src={obj.imamge}/>
            </div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default Prevention;
