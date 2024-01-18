import React from "react";
import styles from "./style.module.scss";
import Price from "../price";
import Address from "../address";

const BottomSheet = () => {
  return (
    <div className={styles.bottomSheetContainer}>
      <Price price="555000" score="5" hasRefer={true}/>
      <Address
        type={"start"}
        address="تهران، زعفرانیه، کوهرنگ،ارودوگاه شهید چمران
"
      />
      <Address
        type={"end"}
        address="تهران، زعفرانیه، ولیعصر، مقدس اردبیلی بعد از فلاحی، فرمانداری شمیرانات"
      />
      <button>
        <span>قبول سفر</span>
      </button>
    </div>
  );
};

export default BottomSheet;
