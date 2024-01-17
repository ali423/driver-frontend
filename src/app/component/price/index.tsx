import React from "react";
import styles from "./style.module.scss";
import { formatPrice, toPersian } from "@/app/function";

const Price = () => {
  return (
    <div className={styles.priceContainer}>
      <p>
        {toPersian(formatPrice(780000))}
        
      </p>
      <p>
        ریال
      </p>
    </div>
  );
};

export default Price;
