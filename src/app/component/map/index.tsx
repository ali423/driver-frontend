import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import map from "./../../../../public/images/map1.png";

const Map = () => {
  let hexagon = () => {
    return (
      <div>
        {Array.from(Array(12), (e, i) => {
          return (
            <div className={`${styles.hexagon} ${styles['id'+i]}`} key={i}>
              {i}
            </div>
          );
        })}
      </div>
    );
  };
  return <div className={styles.mapContainer}><Image src={map} alt="map"/>{hexagon()}</div>;
};

export default Map;
