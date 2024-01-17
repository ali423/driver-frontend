import React from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import map from './../../../../public/images/map.png'

const Map = () => {
  return <div className={styles.mapContainer}><Image src={map} alt="map"/></div>;
};

export default Map;
