import React, { FC } from "react";
import styles from "./style.module.scss";
import Image from "next/image";
import map from "./../../../../public/images/map2.png";

interface IMap {
  OriginAreaId: number;
  DestinationAreaId: number;
}

const Map: FC<IMap> = ({ OriginAreaId, DestinationAreaId }) => {
  let hexagon = () => {
    return (
      <div>
        {Array.from(Array(12), (e, i) => {
          return (
            <div
              className={`${styles.hexagon} ${
                OriginAreaId === i + 1 ? styles.Origin : ""
              } ${DestinationAreaId === i + 1 ? styles.Destination : ""} ${
                styles["id" + i]
              }`}
              key={i}
            >
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className={styles.mapContainer}>
      <Image src={map} alt="map" />
      {hexagon()}
    </div>
  );
};

export default Map;
