import React, { FC } from "react";
import styles from "./style.module.scss";
import { toPersian } from "@/app/function";

interface IEta{
  time:number
}

const EtaTime: FC<IEta>  = ({time}) => {
  return (
    <div className={styles.etaContainer}>
      <svg
        viewBox="0 0 24 24"
        fill="#ffff"
        xmlns="http://www.w3.org/2000/svg"
        width={14}
        height={14}
      >
        <path
          d="m15.3 16.7 1.4-1.4-3.7-3.7V7h-2v5.4l4.3 4.3ZM12 22a9.733 9.733 0 0 1-3.9-.788 10.092 10.092 0 0 1-3.175-2.137c-.9-.9-1.612-1.958-2.137-3.175A9.733 9.733 0 0 1 2 12c0-1.383.263-2.683.788-3.9a10.092 10.092 0 0 1 2.137-3.175c.9-.9 1.958-1.613 3.175-2.138A9.743 9.743 0 0 1 12 2c1.383 0 2.683.262 3.9.787a10.105 10.105 0 0 1 3.175 2.138c.9.9 1.612 1.958 2.137 3.175A9.733 9.733 0 0 1 22 12a9.733 9.733 0 0 1-.788 3.9 10.092 10.092 0 0 1-2.137 3.175c-.9.9-1.958 1.612-3.175 2.137A9.733 9.733 0 0 1 12 22Zm0-2c2.217 0 4.104-.779 5.663-2.337C19.221 16.104 20 14.217 20 12s-.779-4.104-2.337-5.663C16.104 4.779 14.217 4 12 4s-4.104.779-5.662 2.337C4.779 7.896 4 9.783 4 12s.78 4.104 2.338 5.663C7.896 19.221 9.783 20 12 20Z"
          fill="#ffff"
        />
      </svg>
      <div className={styles.text}>
        <p>زمان تقریبی تا مبدا:</p>
        <p>{toPersian(time)} دقیقه</p>
      </div>
    </div>
  );
};

export default EtaTime;
