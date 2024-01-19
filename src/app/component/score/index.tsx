import React, { FC } from "react";
import styles from "./style.module.scss";
import Coin from "./../../../../public/images/coint.png";
import Image from "next/image";

const Score: FC = () => {
  return (
    <div className={styles.scoreContainer}>
      <p>امتیازهای کسب شده</p>
      <div className={styles.score}>
        <p>۰</p>
        <p>۴۷</p>
        <p>۱۰۰</p>
      </div>
      <div className={styles.line}></div>
      <div className={styles.description}>
        <Image src={Coin} alt="coin" />
        <p>
          در این هفته، تا امروز ۲۴۷ سکّه کسب کردید و ۲۰۰ هزار تومان به کیف
          پول‌تان اضافه شد.
        </p>
      </div>
    </div>
  );
};

export default Score;
