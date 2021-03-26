import styles from "./map.module.css";
import map from "@public/Map.png";
import iran from "@public/iran.png";
import germany from "@public/germany.png";
import spain from "@public/spain.png";
import usa from "@public/usa.png";
import italy from "@public/italy.png";
import china from "@public/china.png";
import upCase from "@public/up.png";
import downCase from "@public/down.png";
import nextPage from "@public/right_arrow.png";
import previousPage from "@public/left_arrow.png";
import upMark from "@public/up_indicat.png";
import downMark from "@public/down_indicat.png";
import zoomIn from "@public/plus.png";
import zoomOut from "@public/minus.png";
import search from "@public/search.png";

const liveReports = [
  {
    flag: usa,
    coutry: "USA",
    number: "100,392",
    indicator: upCase,
  },
  {
    flag: italy,
    coutry: "Italy",
    number: "86,498",
    indicator: upCase,
  },
  {
    flag: china,
    coutry: "China",
    number: "81,340",
    indicator: downCase,
  },
  {
    flag: spain,
    coutry: "Spain",
    number: "64,059",
    indicator: upCase,
  },
  {
    flag: germany,
    coutry: "Germany",
    number: "50,871",
    indicator: upCase,
  },
  {
    flag: iran,
    coutry: "Iran",
    number: "32,332",
    indicator: upCase,
  },
];

const Footer = () => {
  return (
    <div className={styles.mapWrapper}>
      <div className={styles.mapReport}>
        <img src={map} />
      </div>
      {liveReports.map((obj, index) => (
        <div key={index} className={styles.mapListContainer}>
          <div className={styles.mapListContent}>
            <div className={styles.mapListHeader}>
              <h3>
                Live Reports
              </h3>
              <div className={styles.mapListNavigation}>
                <img src={previousPage}/>
                <img src={nextPage}/>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Footer;
