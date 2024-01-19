import React, { FC } from "react";
import styles from "./style.module.scss";
import { formatPrice, toPersian } from "@/app/function";
import Coin from "./../../../../public/images/coint.png";
import Image from "next/image";
import { Span } from "next/dist/trace";

interface IPrice {
  price: number;
  hasRefer: boolean;
  score: number;
}

const Price: FC<IPrice> = ({ price, hasRefer, score }) => {
  return (
    <>
      {price !== 0 ? (
        <div className={styles.priceContainer}>
          {hasRefer && (
            <p className={styles.score}>
              <Image src={Coin} alt="coin" />
              <span>{toPersian(score)}</span>
              <span>+</span>
            </p>
          )}
          <p className={styles.price}>
            <span>{toPersian(formatPrice(price))}</span> <span>ریال</span>
          </p>
        </div>
      ) : (
        <div className={`${styles.priceContainer} ${styles.priceContainer2}`}>
          {" "}
          <p className={styles.score}>
            <Image src={Coin} alt="coin" />
            <span>{toPersian(score)}</span>
            <span>+</span>
          </p>
          <p className={styles.price}>
            <span>(بدون مسافر)</span>
          </p>
        </div>
      )}
    </>
  );
};

export default Price;
