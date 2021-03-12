import styles from "./contaigon.module.css";
import coronaIcon from "@public/coronaicon.png";
import airTransmission from "@public/air.png";
import humanContacts from "@public/contacts.png";
import containedObjects from "@public/object.png";

const contaigonList = [
  {
    contaigonImg: airTransmission,
    contaigonType: "Air Transmission",
    contaigonDesc:
      "Objectively Evolve Tactical Expertise Before Extensible Initiatives. Efficiently Simplify",
  },
  {
    contaigonImg: humanContacts,
    contaigonType: "Human Contacts",
    contaigonDesc:
      "Washing Your Hands Is One Of Thesimplest Ways You Can Protect",
  },
  {
    contaigonImg: containedObjects,
    contaigonType: "Contained Objects",
    contaigonDesc:
      "Use The Tissue While Sneezing, In This Way, You Can Protect Your Droplets",
  },
];

const Contaigon = () => {
  return (
    <div className={styles.contaigonContainer}>
      <h2>Covid-19</h2>
      <h1>Contaigon</h1>
      <p>
        Corona Viruses A Type Of Virus. There Are Many Different Kinds, And
        <br />
        Some Cause Disease. A newly Identified Type
      </p>
      <div className={styles.relativeContainer}>
        <img className={styles.coronaImg} src={coronaIcon} />
      </div>
      <div className={styles.cardContaigonContainer}>
        {contaigonList.map((obj) => (
          <div className={styles.typeContainer}>
            <div className={styles.dataDesc}>
              <img src={obj.contaigonImg} />
              <div className={styles.dataHead}>
                <h2>{obj.contaigonType}</h2>
                <p>{obj.contaigonDesc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Contaigon;
