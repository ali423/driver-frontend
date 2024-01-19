import React, { FC } from "react";
import styles from "./style.module.scss";
import { formatPrice, toPersian } from "@/app/function";
import Coin from "./../../../../public/images/coint.png";
import Image from "next/image";

interface IOfferPrice {
  price: number;
  hasRefer: boolean;
  score: number;
  step: string;
  handleClick: () => void;
}

const OfferPrice: FC<IOfferPrice> = ({
  price,
  hasRefer,
  score,
  step,
  handleClick,
}) => {
  return (
    <div
      className={`${styles.offerPriceContainer} ${
        step === "next" ? styles.next : styles.prev
      }`}
      onClick={() => handleClick()}
    >
      <p className={styles.arrow}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
        >
          <path
            d="M5.57812 12.2918L6.52095 13.2346L11.7555 7.99992L6.52094 2.76541L5.57813 3.70822L9.86984 7.99993L5.57812 12.2918Z"
            fill="white"
          />
        </svg>
      </p>
      <p className={styles.price}>
        {hasRefer && (
          <span className={styles.score}>
            <Image src={Coin} alt="coin" />
            <span>{toPersian(score)}</span>
            <span>+</span>
          </span>
        )}
        <span>{toPersian(formatPrice(price))}</span>
      </p>
    </div>
  );
};

export default OfferPrice;
