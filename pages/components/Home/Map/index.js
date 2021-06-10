import styles from "./map.module.css";
import map from "@public/Map.png";
import nextPage from "@public/right_arrow.png";
import previousPage from "@public/left_arrow.png";
import upMark from "@public/up_indicat.png";
import downMark from "@public/down_indicat.png";
import zoomIn from "@public/plus.png";
import zoomOut from "@public/minus.png";
import gap from "@public/gapNav.png";
import search from "@public/search.png";
import { useState } from "react";
import Api from "api/countryApi";
import ReactLoading from "react-loading";
import upCase from "@public/up.png";
import downCase from "@public/down.png";

// import iran from "@public/iran.png";
// import germany from "@public/germany.png";
// import spain from "@public/spain.png";
// import usa from "@public/usa.png";
// import italy from "@public/italy.png";
// import china from "@public/china.png";

// const liveReports = [
//   {
//     flag: usa,
//     coutry: "USA",
//     number: "100,392",
//     indicator: upCase,
//   },
//   {
//     flag: italy,
//     coutry: "Italy",
//     number: "86,498",
//     indicator: upCase,
//   },
//   {
//     flag: china,
//     coutry: "China",
//     number: "81,340",
//     indicator: downCase,
//   },
//   {
//     flag: spain,
//     coutry: "Spain",
//     number: "64,059",
//     indicator: upCase,
//   },
//   {
//     flag: germany,
//     coutry: "Germany",
//     number: "50,871",
//     indicator: upCase,
//   },
//   {
//     flag: iran,
//     coutry: "Iran",
//     number: "32,332",
//     indicator: upCase,
//   },
// ];

function Map() {
  const [page, setPage] = useState(1);
  const urlParams = "?page=" + page + "&limit=6";

  const { usegetCountries, usegetLimit } = Api;
  const { countries, isLoading } = usegetCountries(urlParams, page);
  const limit = usegetLimit();

  const handleClickNext = () => {
    if (isLoading) return;
    countries.length === limit.length % 6 ? setPage(page) : setPage(page + 1);
  };

  const handleClickPrev = () => {
    page <= 1 ? setPage(page) : setPage(page - 1);
  };

  return (
    <div className={styles.mapWrapper}>
      <div className={styles.mapReport}>
        <img src={map} />
        <div className={styles.searchWrapperAbsolute}>
          <div className={styles.searchWrapper}>
            <img src={search} />
          </div>
        </div>
        <div className={styles.relativeMapNav}>
          <div className={styles.mapNavWrapper}>
            <div>
              <img src={zoomIn} />
            </div>
            <div>
              <img src={gap} />
            </div>
            <div>
              <img src={zoomOut} />
            </div>
            <div>
              <img src={gap} />
            </div>
            <div className={styles.navMark}>
              <div>
                <img src={upMark} />
              </div>
              <div>
                <img src={downMark} />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className={styles.containerCountryReports}>
        <div className={styles.headingCountryReports}>
          <div>
            <h3>Live Reports</h3>
          </div>
          <div className={styles.containerPaging}>
            <div className={styles.wrappingPaging}>
              <div onClick={handleClickPrev} className={styles.left}>
                <img src={previousPage}></img>
              </div>
              <div onClick={handleClickNext} className={styles.right}>
                <img src={nextPage}></img>
              </div>
            </div>
          </div>
        </div>
        {isLoading ? (
          <ReactLoading
            className={styles.loading}
            type={"cylon"}
            color={"#FB4C47"}
            height={"50%"}
            width={"50%"}
          />
        ) : (
          <div className={styles.liveReportsContainer}>
            {countries.map((country, index) => (
              <div key={index} className={styles.liveReportsContent}>
                <img className={styles.countryImg} src={country.flagIcon} />
                <div className={styles.countryName}>
                  <h4>{country.countryName}</h4>
                </div>
                <div className={styles.numberCase}>{country.caseCount}</div>
                <img
                  className={styles.indicatorImg}
                  src={country.caseIndicator ? upCase : downCase}
                />
              </div>
            ))}
          </div>
        )}
        {/* {liveReports.map((obj, index) => (
        <div key={index} className={styles.liveReportsContainer}>
          <div className={styles.liveReportsContent}>
            <img className={styles.countryImg} src={obj.flag}/>
            <div className={styles.countryName}>
            <h4>
              {obj.coutry}
            </h4>
            </div>
            <div className={styles.numberCase}>
              {obj.number}
            </div>
            <img className={styles.indicatorImg} src={obj.indicator}/>
          </div>
        </div>
      ))} */}
      </div>
    </div>
  );
}

export default Map;
