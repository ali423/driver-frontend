"use client";
import React, { FC, useState } from "react";
import styles from "./style.module.scss";
import Price from "../price";
import Address from "../address";
import OfferPrice from "../offerPrice";
interface IBottomSheet {
  data: {
    ID: number;
    Origin: string;
    Destination: string;
    OriginAreaId: number;
    DestinationAreaId: number;
    Rate: number;
    Eta: number;
    Price: number;
  }[];
  set: Function;
  activeOffer: number;
}

const BottomSheet: FC<IBottomSheet> = ({ data, set, activeOffer }) => {
  const offerCount = 2;
  const [end, setEnd] = useState(false);
  const handleNextClick = () => {
    set(activeOffer + 1);
  };
  const handlePrevClick = () => {
    set(activeOffer - 1);
  };

  return (
    <div className={styles.bottomSheetContainer}>
      <Price
        price={data[activeOffer].Price}
        score={data[activeOffer].Rate}
        hasRefer={data[activeOffer].Rate > 0}
      />
      {activeOffer < offerCount && (
        <OfferPrice
          price={data[activeOffer + 1].Price}
          score={data[activeOffer + 1].Rate}
          hasRefer={data[activeOffer + 1].Rate > 0}
          step="next"
          handleClick={handleNextClick}
        />
      )}
      {activeOffer > 0 && (
        <OfferPrice
          price={data[activeOffer - 1].Price}
          score={data[activeOffer - 1].Rate}
          hasRefer={data[activeOffer - 1].Rate > 0}
          step="prev"
          handleClick={handlePrevClick}
        />
      )}

      <Address type={"start"} address={data[activeOffer].Origin} />
      <Address type={"end"} address={data[activeOffer].Destination} />
      {!end ? (
        <button className={styles.button} onClick={() => setEnd(true)}>
          <span>قبول سفر</span>
        </button>
      ) : (
        <a className={styles.button} href="/profile">
          <span> پایان سفر</span>
        </a>
      )}
    </div>
  );
};

export default BottomSheet;
