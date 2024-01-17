import React, { FC } from "react";
import styles from "./style.module.scss";
import { toPersian } from "@/app/function";

interface IAddress {
  type: string;
  address: string;
}

const Address: FC<IAddress> = ({ type, address }) => {
  return (
    <div className={styles.addressContainer}>
      <div className={styles.label}>
        <div className={type === "start" ? styles.start : styles.end}></div>
        <p>{type === "start" ? "مبدا" : "مقصد"}</p>
      </div>
      <div className={styles.address}><p>{toPersian(address)}</p> </div>
    </div>
  );
};

export default Address;
